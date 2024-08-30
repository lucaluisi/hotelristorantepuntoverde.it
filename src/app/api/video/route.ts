import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";

const videoDir = "./public/videos";

export async function GET(req: NextRequest) {
  const src = req.nextUrl.searchParams.get("url") as string;

  const videoPath = path.join(process.cwd(), videoDir, src);
  const originalVideo = fs.readFileSync(videoPath);

  return new Response(originalVideo);
}