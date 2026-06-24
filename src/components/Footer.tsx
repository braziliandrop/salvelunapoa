import { Heart, Mail, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e0d2c8]/50 bg-[#faf6f1] py-12 sm:py-14">
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-[#d2b1ad]/40">
          <PawPrint className="h-6 w-6 text-[#8a6960]" />
        </div>

        <p className="text-lg font-semibold text-slate-800 sm:text-xl">
          Obrigado por cada ajuda, compartilhamento e oração
          <span className="ml-1 inline-block animate-heartbeat text-[#a07a72]">
            ❤️
          </span>
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          Juntos podemos dar uma nova chance para a Luna.
        </p>

        <div className="mx-auto mt-6 flex max-w-md flex-col items-center justify-center gap-2 text-xs text-slate-500 sm:flex-row sm:gap-5">
          <a
            href="mailto:6176516@vakinha.com.br"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#8a6960]"
          >
            <Mail className="h-3.5 w-3.5" /> 6176516@vakinha.com.br
          </a>
          <span className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
          <a
            href="https://www.vakinha.com.br/vaquinha/salve-a-luna-manuella-medeiros"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#8a6960]"
          >
            <Heart className="h-3.5 w-3.5 fill-[#a07a72] text-[#a07a72]" />{" "}
            Vaquinha oficial
          </a>
        </div>

        <p className="mt-8 text-[11px] text-slate-400">
          © {new Date().getFullYear()} · Feito com amor pela Luna 🐾
        </p>
      </div>
    </footer>
  );
}
