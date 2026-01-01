export default function Invitation() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center space-y-8">
      <div className="p-8 md:p-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
          "กราบลาอุปสมบท"
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mt-6">
          กรรมใดที่ข้าพเจ้าได้เคยล่วงเกินท่าน ด้วยกายก็ดี ด้วยวาจาก็ดี ด้วยใจก็ดี
          ทั้งต่อหน้าและลับหลัง ทั้งที่เจตนาและไม่ได้เจตนา
          ขอท่านโปรดอโหสิกรรมนั้นให้แก่ข้าพเจ้าด้วยเทอญ
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mt-6 font-semibold text-primary/80">
          เพื่อทดแทนคุณบิดามารดา และศึกษาพระธรรมวินัย
        </p>
      </div>
    </section>
  );
}
