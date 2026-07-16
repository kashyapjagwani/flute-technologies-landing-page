export default function OurWork() {
  return (
    <section id="work" className="pt-16 pb-8 text-font">
      <div className="px-6 md:px-10">
        <h3 className="text-5xl md:text-8xl font-light">Our work</h3>
        <p className="text-2xl md:text-4xl font-light mt-3 md:mt-8">
          A selection of projects we've worked on and built for our clients.
        </p>
        <a
          href="/work"
          className="inline-flex items-center gap-x-4 mt-12 group"
        >
          <span className="text-2xl md:text-4xl font-light underline">
            See our work
          </span>
          <img
            src="/arrow.svg"
            alt=""
            className="h-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
