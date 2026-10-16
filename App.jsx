import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Clock,
  Calendar,
  Users,
  Laptop,
  Building2,
  Wallet,
  BookOpen,
  Target,
  Route,
  ListChecks,
  Compass,
  Heart,
  Calculator,
  Languages,
  Brain,
  Flag,
  Search,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Navigation,
  User,
  TrendingUp,
  FileText,
} from "lucide-react";

/* ============================================================
   CENTRAL CONFIG
   Every piece of information that changes batch-to-batch, or
   that was not supplied in the brief, lives here. Update this
   object and the whole site updates with it. Bracketed values
   are placeholders — nothing here has been invented.
   ============================================================ */
const CONFIG = {
  brand: "Tribhuj",
  tagline: "IBA Admission Preparation",
  motto: "The most involved mentor in your IBA journey.",
  batch: {
    program: "IBA BBA Admission Preparation",
    duration: "3 months",
    classes: "3 classes / week",
    locationShort: "Farmgate, Dhaka",
    locationDetail: "Beside Ananda Cinema Hall",
    mode: "Offline & Online",
    startDate: "28 August",
    deadline: "Running — seats filling up",
    feeOffline: "৳16,000",
    feeOnline: "৳13,000",
  },
  contact: {
    phone: "", // leave empty to hide the phone row everywhere
    whatsapp: "01758-938801",
    whatsappHref: "https://wa.me/8801758938801",
    email: "tribhujedu@gmail.com",
    emailHref: "mailto:tribhujedu@gmail.com",
    facebookPageHref: "https://www.facebook.com/profile.php?id=61587337113539",
    facebookPersonalHref: "https://www.facebook.com/radtaki",
    instagramHref: "https://www.instagram.com/tribhujedu/",
  },
  location: {
    address: "Farmgate, Dhaka — beside Ananda Cinema Hall",
    landmark: "Ananda Cinema Hall, Farmgate",
    classTiming: "[ CLASS TIMING ]",
    mapsHref: "https://maps.app.goo.gl/2eBucXP5WpCKHRZk8",
  },
  /* Founder block. Set photoUrl to an image link (or a data: URI)
     and replace the name + speech text. */
  founder: {
    name: "[ YOUR NAME ]",
    role: "Founder, Tribhuj",
    photoUrl: "",
    credentials: [
      { rank: "8th", label: "DU IBA" },
      { rank: "35th", label: "DU C Unit" },
    ],
    speech: ["[ YOUR SPEECH — each string in this list is one paragraph ]"],
  },
  // Every "Register" CTA on the site opens this form.
  registrationFormUrl: "https://forms.gle/5oxFzuLMKZFzbN4i8",
  // Small "View full batch details" link in the batch section.
  batchDetailsUrl: "https://drive.google.com/file/d/1JS0de4EuGh6w-v5DrOeRqyMmRijj3Fu-/view?usp=drive_link",
};

/* ============================================================
   CONTENT DATA
   ============================================================ */
const WHY_TRIBHUJ = [
  {
    icon: TrendingUp,
    title: "Built from the Bottom Up",
    body: "I started at the very bottom and failed my first mock tests. Instead of quitting, I rebuilt how I studied, and went on to stand 8th in the DU IBA admission test. Tribhuj teaches the path I actually walked.",
  },
  {
    icon: Route,
    title: "Structured Learning",
    body: "Students follow a clear roadmap from week one to test day, instead of jumping between topics without a plan.",
  },
  {
    icon: ListChecks,
    title: "Practice That Actually Matters",
    body: "Regular problem-solving in grammar, vocabulary, mathematics, and admission-style questions — the kind that shows up on the real test.",
  },
  {
    icon: Compass,
    title: "Guidance Beyond the Classroom",
    body: "Strategic guidance on preparation, exam-day tactics, time management, and the wider admission journey — not just lecture content.",
  },
  {
    icon: BookOpen,
    title: "Free Resources",
    body: "Guides, explanations, and practice material that any IBA aspirant can use, whether or not they've joined the batch yet.",
  },
  {
    icon: Heart,
    title: "Student-Centered Approach",
    body: "The goal isn't finishing a syllabus. It's making sure every student is genuinely ready when the test arrives.",
  },
];

const CURRICULUM = [
  {
    key: "math",
    label: "Mathematics",
    icon: Calculator,
    topics: [
      "Arithmetic",
      "Algebra",
      "Geometry",
      "Word problems",
      "Mental math",
      "IBA-style problem solving",
    ],
  },
  {
    key: "english",
    label: "English",
    icon: Languages,
    topics: [
      "Grammar",
      "Sentence correction",
      "Vocabulary",
      "Reading comprehension",
      "Critical language skills",
    ],
  },
  {
    key: "analytical",
    label: "Analytical / Logic",
    icon: Brain,
    topics: [
      "Logical reasoning",
      "Puzzles",
      "Data interpretation",
      "Analytical thinking",
    ],
  },
  {
    key: "strategy",
    label: "Admission Strategy",
    icon: Flag,
    topics: [
      "Exam strategy",
      "Time management",
      "Question selection",
      "Mock-test analysis",
      "Preparation planning",
    ],
  },
];

const RESOURCE_CATEGORIES = [
  {
    title: "IBA Guides",
    icon: Compass,
    items: [
      "IBA preparation guide",
      "How to prepare for IBA",
      "IBA admission roadmap",
      "Exam strategy",
      "Study planning",
    ],
  },
  {
    title: "Grammar",
    icon: Languages,
    items: [
      "Grammar rules",
      "Sentence correction",
      "Error detection",
      "Common mistakes",
    ],
  },
  {
    title: "Vocabulary",
    icon: BookOpen,
    items: ["Vocabulary lists", "Word guides", "Practice questions"],
  },
  {
    title: "Mathematics",
    icon: Calculator,
    items: [
      "Math shortcuts",
      "Concept explanations",
      "Mental math",
      "Practice problems",
    ],
  },
  {
    title: "Admission Tips",
    icon: Target,
    items: [
      "Preparation strategy",
      "Time management",
      "Mock-test strategy",
      "Common mistakes",
      "Student advice",
    ],
  },
];

const BLOG_POSTS = [
  {
    slug: "start-preparing-for-iba-bba-admission",
    title: "How to Start Preparing for IBA BBA Admission",
    category: "IBA Guides",
    readTime: "6 min read",
    description:
      "A first-principles starting point for anyone who has just decided to sit for the IBA BBA admission test — what to learn first, and what to ignore for now.",
    body: [
      "Most aspirants start IBA preparation by collecting materials — old questions, PDFs, and lists of vocabulary — before they've decided what the first month is actually for. That order tends to work against you. The first month is better spent understanding the shape of the test itself: how questions in math, English, and analytical ability are typically structured, and which of your current skills already meet that bar.",
      "Once you know where you stand, build a simple weekly rhythm rather than a rigid long-term plan. A realistic split is regular practice across all three sections, with slightly more time on whichever section currently feels weakest. Revisit that split every few weeks as your strengths shift — early preparation is about calibration, not just volume.",
      "Finally, resist the urge to attempt full mock tests too early. Mocks are most useful once you already have working methods for each question type; before that, they mostly measure how unfamiliar the format still is, which is discouraging and not very informative.",
    ],
  },
  {
    slug: "complete-iba-english-preparation-guide",
    title: "The Complete IBA English Preparation Guide",
    category: "English",
    readTime: "8 min read",
    description:
      "Grammar, sentence correction, vocabulary, and comprehension — how the English section is usually structured and how to prepare for each part without wasting time.",
    body: [
      "IBA's English section rewards precision more than raw vocabulary size. A student who knows fewer words but applies grammar rules consistently will usually outscore one who has memorized long word lists but is shaky on sentence structure. That's worth keeping in mind when you decide where to spend your study hours.",
      "Grammar and sentence correction respond well to rule-based study: learn a rule, see it applied in several sentences, then find it being tested in disguised ways in practice questions. Vocabulary is best built gradually through reading, with word lists used to reinforce words you've already encountered rather than as the first exposure.",
      "Reading comprehension is the section students tend to under-practice, simply because it takes longer per question. Treat it as a skill you train separately — timed passages, a few times a week, focusing on locating the answer efficiently rather than rereading the whole passage each time.",
    ],
  },
  {
    slug: "improve-iba-math-score",
    title: "How to Improve Your IBA Math Score",
    category: "Mathematics",
    readTime: "7 min read",
    description:
      "Where students typically lose marks in the math section, and the kind of practice that closes that gap fastest.",
    body: [
      "Most students preparing for IBA already know the underlying math — arithmetic, algebra, geometry — from school. The score gap usually comes from speed and from question types that are unfamiliar in format, not from missing concepts. That changes what 'practicing math' should mean during IBA prep.",
      "Instead of relearning topics from scratch, focus practice time on timed problem sets that mix topics the way the actual test does. This forces you to recognize which method a question needs quickly, which is a different skill from solving a problem once you already know its category.",
      "Mental math deserves more attention than it usually gets. Being able to estimate, simplify, and calculate without reaching for long written methods saves real time across the section, and that saved time is often what separates a good score from a great one.",
    ],
  },
  {
    slug: "grammar-mistakes-iba-aspirants-should-avoid",
    title: "10 Grammar Mistakes IBA Aspirants Should Avoid",
    category: "Grammar",
    readTime: "5 min read",
    description:
      "The recurring grammar errors that show up in sentence correction and error-detection questions, explained in plain language.",
    body: [
      "A small set of grammar issues account for a disproportionate number of mistakes in sentence correction and error-detection questions: subject-verb agreement across long or interrupted sentences, misused prepositions in fixed phrases, and confusion between similar-looking word forms.",
      "Parallelism is another common trap — lists and comparisons that switch grammatical form partway through often sound fine when read quickly, which is exactly why they're tested. Training your ear to notice a break in parallel structure is one of the highest-value grammar skills for this test.",
      "The most effective way to reduce these mistakes isn't memorizing a list of rules in isolation. It's reviewing your own practice mistakes regularly and noticing which two or three error types you personally repeat — those are the ones worth deliberately targeting.",
    ],
  },
  {
    slug: "prepare-for-an-iba-mock-test",
    title: "How to Prepare for an IBA Mock Test",
    category: "Admission Tips",
    readTime: "6 min read",
    description:
      "Getting the most out of a mock test — before, during, and especially after — instead of treating it as just another practice paper.",
    body: [
      "A mock test is only as useful as the review that follows it. Sitting for one under timed, exam-like conditions matters, but the real preparation value comes from a careful post-mortem: which questions you got wrong because of a concept gap, versus which you got wrong because of time pressure or a careless read.",
      "Before the mock, decide on a section-order and rough time budget and commit to it, even if it feels uncomfortable. Mock tests are where you should be testing your strategy, not just your knowledge — exam day is not the place to discover that your pacing plan doesn't work.",
      "Afterward, resist grading yourself only by the final score. Log the specific question types that cost you the most time or marks, and feed that directly into your next one to two weeks of practice. Used this way, a handful of well-reviewed mocks is worth more than many mocks taken without reflection.",
    ],
  },
];

/* ============================================================
   SMALL SHARED PRIMITIVES
   ============================================================ */

function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="text-[13px] tracking-wide text-[#0B4D3A]/70 font-medium mb-3">
      {children}
    </p>
  );
}

function PrimaryButton({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full bg-[#0B4D3A] px-7 py-3.5 text-[15px] font-semibold text-[#F6F6F0] transition-all duration-200 hover:bg-[#0E5F48] hover:shadow-[0_8px_24px_-8px_rgba(11,77,58,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4D3A] active:scale-[0.98] ${className}`}
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </button>
  );
}

function SecondaryButton({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border border-[#16181C]/20 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-[#16181C] transition-all duration-200 hover:border-[#16181C]/40 hover:bg-[#16181C]/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16181C]/40 active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
}

function TriangleMark({ size = 28, filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path
        d="M14 3L25.6 24H2.4L14 3Z"
        stroke="#0B4D3A"
        strokeWidth="2"
        strokeLinejoin="round"
        fill={filled ? "#0B4D3A" : "none"}
        fillOpacity={filled ? 1 : 0}
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, sub, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignClass} max-w-[640px] ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className="text-[32px] md:text-[40px] leading-[1.12] text-[#16181C] mb-4"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
      >
        {title}
      </h2>
      {sub ? <p className="text-[16px] leading-[1.6] text-[#16181C]/65">{sub}</p> : null}
    </div>
  );
}

/* ============================================================
   NAVIGATION
   ============================================================ */

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "batch", label: "Batch" },
  { id: "resources", label: "Free Resources" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""
      } bg-[#F6F6F0]/90 backdrop-blur-md`}
    >
      <Container className="flex items-center justify-between h-[72px]">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B4D3A]"
        >
          <TriangleMark />
          <span
            className="text-[20px] text-[#16181C]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            {CONFIG.brand}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-[14.5px] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B4D3A] ${
                page === l.id
                  ? "text-[#0B4D3A] font-semibold"
                  : "text-[#16181C]/70 hover:text-[#16181C] font-medium"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => go("register")}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4D3A] px-5 py-2.5 text-[14px] font-semibold text-[#F6F6F0] transition-all duration-200 hover:bg-[#0E5F48] active:scale-[0.98]"
          >
            Register Now
            <ArrowRight size={15} />
          </button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[#16181C]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 pb-6 pt-2">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-left py-3 text-[16px] border-b border-[#16181C]/[0.06] ${
                page === l.id ? "text-[#0B4D3A] font-semibold" : "text-[#16181C]/80 font-medium"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("register")}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B4D3A] px-6 py-3.5 text-[15px] font-semibold text-[#F6F6F0]"
          >
            Register Now
            <ArrowRight size={16} />
          </button>
        </Container>
      </div>
    </header>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function SocialIcon({ href, label, children, external = true }) {
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-[#F6F6F0]/50 hover:text-[#F6F6F0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F6F0]/60"
    >
      {children}
    </a>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="bg-[#12141A] text-[#F6F6F0]">
      <Container className="pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <TriangleMark size={24} filled={false} />
              <span
                className="text-[19px]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
              >
                {CONFIG.brand}
              </span>
            </div>
            <p className="text-[14px] leading-[1.6] text-[#F6F6F0]/55 max-w-[220px]">
              {CONFIG.tagline} for students who are serious about getting into IBA.
            </p>
          </div>

          <div>
            <p className="text-[13px] tracking-wide text-[#F6F6F0]/40 mb-4">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => navigate(l.id)}
                    className="text-[14.5px] text-[#F6F6F0]/70 hover:text-[#F6F6F0] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] tracking-wide text-[#F6F6F0]/40 mb-4">Resources</p>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => navigate("resources")}
                  className="text-[14.5px] text-[#F6F6F0]/70 hover:text-[#F6F6F0] transition-colors"
                >
                  Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("resources")}
                  className="text-[14.5px] text-[#F6F6F0]/70 hover:text-[#F6F6F0] transition-colors"
                >
                  Grammar &amp; Vocabulary
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("resources")}
                  className="text-[14.5px] text-[#F6F6F0]/70 hover:text-[#F6F6F0] transition-colors"
                >
                  Math
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("blog")}
                  className="text-[14.5px] text-[#F6F6F0]/70 hover:text-[#F6F6F0] transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] tracking-wide text-[#F6F6F0]/40 mb-4">Contact</p>
            <div className="flex flex-wrap items-center gap-4">
            <SocialIcon href={CONFIG.contact.whatsappHref} label="WhatsApp">
              <MessageCircle size={18} />
            </SocialIcon>
            <SocialIcon href={CONFIG.contact.emailHref} label="Email" external={false}>
              <Mail size={18} />
            </SocialIcon>
            <SocialIcon href={CONFIG.location.mapsHref} label="Location on Google Maps">
              <MapPin size={18} />
            </SocialIcon>
            <SocialIcon href={CONFIG.contact.facebookPageHref} label="Tribhuj Facebook page">
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon href={CONFIG.contact.facebookPersonalHref} label="Founder's personal Facebook">
              <span className="relative inline-flex">
                <Facebook size={18} />
                <User size={10} strokeWidth={2.5} className="absolute -right-1.5 -bottom-1 rounded-full bg-[#12141A]" />
              </span>
            </SocialIcon>
            <SocialIcon href={CONFIG.contact.instagramHref} label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#F6F6F0]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-[#F6F6F0]/40">
            © 2026 {CONFIG.brand}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ============================================================
   REUSABLE SECTIONS
   ============================================================ */

function BatchInfoStrip({ navigate }) {
  const b = CONFIG.batch;
  const cards = [
    { icon: BookOpen, label: "Program", value: b.program, span: "sm:col-span-2" },
    { icon: Calendar, label: "Duration", value: b.duration },
    { icon: Clock, label: "Classes", value: b.classes },
    { icon: MapPin, label: "Location", value: `${b.locationShort} — ${b.locationDetail}`, span: "sm:col-span-2" },
    { icon: Laptop, label: "Mode", value: b.mode },
    { icon: Calendar, label: "Batch Start", value: b.startDate },
    { icon: Flag, label: "Registration", value: b.deadline },
    {
      icon: Wallet,
      label: "Course Fee",
      value: `${b.feeOffline} offline · ${b.feeOnline} online`,
      span: "sm:col-span-2",
    },
  ];

  return (
    <section className="bg-[#F6F6F0]">
      <Container className="py-16 md:py-20">
        <SectionHeading
          eyebrow="This batch"
          title="Everything you need to know, at a glance"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`${c.span || ""} rounded-2xl border border-[#16181C]/[0.08] bg-white p-6 transition-colors duration-200 hover:border-[#0B4D3A]/30`}
            >
              <c.icon size={20} className="text-[#0B4D3A] mb-4" strokeWidth={1.75} />
              <p className="text-[12.5px] tracking-wide text-[#16181C]/45 mb-1.5">{c.label}</p>
              <p className="text-[16px] font-medium text-[#16181C] leading-snug">{c.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <PrimaryButton onClick={() => navigate("register")}>
            SECURE YOUR SEAT
          </PrimaryButton>
          <a
            href={CONFIG.batchDetailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0B4D3A] underline underline-offset-4 decoration-[#0B4D3A]/30 hover:decoration-[#0B4D3A] transition-colors"
          >
            <FileText size={15} strokeWidth={1.75} />
            View full batch details
          </a>
        </div>
      </Container>
    </section>
  );
}

function WhyTribhuj() {
  return (
    <section className="bg-white">
      <Container className="py-20 md:py-24">
        <SectionHeading
          eyebrow="Why Tribhuj"
          title="Not just another coaching center"
          sub="Six reasons students choose to prepare with us — and stay through test day."
        />
        <div className="mt-14 flex flex-col">
          {WHY_TRIBHUJ.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                } items-start md:items-center gap-5 md:gap-12 py-8 border-t border-[#16181C]/[0.08] ${
                  i === WHY_TRIBHUJ.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#0B4D3A]/25 flex items-center justify-center">
                  <item.icon size={22} className="text-[#0B4D3A]" strokeWidth={1.75} />
                </div>
                <div className="max-w-[520px]">
                  <h3
                    className="text-[19px] text-[#16181C] mb-1.5"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[#16181C]/65">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CurriculumSection() {
  const [active, setActive] = useState(CURRICULUM[0].key);
  const activeItem = CURRICULUM.find((c) => c.key === active);

  return (
    <section className="bg-[#F6F6F0]">
      <Container className="py-20 md:py-24">
        <SectionHeading
          eyebrow="Curriculum"
          title="What you'll actually learn"
          sub="Preparation is broken into four areas. Tap a category to see what's inside."
        />

        <div className="mt-10 flex flex-wrap gap-2.5">
          {CURRICULUM.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-200 border ${
                active === c.key
                  ? "bg-[#0B4D3A] border-[#0B4D3A] text-[#F6F6F0]"
                  : "bg-transparent border-[#16181C]/15 text-[#16181C]/70 hover:border-[#16181C]/30"
              }`}
            >
              <c.icon size={16} strokeWidth={1.75} />
              {c.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="mt-8 rounded-2xl bg-white border border-[#16181C]/[0.08] p-8 md:p-10"
          style={{ animation: "fadeInUp 0.35s ease both" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {activeItem.topics.map((t) => (
              <div key={t} className="flex items-center gap-3">
                <CheckCircle2 size={17} className="text-[#0B4D3A] flex-shrink-0" strokeWidth={1.75} />
                <span className="text-[15px] text-[#16181C]/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MethodTriangle() {
  const nodes = [
    { key: "learn", label: "LEARN", desc: "Understand the concepts behind every question type.", x: 12, y: 88 },
    { key: "practice", label: "PRACTICE", desc: "Drill the right kind of questions, repeatedly.", x: 88, y: 88 },
    { key: "perform", label: "PERFORM", desc: "Apply it all under real exam conditions.", x: 50, y: 10 },
  ];

  return (
    <section className="bg-white">
      <Container className="py-20 md:py-24">
        <SectionHeading
          align="center"
          eyebrow="The Tribhuj Method"
          title="Learn. Practice. Perform."
          sub="Three stages, one continuous loop. Miss any one of them and IBA preparation falls apart — that's why we build the batch around all three."
        />

        <div className="relative mt-16 mx-auto w-full max-w-[520px] aspect-square">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="12" y1="88" x2="88" y2="88" stroke="#0B4D3A" strokeWidth="0.6" />
            <line x1="88" y1="88" x2="50" y2="10" stroke="#0B4D3A" strokeWidth="0.6" />
            <line
              x1="50"
              y1="10"
              x2="12"
              y2="88"
              stroke="#0B4D3A"
              strokeWidth="0.6"
              strokeDasharray="2.4 2.4"
              opacity="0.55"
            />
          </svg>

          {nodes.map((n) => (
            <div
              key={n.key}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-[168px]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="w-[68px] h-[68px] rounded-full bg-[#0B4D3A] flex items-center justify-center mb-3 shadow-[0_8px_20px_-6px_rgba(11,77,58,0.5)]">
                <span
                  className="text-[#F6F6F0] text-[12px] tracking-wide font-semibold"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {n.label}
                </span>
              </div>
              <p className="text-[13px] leading-[1.5] text-[#16181C]/60">{n.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-[#F6F6F0]">
      <Container className="py-20 md:py-24">
        <SectionHeading
          eyebrow="Social proof"
          title="Built for students who are serious about IBA"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-[#0B4D3A]/30 bg-white/60 p-7 flex flex-col items-center text-center min-h-[190px] justify-center"
            >
              <Users size={22} className="text-[#0B4D3A]/50 mb-3" strokeWidth={1.5} />
              <p className="text-[14px] text-[#16181C]/50 leading-[1.6]">
                Space reserved for a verified student result or testimonial.
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[13px] text-[#16181C]/40">
          We only publish real, verifiable outcomes — nothing here is invented.
        </p>
      </Container>
    </section>
  );
}

function FounderSection() {
  const f = CONFIG.founder;
  return (
    <section className="bg-[#12141A] text-[#F6F6F0]">
      <Container className="py-20 md:py-24 grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 md:gap-16 items-start">
        <div>
          <div className="aspect-[4/5] w-full max-w-[360px] rounded-2xl overflow-hidden bg-[#F6F6F0]/[0.06] border border-[#F6F6F0]/10 flex items-center justify-center">
            {f.photoUrl ? (
              <img src={f.photoUrl} alt={f.name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center px-6">
                <User size={40} className="text-[#F6F6F0]/30 mx-auto mb-3" strokeWidth={1.25} />
                <p className="text-[13px] text-[#F6F6F0]/40">[ YOUR PHOTO ]</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="text-[13px] tracking-wide text-[#F6F6F0]/50 mb-3">Your mentor</p>
          <h2
            className="text-[32px] md:text-[40px] leading-[1.12]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            {f.name}
          </h2>
          <p className="mt-2 text-[15px] text-[#F6F6F0]/60">{f.role}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {f.credentials.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-[#C9972B]/40 px-6 py-4 min-w-[140px]"
              >
                <p
                  className="text-[34px] leading-none text-[#C9972B]"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {c.rank}
                </p>
                <p className="mt-2 text-[14px] text-[#F6F6F0]/70">in {c.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#F6F6F0]/10 max-w-[620px]">
            {f.speech.map((para, i) => (
              <p key={i} className="text-[16.5px] leading-[1.75] text-[#F6F6F0]/80 mb-5 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTABanner({ navigate }) {
  return (
    <section className="bg-[#0B4D3A]">
      <Container className="py-20 md:py-24 text-center flex flex-col items-center">
        <h2
          className="text-[30px] md:text-[42px] leading-[1.15] text-[#F6F6F0] max-w-[600px]"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          Ready to start your IBA preparation?
        </h2>
        <p className="mt-4 text-[16px] text-[#F6F6F0]/70 max-w-[440px]">
          Don't wait until the admission test is around the corner. Start preparing with Tribhuj.
        </p>
        <button
          onClick={() => navigate("register")}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#F6F6F0] px-8 py-4 text-[15px] font-semibold text-[#0B4D3A] transition-all duration-200 hover:bg-white active:scale-[0.98]"
        >
          REGISTER FOR THE BATCH
          <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </Container>
    </section>
  );
}

/* ============================================================
   HOME PAGE
   ============================================================ */

function Hero({ navigate, mounted }) {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F0]">
      <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-14 items-center">
        <div>
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Eyebrow>IBA Admission Preparation · Dhaka</Eyebrow>
            <h1
              className="text-[36px] sm:text-[46px] md:text-[54px] leading-[1.08] text-[#16181C]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              {CONFIG.motto}
            </h1>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <p className="mt-6 text-[17px] leading-[1.65] text-[#16181C]/65 max-w-[460px]">
              Tribhuj gives IBA BBA aspirants a structured, practical path through admission
              preparation — strong academics, honest guidance, and practice that mirrors the
              real test.
            </p>
          </div>

          <div
            className={`mt-9 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <PrimaryButton onClick={() => navigate("register")}>
              REGISTER FOR THE BATCH
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate("resources")}>
              Explore Free Resources
            </SecondaryButton>
          </div>

          <p
            className={`mt-8 text-[13.5px] text-[#16181C]/45 transition-all duration-700 ease-out delay-500 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            Next batch starts {CONFIG.batch.startDate} · {CONFIG.batch.locationShort} · Offline &amp; Online
          </p>
        </div>

        <div className="relative hidden md:block h-[380px]">
          <svg viewBox="0 0 360 380" className="w-full h-full">
            <polygon points="180,20 340,340 20,340" fill="none" stroke="#0B4D3A" strokeWidth="1.4" opacity="0.9" />
            <polygon points="180,110 275,320 85,320" fill="none" stroke="#0B4D3A" strokeWidth="1" opacity="0.4" />
            <polygon points="180,180 235,300 125,300" fill="#0B4D3A" opacity="0.08" />
            <circle cx="180" cy="20" r="4" fill="#C9972B" />
            <circle cx="340" cy="340" r="3" fill="#0B4D3A" />
            <circle cx="20" cy="340" r="3" fill="#0B4D3A" />
          </svg>
        </div>
      </Container>
    </section>
  );
}

function HomePage({ navigate, heroMounted }) {
  return (
    <>
      <Hero navigate={navigate} mounted={heroMounted} />
      <BatchInfoStrip navigate={navigate} />
      <WhyTribhuj />
      <FounderSection />
      <CurriculumSection />
      <MethodTriangle />
      <SocialProof />
      <CTABanner navigate={navigate} />
    </>
  );
}

/* ============================================================
   BATCH PAGE
   ============================================================ */

function BatchPage({ navigate }) {
  return (
    <>
      <section className="bg-[#F6F6F0]">
        <Container className="pt-16 pb-10 md:pt-20">
          <Eyebrow>The upcoming batch</Eyebrow>
          <h1
            className="text-[36px] md:text-[48px] leading-[1.1] text-[#16181C] max-w-[640px]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            IBA BBA Admission Preparation
          </h1>
          <p className="mt-5 text-[16px] leading-[1.65] text-[#16181C]/65 max-w-[560px]">
            A {CONFIG.batch.duration} program built around {CONFIG.batch.classes.toLowerCase()},
            combining structured lessons with the practice and strategy IBA admission actually
            requires.
          </p>
          <div className="mt-8">
            <PrimaryButton onClick={() => navigate("register")}>
              REGISTER FOR THE BATCH
            </PrimaryButton>
          </div>
        </Container>
      </section>
      <BatchInfoStrip navigate={navigate} />
      <CurriculumSection />
      <MethodTriangle />
      <CTABanner navigate={navigate} />
    </>
  );
}

/* ============================================================
   FREE RESOURCES PAGE
   ============================================================ */

function ResourcesPage({ navigate }) {
  return (
    <>
      <section className="bg-[#F6F6F0]">
        <Container className="pt-16 pb-14 md:pt-20">
          <Eyebrow>Free resources</Eyebrow>
          <h1
            className="text-[36px] md:text-[48px] leading-[1.1] text-[#16181C] max-w-[600px]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Useful, whether or not you've joined
          </h1>
          <p className="mt-5 text-[16px] leading-[1.65] text-[#16181C]/65 max-w-[540px]">
            Guides, explanations, and practice material for any IBA aspirant. New resources are
            added regularly.
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCE_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-[#16181C]/[0.08] p-7 hover:border-[#0B4D3A]/30 transition-colors duration-200"
              >
                <cat.icon size={20} className="text-[#0B4D3A] mb-4" strokeWidth={1.75} />
                <h3
                  className="text-[18px] text-[#16181C] mb-4"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-[#16181C]/65">
                      <span className="w-1 h-1 rounded-full bg-[#0B4D3A]/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <button
              onClick={() => navigate("blog")}
              className="rounded-2xl border border-[#0B4D3A]/25 bg-[#0B4D3A]/[0.04] p-7 flex flex-col items-start text-left hover:bg-[#0B4D3A]/[0.07] transition-colors duration-200"
            >
              <BookOpen size={20} className="text-[#0B4D3A] mb-4" strokeWidth={1.75} />
              <h3
                className="text-[18px] text-[#16181C] mb-2"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
              >
                Blog
              </h3>
              <p className="text-[14.5px] text-[#16181C]/65 mb-4">
                Full articles on preparation strategy, English, and math — written for IBA
                aspirants specifically.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B4D3A]">
                Read the blog <ChevronRight size={15} />
              </span>
            </button>
          </div>
        </Container>
      </section>

      <CTABanner navigate={navigate} />
    </>
  );
}

/* ============================================================
   BLOG PAGES
   ============================================================ */

function BlogCard({ post, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="text-left rounded-2xl border border-[#16181C]/[0.08] p-7 flex flex-col hover:border-[#0B4D3A]/30 transition-colors duration-200 h-full"
    >
      <span className="inline-block text-[12px] font-medium tracking-wide text-[#0B4D3A] mb-3">
        {post.category}
      </span>
      <h3
        className="text-[19px] leading-[1.3] text-[#16181C] mb-3"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
      >
        {post.title}
      </h3>
      <p className="text-[14.5px] leading-[1.6] text-[#16181C]/60 mb-6 flex-1">
        {post.description}
      </p>
      <div className="flex items-center justify-between text-[13px] text-[#16181C]/40">
        <span>{post.readTime}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#0B4D3A]">
          Read article <ChevronRight size={14} />
        </span>
      </div>
    </button>
  );
}

function BlogPage({ navigate, openPost }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  const filtered = rest.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <section className="bg-[#F6F6F0]">
        <Container className="pt-16 pb-12 md:pt-20">
          <Eyebrow>Blog</Eyebrow>
          <h1
            className="text-[36px] md:text-[48px] leading-[1.1] text-[#16181C] max-w-[560px]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Preparation, explained clearly
          </h1>
          <p className="mt-5 text-[16px] leading-[1.65] text-[#16181C]/65 max-w-[520px]">
            Sample articles for IBA aspirants. More are added as the batch progresses.
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 md:py-16">
          <button
            onClick={() => openPost(featured.slug)}
            className="text-left w-full rounded-2xl border border-[#16181C]/[0.08] p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center hover:border-[#0B4D3A]/30 transition-colors duration-200 bg-[#F6F6F0]/50"
          >
            <div>
              <span className="inline-block text-[12px] font-medium tracking-wide text-[#0B4D3A] mb-3">
                Featured · {featured.category}
              </span>
              <h2
                className="text-[24px] md:text-[28px] leading-[1.25] text-[#16181C] mb-3 max-w-[520px]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
              >
                {featured.title}
              </h2>
              <p className="text-[15px] leading-[1.6] text-[#16181C]/60 max-w-[500px]">
                {featured.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B4D3A] px-6 py-3 text-[14px] font-semibold text-[#F6F6F0] flex-shrink-0">
              Read Article <ArrowRight size={15} />
            </span>
          </button>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <div className="relative w-full sm:w-[280px]">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16181C]/35" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="w-full rounded-full border border-[#16181C]/15 bg-white pl-10 pr-4 py-2.5 text-[14px] text-[#16181C] placeholder:text-[#16181C]/35 focus:outline-none focus:border-[#0B4D3A]/50"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium border transition-colors duration-150 ${
                    category === c
                      ? "bg-[#0B4D3A] border-[#0B4D3A] text-[#F6F6F0]"
                      : "border-[#16181C]/15 text-[#16181C]/65 hover:border-[#16181C]/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} onOpen={() => openPost(post.slug)} />
            ))}
            {filtered.length === 0 ? (
              <p className="text-[14.5px] text-[#16181C]/45 col-span-full py-10 text-center">
                No articles match that search yet.
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <CTABanner navigate={navigate} />
    </>
  );
}

function BlogPostPage({ slug, navigate, openPost }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-[#F6F6F0]">
        <Container className="pt-16 pb-14 md:pt-20">
          <button
            onClick={() => navigate("blog")}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0B4D3A] mb-8"
          >
            <ChevronRight size={15} className="rotate-180" /> Back to blog
          </button>
          <span className="inline-block text-[12px] font-medium tracking-wide text-[#0B4D3A] mb-3">
            {post.category} · {post.readTime}
          </span>
          <h1
            className="text-[32px] md:text-[44px] leading-[1.15] text-[#16181C] max-w-[700px]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            {post.title}
          </h1>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 md:py-16">
          <div className="max-w-[680px]">
            {post.body.map((p, i) => (
              <p key={i} className="text-[16.5px] leading-[1.75] text-[#16181C]/75 mb-6">
                {p}
              </p>
            ))}
          </div>

          {more.length ? (
            <div className="mt-16 pt-10 border-t border-[#16181C]/[0.08]">
              <p className="text-[13px] tracking-wide text-[#16181C]/40 mb-6">Keep reading</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[680px]">
                {more.map((p) => (
                  <BlogCard key={p.slug} post={p} onOpen={() => openPost(p.slug)} />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <CTABanner navigate={navigate} />
    </>
  );
}

/* ============================================================
   ABOUT PAGE
   ============================================================ */

function AboutPage({ navigate }) {
  return (
    <>
      <section className="bg-[#F6F6F0]">
        <Container className="pt-16 pb-14 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>About Tribhuj</Eyebrow>
            <h1
              className="text-[34px] md:text-[44px] leading-[1.15] text-[#16181C]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              We started Tribhuj because IBA prep deserved better than endless classes
            </h1>
          </div>
          <div className="pt-2 md:pt-4">
            <p className="text-[16px] leading-[1.7] text-[#16181C]/65 mb-5">
              Most IBA aspirants don't fail because they didn't study enough. They fail because
              their preparation wasn't structured — too many materials, not enough direction, and
              no real sense of whether they were actually getting ready.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#16181C]/65">
              Tribhuj exists to fix that: a clear roadmap, practice that mirrors the real test,
              and honest guidance from people who understand what the IBA admission process
              actually asks of a student.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <SectionHeading
            eyebrow="Our approach"
            title="Ready, not just finished"
            sub="The goal was never to help students finish a syllabus. It's to make sure they're genuinely ready when the test arrives — which is a different, harder standard."
          />
        </Container>
      </section>

      <FounderSection />

      <CTABanner navigate={navigate} />
    </>
  );
}

/* ============================================================
   CONTACT / LOCATION PAGE
   ============================================================ */

function ContactRow({ icon: Icon, label, value, href }) {
  const inner = (
    <>
      <Icon size={18} className="text-[#0B4D3A] flex-shrink-0" strokeWidth={1.75} />
      <div className="flex-1">
        <p className="text-[13px] text-[#16181C]/45">{label}</p>
        <p className="text-[14.5px] font-medium text-[#16181C] break-all">{value}</p>
      </div>
      {href ? <ArrowRight size={15} className="text-[#16181C]/30" /> : null}
    </>
  );
  const cls =
    "rounded-2xl border border-[#16181C]/[0.08] p-5 flex items-center gap-4 transition-colors duration-200";
  return href ? (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`${cls} hover:border-[#0B4D3A]/30`}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function ContactPage({ navigate }) {
  const c = CONFIG.contact;
  const loc = CONFIG.location;

  return (
    <>
      <section className="bg-[#F6F6F0]">
        <Container className="pt-16 pb-14 md:pt-20">
          <Eyebrow>Location &amp; contact</Eyebrow>
          <h1
            className="text-[36px] md:text-[48px] leading-[1.1] text-[#16181C] max-w-[560px]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Find us, or reach out first
          </h1>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-[22px] text-[#16181C] mb-6"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              Offline classes
            </h2>
            <div className="rounded-2xl border border-[#16181C]/[0.08] overflow-hidden">
              <a
                href={loc.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[200px] bg-[#0B4D3A]/[0.06] hover:bg-[#0B4D3A]/[0.09] transition-colors duration-200 flex items-center justify-center"
              >
                <div className="text-center px-6">
                  <MapPin size={24} className="text-[#0B4D3A] mx-auto mb-2" />
                  <p className="text-[14px] font-medium text-[#0B4D3A]">Open in Google Maps</p>
                </div>
              </a>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="text-[#0B4D3A] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <div>
                    <p className="text-[14.5px] font-medium text-[#16181C]">Address</p>
                    <p className="text-[14px] text-[#16181C]/60">{loc.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation size={17} className="text-[#0B4D3A] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <div>
                    <p className="text-[14.5px] font-medium text-[#16181C]">Nearby landmark</p>
                    <p className="text-[14px] text-[#16181C]/60">{loc.landmark}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={17} className="text-[#0B4D3A] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <div>
                    <p className="text-[14.5px] font-medium text-[#16181C]">Class timing</p>
                    <p className="text-[14px] text-[#16181C]/60">{loc.classTiming}</p>
                  </div>
                </div>
                <a
                  href={loc.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#16181C]/20 px-6 py-3 text-[14px] font-semibold text-[#16181C] hover:border-[#16181C]/40 transition-colors duration-200"
                >
                  Get Directions <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2
              className="text-[22px] text-[#16181C] mb-6"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              Talk to us
            </h2>
            <div className="flex flex-col gap-3">
              {c.phone ? <ContactRow icon={Phone} label="Phone" value={c.phone} /> : null}
              <ContactRow icon={MessageCircle} label="WhatsApp" value={c.whatsapp} href={c.whatsappHref} />
              <ContactRow icon={Mail} label="Email" value={c.email} href={c.emailHref} />
              <ContactRow icon={Facebook} label="Tribhuj on Facebook" value="Facebook page" href={c.facebookPageHref} />
              <ContactRow icon={Facebook} label="Founder on Facebook" value="Personal profile" href={c.facebookPersonalHref} />
              <ContactRow icon={Instagram} label="Instagram" value="@tribhujedu" href={c.instagramHref} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={c.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#16181C]/20 px-6 py-3 text-[14px] font-semibold text-[#16181C] hover:border-[#16181C]/40 transition-colors duration-200"
              >
                Message Us
              </a>
              <a
                href={c.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#16181C]/20 px-6 py-3 text-[14px] font-semibold text-[#16181C] hover:border-[#16181C]/40 transition-colors duration-200"
              >
                WhatsApp Us
              </a>
              <button
                onClick={() => navigate("register")}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B4D3A] px-6 py-3 text-[14px] font-semibold text-[#F6F6F0] hover:bg-[#0E5F48] transition-colors duration-200"
              >
                Register Now
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ============================================================
   APP ROOT
   ============================================================ */

export default function TribhujWebsite() {
  const [page, setPage] = useState("home");
  const [blogSlug, setBlogSlug] = useState(BLOG_POSTS[0].slug);
  const [heroMounted, setHeroMounted] = useState(false);

  const navigate = (id) => {
    // Every registration CTA opens the external registration form.
    if (id === "register") {
      window.open(CONFIG.registrationFormUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setPage(id);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  const openPost = (slug) => {
    setBlogSlug(slug);
    setPage("blogPost");
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const t = setTimeout(() => setHeroMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  let content;
  if (page === "home") content = <HomePage navigate={navigate} heroMounted={heroMounted} />;
  else if (page === "batch") content = <BatchPage navigate={navigate} />;
  else if (page === "resources") content = <ResourcesPage navigate={navigate} />;
  else if (page === "blog") content = <BlogPage navigate={navigate} openPost={openPost} />;
  else if (page === "blogPost")
    content = <BlogPostPage slug={blogSlug} navigate={navigate} openPost={openPost} />;
  else if (page === "about") content = <AboutPage navigate={navigate} />;
  else if (page === "contact") content = <ContactPage navigate={navigate} />;
  else content = <HomePage navigate={navigate} heroMounted={heroMounted} />;

  return (
    <div className="min-h-screen bg-[#F6F6F0]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { scroll-behavior: smooth; }
      `}</style>
      <Navbar page={page} navigate={navigate} />
      <main>{content}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
