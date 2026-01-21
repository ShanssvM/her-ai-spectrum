import { Link } from "react-router-dom";
import { Linkedin, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Her AI Spectrum" className="w-10 h-10 rounded-xl object-cover" />
              <span className="font-semibold text-lg text-foreground">
                Her AI Spectrum
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Advancing the full spectrum of AI by empowering women and
              underrepresented voices in artificial intelligence.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/her-ai-spectrum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hello@heraispectrum.org"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming-events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/past-events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Past Events
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/her-ai-spectrum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Join Our Community
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@heraispectrum.org"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@heraispectrum.org"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Speak at an Event
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Her AI Spectrum. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-primary" /> for the AI
            community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
