import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/telanganachessacademy",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Coaches", href: "/coaches" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const networkLinks = [
    // Telangana Network
    {
      name: "Telangana Chess Academy",
      href: "https://telanganachessacademy.com/",
    },
    {
      name: "Telangana Chess Institute",
      href: "https://telanganachess.com/",
    },
    {
      name: "Telangana Chess School",
      href: "https://www.telanganachessschool.com/",
    },
    {
      name: "Telangana Chess School",
      href: "https://www.telanganachessachool.com/",
    },
    {
      name: "Telangana Chess Foundation",
      href: "https://www.telanganachessfoundation.com/",
    },
    {
      name: "Telangana Sports Academy",
      href: "https://www.telanganasportsacademy.com/",
    },
    {
      name: "Telangana Chess Centre",
      href: "https://www.telanganachesscentre.com/",
    },

    // Bharat Network
    {
      name: "Bharat Chess Academy",
      href: "https://www.bharatchessacademy.com/",
    },
    {
      name: "Bharat Chess School",
      href: "https://bharatchess.com/",
    },
    {
      name: "Bharat Chess School",
      href: "https://www.bharatchessschool.com/",
    },
    {
      name: "Bharat Chess Institute",
      href: "http://www.bharatchessinstitute.com/",
    },
    {
      name: "Bharat Sports Academy",
      href: "https://www.bharatsportsacademy.com/",
    },

    // Hyderabad Network
    {
      name: "Hyderabad Chess Institute",
      href: "https://www.hyderabadchessinstitute.com/",
    },
    {
      name: "Hyderabad Chess Club",
      href: "https://www.hyderabadchessclub.com/",
    },
  ];

  return (
    <footer className="bg-[#2B6CB0] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Academy Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">♔</span>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Bharat Chess Academy
                </h3>

                <p className="text-white/80 text-xs">
                  Professional Chess Training
                </p>
              </div>
            </div>

            <p className="text-white/90 text-sm mb-6">
              Dedicated to providing quality chess education and developing
              strong foundations for future success in chess.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={
                    social.href !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/40 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">
              Contact Info
            </h4>

            <div className="space-y-4">

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white/80 mt-0.5" />

                <div>
                  <a
                    href="tel:+919864646481"
                    className="text-white text-sm hover:underline"
                  >
                    +91 9864646481
                  </a>

                  <p className="text-white/70 text-xs">
                    Mon - Sun, 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white/80 mt-0.5" />

                <div>
                  <a
                    href="mailto:bharatchessacademy@gmail.com"
                    className="text-white text-sm hover:underline"
                  >
                    bharatchessacademy@gmail.com
                  </a>

                  <p className="text-white/70 text-xs">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5" />

                <div>
                  <p className="text-white text-sm">
                    Hyderabad, Telangana
                  </p>

                  <p className="text-white/70 text-xs">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Chess Network */}
          <div>
            <h4 className="font-semibold text-white mb-6">
              Full Chess Network
            </h4>

            <div className="space-y-3">

              {/* Telangana Network */}
              <div>
                <h5 className="text-white/60 uppercase text-[10px] tracking-wider font-semibold mb-2">
                  Telangana Network
                </h5>

                <div className="space-y-2">
                  {networkLinks.slice(0, 7).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bharat Network */}
              <div className="pt-3">
                <h5 className="text-white/60 uppercase text-[10px] tracking-wider font-semibold mb-2">
                  Bharat Network
                </h5>

                <div className="space-y-2">
                  {networkLinks.slice(7, 12).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Hyderabad Network */}
              <div className="pt-3">
                <h5 className="text-white/60 uppercase text-[10px] tracking-wider font-semibold mb-2">
                  Hyderabad Network
                </h5>

                <div className="space-y-2">
                  {networkLinks.slice(12).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">

            <p className="text-white/70 text-sm">
              © 2024 Bharat Chess Academy. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
