"use client";

import { useEffect, useState } from "react";

type Language = "en" | "pt";
type Lens = "teams" | "business";
type Phase = "decide" | "build" | "verify" | "operate" | "recover";

const translations = {
  en: {
    header: {
      role: "Senior DevOps Engineer",
      availability: "Open to remote work",
      contact: "Start a conversation",
      language: "Choose language",
      switchToEnglish: "Change language to English",
      switchToPortuguese: "Mudar o idioma para português",
    },
    hero: {
      index: ["Portfolio / 2026", "Jaraguá do Sul, Brazil", "GMT-3 · Remote"],
      lensIntro: "Read this as",
      lensTeams: "an engineering team",
      lensBusiness: "a technical leader",
      github: "GitHub",
      linkedin: "LinkedIn",
      orbit: {
        core: "operate",
        build: "build",
        secure: "secure",
        recover: "recover",
      },
      journey:
        "I started by building software, learned to operate the systems behind it, and evolved into designing cloud platforms that teams can trust under pressure.",
    },
    lenses: {
      teams: {
        eyebrow: "For engineering teams",
        headline: "Cloud systems should make delivery calmer.",
        body: "I turn fragile infrastructure and slow release paths into AWS platforms teams can operate, explain, and recover.",
        cta: "Review the evidence",
      },
      business: {
        eyebrow: "For technical leaders",
        headline: "Infrastructure should reduce risk, not add ceremony.",
        body: "I connect architecture, automation, cost, and recovery so technical decisions produce visible business outcomes.",
        cta: "See the outcomes",
      },
    },
    outcomesTitle: "Measured in production",
    outcomes: [
      { value: "60%", label: "lower AWS spend", note: "~US$2k to <US$800 / month" },
      { value: "36×", label: "faster delivery", note: "~3 hours to ~5 minutes" },
      { value: "3 days", label: "to rebuild AWS", note: "data recovery + DNS migration" },
      { value: "17", label: "engineers enabled", note: "shared environments, less friction" },
    ],
    method: {
      title: "How I approach the system",
      aria: "Operating model phases",
      toolsAria: "Relevant practices and technologies",
      phases: {
        decide: {
          number: "01",
          label: "Decide",
          title: "Choose for the workload, not the trend.",
          body: "I weigh reliability, operational burden, cost, team context, and recovery needs before selecting ECS, EKS, EC2, or serverless patterns.",
          signal: "Architecture becomes an explicit tradeoff, not an inherited default.",
          tools: ["AWS", "Well-Architected", "FinOps", "ADRs"],
        },
        build: {
          number: "02",
          label: "Build",
          title: "Make the environment reproducible.",
          body: "Infrastructure, access, pipelines, and operational defaults move into reviewed code with protected state and reusable modules.",
          signal: "The same intent travels from local validation to production.",
          tools: ["Terraform", "Ansible", "Docker", "GitHub Actions"],
        },
        verify: {
          number: "03",
          label: "Verify",
          title: "Turn confidence into evidence.",
          body: "Plans, tests, policy checks, image scans, SBOMs, health checks, and controlled approvals become part of the delivery path.",
          signal: "A release explains what changed and why it is safe to proceed.",
          tools: ["OIDC", "Trivy", "Infracost", "Policy gates"],
        },
        operate: {
          number: "04",
          label: "Operate",
          title: "Keep signals actionable.",
          body: "Logs, metrics, alerts, cost signals, and runbooks are designed around decisions the team actually needs to make under pressure.",
          signal: "Less dashboard theatre. Faster diagnosis and ownership.",
          tools: ["CloudWatch", "Datadog", "Grafana", "Prometheus"],
        },
        recover: {
          number: "05",
          label: "Recover",
          title: "Design for the bad day.",
          body: "Backups, state protection, rollback paths, failure boundaries, and recovery procedures are validated before the incident demands them.",
          signal: "Recovery is a practiced system capability, not a document alone.",
          tools: ["AWS Backup", "Runbooks", "Rollback", "Game days"],
        },
      },
    },
    work: {
      title: "Selected case files",
      situation: "Situation",
      decision: "Decision",
      evidence: "Evidence",
      technologiesAria: "Case technologies",
      cases: [
        {
          id: "platform",
          code: "CF-01 / PUBLIC",
          title: "A staff-level AWS platform blueprint",
          summary: "A cost-gated, security-first reference platform built to make architecture decisions inspectable.",
          challenge: "Demonstrate production-grade AWS and Terraform decisions without hiding complexity behind a large framework.",
          decision: "Separate protected bootstrap ownership from runtime, constrain GitHub OIDC, publish immutable image digests, and attach SBOM plus provenance evidence.",
          result: "A public blueprint covering ECS/Fargate, protected remote state, least privilege, validation tests, cost controls, and supply-chain evidence.",
          tags: ["AWS", "Terraform", "ECS", "OIDC", "SBOM"],
          link: "https://github.com/renanfenrich/staff-aws-platform-blueprint",
          linkLabel: "Inspect the repository",
        },
        {
          id: "modernization",
          code: "CF-02 / PRODUCTION",
          title: "Legacy AWS modernization",
          summary: "A migration from fragile EC2-based delivery to an automated, right-sized ECS platform.",
          challenge: "Slow deployments, manual recovery steps, and infrastructure cost disproportionate to the workload.",
          decision: "Move workloads to ECS Fargate, introduce health safeguards and circuit breakers, automate database migrations, and right-size supporting services.",
          result: "Approximately 60% lower monthly AWS spend and deployments reduced from about 3 hours to roughly 5 minutes.",
          tags: ["ECS Fargate", "RDS", "CloudFront", "CI/CD", "FinOps"],
          link: null,
          linkLabel: null,
        },
        {
          id: "recovery",
          code: "CF-03 / INCIDENT",
          title: "Three-day infrastructure recovery",
          summary: "A critical AWS environment rebuilt after a provider failure, including data and DNS recovery.",
          challenge: "Restore a production environment while preserving data, re-establishing access, and reducing further operational risk.",
          decision: "Reconstruct the environment with Terraform and Ansible, recover databases and object data, validate services, then migrate DNS in a controlled sequence.",
          result: "The full AWS environment was recovered in 3 days, turning incident response into reusable resilience evidence.",
          tags: ["Terraform", "Ansible", "EC2", "RDS", "Disaster recovery"],
          link: null,
          linkLabel: null,
        },
      ],
    },
    capabilities: {
      title: "Where I am useful",
      preface: "Tools matter.",
      headline: "The useful part is knowing what problem each one should solve.",
      items: [
        {
          code: "A",
          title: "Cloud architecture & modernization",
          body: "Right-sized AWS platforms, legacy workload migration, multi-account access, networking, data services, and cost governance.",
          tools: "AWS Organizations · IAM · VPC · ECS · EKS · EC2 · RDS · Lambda · S3 · CloudFront",
        },
        {
          code: "B",
          title: "Infrastructure & delivery engineering",
          body: "Reviewed infrastructure, reusable automation, safe release paths, local reproducibility, and evidence-driven change management.",
          tools: "Terraform · Ansible · CloudFormation · GitHub Actions · GitLab CI · Jenkins · Bitbucket",
        },
        {
          code: "C",
          title: "Reliability, security & recovery",
          body: "Least privilege, observability, backup validation, incident response, operational runbooks, and recoverable system design.",
          tools: "CloudWatch · Datadog · Grafana · Prometheus · KMS · Secrets Manager · WAF · AWS Backup",
        },
        {
          code: "D",
          title: "Software-aware platform work",
          body: "Fifteen-plus years across application engineering and infrastructure, connecting platform decisions to how software is built and shipped.",
          tools: "Linux · Bash · Python · PHP/Laravel · Node.js · Docker · MySQL · PostgreSQL · Redis",
        },
      ],
    },
    trajectory: {
      title: "The trajectory behind the systems",
      introEyebrow: "Not a change of career. An expansion of responsibility.",
      intro:
        "My DevOps work is grounded in more than fifteen years of building, supporting, and operating software. Each stage added a wider failure boundary to understand and a larger team to enable.",
      stages: [
        {
          period: "2010–2020",
          title: "Software foundations",
          body: "Applications, Linux, databases, customer support, and the operational consequences of code.",
        },
        {
          period: "2020–2022",
          title: "Cloud transition",
          body: "AWS, containers, infrastructure as code, CI/CD, and reusable environments across teams.",
        },
        {
          period: "2022–now",
          title: "Platform ownership",
          body: "Reliability, security, cost, recovery, technical leadership, and production outcomes.",
        },
      ],
      years: "years connecting software, infrastructure, and people",
      focus: "5+ years focused on DevOps, cloud, and reliability",
      experience: [
        {
          period: "2020 / now",
          company: "Independent Consulting & Platform Projects",
          role: "Senior DevOps Engineer",
          note: "AWS architecture, Terraform platforms, delivery automation, security controls, cost checks, and locally reproducible workflows.",
        },
        {
          period: "2026",
          company: "ArcTouch",
          role: "Senior DevOps Engineer",
          note: "EKS upgrades, AL2023 migration, backup validation, observability, DevSecOps, and constrained AI-assisted remediation workflows.",
        },
        {
          period: "2022 / 2025",
          company: "Cars2You · Auto2You Group",
          role: "DevOps / SRE Engineer",
          note: "Owned production infrastructure and modernization, delivery automation, recovery, observability, and technical enablement for 13 developers.",
        },
        {
          period: "2020 / 2023",
          company: "Multiplier · JetBov · ília digital",
          role: "DevOps Engineer",
          note: "Event-driven AWS systems, Kubernetes, reusable Terraform, cross-account access, CI/CD, and international consulting.",
        },
        {
          period: "2013 / 2020",
          company: "BW2 · Patrimono · Rede OCP · Seti · Netuno",
          role: "Full-Stack Engineer & Technical Support",
          note: "Web applications, Linux infrastructure, databases, application operations, containerization, and direct user support.",
        },
      ],
    },
    contact: {
      eyebrow: "Remote · GMT-3 · English / Portuguese",
      title: "Bring the system that needs to become calmer.",
      body: "Available for Senior DevOps, Cloud, SRE, platform engineering, and focused consulting work. Based in Jaraguá do Sul, Brazil. Remote worldwide and hybrid locally.",
      profilesAria: "Professional profiles",
    },
  },
  pt: {
    header: {
      role: "Engenheiro DevOps Sênior",
      availability: "Disponível para trabalho remoto",
      contact: "Iniciar uma conversa",
      language: "Escolher idioma",
      switchToEnglish: "Change language to English",
      switchToPortuguese: "Mudar o idioma para português",
    },
    hero: {
      index: ["Portfólio / 2026", "Jaraguá do Sul, Brasil", "GMT-3 · Remoto"],
      lensIntro: "Leia como",
      lensTeams: "um time de engenharia",
      lensBusiness: "uma liderança técnica",
      github: "GitHub",
      linkedin: "LinkedIn",
      orbit: {
        core: "operar",
        build: "construir",
        secure: "proteger",
        recover: "recuperar",
      },
      journey:
        "Comecei construindo software, aprendi a operar os sistemas por trás dele e evoluí para projetar plataformas em nuvem nas quais os times podem confiar sob pressão.",
    },
    lenses: {
      teams: {
        eyebrow: "Para times de engenharia",
        headline: "Sistemas em nuvem devem tornar as entregas mais tranquilas.",
        body: "Transformo infraestrutura frágil e processos lentos em plataformas AWS que os times conseguem operar, explicar e recuperar.",
        cta: "Ver as evidências",
      },
      business: {
        eyebrow: "Para lideranças técnicas",
        headline: "Infraestrutura deve reduzir riscos, não criar burocracia.",
        body: "Conecto arquitetura, automação, custos e recuperação para transformar decisões técnicas em resultados visíveis para o negócio.",
        cta: "Ver os resultados",
      },
    },
    outcomesTitle: "Resultados medidos em produção",
    outcomes: [
      { value: "60%", label: "menos custos na AWS", note: "~US$2 mil para <US$800 / mês" },
      { value: "36×", label: "entregas mais rápidas", note: "~3 horas para ~5 minutos" },
      { value: "3 dias", label: "para reconstruir a AWS", note: "recuperação de dados + migração de DNS" },
      { value: "17", label: "engenheiros habilitados", note: "ambientes compartilhados, menos atrito" },
    ],
    method: {
      title: "Como abordo o sistema",
      aria: "Fases do modelo de trabalho",
      toolsAria: "Práticas e tecnologias relevantes",
      phases: {
        decide: {
          number: "01",
          label: "Decidir",
          title: "Escolher para a carga de trabalho, não para a tendência.",
          body: "Avalio confiabilidade, carga operacional, custo, contexto do time e recuperação antes de escolher ECS, EKS, EC2 ou padrões serverless.",
          signal: "A arquitetura vira uma escolha explícita, não um padrão herdado.",
          tools: ["AWS", "Well-Architected", "FinOps", "ADRs"],
        },
        build: {
          number: "02",
          label: "Construir",
          title: "Tornar o ambiente reproduzível.",
          body: "Infraestrutura, acessos, pipelines e padrões operacionais passam a existir como código revisado, com estado protegido e módulos reutilizáveis.",
          signal: "A mesma intenção percorre a validação local até a produção.",
          tools: ["Terraform", "Ansible", "Docker", "GitHub Actions"],
        },
        verify: {
          number: "03",
          label: "Verificar",
          title: "Transformar confiança em evidência.",
          body: "Planos, testes, políticas, análise de imagens, SBOMs, health checks e aprovações controladas fazem parte do caminho de entrega.",
          signal: "Uma release explica o que mudou e por que é seguro prosseguir.",
          tools: ["OIDC", "Trivy", "Infracost", "Policy gates"],
        },
        operate: {
          number: "04",
          label: "Operar",
          title: "Manter os sinais acionáveis.",
          body: "Logs, métricas, alertas, custos e runbooks são projetados para as decisões que o time precisa tomar sob pressão.",
          signal: "Menos dashboards decorativos. Diagnóstico e responsabilidade mais rápidos.",
          tools: ["CloudWatch", "Datadog", "Grafana", "Prometheus"],
        },
        recover: {
          number: "05",
          label: "Recuperar",
          title: "Projetar para o dia ruim.",
          body: "Backups, proteção de estado, rollback, limites de falha e procedimentos de recuperação são validados antes do incidente exigir isso.",
          signal: "Recuperação é uma capacidade praticada do sistema, não apenas um documento.",
          tools: ["AWS Backup", "Runbooks", "Rollback", "Game days"],
        },
      },
    },
    work: {
      title: "Casos selecionados",
      situation: "Situação",
      decision: "Decisão",
      evidence: "Evidência",
      technologiesAria: "Tecnologias do caso",
      cases: [
        {
          id: "platform",
          code: "CF-01 / PÚBLICO",
          title: "Blueprint de plataforma AWS em nível Staff",
          summary: "Uma plataforma de referência orientada por segurança e custos, criada para tornar decisões de arquitetura inspecionáveis.",
          challenge: "Demonstrar decisões de AWS e Terraform prontas para produção sem esconder a complexidade atrás de um grande framework.",
          decision: "Separar o bootstrap protegido do runtime, restringir o OIDC do GitHub, publicar imagens por digest imutável e anexar SBOM e evidências de proveniência.",
          result: "Um blueprint público com ECS/Fargate, estado remoto protegido, privilégio mínimo, testes, controles de custo e evidências da cadeia de suprimentos.",
          tags: ["AWS", "Terraform", "ECS", "OIDC", "SBOM"],
          link: "https://github.com/renanfenrich/staff-aws-platform-blueprint",
          linkLabel: "Inspecionar o repositório",
        },
        {
          id: "modernization",
          code: "CF-02 / PRODUÇÃO",
          title: "Modernização de ambiente AWS legado",
          summary: "Migração de uma entrega frágil baseada em EC2 para uma plataforma ECS automatizada e dimensionada para a carga real.",
          challenge: "Deploys lentos, recuperação manual e custos de infraestrutura desproporcionais à carga de trabalho.",
          decision: "Migrar workloads para ECS Fargate, adicionar proteções de saúde e circuit breakers, automatizar migrações de banco e ajustar serviços.",
          result: "Redução aproximada de 60% no custo mensal da AWS e deploys reduzidos de cerca de 3 horas para aproximadamente 5 minutos.",
          tags: ["ECS Fargate", "RDS", "CloudFront", "CI/CD", "FinOps"],
          link: null,
          linkLabel: null,
        },
        {
          id: "recovery",
          code: "CF-03 / INCIDENTE",
          title: "Recuperação de infraestrutura em três dias",
          summary: "Um ambiente AWS crítico reconstruído após falha do provedor, incluindo recuperação de dados e DNS.",
          challenge: "Restaurar a produção preservando dados, restabelecendo acessos e reduzindo novos riscos operacionais.",
          decision: "Reconstruir o ambiente com Terraform e Ansible, recuperar bancos e objetos, validar serviços e migrar o DNS de forma controlada.",
          result: "O ambiente AWS completo foi recuperado em 3 dias, transformando a resposta ao incidente em evidência reutilizável de resiliência.",
          tags: ["Terraform", "Ansible", "EC2", "RDS", "Disaster recovery"],
          link: null,
          linkLabel: null,
        },
      ],
    },
    capabilities: {
      title: "Onde gero valor",
      preface: "Ferramentas importam.",
      headline: "A parte útil é saber qual problema cada uma deve resolver.",
      items: [
        {
          code: "A",
          title: "Arquitetura e modernização em nuvem",
          body: "Plataformas AWS dimensionadas para a carga, migração de legados, acesso multi-conta, redes, dados e governança de custos.",
          tools: "AWS Organizations · IAM · VPC · ECS · EKS · EC2 · RDS · Lambda · S3 · CloudFront",
        },
        {
          code: "B",
          title: "Engenharia de infraestrutura e entrega",
          body: "Infraestrutura revisada, automação reutilizável, releases seguras, reprodutibilidade local e mudanças orientadas por evidências.",
          tools: "Terraform · Ansible · CloudFormation · GitHub Actions · GitLab CI · Jenkins · Bitbucket",
        },
        {
          code: "C",
          title: "Confiabilidade, segurança e recuperação",
          body: "Privilégio mínimo, observabilidade, validação de backups, resposta a incidentes, runbooks e sistemas recuperáveis.",
          tools: "CloudWatch · Datadog · Grafana · Prometheus · KMS · Secrets Manager · WAF · AWS Backup",
        },
        {
          code: "D",
          title: "Plataformas com visão de software",
          body: "Mais de quinze anos entre aplicações e infraestrutura, conectando decisões de plataforma à forma como o software é construído e entregue.",
          tools: "Linux · Bash · Python · PHP/Laravel · Node.js · Docker · MySQL · PostgreSQL · Redis",
        },
      ],
    },
    trajectory: {
      title: "A trajetória por trás dos sistemas",
      introEyebrow: "Não foi uma mudança de carreira. Foi uma ampliação de responsabilidade.",
      intro:
        "Meu trabalho em DevOps se apoia em mais de quinze anos construindo, atendendo e operando software. Cada etapa ampliou os limites de falha que preciso compreender e o número de pessoas que posso habilitar.",
      stages: [
        {
          period: "2010–2020",
          title: "Fundamentos de software",
          body: "Aplicações, Linux, bancos de dados, suporte ao cliente e as consequências operacionais do código.",
        },
        {
          period: "2020–2022",
          title: "Transição para cloud",
          body: "AWS, containers, infraestrutura como código, CI/CD e ambientes reutilizáveis entre times.",
        },
        {
          period: "2022–agora",
          title: "Responsabilidade por plataformas",
          body: "Confiabilidade, segurança, custos, recuperação, liderança técnica e resultados em produção.",
        },
      ],
      years: "anos conectando software, infraestrutura e pessoas",
      focus: "5+ anos focados em DevOps, cloud e confiabilidade",
      experience: [
        {
          period: "2020 / agora",
          company: "Consultoria Independente e Projetos de Plataforma",
          role: "Engenheiro DevOps Sênior",
          note: "Arquitetura AWS, plataformas Terraform, automação de entrega, controles de segurança, custos e fluxos reproduzíveis localmente.",
        },
        {
          period: "2026",
          company: "ArcTouch",
          role: "Engenheiro DevOps Sênior",
          note: "Upgrades de EKS, migração para AL2023, validação de backups, observabilidade, DevSecOps e remediação assistida por IA com limites seguros.",
        },
        {
          period: "2022 / 2025",
          company: "Cars2You · Auto2You Group",
          role: "Engenheiro DevOps / SRE",
          note: "Responsabilidade por infraestrutura de produção e modernização, automação, recuperação, observabilidade e habilitação técnica de 13 desenvolvedores.",
        },
        {
          period: "2020 / 2023",
          company: "Multiplier · JetBov · ília digital",
          role: "Engenheiro DevOps",
          note: "Sistemas AWS orientados a eventos, Kubernetes, Terraform reutilizável, acessos entre contas, CI/CD e consultoria internacional.",
        },
        {
          period: "2013 / 2020",
          company: "BW2 · Patrimono · Rede OCP · Seti · Netuno",
          role: "Engenheiro Full-Stack e Suporte Técnico",
          note: "Aplicações web, infraestrutura Linux, bancos de dados, operação de aplicações, containerização e suporte direto aos usuários.",
        },
      ],
    },
    contact: {
      eyebrow: "Remoto · GMT-3 · Português / Inglês",
      title: "Traga o sistema que precisa se tornar mais tranquilo.",
      body: "Disponível para posições de DevOps Sênior, Cloud, SRE, Platform Engineering e consultorias especializadas. Em Jaraguá do Sul, Brasil. Remoto globalmente e híbrido na região.",
      profilesAria: "Perfis profissionais",
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Renan Fenrich",
  jobTitle: "Senior DevOps Engineer",
  url: "https://renan-fenrich.renanfenrich.chatgpt.site",
  email: "mailto:renan.fenrich@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaraguá do Sul",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/renanfenrich/",
    "https://github.com/renanfenrich",
    "https://medium.com/@renanfenrich",
  ],
  knowsAbout: [
    "Amazon Web Services",
    "Terraform",
    "Infrastructure as Code",
    "Site Reliability Engineering",
    "Platform Engineering",
    "DevSecOps",
    "Continuous Delivery",
  ],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [lens, setLens] = useState<Lens>("teams");
  const [phase, setPhase] = useState<Phase>("decide");
  const [openCase, setOpenCase] = useState<string>("platform");

  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    const initialLanguage: Language =
      requestedLanguage === "pt" || requestedLanguage === "en"
        ? requestedLanguage
        : navigator.language.toLowerCase().startsWith("pt")
          ? "pt"
          : "en";
    const timer = window.setTimeout(() => setLanguage(initialLanguage), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const url = new URL(window.location.href);
    if (nextLanguage === "pt") {
      url.searchParams.set("lang", "pt");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const content = translations[language];
  const lensCopy = content.lenses[lens];
  const activePhase = content.method.phases[phase];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="page-frame" aria-hidden="true" />

      <header className="site-header">
        <a className="identity" href="#top" aria-label="Renan Fenrich, home">
          <span className="identity-mark">RF</span>
          <span className="identity-copy">
            <strong>Renan Fenrich</strong>
            <small>{content.header.role}</small>
          </span>
        </a>

        <div className="header-meta">
          <div className="language-switch" aria-label={content.header.language}>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => chooseLanguage("en")}
              aria-pressed={language === "en"}
              aria-label={content.header.switchToEnglish}
              title={content.header.switchToEnglish}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={language === "pt" ? "active" : ""}
              onClick={() => chooseLanguage("pt")}
              aria-pressed={language === "pt"}
              aria-label={content.header.switchToPortuguese}
              title={content.header.switchToPortuguese}
            >
              PT
            </button>
          </div>
          <span className="availability"><i /> {content.header.availability}</span>
          <a href="mailto:renan.fenrich@gmail.com">{content.header.contact}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <aside className="hero-index" aria-label="Profile index">
          {content.hero.index.map((item) => <p key={item}>{item}</p>)}
        </aside>

        <div className="hero-content">
          <div className="hero-nameplate" aria-label="Renan Fenrich">
            <span className="hero-name-index" aria-hidden="true">RF / 01</span>
            <p>
              <span>Renan</span> <strong>Fenrich</strong>
            </p>
            <span className="hero-name-role">{content.header.role}</span>
          </div>

          <div className="lens-switch" aria-label={content.hero.lensIntro}>
            <span>{content.hero.lensIntro}</span>
            <button
              className={lens === "teams" ? "active" : ""}
              type="button"
              onClick={() => setLens("teams")}
              aria-pressed={lens === "teams"}
            >
              {content.hero.lensTeams}
            </button>
            <button
              className={lens === "business" ? "active" : ""}
              type="button"
              onClick={() => setLens("business")}
              aria-pressed={lens === "business"}
            >
              {content.hero.lensBusiness}
            </button>
          </div>

          <div className="hero-statement" key={`${language}-${lens}`}>
            <p className="eyebrow">{lensCopy.eyebrow}</p>
            <h1 className="hero-headline">{lensCopy.headline}</h1>
            <p className="hero-description">{lensCopy.body}</p>
            <p className="hero-journey">{content.hero.journey}</p>
          </div>

          <div className="hero-actions">
            <a className="primary-link" href="#evidence">
              {lensCopy.cta} <ArrowIcon />
            </a>
            <a className="text-link" href="https://github.com/renanfenrich" target="_blank" rel="noreferrer">
              {content.hero.github} <span>↗</span>
            </a>
            <a className="text-link" href="https://www.linkedin.com/in/renanfenrich/" target="_blank" rel="noreferrer">
              {content.hero.linkedin} <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-core">{content.hero.orbit.core}</div>
          <span className="orbit-label label-build">{content.hero.orbit.build}</span>
          <span className="orbit-label label-secure">{content.hero.orbit.secure}</span>
          <span className="orbit-label label-recover">{content.hero.orbit.recover}</span>
        </div>
      </section>

      <section className="evidence" id="evidence" aria-labelledby="evidence-title">
        <div className="section-marker">
          <span>01</span>
          <p id="evidence-title">{content.outcomesTitle}</p>
        </div>
        <div className="outcome-grid">
          {content.outcomes.map((outcome, index) => (
            <article className="outcome" key={outcome.label}>
              <span className="outcome-index">0{index + 1}</span>
              <strong>{outcome.value}</strong>
              <h2>{outcome.label}</h2>
              <p>{outcome.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="operating-model" id="method" aria-labelledby="method-title">
        <div className="section-marker">
          <span>02</span>
          <p id="method-title">{content.method.title}</p>
        </div>

        <div className="phase-layout">
          <div className="phase-nav" role="tablist" aria-label={content.method.aria}>
            {(Object.keys(content.method.phases) as Phase[]).map((phaseKey) => (
              <button
                key={phaseKey}
                className={phase === phaseKey ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={phase === phaseKey}
                aria-controls="phase-panel"
                onClick={() => setPhase(phaseKey)}
              >
                <span>{content.method.phases[phaseKey].number}</span>
                {content.method.phases[phaseKey].label}
              </button>
            ))}
          </div>

          <article className="phase-panel" id="phase-panel" role="tabpanel" key={`${language}-${phase}`}>
            <div className="phase-diagram" aria-hidden="true">
              <span>{activePhase.number}</span>
              <i />
            </div>
            <div className="phase-copy">
              <p className="eyebrow">{activePhase.label}</p>
              <h2>{activePhase.title}</h2>
              <p className="phase-body">{activePhase.body}</p>
              <blockquote>{activePhase.signal}</blockquote>
              <ul aria-label={content.method.toolsAria}>
                {activePhase.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="case-files" id="work" aria-labelledby="work-title">
        <div className="section-marker">
          <span>03</span>
          <p id="work-title">{content.work.title}</p>
        </div>

        <div className="case-list">
          {content.work.cases.map((caseFile) => {
            const isOpen = openCase === caseFile.id;
            return (
              <article className={`case-file ${isOpen ? "open" : ""}`} key={caseFile.id}>
                <button
                  className="case-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`case-${caseFile.id}`}
                  onClick={() => setOpenCase(isOpen ? "" : caseFile.id)}
                >
                  <span className="case-code">{caseFile.code}</span>
                  <span className="case-heading">
                    <strong>{caseFile.title}</strong>
                    <small>{caseFile.summary}</small>
                  </span>
                  <span className="case-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>

                <div className="case-detail" id={`case-${caseFile.id}`} hidden={!isOpen}>
                  <div className="case-detail-grid">
                    <div>
                      <span>{content.work.situation}</span>
                      <p>{caseFile.challenge}</p>
                    </div>
                    <div>
                      <span>{content.work.decision}</span>
                      <p>{caseFile.decision}</p>
                    </div>
                    <div>
                      <span>{content.work.evidence}</span>
                      <p>{caseFile.result}</p>
                    </div>
                  </div>
                  <div className="case-footer">
                    <ul aria-label={content.work.technologiesAria}>
                      {caseFile.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    {caseFile.link && caseFile.linkLabel && (
                      <a href={caseFile.link} target="_blank" rel="noreferrer">
                        {caseFile.linkLabel} <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="capability-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-marker">
          <span>04</span>
          <p id="capabilities-title">{content.capabilities.title}</p>
        </div>

        <div className="capability-intro">
          <p>{content.capabilities.preface}</p>
          <h2>{content.capabilities.headline}</h2>
        </div>
        <div className="capability-list">
          {content.capabilities.items.map((capability) => (
            <article key={capability.code}>
              <span>{capability.code}</span>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <small>{capability.tools}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-marker">
          <span>05</span>
          <p id="experience-title">{content.trajectory.title}</p>
        </div>

        <div className="journey-intro">
          <p className="eyebrow">{content.trajectory.introEyebrow}</p>
          <p>{content.trajectory.intro}</p>
        </div>

        <div className="journey-stages">
          {content.trajectory.stages.map((stage, index) => (
            <article key={stage.period}>
              <span>0{index + 1} / {stage.period}</span>
              <h2>{stage.title}</h2>
              <p>{stage.body}</p>
            </article>
          ))}
        </div>

        <div className="experience-layout">
          <div className="experience-summary">
            <strong>15+</strong>
            <p>{content.trajectory.years}</p>
            <span>{content.trajectory.focus}</span>
          </div>
          <div className="experience-list">
            {content.trajectory.experience.map((item) => (
              <article key={`${item.period}-${item.company}`}>
                <span className="experience-period">{item.period}</span>
                <div>
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">{content.contact.eyebrow}</p>
        <h2 id="contact-title">{content.contact.title}</h2>
        <p>{content.contact.body}</p>
        <a className="contact-link" href="mailto:renan.fenrich@gmail.com">
          <span>renan.fenrich@gmail.com</span>
          <ArrowIcon />
        </a>
        <div className="contact-meta">
          <span>Renan Fenrich · 2026</span>
          <nav aria-label={content.contact.profilesAria}>
            <a href="https://github.com/renanfenrich" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/renanfenrich/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://medium.com/@renanfenrich" target="_blank" rel="noreferrer">Medium ↗</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
