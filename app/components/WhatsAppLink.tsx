"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

const conversionId = "AW-18305681918/RjRLCMr19-YcEP6T6phE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function WhatsAppLink({ children, onClick, ...props }: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.("event", "conversion", {
      send_to: conversionId,
      value: 1.0,
      currency: "BRL",
    });

    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
