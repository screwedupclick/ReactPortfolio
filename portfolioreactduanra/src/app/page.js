"use client";
import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/Navbar/Navbar";
import Pfp from "@/components/PFP";

export default function Home() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <DarkVeil />
      <Navbar />
      <Pfp />
    </div>
  );
}
