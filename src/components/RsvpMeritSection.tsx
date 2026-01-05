"use client"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

import { EVENT_DETAILS } from '@/data/event';
import { GOOGLE_FORM_CONFIG } from '@/data/constants';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SpaIcon from '@mui/icons-material/Spa';
import HelpIcon from '@mui/icons-material/Help';

const ATTENDANCE_OPTIONS = {
  YES: "yes",
  NO: "no",
} as const;

const formSchema = z.object({
  name: z.string().min(1, {
    message: "กรุณาระบุชื่อของท่าน",
  }),
  guests: z.string(),
  attendance: z.enum([ATTENDANCE_OPTIONS.YES, ATTENDANCE_OPTIONS.NO], {
    message: "กรุณาระบุความประสงค์",
  }),
})

type FormValues = z.infer<typeof formSchema>;

interface ConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: FormValues;
  onConfirm: () => void;
  isSubmitting: boolean;
}

const ConfirmationModal = ({ open, onOpenChange, data, onConfirm, isSubmitting }: ConfirmationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm rounded-xl font-thai">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <HelpIcon className="material-symbols-outlined text-primary text-2xl" />
            <DialogTitle className="text-lg font-bold text-[#181511]">ยืนยันข้อมูล</DialogTitle>
          </div>
          <DialogDescription>
            โปรดตรวจสอบข้อมูลของท่านก่อนยืนยัน
          </DialogDescription>
        </DialogHeader>

        <div className="bg-[#f8f7f6] p-4 rounded-lg border border-[#e5e1dc] space-y-2 text-sm">
          <div className="flex justify-between items-start gap-2">
            <span className="text-gray-500 shrink-0">ชื่อ:</span>
            <span className="font-bold text-[#181511] text-right">{data.name}</span>
          </div>
          <div className="flex justify-between items-start gap-2">
            <span className="text-gray-500 shrink-0">จำนวน:</span>
            <span className="font-bold text-[#181511] text-right">
              {data.guests === '1' ? 'มาคนเดียว' : `${data.guests} ท่าน`}
            </span>
          </div>
          <div className="flex justify-between items-start gap-2">
            <span className="text-gray-500 shrink-0">สถานะ:</span>
            <span className={`font-bold text-right ${data.attendance === ATTENDANCE_OPTIONS.YES ? 'text-green-600' : 'text-red-500'}`}>
              {data.attendance === ATTENDANCE_OPTIONS.YES ? 'มาร่วมงานได้' : 'ไม่สะดวก'}
            </span>
          </div>
        </div>

        <DialogFooter className="flex gap-2 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="font-bold text-gray-700 font-thai"
            disabled={isSubmitting}
          >
            ยกเลิก
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            className="bg-primary hover:bg-primary-dark text-white font-bold font-thai"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                กำลังบันทึก...
              </>
            ) : (
              'ยืนยัน'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const RsvpForm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      guests: "1",
      attendance: ATTENDANCE_OPTIONS.YES,
    },
  })

  function onSubmit() {
    setSubmitError(null);
    setShowConfirm(true);
  }

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    const values = form.getValues();

    const data = new URLSearchParams();
    data.append(GOOGLE_FORM_CONFIG.fields.name, values.name);
    data.append(GOOGLE_FORM_CONFIG.fields.guests, values.guests);
    data.append(GOOGLE_FORM_CONFIG.fields.attendance, values.attendance);

    try {
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log('Form submitted');
      setShowConfirm(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError("เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง");
      setShowConfirm(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#e5e1dc] p-6 flex flex-col h-full relative">
      <div className="flex items-center gap-2 mb-6 border-b border-[#f0ebe6] pb-3">
        <MarkEmailReadIcon className="material-symbols-outlined text-primary" />
        <h2 className="text-[#181511] text-xl font-bold font-thai">ลงชื่อร่วมงานบุญ</h2>
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center grow py-8 text-center animate-in fade-in duration-500">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-[#181511] font-thai mb-2">บันทึกข้อมูลสำเร็จ</h3>
          <p className="text-gray-600 font-thai mb-6">
            ขอบคุณที่แจ้งความประสงค์
          </p>
          <Button
            variant="link"
            onClick={() => {
              setIsSubmitted(false);
              form.reset();
            }}
            className="text-primary hover:text-primary-dark font-bold font-thai text-sm underline underline-offset-4"
          >
            ส่งข้อมูลเพิ่มเติม
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 grow">
            {submitError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 mb-4 flex gap-3 text-red-900">
                <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                <div className="space-y-1">
                  <h5 className="font-bold text-sm leading-none">ข้อผิดพลาด</h5>
                  <div className="text-sm opacity-90">
                    {submitError}
                  </div>
                </div>
              </div>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-[#181511] font-thai">ชื่อ</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ระบุชื่อของท่าน"
                      className="bg-[#fdfdfc] font-thai"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-[#181511] font-thai">จำนวนผู้ติดตาม</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#fdfdfc] font-thai">
                        <SelectValue placeholder="เลือกจำนวน" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="font-thai">
                      <SelectItem value="1">1 ท่าน</SelectItem>
                      <SelectItem value="2">2 ท่าน</SelectItem>
                      <SelectItem value="3">3 ท่าน</SelectItem>
                      <SelectItem value="4">4 ท่าน</SelectItem>
                      <SelectItem value="5">5 ท่าน</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem className="space-y-3 py-2">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col gap-3"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 cursor-pointer group">
                        <FormControl>
                          <RadioGroupItem value={ATTENDANCE_OPTIONS.YES} className="text-primary border-gray-300 focus:ring-primary" />
                        </FormControl>
                        <FormLabel className="font-normal text-[#181511] group-hover:text-primary transition-colors font-thai cursor-pointer">
                          ยินดีมาร่วมอนุโมทนาบุญ
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 cursor-pointer group">
                        <FormControl>
                          <RadioGroupItem value={ATTENDANCE_OPTIONS.NO} className="text-gray-400 border-gray-300 focus:ring-gray-400" />
                        </FormControl>
                        <FormLabel className="font-normal text-gray-500 group-hover:text-gray-700 transition-colors font-thai cursor-pointer">
                          ขอร่วมอนุโมทนาบุญจากทางไกล
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-auto w-full bg-primary hover:bg-primary-dark text-white font-bold h-11 transition-colors shadow-sm font-thai"
            >
              ยืนยัน
            </Button>
          </form>
        </Form>
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        open={showConfirm}
        onOpenChange={setShowConfirm}
        data={form.getValues()}
        onConfirm={handleConfirm}
        isSubmitting={isSubmitting}
      />
    </section>
  );
};

const MeritSection = () => {
  return (
    <section className="bg-[#fffcf7] rounded-xl shadow-sm border border-primary/30 p-6 flex flex-col h-full text-center relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 p-2 opacity-10">
        <SpaIcon className="material-symbols-outlined text-6xl text-primary" />
      </div>

      <div className="flex flex-col items-center mb-6 relative z-10">
        <h2 className="text-primary-dark text-xl font-bold mb-1 font-thai">ร่วมอนุโมทนาบุญ</h2>
        <p className="text-xs text-gray-500">Scan QR to Donate</p>
      </div>

      <div className="flex flex-col items-center justify-center grow gap-4 relative z-10">
        <div className="p-3 bg-white rounded-xl shadow-sm border border-primary/20">
          {/* QR Placeholder using CSS pattern */}
          <div
            className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center"
            style={{
              backgroundImage: 'linear-gradient(135deg, #eeeeee 25%, transparent 25%), linear-gradient(225deg, #eeeeee 25%, transparent 25%), linear-gradient(45deg, #eeeeee 25%, transparent 25%), linear-gradient(315deg, #eeeeee 25%, transparent 25%)',
              backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
              backgroundSize: '20px 20px',
              backgroundRepeat: 'repeat'
            }}
          >
            <QrCodeScannerIcon className="material-symbols-outlined text-gray-400 text-4xl" />
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-bold font-thai">{EVENT_DETAILS.bankAccount.bankName}</p>
          <p className="text-lg font-mono tracking-wider text-[#181511]">{EVENT_DETAILS.bankAccount.accountNumber}</p>
          <p className="font-thai">{EVENT_DETAILS.bankAccount.accountName}</p>
        </div>
      </div>
    </section>
  );
};

export const RsvpMeritSection = () => {
  return (
    <div id="rsvp-section" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <RsvpForm />
      <MeritSection />
    </div>
  );
};
