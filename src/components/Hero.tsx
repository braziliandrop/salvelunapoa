import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Check, Copy, Heart, PawPrint, Shield, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VAKINHA_URL =
  "https://www.vakinha.com.br/vaquinha/salve-a-luna-manuella-medeiros";
const PIX_KEY = "6176516@vakinha.com.br";

function Counter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [raised, setRaised] = useState(0);
  const goal = 15000;
  const [donors] = useState(23);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const target = 1197.23;
    let raf = 0;
    const tick = (t: number) => {
      const progress = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setRaised(Number((target * eased).toFixed(2)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const percent = Math.min(100, (raised / goal) * 100);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="glass mx-auto mt-10 w-full max-w-xl rounded-3xl p-5 sm:p-6"
    >
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-slate-700">
          <PawPrint className="h-4 w-4 text-[#a07a72]" /> Arrecadado
        </span>
        <span className="font-semibold text-slate-800">
          {raised.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#ede2dc]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="h-full rounded-full bg-[#a07a72]"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <span>
          Meta:{" "}
          <span className="font-semibold text-slate-700">
            {goal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            })}
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-[#a07a72]" />
          {donors} doadores · atualização recente
        </span>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-slate-600">
        “Cada ajuda aproxima a Luna da recuperação”
        <span className="ml-1 inline-block animate-heartbeat text-[#a07a72]">
          ❤️
        </span>
      </p>
    </motion.div>
  );
}

function PixModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PIX_KEY;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/30 p-3 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#e0d2c8] bg-[#fbf7f3] p-6 shadow-xl shadow-stone-300/30 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-600 ring-1 ring-[#e0d2c8]/70 transition hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ede2dc] px-3 py-1 text-xs font-semibold text-[#8a6960]">
            <PawPrint className="h-3.5 w-3.5" /> Doações abaixo de R$25
          </div>
          <h3 className="text-xl font-semibold text-slate-800 sm:text-2xl">
            Doe via Pix 🐾
          </h3>
          <p className="mt-1.5 text-sm text-slate-500">
            Use a chave abaixo para enviar qualquer valor via Pix. Qualquer
            quantia já ajuda a Luna.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-[#d2b1ad] bg-[#f0e6e0]/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8a6960]">
              Chave Pix (e-mail)
            </p>
            <p className="mt-1 break-all font-mono text-sm font-semibold text-slate-800 sm:text-base">
              {PIX_KEY}
            </p>
          </div>

          <button
            onClick={copy}
            className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
              copied
                ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200"
                : "bg-[#a07a72] text-white hover:bg-[#8a6960]"
            }`}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Chave Pix copiada com sucesso ❤️
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copiar chave Pix
              </>
            )}
          </button>

          <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#eef2f5] p-3 text-xs text-slate-600">
            <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6f8597]" />
            <p>
              Confirme sempre o nome do destinatário antes de concluir a
              transferência. Cada contribuição é registrada na vaquinha oficial.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const [pixOpen, setPixOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      id="topo"
      ref={ref}
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background decorations bem sutis */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0e6e0]/50 blur-3xl" />
        <div className="absolute top-40 left-6 h-40 w-40 rounded-full bg-[#eef2f5]/60 blur-3xl sm:left-20" />
        <div className="absolute right-6 top-60 h-44 w-44 rounded-full bg-[#ede2dc]/40 blur-3xl sm:right-20" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-10 sm:gap-12 lg:grid-cols-2 lg:pb-16">
        {/* Text */}
        <motion.div style={{ y: textY }} className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d2b1ad]/60 bg-[#f0e6e0]/80 px-3.5 py-1.5 text-xs font-semibold text-[#8a6960] lg:mx-0"
          >
            <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-[#a07a72]" />
            Cirurgia urgente · A Luna precisa de você
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Ajude a salvar a{" "}
            <span className="text-gradient">Luna</span>{" "}
            <span className="inline-block animate-floaty">🐾</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
          >
            Luna está lutando pela vida e precisa de uma cirurgia urgente. Cada
            doação pode fazer a diferença.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={VAKINHA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#a07a72] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#8a6960] sm:w-auto sm:px-7"
            >
              <Heart className="h-5 w-5 fill-white animate-heartbeat" />
              Doar acima de R$25
              <span className="ml-1 text-xs font-medium opacity-90">
                via Vakinha
              </span>
            </a>

            <button
              onClick={() => setPixOpen(true)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#d2b1ad]/60 bg-white/70 px-6 py-4 text-base font-semibold text-[#8a6960] backdrop-blur-md transition-colors hover:border-[#a07a72] hover:bg-white sm:w-auto sm:px-7"
            >
              <PawPrint className="h-5 w-5" />
              Doar via Pix
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-4 text-xs text-slate-500"
          >
            Pagamento seguro · 100% destinado ao tratamento da Luna
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            <div className="glass relative overflow-hidden rounded-[2rem] p-2.5">
              <div className="overflow-hidden rounded-[1.6rem]">
                <img
                  src="/images/luna-hero.png"
                  alt="Luna, gatinha que precisa de ajuda para uma cirurgia urgente"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-soft absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl p-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ede2dc]">
                  <Heart className="h-5 w-5 fill-[#a07a72] text-[#a07a72] animate-heartbeat" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Estamos com você, Luna
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Cada gesto conta nesta corrida contra o tempo
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating paw prints */}
            <div className="pointer-events-none absolute -top-6 -right-2 hidden text-[#d8c8be] sm:block animate-floaty-slow">
              <PawPrint className="h-10 w-10" />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -left-3 hidden text-[#b6c4d1] sm:block animate-floaty">
              <PawPrint className="h-8 w-8" />
            </div>
          </div>
        </motion.div>
      </div>

      <Counter />

      <PixModal open={pixOpen} onClose={() => setPixOpen(false)} />
    </section>
  );
}
