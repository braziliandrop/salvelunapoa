import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#historia", label: "História" },
  { href: "#bypass", label: "Bypass felino" },
  { href: "#galeria", label: "Galeria" },
  { href: "#ajudar", label: "Como ajudar" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled ? "shadow-md shadow-stone-200/40" : ""
          }`}
        >
          <a href="#topo" className="flex items-center">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-[#f0e6e0] hover:text-[#a07a72]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://www.vakinha.com.br/vaquinha/salve-a-luna-manuella-medeiros"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#a07a72] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8a6960]"
            >
              <Heart className="h-4 w-4 fill-white animate-heartbeat" />
              Doar agora
            </a>
          </div>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-700 ring-1 ring-[#e0d2c8]/60 md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#f0e6e0]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.vakinha.com.br/vaquinha/salve-a-luna-manuella-medeiros"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#a07a72] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <Heart className="h-4 w-4 fill-white" /> Doar agora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
