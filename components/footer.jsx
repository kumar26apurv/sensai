import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-muted text-foreground">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Platform */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-primary"
              >
                Resume Builder
              </Link>
            </li>
            <li>
              <Link
                href="/interview"
                className="text-muted-foreground hover:text-primary"
              >
                Interview Prep
              </Link>
            </li>
            <li>
              <Link
                href="/ai-cover-letter"
                className="text-muted-foreground hover:text-primary"
              >
                AI Cover Letter
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-primary"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-muted-foreground hover:text-primary"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sensai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
