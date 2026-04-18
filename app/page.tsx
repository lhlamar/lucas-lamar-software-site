import Image from "next/image";
import type { ReactNode } from "react";
import ContactForm from "./components/ContactForm";
import SmoothScrollLinks from "./components/SmoothScrollLinks";
import ThemeToggle from "./components/ThemeToggle";

const EMPHASIS_TERMS = [
  "CGI",
  "SQL",
  ".NET",
  "Angular",
  "React",
  "REST APIs",
  "Southern Company",
  "Agile",
  "App Router",
  "TypeScript",
  "Next.js",
  "Angular 7",
  "CRUD",
  "HTTP client",
  "REST API",
  "interceptor",
  "local-storage persistence",
  "Discrete Structures",
  "Software Construction",
  "Computer Science",
];

const EMPHASIS_REGEX = new RegExp(
  `(${EMPHASIS_TERMS
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a, b) => b.length - a.length)
    .join("|")})`,
  "gi",
);

function emphasizeKeywords(text: string): ReactNode {
  return text.split(EMPHASIS_REGEX).map((part, index) => {
    const isMatch = EMPHASIS_TERMS.some((term) => term.toLowerCase() === part.toLowerCase());
    if (!isMatch) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <strong
        key={`${part}-${index}`}
        className="font-semibold text-primary-200"
      >
        {part}
      </strong>
    );
  });
}

const workExperience = [
  {
    role: "Software Developer",
    company: "CGI",
    location: "Birmingham, AL",
    date: "June 2024 - Current",
    details:
      "Collaborating with cross-functional Agile teams to plan and deliver application features while maintaining and modernizing existing codebases to meet client specifications and reduce technical debt.",
  },
  {
    role: "Tutor",
    company: "Office of Student Services, Auburn University",
    location: "Auburn, AL",
    date: "Spring 2024 - May 2024",
    details:
      "Provided supplemental academic support for Discrete Structures and Software Construction classes.",
  },
];

const education = {
  school: "Auburn University",
  degree: "Bachelor of Science in Computer Science",
  gpa: "3.05 GPA",
  date: "May 2024",
};

const technicalSkills = [
  "ASP .NET",
  "C#",
  "Object-Oriented Programming",
  "Angular",
  "Java",
  "Microsoft SQL Server",
  "Oracle SQL Developer",
  "Next.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
];

const trainingsAndCerts = [
  {
    title: "Next.js Training Project",
    org: "CGI Training",
    date: "Fall 2024",
    bullets: [
      "Designed and implemented a component-based web application using Next.js and TypeScript, leveraging the App Router for structured and scalable routing.",
      "Developed an About Me page, API-driven data page, and a contact form integrated with a mock API endpoint.",
    ],
  },
  {
    title: "Angular Training Project",
    org: "CGI Training",
    date: "Spring 2026",
    bullets: [
      "Designed and implemented a component-based web application using Angular 7 and TypeScript with reusable components, a dedicated service layer, and Angular Router navigation.",
      "Built an asset management feature with full CRUD functionality, integrating an HTTP client service against a mock REST API using an interceptor and local-storage persistence.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SmoothScrollLinks />
      <header className="fixed top-0 z-50 w-full border-b border-neutral-200/10 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-primary-300">
            LUCAS LAMAR
          </a>
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-100">
            <ThemeToggle />
            <a className="hidden rounded-2xl border border-primary-300/20 bg-background/55 px-6 py-2.5 text-neutral-100/90 transition-all duration-200 hover:border-primary-300/45 hover:bg-background/80 hover:text-foreground sm:inline-flex" href="#work-experience">
              Work
            </a>
            <a className="hidden rounded-2xl border border-primary-300/20 bg-background/55 px-6 py-2.5 text-neutral-100/90 transition-all duration-200 hover:border-primary-300/45 hover:bg-background/80 hover:text-foreground sm:inline-flex" href="#education">
              Education
            </a>
            <a className="hidden rounded-2xl border border-primary-300/20 bg-background/55 px-6 py-2.5 text-neutral-100/90 transition-all duration-200 hover:border-primary-300/45 hover:bg-background/80 hover:text-foreground sm:inline-flex" href="#technical-skills">
              Skills
            </a>
            <a className="hidden rounded-2xl border border-primary-300/20 bg-background/55 px-6 py-2.5 text-neutral-100/90 transition-all duration-200 hover:border-primary-300/45 hover:bg-background/80 hover:text-foreground sm:inline-flex" href="#contact">
              Contact
            </a>
            <a
              className="rounded-2xl border border-primary-300/20 bg-background/55 px-6 py-2.5 text-neutral-100/90 transition-all duration-200 hover:border-primary-300/45 hover:bg-background/80 hover:text-foreground"
              href="/updated_resume_2026_1.pdf"
              download
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="pt-16">

        {/* ── Hero ── full viewport height minus header */}
        <section className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col">
          {/* Main content — vertically centered */}
          <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 sm:px-10 lg:px-16">
            <div className="grid w-full items-center gap-10 py-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-24">
              {/* Left — text content */}
              <div className="order-2 lg:order-1">
                <p className="section-label text-xs text-primary-300">Full Stack Software Engineer</p>
                <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-50 sm:text-5xl lg:text-6xl xl:text-7xl">
                  Lucas H. Lamar
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-200">
                  {emphasizeKeywords(
                    "Software Engineer at CGI building full-stack applications with .NET, Angular, and React. Experience developing backend services, REST APIs, and working with SQL databases in Agile environments. Delivered internal enterprise applications for Southern Company as a primary client.",
                  )}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/lhlamar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-2xl border border-primary-300/35 bg-background/85 px-4 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary-300/65 hover:bg-background hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-300/20 text-primary-200">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                      </svg>
                    </span>
                    <span>GitHub</span>
                    <svg viewBox="0 0 20 20" className="h-4 w-4 text-primary-300 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M7 5h8v8" />
                      <path d="m7 13 8-8" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucas-lamar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-2xl border border-primary-300/35 bg-background/85 px-4 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary-300/65 hover:bg-background hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-300/20 text-primary-200">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.72 4.8 6.25V21h-4v-5.47c0-1.3-.02-2.97-1.78-2.97-1.79 0-2.06 1.43-2.06 2.88V21h-4V9Z" />
                      </svg>
                    </span>
                    <span>LinkedIn</span>
                    <svg viewBox="0 0 20 20" className="h-4 w-4 text-primary-300 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M7 5h8v8" />
                      <path d="m7 13 8-8" />
                    </svg>
                  </a>
                  <a
                    href="/updated_resume_2026_1.pdf"
                    download
                    className="group inline-flex items-center gap-3 rounded-2xl border border-primary-300/35 bg-background/85 px-4 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary-300/65 hover:bg-background hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-300/20 text-primary-200">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M8 3.5h6l4 4V20a.5.5 0 0 1-.5.5h-9A3.5 3.5 0 0 1 5 17V7a3.5 3.5 0 0 1 3-3.46Z" />
                        <path d="M14 3.5V8h4" />
                        <path d="M8.5 12.5h5" />
                        <path d="M8.5 15.5h5" />
                      </svg>
                    </span>
                    <span>Resume</span>
                    <svg viewBox="0 0 20 20" className="h-4 w-4 text-primary-300 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M10 4v9" />
                      <path d="m6.5 9.5 3.5 3.5 3.5-3.5" />
                      <path d="M5 15.5h10" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right — profile photo */}
              <div className="order-1 mx-auto w-48 overflow-hidden rounded-2xl sm:w-64 lg:order-2 lg:mx-0 lg:w-80 xl:w-96">
                <Image
                  src="/hero-profile-pic.jpg"
                  alt="Lucas Lamar"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 pb-10">
            <span className="text-[10px] tracking-[0.3em] text-neutral-400">SCROLL</span>
            <div className="h-10 w-px bg-gradient-to-b from-neutral-400 to-transparent" />
          </div>
        </section>

        {/* ── Work Experience ── slightly lighter tint */}
        <section id="work-experience" className="w-full scroll-mt-20 bg-neutral-900/60">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            <SectionTitle label="Career" title="Work Experience" />
            <div className="mt-10 flex flex-col divide-y divide-neutral-700/50">
              {workExperience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="py-6 first:pt-0">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-semibold text-primary-50">
                      {item.role} · {item.company}
                    </h3>
                    <p className="text-base text-primary-200">{item.date}</p>
                  </div>
                  <p className="mt-1 text-base text-primary-200">{item.location}</p>
                  <p className="mt-3 text-base leading-relaxed text-neutral-100">
                    {emphasizeKeywords(item.details)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── base bg */}
        <section id="education" className="w-full scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            <SectionTitle label="Academic" title="Education" />
            <div className="mt-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-xl font-semibold text-primary-50">{education.school}</h3>
                <p className="text-base text-primary-200">{education.date}</p>
              </div>
              <p className="mt-3 text-base text-neutral-100">{emphasizeKeywords(education.degree)}</p>
              <p className="mt-1 text-base text-primary-200">{education.gpa}</p>
            </div>
          </div>
        </section>

        {/* ── Technical Skills ── slightly lighter tint */}
        <section id="technical-skills" className="w-full scroll-mt-20 bg-neutral-900/60">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            <SectionTitle label="Toolkit" title="Technical Skills" />
            <div className="mt-10 flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary-300/30 bg-neutral-800/60 px-4 py-2 text-base text-neutral-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trainings & Certs ── base bg */}
        <section id="trainings" className="w-full scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            <SectionTitle label="Development" title="Trainings and Certifications" />
            <div className="mt-10 flex flex-col divide-y divide-neutral-700/50">
              {trainingsAndCerts.map((item) => (
                <article key={item.title} className="py-6 first:pt-0">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-semibold text-primary-50">{item.title}</h3>
                    <p className="text-base text-primary-200">{item.date}</p>
                  </div>
                  <p className="mt-1 text-base text-primary-200">{item.org}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-100">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{emphasizeKeywords(bullet)}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── slightly lighter tint */}
        <section id="contact" className="w-full scroll-mt-20 bg-neutral-900/60">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            <SectionTitle label="Connect" title="Get In Touch" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-100">
              Reach out for opportunities, collaboration, or just to connect. I read every message and
              will get back to you as soon as possible.
            </p>

            <div className="mt-10 rounded-3xl border border-primary-300/20 bg-background/75 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:p-8">
              <ContactForm />
            </div>

            <div className="mt-8 border-t border-neutral-300/15 pt-6">
              <p className="section-label text-xs text-primary-300">Or email directly</p>
              <a
                href="mailto:contact@lucas-lamar.com"
                className="mt-3 inline-block text-lg font-semibold text-primary-200 transition-colors hover:text-primary-100"
              >
                contact@lucas-lamar.com
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full border-t border-neutral-200/10">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <div className="py-8 text-xs uppercase tracking-[0.18em] text-neutral-300">
        © {new Date().getFullYear()} Lucas Lamar
      </div></div></footer>
    </div>
  );
}

function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-px w-7 bg-primary-400" />
        <p className="section-label text-xs text-primary-300">{label}</p>
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-primary-50 sm:text-4xl">{title}</h2>
    </div>
  );
}
