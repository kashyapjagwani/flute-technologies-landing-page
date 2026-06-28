export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="px-6 md:px-10 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* <div>
            <h3 className="text-2xl font-semibold mb-4">Flute Technologies</h3>
            <p className="text-white/80 max-w-sm">
              We design and build high-quality web and mobile applications for
              growing businesses.
            </p>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Reach out</h4>
            <a
              href="mailto:contact@flutetechnologies.com"
              className="text-white/80 hover:text-white hover:underline transition"
            >
              contact@flutetechnologies.com
            </a>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <p className="text-white/80">Mumbai, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom row */}
        <div className="flex flex-col items-start gap-y-6">
          <div className="flex items-center gap-x-4">
            <a
              className="text-white/80 hover:text-white hover:underline transition"
              href="/privacy-policy"
            >
              Read our Privacy Policy here
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <img
              src="/ft_logo_mini.svg"
              alt="Flute Technologies"
              className="h-12"
            />
            <div className="text-white/80 text-center md:text-left">
              © 2026 Flute Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
