import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import nayronAsset from "@/assets/nayron.png.asset.json";
import heroDigital from "@/assets/hero-digital.jpg";
import projectClinic from "@/assets/project-clinic.jpg";
import projectLaw from "@/assets/project-law.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const WHATSAPP_NUMBER = "5500000000000"; // Substitua pelo seu número (DDI+DDD+numero)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Nayron! Vim pelo seu site e quero um orçamento.",
)}`;
const INSTAGRAM_LINK = "https://instagram.com/nayron.digital";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nayron Digital — Sites Institucionais que vendem" },
      {
        name: "description",
        content:
          "Crio sites institucionais modernos, rápidos e responsivos que transformam empresas em marcas mais profissionais na internet.",
      },
      { property: "og:title", content: "Nayron Digital — Sites Institucionais" },
      {
        property: "og:description",
        content:
          "Presença digital profissional para sua empresa: sites institucionais, landing pages e credibilidade online.",
      },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Serviços", "#servicos"],
    ["Por quê?", "#por-que"],
    ["Projetos", "#projetos"],
    ["Sobre", "#sobre"],
    ["Processo", "#processo"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="inline-block h-8 w-8 rounded-lg" style={{ background: "var(--gradient-primary)" }} />
          <span>Nayron<span className="gradient-text">.digital</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex btn-primary rounded-full px-5 py-2 text-sm font-medium"
        >
          Solicitar orçamento
        </a>
        <button
          className="md:hidden p-2 rounded-lg border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-muted-foreground py-1">{l}</a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="btn-primary rounded-full px-5 py-2 text-sm font-medium text-center mt-2">
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Presença digital para empresas
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Seus clientes realmente <span className="gradient-text">encontram</span> sua empresa online?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Eu ajudo empresas a transformarem seus serviços em uma apresentação profissional online,
            criando sites modernos que passam confiança e facilitam o contato com novos clientes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary rounded-full px-6 py-3 font-medium">Ver projetos</a>
            <a href="#contato" className="btn-ghost rounded-full px-6 py-3 font-medium">Solicitar orçamento</a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="text-2xl font-bold text-foreground">100%</div>Responsivo</div>
            <div><div className="text-2xl font-bold text-foreground">24/7</div>Sua vitrine online</div>
            <div><div className="text-2xl font-bold text-foreground">SEO</div>Otimizado</div>
          </div>
        </div>
        <div className="relative reveal">
          <div className="absolute -inset-10 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
          <img
            src={heroDigital}
            alt="Presença digital moderna"
            width={1280}
            height={1280}
            className="relative rounded-3xl border border-border float-slow"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Sites Institucionais",
      desc: "Sites personalizados para apresentar seus serviços, produtos, história, localização, contatos e redes sociais.",
      icon: "🏢",
    },
    {
      title: "Landing Pages",
      desc: "Páginas focadas em campanhas e divulgação, feitas para converter visitantes em clientes.",
      icon: "🚀",
    },
    {
      title: "Presença Digital",
      desc: "Estrutura completa para sua empresa ser encontrada e apresentada da melhor forma na internet.",
      icon: "🌐",
    },
  ];
  return (
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">O que eu faço</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Transformo empresas em marcas mais <span className="gradient-text">profissionais</span> na internet
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <div key={s.title} className="reveal surface-card rounded-2xl p-8" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySite() {
  const items = [
    { t: "Mais credibilidade", d: "Uma apresentação profissional transmite mais confiança para novos clientes." },
    { t: "Disponível 24 horas", d: "Sua empresa pode ser conhecida a qualquer momento, mesmo fora do expediente." },
    { t: "Facilidade de contato", d: "Botão direto para WhatsApp e todas as informações organizadas em um só lugar." },
    { t: "Melhor apresentação da marca", d: "Sua empresa deixa de depender apenas das redes sociais para ser encontrada." },
  ];
  return (
    <section id="por-que" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Por que ter um site?</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Um site é o ativo mais importante da sua <span className="gradient-text">presença digital</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={it.t} className="reveal surface-card rounded-2xl p-6" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="h-10 w-10 rounded-xl mb-4 flex items-center justify-center font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>{i + 1}</div>
              <h3 className="font-semibold mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      img: projectClinic,
      segment: "Clínica odontológica",
      desc: "Site institucional focado em apresentar serviços, transmitir confiança e facilitar agendamentos.",
      link: "#",
    },
    {
      img: projectLaw,
      segment: "Escritório de advocacia",
      desc: "Presença digital sóbria e profissional para transmitir autoridade e captar novos casos.",
      link: "#",
    },
    {
      img: projectRestaurant,
      segment: "Restaurante",
      desc: "Landing page moderna com cardápio, localização e integração direta com o WhatsApp.",
      link: "#",
    },
  ];
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Projetos e demonstrações</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Projetos <span className="gradient-text">desenvolvidos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Alguns exemplos do tipo de site que entrego para empresas de diferentes segmentos.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={p.segment} className="reveal surface-card rounded-2xl overflow-hidden group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.segment} width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary mb-2">{p.segment}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Ver projeto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative reveal">
          <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative rounded-3xl overflow-hidden border border-border surface-card">
            <img src={nayronAsset.url} alt="Nayron" width={680} height={860} loading="lazy" className="w-full h-auto" />
          </div>
        </div>
        <div className="reveal">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Sobre mim</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Olá, eu sou <span className="gradient-text">Nayron</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Sou desenvolvedor focado na criação de sites institucionais para empresas que querem melhorar sua presença digital.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Meu objetivo é criar páginas modernas, rápidas e personalizadas que valorizem a imagem da empresa e facilitem a conexão com novos clientes.
          </p>
          <div className="mt-8 flex gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary rounded-full px-6 py-3 font-medium">Conversar comigo</a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-6 py-3 font-medium">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Entendimento", d: "Entendo sua empresa, seu público e seus objetivos." },
    { t: "Proposta visual", d: "Crio uma proposta visual personalizada e alinhada à sua marca." },
    { t: "Desenvolvimento", d: "Desenvolvo o site com foco em performance, SEO e responsividade." },
    { t: "Publicação", d: "Publico sua nova presença digital, pronta para atrair clientes." },
  ];
  return (
    <section id="processo" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Como funciona</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Um processo <span className="gradient-text">simples</span> e transparente
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.t} className="reveal surface-card rounded-2xl p-6 relative" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="text-5xl font-bold gradient-text mb-3">0{i + 1}</div>
              <h3 className="font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden surface-card">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Está na hora da sua empresa ter uma <span className="gradient-text">presença digital profissional</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Vamos conversar sobre o que sua empresa precisa e como transformar isso em um site que vende.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-8 rounded-full px-8 py-4 font-semibold text-primary-foreground"
              style={{ background: "var(--whatsapp)", boxShadow: "0 20px 40px -14px oklch(0.72 0.17 155 / 0.5)" }}
            >
              <WhatsIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block h-7 w-7 rounded-lg" style={{ background: "var(--gradient-primary)" }} />
            Nayron<span className="gradient-text">.digital</span>
          </div>
          <p className="mt-3 text-muted-foreground max-w-xs">Sites institucionais modernos para empresas que querem crescer online.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contato</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a></li>
            <li><a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a></li>
            <li><a href="#projetos" className="hover:text-foreground">Portfólio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navegar</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#servicos" className="hover:text-foreground">Serviços</a></li>
            <li><a href="#por-que" className="hover:text-foreground">Por que ter um site</a></li>
            <li><a href="#sobre" className="hover:text-foreground">Sobre</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Nayron Digital. Todos os direitos reservados.</span>
        <span>Feito com foco em performance e SEO.</span>
      </div>
    </footer>
  );
}

function WhatsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0012.02 24C18.64 24 24 18.62 24 12c0-3.2-1.25-6.22-3.48-8.52zM12.02 21.9a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.86 9.86 0 012.12 12c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.87 9.87 0 012.9 7c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-xl"
      style={{ background: "var(--whatsapp)", color: "white", boxShadow: "0 15px 40px -10px oklch(0.72 0.17 155 / 0.6)" }}
      aria-label="Falar no WhatsApp"
    >
      <WhatsIcon />
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhySite />
        <Projects />
        <About />
        <Process />
        <CTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
