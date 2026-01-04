"use client"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle2 } from "lucide-react"

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

const formSchema = z.object({
  name: z.string().min(1, {
    message: "กรุณาระบุชื่อ-นามสกุล",
  }),
  guests: z.string(),
  attendance: z.enum(["yes", "no"], {
    message: "กรุณาระบุความประสงค์",
  }),
})

export const RsvpForm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      guests: "1",
      attendance: "yes",
    },
  })

  function onSubmit() {
    setShowConfirm(true);
  }

  const handleConfirm = async () => {
    setShowConfirm(false);
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
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  };

  const { watch } = form;

  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#e5e1dc] p-6 flex flex-col h-full relative">
      <div className="flex items-center gap-2 mb-6 border-b border-[#f0ebe6] pb-3">
        <span className="material-symbols-outlined text-primary">mark_email_read</span>
        <h2 className="text-[#181511] text-xl font-bold font-thai">ยืนยันการมาร่วมงาน</h2>
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-[#181511] font-thai">ชื่อ-นามสกุล</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ระบุชื่อของท่าน"
                      className="bg-[#fdfdfc] font-thai"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-thai" />
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
                  <FormMessage className="font-thai" />
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
                          <RadioGroupItem value="yes" className="text-primary border-gray-300 focus:ring-primary" />
                        </FormControl>
                        <FormLabel className="font-normal text-[#181511] group-hover:text-primary transition-colors font-thai cursor-pointer">
                          สามารถมาร่วมงานได้
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 cursor-pointer group">
                        <FormControl>
                          <RadioGroupItem value="no" className="text-gray-400 border-gray-300 focus:ring-gray-400" />
                        </FormControl>
                        <FormLabel className="font-normal text-gray-500 group-hover:text-gray-700 transition-colors font-thai cursor-pointer">
                          ไม่สะดวกมาร่วมงาน
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="font-thai" />
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
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="sm:max-w-sm rounded-xl font-thai">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-2xl">help</span>
              <DialogTitle className="text-lg font-bold text-[#181511]">ยืนยันข้อมูล</DialogTitle>
            </div>
            <DialogDescription>
              โปรดตรวจสอบข้อมูลของท่านก่อนยืนยัน
            </DialogDescription>
          </DialogHeader>

          <div className="bg-[#f8f7f6] p-4 rounded-lg border border-[#e5e1dc] space-y-2 text-sm">
            <div className="flex justify-between items-start gap-2">
              <span className="text-gray-500 shrink-0">ชื่อ-นามสกุล:</span>
              <span className="font-bold text-[#181511] text-right">{watch('name')}</span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-gray-500 shrink-0">จำนวน:</span>
              <span className="font-bold text-[#181511] text-right">
                {watch('guests') === '1' ? 'มาคนเดียว' : `${watch('guests')} ท่าน`}
              </span>
            </div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-gray-500 shrink-0">สถานะ:</span>
              <span className={`font-bold text-right ${watch('attendance') === 'yes' ? 'text-green-600' : 'text-red-500'}`}>
                {watch('attendance') === 'yes' ? 'มาร่วมงานได้' : 'ไม่สะดวก'}
              </span>
            </div>
          </div>

          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowConfirm(false)}
              className="font-bold text-gray-700 font-thai"
            >
              ยกเลิก
            </Button>
            <Button
              type="button"
              onClick={handleConfirm}
              className="bg-primary hover:bg-primary-dark text-white font-bold font-thai"
            >
              ยืนยัน
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

const MeritSection = () => {
  return (
    <section className="bg-[#fffcf7] rounded-xl shadow-sm border border-primary/30 p-6 flex flex-col h-full text-center relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 p-2 opacity-10">
        <span className="material-symbols-outlined text-6xl text-primary">spa</span>
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
            <span className="material-symbols-outlined text-gray-400 text-4xl">qr_code_scanner</span>
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
