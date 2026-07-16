import { useState } from "react";
import { Head } from "vite-react-ssg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const projects = [
  {
    index: "01",
    client: "Satej Wood Pressed Oils (Mumbai, India)",
    title: "Satej Wood Pressed Oils",
    services: ["Rebrand", "Website Development"],
    technologies: ["React.js, Tailwind, CMS", "Google Analytics"],
    year: "Ongoing",
    description:
      "A full rebrand and CMS-driven website for a premium wood pressed oil brand based in Mumbai. We built a content-rich site using React.js, Contentful, and Google Analytics, giving the client full control over their story and the visibility into their audience to drive business decisions.",
    image: "/projects/satej-wood-pressed-oils/hero-section.png",
    imageBlur: "/projects/satej-wood-pressed-oils/hero-section-blur.webp",
    imageCompressed:
      "/projects/satej-wood-pressed-oils/hero-section-compressed.png",
    imageAlt: "Satej Wood Pressed Oils website hero section",
    url: "https://satej-woodpressed-oils-dp3qkg4k8i3g.edgeone.dev/",
  },
  {
    index: "02",
    client: "Salt & Straw (Seattle, USA)",
    title: "Salt & Straw Icecream",
    services: [
      "Product Design",
      "Information Architecture",
      "Wireframing",
      "Online Brand Strategy",
    ],
    technologies: ["Figma", "Interactive Prototyping", "User Flow Mapping"],
    year: "2025",
    description:
      "A comprehensive UX redesign and brand strategy for the premium artisanal ice cream brand. We transformed their digital experience by restructuring complex menus, streamlining monotonous ordering and subscription flows, and ideating on intuitive operational dashboards to bridge the gap between online ordering and real-world kitchen fulfillment.",
    image: "/projects/salt-and-straw-icecreams/hero-section.png",
    imageBlur: "/projects/salt-and-straw-icecreams/hero-section.webp",
    imageCompressed:
      "/projects/salt-and-straw-icecreams/hero-section-compressed.png",
    imageAlt: "Salt & Straw website hero section",
    url: "https://saltandstraw.com/",
  },
];

function ProgressiveImage({
  src,
  blur,
  compressed,
  alt,
  className,
}: {
  src: string;
  blur: string;
  compressed: string;
  alt: string;
  className: string;
}) {
  const [compressedLoaded, setCompressedLoaded] = useState(false);
  const [fullLoaded, setFullLoaded] = useState(false);

  return (
    <>
      {/* Blur placeholder — stays in normal flow so the container never collapses */}
      <img
        src={blur}
        alt=""
        aria-hidden
        className={className}
        style={{ filter: "blur(12px)", transform: "scale(1.08)" }}
      />
      {/* Compressed intermediate — fades in as soon as it arrives */}
      <img
        src={compressed}
        alt=""
        aria-hidden
        onLoad={() => setCompressedLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
          compressedLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Full quality — fades in last */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setFullLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          fullLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}

function ProjectCard({
  client,
  title,
  services,
  technologies,
  year,
  description,
  image,
  imageBlur,
  imageCompressed,
  imageAlt,
  url,
}: (typeof projects)[number]) {
  return (
    <article className="text-font">
      {/* Image */}
      <div className="relative overflow-hidden">
        <ProgressiveImage
          src={image}
          blur={imageBlur}
          compressed={imageCompressed}
          alt={imageAlt}
          className="w-full aspect-video md:aspect-auto object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 px-6 md:px-10 pb-8 md:pb-12">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-3 group mt-1"
          >
            <h2 className="text-white underline text-4xl md:text-7xl font-light tracking-tight">
              {title}
            </h2>
            {/* <img
              src="/new-window.svg"
              alt="Open in new tab"
              className="h-6 md:h-10 invert opacity-70 group-hover:opacity-100 transition-opacity shrink-0"
            /> */}
          </a>
        </div>
      </div>

      {/* Metadata strip */}
      <div className="px-6 md:px-10 pt-8 pb-4 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 border-b border-font/10">
        <div>
          <p className="text-xs font-light text-font/40 uppercase tracking-widest mb-2">
            Client
          </p>
          <p className="text-base md:text-lg font-light">{client}</p>
        </div>
        <div>
          <p className="text-xs font-light text-font/40 uppercase tracking-widest mb-2">
            Services
          </p>
          <p className="text-base md:text-lg font-light">
            {services.join(", ")}
          </p>
        </div>
        <div>
          <p className="text-xs font-light text-font/40 uppercase tracking-widest mb-2">
            Technology
          </p>
          <p className="text-base md:text-lg font-light">
            {technologies.join(", ")}
          </p>
        </div>
        <div>
          <p className="text-xs font-light text-font/40 uppercase tracking-widest mb-2">
            Year
          </p>
          <p className="text-base md:text-lg font-light">{year}</p>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 md:px-10 pt-6 pb-16 md:pb-24">
        <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Flute Technologies</title>
        <meta
          name="description"
          content="Our work — a selection of websites and web applications we've designed and built for our clients."
        />
      </Head>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="px-6 md:px-10 pt-12 pb-12 text-font">
          <h1 className="text-5xl md:text-8xl font-light tracking-tight">
            Work
          </h1>
          <p className="text-2xl md:text-4xl font-light mt-3 md:mt-8 max-w-3xl">
            A selection of projects we're proud of.
          </p>
        </section>

        {/* Projects */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
