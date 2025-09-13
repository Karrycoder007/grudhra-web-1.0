// components/WhatsappIcon.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappIcon() {
  const whatsappLink = "https://wa.me/message/3KJBT57S2CEMM1";

  return (
    <a
      href={whatsappLink}
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
