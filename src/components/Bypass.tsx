import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

function BypassIllustration() {
  return (
    <div className="glass-soft relative mx-auto w-full max-w-md overflow-hidden rounded-3xl p-6">
      <svg
        viewBox="0 0 360 220"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustração do rim conduzindo ao tubo ureteral e à bexiga"
      >
        <defs>
          <linearGradient id="kidney" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#b58a85" />
            <stop offset="100%" stopColor="#8a6960" />
          </linearGradient>
          <linearGradient id="tube" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#9aacba" />
            <stop offset="100%" stopColor="#6f8597" />
          </linearGradient>
          <linearGradient id="bladder" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8c4b0" />
            <stop offset="100%" stopColor="#a89180" />
          </linearGradient>
        </defs>

        {/* Kidney */}
        <g transform="translate(40 40)">
          <path
            d="M50 10 C20 10 5 30 5 60 C5 95 25 130 60 130 C95 130 110 100 110 65 C110 30 90 10 50 10 Z"
            fill="url(#kidney)"
            stroke="#6e534c"
            strokeWidth="1.2"
          />
          <path
            d="M55 25 C40 25 30 40 35 70"
            fill="none"
            stroke="#6e534c"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        <text
          x="80"
          y="190"
          textAnchor="middle"
          className="fill-slate-700"
          fontSize="12"
          fontWeight="600"
        >
          Rim
        </text>

        {/* Tube */}
        <path
          d="M140 80 C200 80 200 140 260 140"
          fill="none"
          stroke="url(#tube)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M140 80 C200 80 200 140 260 140"
          fill="none"
          stroke="#566c7d"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          strokeLinecap="round"
          opacity="0.5"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-16"
            dur="1.4s"
            repeatCount="indefinite"
          />
        </path>
        <text
          x="200"
          y="190"
          textAnchor="middle"
          className="fill-slate-700"
          fontSize="12"
          fontWeight="600"
        >
          Bypass ureteral
        </text>

        {/* Bladder */}
        <g transform="translate(280 110)">
          <ellipse
            cx="30"
            cy="35"
            rx="34"
            ry="28"
            fill="url(#bladder)"
            stroke="#7a6555"
            strokeWidth="1.2"
          />
          <ellipse
            cx="22"
            cy="28"
            rx="10"
            ry="5"
            fill="#f4ede5"
            opacity="0.6"
          />
        </g>
        <text
          x="310"
          y="190"
          textAnchor="middle"
          className="fill-slate-700"
          fontSize="12"
          fontWeight="600"
        >
          Bexiga
        </text>

        {/* Flow dot */}
        <circle r="3" fill="#6f8597">
          <animate
            attributeName="cx"
            values="140;200;260"
            dur="2.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="80;110;140"
            dur="2.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <p className="mt-2 text-center text-[11px] text-slate-500">
        Ilustração simplificada do Sistema SUB
      </p>
    </div>
  );
}

export function Bypass() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bypass" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#eef2f5]/50 blur-3xl" />
      </div>

      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#b6c4d1]/60 bg-[#eef2f5]/80 px-3 py-1 text-xs font-semibold text-[#566c7d]">
            <Sparkles className="h-3.5 w-3.5" /> Entenda o procedimento
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            O que é o <span className="text-gradient">bypass felino</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Saiba como esse procedimento pode devolver à Luna a chance de uma
            vida saudável.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <BypassIllustration />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="glass overflow-hidden rounded-3xl"
          >
            <button
              onClick={() => setOpen((s) => !s)}
              className="group flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              aria-expanded={open}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8a6960]">
                  Bypass Ureteral Subcutâneo (Sistema SUB)
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-800 sm:text-xl">
                  {open ? "Entendi, pode fechar" : "Clique para entender"}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.35 }}
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl transition-colors ${
                  open
                    ? "bg-[#a07a72] text-white"
                    : "bg-[#ede2dc] text-[#8a6960] group-hover:bg-[#e0d2c8]"
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#e0d2c8]/70 px-5 py-5 sm:px-6 sm:py-6">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      O <strong className="text-slate-800">bypass felino</strong>
                      , também chamado de{" "}
                      <strong className="text-slate-800">
                        Bypass Ureteral Subcutâneo (Sistema SUB)
                      </strong>
                      , é um procedimento cirúrgico veterinário que cria uma via
                      alternativa para contornar obstruções nos ureteres.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                      Ele funciona como um{" "}
                      <strong className="text-slate-800">ureter artificial</strong>
                      , permitindo que a urina seja transportada dos rins
                      diretamente para a bexiga, restaurando o fluxo urinário
                      adequado e evitando a rápida piora do quadro clínico.
                    </p>
                    <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#f0e6e0]/70 p-4">
                      <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8a6960]" />
                      <p className="text-xs text-slate-600 sm:text-sm">
                        É um procedimento delicado, de alto custo, mas que
                        oferece à Luna uma chance real de recuperação e
                        qualidade de vida.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
