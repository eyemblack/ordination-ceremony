'use client';

export const Navbar = () => {
  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e1dc]">
      <div className="layout-container flex justify-center w-full">
        <div className="flex max-w-[960px] w-full items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">leaf_spark</span>
            <h2 className="text-[#181511] text-lg font-bold tracking-tight uppercase font-display">LEAF_RK งานอุปสมบท</h2>
          </div>
          <button
            onClick={scrollToRsvp}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200 flex items-center gap-2 shadow-sm"
          >
            <span className="hidden sm:inline">RSVP</span>
            <span className="material-symbols-outlined text-[18px]">rsvp</span>
          </button>
        </div>
      </div>
    </nav>
  );
}