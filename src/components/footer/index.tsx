import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/asset/images/nordiaLogoWhite.png";

const footerLinks = [
  {
    title: "Home",
    links: [
      { label: "About us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "What we do", href: "/what-we-do" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Power of Positivity", href: "/power-of-positivity" },
      { label: "Projects", href: "/projects" },
      { label: "Events", href: "/events" },
      { label: "Donate", href: "/donate" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Facebook", href: "https://facebook.com", external: true },
      { label: "Instagram", href: "https://instagram.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "Linkdin", href: "https://linkedin.com", external: true }, // keeping the spelling from the screenshot
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* subtle vignette/gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-[#05070a] to-black opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),rgba(0,0,0,0.75)_55%,rgba(0,0,0,1)_80%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: logo + tagline */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Replace with your real logo path */}
              <Image
                src={footerLogo}
                alt="Nordia Foundation"
                width={170}
                height={44}
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-6 text-sm text-white/60">
              Inform. Transform. Sustain.
            </p>
          </div>

          {/* Middle: link columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {footerLinks.map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-semibold text-white">
                    {col.title}
                  </h4>

                  <ul className="mt-5 space-y-4">
                    {col.links.map((item) => {
                      const common =
                        "text-sm text-white/60 hover:text-white transition-colors";
                      if ("external" in item && item.external) {
                        return (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className={common}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li key={item.label}>
                          <Link href={item.href} className={common}>
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: subscribe */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Subscribe to get latest
              <br />
              updates
            </h3>

            <form className="mt-8 flex w-full max-w-xl items-center gap-0">
              <div className="flex w-full items-center rounded-md border border-white/20 bg-transparent">
                {/* <input
                  type="email"
                  placeholder="Your email"
                  className="h-14 w-full bg-transparent px-6 text-sm text-white placeholder:text-white/50 outline-none"
                /> */}
                <Link
                  href="/blog#newsletter-subscribe"
                  className="inline-flex h-14 w-full shrink-0 items-center justify-center rounded-md bg-white px-8 text-sm font-semibold text-black hover:opacity-95"
                >
                  Subscribe
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* bottom line (optional) */}
        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Nordia Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
