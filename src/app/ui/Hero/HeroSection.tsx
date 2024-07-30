import { playfair } from "@/app/ui/fonts";

export default function HeroSection() {
  return (
    <div className="relative min-h-dvh overflow-hidden flex flex-col items-center justify-end">
      <h1
        className={`relative z-30 pb-16 text-5xl lg:text-[10rem] text-center ${playfair.className}`}
      >
        Hotel Ristorante Punto Verde
      </h1>
      <video
        autoPlay
        muted
        loop
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75"
      >
        <source src="video.webm" type="video/webm" />
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
