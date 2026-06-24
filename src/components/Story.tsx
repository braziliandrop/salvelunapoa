import { motion, useInView } from "framer-motion";
import { AlertTriangle, Calendar, Heart, Hospital, Stethoscope } from "lucide-react";
import { useRef } from "react";

type Event = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const events: Event[] = [
  {
    date: "16/06",
    title: "Os primeiros sinais",
    description:
      "Luna apresentou sintomas como isolamento, falta de apetite e ausência de eliminação urinária e fecal. Posteriormente foi percebido aumento do volume abdominal.",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    date: "17/06",
    title: "Primeira consulta e exames",
    description:
      "Ela foi levada ao veterinário para exames de sangue e ultrassonografia.",
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    date: "18/06",
    title: "Pré-laudo e transferência urgente",
    description:
      "O pré-laudo apontou possível ruptura renal no rim direito e obstrução do rim esquerdo por cálculos. A clínica informou que não possuía estrutura adequada para atender o caso e foi necessária transferência urgente. Ainda na mesma noite Luna foi internada em uma nova clínica especializada, onde novos exames foram realizados.",
    icon: <Hospital className="h-5 w-5" />,
  },
  {
    date: "19/06",
    title: "Cirurgia do rim direito",
    description:
      "Foi confirmado o diagnóstico de ruptura renal grave. A equipe médica informou a necessidade de cirurgia imediata para avaliar a viabilidade do rim afetado. No mesmo dia foi realizada a remoção do rim direito.",
    icon: <Heart className="h-5 w-5" />,
  },
];

function TimelineItem({ event, index }: { event: Event; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative grid grid-cols-[44px_1fr] gap-4 sm:grid-cols-[60px_1fr]"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#a07a72] text-white sm:h-14 sm:w-14">
          {event.icon}
        </div>
      </div>

      <div className="glass relative -mt-1 rounded-2xl p-4 sm:p-5">
        <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[#ede2dc] px-2.5 py-0.5 text-[11px] font-semibold text-[#8a6960]">
          <Calendar className="h-3 w-3" /> {event.date}
        </div>
        <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
          {event.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Story() {
  const situationRef = useRef<HTMLDivElement>(null);
  const situationInView = useInView(situationRef, { once: true, margin: "-80px" });

  return (
    <section
      id="historia"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#d2b1ad]/60 bg-[#f0e6e0]/80 px-3 py-1 text-xs font-semibold text-[#8a6960]">
            <Heart className="h-3.5 w-3.5 fill-[#a07a72] text-[#a07a72]" /> A
            linha do tempo
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A história da <span className="text-gradient">Luna</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Em apenas quatro dias, a Luna passou de sintomas leves a uma
            batalha pela vida. Acompanhe cada etapa dessa jornada.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-[#d8c8be] sm:left-[30px]" />

          <div className="space-y-5 sm:space-y-7">
            {events.map((event, i) => (
              <TimelineItem key={event.date} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* Current situation */}
        <motion.div
          ref={situationRef}
          initial={{ opacity: 0, y: 24 }}
          animate={situationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 overflow-hidden rounded-3xl border border-[#d2b1ad]/50 bg-[#f0e6e0]/50 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-[#d2b1ad]/50">
              <AlertTriangle className="h-6 w-6 text-[#8a6960]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">
                Situação atual
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Luna está no quarto dia de pós-operatório. Apesar de estar
                reagindo bem à recuperação, os exames ainda mostram alterações
                importantes. O rim esquerdo permanece obstruído por cálculos e
                encontra-se sobrecarregado. A condição impede a eliminação
                adequada de substâncias urinárias, podendo causar intoxicação
                no organismo.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Os médicos indicaram uma nova cirurgia em caráter de extrema
                urgência. Sem o procedimento, existe risco iminente à vida da
                Luna.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/80 p-4 text-center ring-1 ring-[#d2b1ad]/40 sm:p-5">
            <p className="text-base font-semibold text-slate-800 sm:text-lg">
              “Agora a Luna depende da nossa ajuda.”
              <span className="ml-1 inline-block animate-heartbeat text-[#a07a72]">
                ❤️
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
