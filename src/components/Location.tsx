import { MapPin, Navigation, Pin } from 'lucide-react';

export const Location = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#e5e1dc] overflow-hidden mb-8">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4 border-b border-[#f0ebe6] pb-4">
          <MapPin className='text-primary' />
          <h2 className="text-[#181511] text-2xl font-bold font-thai">สถานที่จัดงาน</h2>
        </div>
        <h3 className="text-xl font-bold mb-1 font-thai">วัดบางโฉลงใน</h3>
        <p className="text-gray-600 mb-6 font-thai">ต.บางโฉลง อ.บางพลี จ.สมุทรปราการ</p>

        <a
          href="https://maps.app.goo.gl/bvg2omhUBB1ZPTxs6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold h-12 px-6 transition-colors shadow-sm"
        >
          <Navigation />
          <span className="font-thai text-sm md:text-xl">นำทาง (Google Maps)</span>
        </a>
      </div>

      <a
        href="https://maps.app.goo.gl/bvg2omhUBB1ZPTxs6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[240px] w-full bg-gray-100">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 hover:grayscale-0 transition-all duration-500"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWSuZhhlaZ9Jo-zKM7MoSbPKwk9kqDuXWZcBtMMjtwNSVAWZNn4i_sUEsSt6OCA8MZQxIZpTx6gUZ8nyCmDNvqz2uZwJktGXTBuZAm03z6909EoxHn6QM_gn1uuMOYGFAXNnbHmcaqOvLZA2X3JfbD_p32fCmFfQspznbR6mA-c66RAO_YO1DmJSJm1hY4-_Ew0qTa8SBni7Oc2YQFj2pmH68BNfmWUqSX1139CoVlSr_7SoqIOnDmUcNMcR5g1FxUmEgxRtP5sgz8")`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 p-3 rounded-full shadow-lg">
              <Pin className='text-red-400' />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};