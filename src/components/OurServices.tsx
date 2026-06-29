function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="">
      <h4 className="text-2xl md:text-4xl tracking-tight font-light underline">
        {title}
      </h4>
      <div className="mt-6 md:mt-6">
        <p className="text-xl md:text-3xl font-light">{description}</p>
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <section id="services" className="pt-16 pb-8 text-font">
      <div className="px-6 md:px-10">
        <h3 className="text-5xl md:text-8xl font-light">Our services</h3>
        <p className="text-2xl md:text-4xl font-light mt-3 md:mt-8">
          We offer a range of services to take you from an idea to a completed
          project.
        </p>
        <div className="flex flex-col gap-y-12 mt-12">
          <Card
            title="Strategy"
            description="We're trained to quickly understand our clients' specific challenges and offer creative, strategic solutions."
          />

          <Card
            title="Planning"
            description="We will help you articulate, scope, estimate, and plan your project. We'll walk you through architecture, platform, and technology decisions and help you understand risks and benefits."
          />

          <Card
            title="Design and Development"
            description="We combine user-focused, accessible UX design with strong visual aesthetics, before writing high-quality, scalable code. Our developers bring deep experience across diverse projects, ensuring your product is built thoughtfully today and ready to grow tomorrow."
          />

          <Card
            title="Support"
            description="We partner with you to support, maintain, and grow your project over time. We'll always be there when you need us."
          />
        </div>
      </div>
    </section>
  );
}
