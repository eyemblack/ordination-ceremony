export const Quote = () => {
  return (
    <section className="flex flex-col items-center py-12 px-6 text-center">
      <span className="material-symbols-outlined text-primary/40 text-4xl mb-4">format_quote</span>
      <p className="text-text-main text-lg md:text-xl font-normal leading-relaxed italic relative font-thai">
        "ขอเรียนเชิญไปร่วมอนุโมทนาในงานอุปสมบทครั้งนี้โดยพร้อมเพียงกัน กรรมใดที่ผู้อุปสมบทได้ล่วงเกินท่านด้วย กายกรรม วจีกรรม มโนกรรม ขอได้โปรดอโหสิกรรม ให้แก่ผู้อุปสมบทด้วยเถิด"
      </p>
      <div className="mt-8 flex gap-2 justify-center opacity-40">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
    </section>
  );
};