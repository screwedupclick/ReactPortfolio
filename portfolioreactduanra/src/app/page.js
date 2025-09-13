"use client";

import Image from "next/image";
import DarkVeil from "@/components/DarkVeil";

export default function Home() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <DarkVeil />
    </div>
  );
}
