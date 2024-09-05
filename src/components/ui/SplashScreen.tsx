import { useEffect, useState } from "react";
import { CustomImage } from "./image";
import { useAnimate } from "framer-motion";

export const SplashScreen = ({
  finishLoading,
}: {
  finishLoading: Function;
}) => {
  const [scope, animate] = useAnimate();

  const enterAnimation = async () => {
    await animate(scope.current, { scale: 1.1 }, { duration: .4, ease: "easeInOut" });
    await animate(scope.current, { scale: 1 }, { duration: .4, ease: "easeInOut" });
    await animate(scope.current, { scale: 1.1 }, { duration: .4, ease: "easeInOut" });
    await animate(scope.current, { scale: 1 }, { duration: .4, ease: "easeInOut" });
    await animate(scope.current, { opacity: 0 }), { duration: .5, ease: "easeIn" };
    finishLoading();
  };

  useEffect(() => {
    enterAnimation();
  }, []);

  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <div className="aspect-square h-1/4" ref={scope}>
        <CustomImage src="/logo/logo.svg" className="object-fill" />
      </div>
    </div>
  );
};
