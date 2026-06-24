import { motion, useInView } from "framer-motion";
import { Heart, Share2, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const VAKINHA_URL =
  "https://www.vakinha.com.br/vaquinha/salve-a-luna-manuella-medeiros";

export function Appeal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const handleShare = async () => {
    const shareData = {
      title: "Ajude a salvar a Luna 🐾",
      text: "A Luna precisa de uma cirurgia urgente. Cada doação pode fazer a diferença.",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setShareMsg("Link copiado! Compartilhe com quem puder ajudar ❤️");
    } catch {
      /* user cancelled */
    }
    setTimeout(() => setShareMsg(null), 3000);
  };

  return (
    <section
      id="ajudar"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#d2b1ad]/50 bg-[#f0e6e0]/40 p-7 sm:p-12"
        >
          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white ring-1 ring-[#d2b1ad]/50"
            >
              <Heart className="h-7 w-7 fill-[#a07a72] text-[#a07a72] animate-heartbeat" />
            </motion.div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Você pode ajudar a{" "}
              <span className="text-gradient">salvar a Luna</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Estamos enfrentando uma corrida contra o tempo. Os custos com
              internação, exames, cirurgia, medicamentos e acompanhamento são
              altos, e qualquer valor faz diferença.
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Mesmo que você não possa contribuir financeiramente, compartilhar
              esta página já pode ajudar a alcançar alguém que possa.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              Cada doação representa uma chance a mais para a Luna continuar
              lutando.
              <span className="ml-1 inline-block animate-heartbeat text-[#a07a72]">
                ❤️
              </span>
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={VAKINHA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#a07a72] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#8a6960] sm:w-auto"
              >
                <Sparkles className="h-5 w-5" />
                Quero ajudar a Luna
              </a>

              <button
                onClick={handleShare}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#d2b1ad]/60 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 transition-colors hover:border-[#a07a72] hover:bg-white sm:w-auto"
              >
                <Share2 className="h-5 w-5 text-[#8a6960]" />
                Compartilhar
              </button>
            </div>

            {shareMsg && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm font-medium text-[#8a6960]"
              >
                {shareMsg}
              </motion.p>
            )}

            {/* Trust badges */}
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                { label: "Transparência", desc: "Vakinha oficial" },
                { label: "Segurança", desc: "Pagamento protegido" },
                { label: "Solidariedade", desc: "Cada gesto conta" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl bg-white/70 px-4 py-3 text-left ring-1 ring-[#e0d2c8]/60"
                >
                  <p className="text-sm font-semibold text-slate-800">
                    {b.label}
                  </p>
                  <p className="text-xs text-slate-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
