"use client";
import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/Navbar/Navbar";
import Pfp from "@/components/PFP";

export default function Home() {
  return (
    <div className="layout__container">
      <DarkVeil />
      <Navbar />
      <Pfp />
    </div>
  );
}
