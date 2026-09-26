import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, MapPin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const heroAsset = { url: "/images/ana-julia-hero.png" };
const portraitAsset = { url: "/images/ana-julia-retrato.jpg" };
const careAsset = { url: "/images/cuidado-capilar.jpg" };
const stylingAsset = { url: "/images/escova-profissional.jpg" };
const resultAsset = { url: "/images/resultado-cabelos.jpg" };
const techniqueAsset = { url: "/images/tecnica-corte.jpg" };
const logoAsset = { url: "/images/studio-ana-julia-logo.jpg" };

const whatsapp =
  "https://wa.me/5511994321904?text=Ol%C3%A1%2C%20Ana%20Julia!%20Conheci%20o%20Studio%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

const serviceGroups = [
  {
    number: "01",
    title: "Forma & acabamento",
    description: "Movimento, presença e um resultado pensado para acompanhar a sua rotina.",
    services: [
      ["Corte", "R$ 75"],
      ["Corte masculino", "R$ 60"],
      ["Escova", "a partir de R$ 60"],
      ["Ondas estruturadas para festa", "R$ 89"],
    ],
  },
  {
    number: "02",
    title: "Cor & transformação",
    description: "Cor com intenção, leitura cuidadosa dos fios e atenção ao resultado que você deseja.",
    services: [
      ["Retoque de raiz", "R$ 149"],
      ["Luzes com reconstrução e escova", "a partir de R$ 549"],
      ["Maquiagem/tonalizante para cabelos brancos masculino", "R$ 90"],
    ],
  },
  {
    number: "03",
    title: "Disciplina & textura",
    description: "Protocolos para alinhar, reduzir volume e devolver leveza sem perder identidade.",
    services: [
      ["Selagem ou botox — segunda a quarta", "R$ 160"],
      ["Selagem ou botox — quinta a sábado", "R$ 179"],
      ["Progressiva", "R$ 229"],
      ["Progressiva com tratamento profundo", "R$ 349"],
    ],
  },
  {
    number: "04",
    title: "Força & brilho",
    description: "Tratamentos escolhidos para restaurar a fibra e recuperar o toque saudável dos cabelos.",
    note: "Todas as hidratações e reconstruções incluem escova.",
    services: [
      ["Reconstrução Joico — 4 passos", "R$ 229"],
      ["Reconstrução Senscience", "de R$ 210 por R$ 189"],
      ["Hidratação instantânea Joico 7s", "R$ 119"],
      ["Hidratação Wella Fusion", "R$ 109"],
    ],
  },
  {
    number: "05",
    title: "Ocasiões especiais",
    description: "Detalhes que completam sua presença nos momentos que merecem ser lembrados.",
    services: [
      ["Tranças", "a partir de R$ 89"],
      ["Penteado social", "R$ 197"],
      ["Penteado de noiva", "R$ 297"],
    ],
  },
];

const testimonials = [
  { quote: "Só confio nela para cortar meu cabelo. Uma Querida!", name: "Beatriz Braga" },
  {
    quote: "Cheguei com o cabelo tão sem graça, saí com ele cheio de vida! Obrigada.",
    name: "Caroline P Oliveira",
  },
  {
    quote: "Excelente! Recomendo para todos que querem ser atendidos com atenção, educação e profissionalismo.",
    name: "Mauricio Kranyak",
  },
  {
    quote: "Lugar maravilhoso, atendimento de excelência desde o início até o final, recomendo de olhos fechados.",
    name: "Diego Ferreira",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Ana Julia | Cuidado e beleza em São Caetano do Sul" },
      {
        name: "description",
        content:
          "Cortes, cor, tratamentos e penteados com atendimento cuidadoso. Agende pelo WhatsApp no Studio Ana Julia.",
      },
      { property: "og:title", content: "Studio Ana Julia | Sua beleza, com intenção" },
      {
        property: "og:description",
        content: "Uma experiência de cuidado, técnica e transformação feita para você.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppButton({ label, outline = false }: { label: string; outline?: boolean }) {
  return (
    <Button asChild size="lg" variant={outline ? "editorialOutline" : "editorial"}>
      <a href={whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8 lg:px-14">
        <a href="#inicio" className="min-w-0 font-display text-xl text-foreground sm:text-2xl">
          Studio Ana Julia
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 border-b border-primary/60 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary"
        >
          Agendar
        </a>
      </header>

      <section id="inicio" className="relative flex min-h-[92svh] w-full items-end overflow-hidden px-5 pb-14 pt-28 sm:px-8 sm:pb-20 lg:px-14">
        <img
          src={heroAsset.url}
          alt="Ana Julia, profissional do Studio Ana Julia"
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_0%,color-mix(in_oklab,var(--background)_78%,transparent)_24%,transparent_72%),linear-gradient(to_right,color-mix(in_oklab,var(--background)_58%,transparent),transparent_65%)]" />
        <div className="animate-reveal relative z-10 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Beleza com intenção</p>
          <h1 className="mb-7 font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
            Ana Julia
            <span className="block font-normal italic">Hairstylist</span>
          </h1>
          <p className="mb-8 max-w-md text-base font-light leading-relaxed text-foreground/75 sm:text-lg">
            Técnica, escuta e cuidado para revelar a sua beleza com naturalidade e presença.
          </p>
          <WhatsAppButton label="Agendar experiência" />
        </div>
        <a href="#manifesto" aria-label="Conhecer o Studio" className="absolute bottom-7 right-6 z-10 text-foreground/60 sm:right-10">
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      <section id="manifesto" className="bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 sm:py-32 lg:px-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 h-px w-14 bg-primary" />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Um cuidado que começa antes da transformação</p>
          <h2 className="max-w-4xl font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">
            Seu cabelo não pede uma fórmula. Pede <span className="italic">olhar, escuta e técnica.</span>
          </h2>
          <div className="mt-12 grid gap-8 text-base font-light leading-relaxed text-accent sm:grid-cols-2 sm:text-lg">
            <p>Cada atendimento parte de você: da sua rotina, do que deseja sentir e da forma como quer se reconhecer no espelho.</p>
            <p>No Studio Ana Julia, cada detalhe é conduzido com atenção — do primeiro olhar ao acabamento final.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Presença em cada detalhe</p>
              <h2 className="font-display text-4xl sm:text-6xl">A técnica também se vê.</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-foreground/50 md:block">Cuidado real, mãos experientes e resultados construídos fio a fio.</p>
          </div>

          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            <figure className="col-span-8 overflow-hidden">
              <img src={techniqueAsset.url} alt="Ana Julia executando um corte com precisão" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
            </figure>
            <figure className="col-span-4 self-end overflow-hidden">
              <img src={stylingAsset.url} alt="Escova profissional no Studio Ana Julia" className="aspect-[2/3] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
            </figure>
            <figure className="col-span-5 mt-4 overflow-hidden sm:col-span-4 sm:ml-10">
              <img src={careAsset.url} alt="Momento de cuidado capilar no lavatório" className="aspect-[3/4] h-full w-full object-cover" />
            </figure>
            <figure className="col-span-7 mt-14 overflow-hidden sm:col-span-6 sm:col-start-7 sm:mt-24">
              <img src={resultAsset.url} alt="Resultado de cabelos finalizados no Studio Ana Julia" className="aspect-[4/5] h-full w-full object-cover" />
            </figure>
          </div>
          <div className="mt-16 max-w-xl sm:ml-[9%]">
            <h3 className="mb-5 font-display text-3xl sm:text-4xl">O detalhe muda tudo.</h3>
            <p className="font-light leading-relaxed text-foreground/60">A escolha da técnica, o tempo de pausa, o toque e o acabamento. Uma experiência atenta ao processo — e a como você quer se sentir depois dele.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-3 -top-3 h-24 w-px bg-primary sm:-left-6 sm:-top-6" />
            <img src={portraitAsset.url} alt="Ana Julia no Studio Ana Julia" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Por trás de cada resultado</p>
            <h2 className="mb-8 font-display text-4xl leading-tight sm:text-6xl">Cuidar bem é saber <span className="italic">observar.</span></h2>
            <p className="mb-6 text-lg font-light leading-relaxed text-accent">Ana Julia conduz cada atendimento de forma próxima e personalizada, respeitando os fios, as escolhas e o tempo de cada cliente.</p>
            <p className="mb-10 font-light leading-relaxed text-accent/80">Mais do que mudar o cabelo, a proposta é construir um resultado que combine com você — e faça sentido também fora do salão.</p>
            <WhatsAppButton label="Conversar com Ana Julia" />
          </div>
        </div>
      </section>

      <section id="servicos" className="border-y border-border py-24 lg:py-32">
        <div className="px-5 pb-16 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Serviços</p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Escolhas para o resultado que você quer sentir.</h2>
          </div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {serviceGroups.map((group) => (
            <article key={group.number} className="px-5 py-14 transition-colors hover:bg-card sm:px-8 lg:px-14 lg:py-16">
              <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-[4rem_minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
                <span className="font-display text-2xl text-primary">{group.number}</span>
                <div>
                  <h3 className="mb-4 font-display text-3xl sm:text-4xl">{group.title}</h3>
                  <p className="max-w-md font-light leading-relaxed text-foreground/55">{group.description}</p>
                  {group.note ? <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{group.note}</p> : null}
                </div>
                <dl className="divide-y divide-border/70">
                  {group.services.map(([name, price]) => (
                    <div key={name} className="grid grid-cols-[minmax(0,1fr)_auto] gap-5 py-4 first:pt-0">
                      <dt className="min-w-0 text-sm leading-snug text-foreground/75 sm:text-base">{name}</dt>
                      <dd className="shrink-0 text-right font-display text-lg text-primary">{price}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 flex justify-center px-5">
          <WhatsAppButton label="Escolher meu horário" outline />
        </div>
      </section>

      <section className="bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Palavras de quem viveu a experiência</p>
            <h2 className="font-display text-4xl sm:text-6xl">Confiança que se conquista.</h2>
          </div>
          <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <blockquote key={testimonial.name} className={index % 2 ? "sm:mt-16" : ""}>
                <span aria-hidden="true" className="mb-5 block font-display text-5xl leading-none text-primary">“</span>
                <p className="mb-7 font-display text-2xl italic leading-relaxed sm:text-3xl">{testimonial.quote}</p>
                <footer className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
        <div className="absolute inset-y-0 right-0 hidden w-[45%] opacity-20 md:block">
          <img src={heroAsset.url} alt="" className="h-full w-full object-cover object-top" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Seu momento</p>
          <h2 className="mb-7 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">Pronta para se reconhecer de um jeito novo?</h2>
          <p className="mb-10 max-w-lg font-light leading-relaxed text-foreground/60">Conte o que você deseja. Ana Julia ajuda você a escolher o cuidado ideal e encontrar o melhor horário.</p>
          <WhatsAppButton label="Agendar pelo WhatsApp" />
        </div>
      </section>

      <footer className="border-t border-border px-5 pb-28 pt-20 sm:px-8 sm:pb-12 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <img src={logoAsset.url} alt="Studio Ana Julia" className="mb-10 h-24 w-24 object-cover" />
              <address className="not-italic text-foreground/60">
                <p className="mb-3 flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Rua Manoel Coelho, 600 — loja 35</p>
                <p>Atendimento das 10h às 18h</p>
              </address>
            </div>
            <div className="flex flex-col items-start justify-between gap-10 md:items-end">
              <a href="https://instagram.com/studio_aj_ana_julia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border-b border-primary/50 pb-2 text-lg transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" /> @studio_aj_ana_julia
              </a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 font-display text-3xl transition-colors hover:text-primary sm:text-4xl">
                11 99432-1904 <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-3 border-t border-border pt-8 text-[0.65rem] uppercase tracking-[0.16em] text-foreground/35 sm:flex-row sm:justify-between">
            <span>© 2026 Studio Ana Julia</span>
            <span>Beleza com intenção</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
        <Button asChild variant="editorial" className="h-12 w-full shadow-lg">
          <a href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> Agendar pelo WhatsApp
          </a>
        </Button>
      </div>
    </main>
  );
}