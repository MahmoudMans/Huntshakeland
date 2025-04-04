// components/Footer.js
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-900">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-gray-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-gray-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/marketing" className="hover:text-gray-600">
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-gray-600"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/sales" className="hover:text-gray-600">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="hover:text-gray-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-gray-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-gray-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <span className="sr-only">Facebook</span>
                  FB
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <span className="sr-only">Twitter</span>
                  TW
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <span className="sr-only">Instagram</span>
                  IG
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Updated copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 huntshake
        </div>
      </div>
    </footer>
  );
}
