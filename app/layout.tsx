import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays"
import Navbar from "@/components/Navbar";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Event",
  description: "Hub for every developer events",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className={cn("font-mono", jetbrainsMono.variable)}
    >
      <body className={`${SchibstedGrotesk.variable} ${MartianMono.variable} min-h-screen `}>
      <Navbar />
  <div className="absolute inset-0 top-0 min-h-screen z-[-1]">
      <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0.01}
            pulsating={false}
            fadeDistance={1}
            saturation={0.01}
        />
  </div>
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
