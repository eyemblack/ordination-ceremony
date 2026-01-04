"use client"
import { EVENT_DETAILS } from '@/data/event';
import { useState } from 'react';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScnybCZvLvyi0JwNFot4SQ6o28eGQVtQDZaMGcd0hccGlA13w/formResponse";

export const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'yes'
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      setShowConfirm(true);
    }
  };

  const handleConfirm = async () => {
    setShowConfirm(false);
    alert(`ขอบคุณที่ตอบรับ: คุณ ${formData.name}`);
    setFormData({
      name: '',
      guests: '1',
      attendance: 'yes'
    });
    const data = new URLSearchParams();
    data.append('entry.1371482313', formData.name);
    data.append('entry.214795494', formData.guests);
    data.append('entry.929721816', formData.attendance);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    } catch (error) {
      alert("เกิดข้อผิดพลาด กรุณาลองใหม่");
      console.error('Error submitting form:', error);
    }
  };


  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#e5e1dc] p-6 flex flex-col h-full relative">
      <div className="flex items-center gap-2 mb-6 border-b border-[#f0ebe6] pb-3">
        <span className="material-symbols-outlined text-primary">mark_email_read</span>
        <h2 className="text-[#181511] text-xl font-bold font-thai">ยืนยันการมาร่วมงาน</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 grow">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#181511] font-thai">ชื่อ-นามสกุล</label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#d6d1cb] px-4 py-2.5 text-[#181511] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-[#fdfdfc] font-thai"
            placeholder="ระบุชื่อของท่าน"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#181511] font-thai">จำนวนผู้ติดตาม</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#d6d1cb] px-4 py-2.5 text-[#181511] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-[#fdfdfc] font-thai"
          >
            <option value="1">1 ท่าน</option>
            <option value="2">2 ท่าน</option>
            <option value="3">3 ท่าน</option>
            <option value="4">4 ท่าน</option>
            <option value="5">5 ท่าน</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 py-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={formData.attendance === 'yes'}
              onChange={handleChange}
              className="w-5 h-5 text-primary border-gray-300 focus:ring-primary cursor-pointer accent-primary"
            />
            <span className="text-[#181511] group-hover:text-primary transition-colors font-thai">สามารถมาร่วมงานได้</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={formData.attendance === 'no'}
              onChange={handleChange}
              className="w-5 h-5 text-gray-400 border-gray-300 focus:ring-gray-400 cursor-pointer accent-gray-500"
            />
            <span className="text-gray-500 group-hover:text-gray-700 transition-colors font-thai">ไม่สะดวกมาร่วมงาน</span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-auto w-full rounded-lg bg-primary hover:bg-primary-dark text-white font-bold h-11 transition-colors shadow-sm font-thai"
        >
          ยืนยัน
        </button>
      </form>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-primary/10 p-4 border-b border-primary/10 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">help</span>
              <h3 className="text-lg font-bold text-[#181511] font-thai">ยืนยันข้อมูล</h3>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <p className="text-gray-600 font-thai text-sm">โปรดตรวจสอบข้อมูลของท่านก่อนยืนยัน</p>
              <div className="bg-[#f8f7f6] p-4 rounded-lg border border-[#e5e1dc] space-y-2 text-sm">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-gray-500 font-thai shrink-0">ชื่อ-นามสกุล:</span>
                  <span className="font-bold text-[#181511] font-thai text-right">{formData.name}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-gray-500 font-thai shrink-0">จำนวน:</span>
                  <span className="font-bold text-[#181511] font-thai text-right">
                    {formData.guests === '1' ? 'มาคนเดียว' : `${formData.guests} ท่าน`}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-gray-500 font-thai shrink-0">สถานะ:</span>
                  <span className={`font-bold font-thai text-right ${formData.attendance === 'yes' ? 'text-green-600' : 'text-red-500'}`}>
                    {formData.attendance === 'yes' ? 'มาร่วมงานได้' : 'ไม่สะดวก'}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 flex gap-3 justify-end border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition-colors font-thai text-sm"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirm}
                className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold shadow-sm transition-colors font-thai text-sm"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
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
