function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="">
      <h4 className="text-2xl md:text-4xl tracking-tight font-light underline">
        {title}
      </h4>
      <div className="flex flex-col gap-y-8 mt-6 md:mt-12 ml-2 md:ml-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-x-4">
            <img src="/arrow.svg" alt="Arrow" className="h-4" />
            <p className="text-xl md:text-2xl font-light">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoreExpertise() {
  return (
    <section className="pt-16 pb-8 text-font">
      <div className="px-6 md:px-10">
        <h3 className="text-5xl md:text-8xl font-light">Our core expertise</h3>
        <p className="text-2xl md:text-4xl font-light mt-3 md:mt-8">
          We design and build high-quality, high-performance web and mobile
          applications that are engineered to support your business today, and
          grow with you tomorrow.
        </p>
        <div className="flex flex-col gap-y-12 mt-12">
          <Card
            title="Website Development"
            items={[
              "Large, content-rich, CMS-driven websites",
              "Interactive brochure websites",
              "E-commerce websites",
            ]}
          />

          <Card
            title="Web-app Development"
            items={[
              "Customer-facing web apps",
              "Internal operations tools",
              "Business dashboards",
            ]}
          />

          <Card
            title="Mobile App Development"
            items={[
              "iOS & Android apps",
              "React Native apps",
              "Scalable mobile platforms",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
