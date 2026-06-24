import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 1. Fotos do Pós-Cirúrgico
const postSurgeryPhotos = [
  { src: "/images/pos-1.png", alt: "Luna em recuperação após a cirurgia" },
  { src: "/images/pos-2.png", alt: "Luna usando roupinha cirúrgica" },
  { src: "/images/pos-3.png", alt: "Luna recebendo medicação" },
  { src: "/images/pos-4.png", alt: "Cicatriz da cirurgia da Luna em cicatrização" },
];

// 2. Fotos de Antes da Cirurgia
const generalPhotos = [
  { src: "/images/luna-1.png", alt: "Luna descansando tranquila" },
  { src: "/images/luna-2.png", alt: "Luna dormindo em uma almofada" },
  { src: "/images/luna-3.png", alt: "Luna enrolada em um cobertor rosa" },
  { src: "/images/luna-4.png", alt: "Luna olhando com curiosidade" },
];

export function Gallery() {
  // Refs para controlar a animação de cada bloco de fotos de forma independente
  const refHeader = useRef<HTMLDivElement>(null);
  const inViewHeader = useInView(refHeader, { once: true, margin: "-80px" });

  const refSurgery = useRef<HTMLDivElement>(null);
  const inViewSurgery = useInView(refSurgery, { once: true, margin: "-80px" });

  const refBefore = useRef<HTMLDivElement>(null);
  const inViewBefore = useInView(refBefore, { once: true, margin: "-80px" });

  return (
    <section id="galeria" className="relative scroll-mt-24 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* ================= TÍTULO PRINCIPAL DA GALERIA ================= */}
        <motion.div
          ref={refHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#d2b1ad]/60 bg-[#f0e6e0]/80 px-3 py-1 text-xs font-semibold text-[#8a6960]">
            🐾 Galeria da Luna
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Momentos da <span className="text-gradient">Luna</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-slate-600">
            Acompanhe a trajetória da nossa gatinha, desde a sua rotina cheia de amor até os cuidados na sua recuperação.
          </p>
        </motion.div>

        {/* ================= SUBSEÇÃO 1: PÓS-CIRÚRGICO ================= */}
        <div ref={refSurgery} className="mt-10 sm:mt-14">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={inViewSurgery ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-slate-800 border-l-4 border-[#d2b1ad] pl-3 mb-5"
          >
            Pós-Cirúrgico e Recuperação
          </motion.h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {postSurgeryPhotos.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 24 }}
                animate={inViewSurgery ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}
                className="glass group relative overflow-hidden rounded-2xl p-1.5 sm:p-2"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* ================= SUBSEÇÃO 2: ANTES DE TUDO ================= */}
        <div ref={refBefore} className="mt-10 sm:mt-14">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={inViewBefore ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-slate-800 border-l-4 border-[#d2b1ad] pl-3 mb-5"
          >
            Antes de tudo...
          </motion.h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {generalPhotos.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 24 }}
                animate={inViewBefore ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}
                className="glass group relative overflow-hidden rounded-2xl p-1.5 sm:p-2"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}