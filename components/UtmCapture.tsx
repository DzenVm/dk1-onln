"use client";

import { useEffect } from "react";
import { captureTracking } from "@/lib/utm";

/** Fanger UTM/klik-id fra landings-URL'en og gemmer dem i sessionStorage. */
export default function UtmCapture() {
  useEffect(() => {
    captureTracking();
  }, []);
  return null;
}
