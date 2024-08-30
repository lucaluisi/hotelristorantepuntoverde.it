import { H1 } from "@/components/ui/text";
import BackgroundVideo from "next-video/background-video";

export default function Hero() {
  return (
    <div className="relative min-h-svh overflow-hidden flex justify-center">
      <H1 className="absolute bottom-10 z-20 text-center">
        Hotel Ristorante Punto Verde
      </H1>
      {/* <video
        autoPlay
        muted
        loop
        controls={false}
        className="-z-50 absolute w-auto min-w-full min-h-full max-w-none brightness-75"
      >
        <source src="video.webm" type="video/webm" />
        <source src="video.mp4" type="video/mp4" />
      </video> */}
      <BackgroundVideo src="https://hotelristorantepuntoverde-it.vercel.app/api/video?url=video.webm" className="brightness-75 min-h-full min-w-full" />
    </div>
  );
}
