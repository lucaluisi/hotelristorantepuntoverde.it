import { gsap } from "gsap";

export default function bo() {
  let limit = { max: 100, pullRatio: 0 };
  let getRandom = () => gsap.utils.random(-limit.max, limit.max);
  let round = (value: number) => Math.round(value * 10000) / 10000;
  const getModifier = (home: number) => (value: string) => {
    let value2 = parseFloat(value);
    return round(value2 + (home - value2) * limit.pullRatio) + "px";
  };

  gsap.utils.toArray<HTMLElement>(".box").forEach((element: HTMLElement) => {
    wander(
      element,
      gsap.getProperty(element, "x"),
      gsap.getProperty(element, "y")
    );
  });

  function wander(
    element: HTMLElement,
    homeX: number | string,
    homeY: number | string
  ): void {
    homeX = typeof homeX === "string" ? parseFloat(homeX) : homeX;
    homeY = typeof homeY === "string" ? parseFloat(homeY) : homeY;
    gsap.set(element, {
      x:
        homeX +
        (Number(gsap.getProperty(element, "x")) - homeX) /
          (1 - limit.pullRatio),
      y:
        homeY +
        (Number(gsap.getProperty(element, "y")) - homeY) /
          (1 - limit.pullRatio),
    });
    gsap.to(element, {
      x: homeX + getRandom(),
      y: homeY + getRandom(),
      modifiers: {
        x: getModifier(homeX),
        y: getModifier(homeY),
      },
      duration: gsap.utils.random(1.5, 4),
      ease: "sine.inOut",
      onComplete: () => wander(element, homeX, homeY),
    });
  }

  return (
    <main className="bg-black text-center min-h-[400vh] m-0 p-0">
      <div className="pt-[100px]">
        <div className="box w-[100px] h-[100px] bg-blue-400 rounded-[20%] inline-block border-black border-2"></div>
        <div className="box w-[100px] h-[100px] bg-blue-400 rounded-[20%] inline-block border-black border-2"></div>
        <div className="box w-[100px] h-[100px] bg-blue-400 rounded-[20%] inline-block border-black border-2"></div>
      </div>
    </main>
  );
}
