import { headers } from "next/headers";

export const isMobileDevice = () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server"
    );
  }

  const { get } = headers();
  const ua = get("user-agent");

  const device = ua!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return device !== null;
};
