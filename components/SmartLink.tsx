"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { getStoredTracking, isInternalHref, withTracking } from "@/lib/utm";

type SmartLinkProps = ComponentProps<typeof Link>;

/**
 * Drop-in erstatning for next/link, der bærer UTM/klik-id-halen videre på
 * interne navigationer. href i HTML forbliver ren (godt for SEO og sikkert
 * for Google); halen påføres KUN ved et ægte venstre-klik uden modifikator.
 */
export default function SmartLink({ href, onClick, ...rest }: SmartLinkProps) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // Respektér midterklik, modifikatortaster og nye faner.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const target = (rest as { target?: string }).target;
    if (target && target !== "_self") return;
    if (!isInternalHref(href)) return;

    const tracking = getStoredTracking();
    const next = withTracking(href, tracking);
    if (next === href) return; // ingen hale at tilføje

    e.preventDefault();
    router.push(next);
  }

  return <Link href={href} onClick={handleClick} {...rest} />;
}
