export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#f0e6e0] ring-1 ring-[#e0d2c8]/60">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-[#a07a72]"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="5" cy="13" r="1.8" />
            <circle cx="19" cy="13" r="1.8" />
            <path d="M12 11c-3 0-5 2.2-5 4.2 0 1.7 1.3 2.8 3 2.8.9 0 1.4-.3 2-.9.6.6 1.1.9 2 .9 1.7 0 3-1.1 3-2.8 0-2-2-4.2-5-4.2z" />
          </svg>
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#a07a72] text-[9px] text-white ring-2 ring-[#faf6f1]">
          <svg viewBox="0 0 24 24" className="h-2 w-2" fill="currentColor">
            <path d="M12 21s-7-4.5-9.5-9C1 9 3 5 6.5 5c2 0 3.5 1.2 4.5 2.5C12 6.2 13.5 5 15.5 5 19 5 21 9 19.5 12 17 16.5 12 21 12 21z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-slate-800">
          Salve a Luna
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a07a72]">
          Vakinha · Pix
        </span>
      </div>
    </div>
  );
}
