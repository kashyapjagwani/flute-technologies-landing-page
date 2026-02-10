export default function Hero() {
  return (
    <section className="bg-primary">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-3/5 px-6 md:px-10 py-16">
          <h1 className="text-white text-5xl md:text-8xl tracking-tight font-light">
            Planning a website or mobile app for your business?
          </h1>
          <h2 className="text-white text-3xl md:text-5xl tracking-tight italic mt-6 md:mt-12 font-light">
            We design and build high-quality, custom web and mobile apps that
            help your business grow.
          </h2>
        </div>
        <div
          className="h-[150px] md:h-auto bg-cover bg-center w-full md:w-2/5"
          style={{ backgroundImage: "url('/hero_image.jpg')" }}
        ></div>
      </div>
    </section>
  );
}
