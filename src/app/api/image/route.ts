import fs from "fs";
import sharp from "sharp";
import { NextRequest } from "next/server";
import path from "path";

const imgDir = "./public/";

export async function GET(req: NextRequest) {
  const src = req.nextUrl.searchParams.get("src") as string;
  const width = req.nextUrl.searchParams.get("w");
  const quality = req.nextUrl.searchParams.get("q");
  const thumbnail = req.nextUrl.searchParams.get("thumbnail");

  const dirname = path.dirname(src) + "/";
  const basename = path.basename(src, path.extname(src));

  if (thumbnail) {
    const thumbnailImage = fs.readFileSync(
      path.join(process.cwd(), imgDir, dirname, `${basename}-thumbnail.jpg`)
    );
    return new Response(thumbnailImage);
  }

  const imagePath = path.join(process.cwd(), imgDir, src);
  const originalImage = fs.readFileSync(imagePath);

  const resizedImageBuffer = await sharp(originalImage)
    .png({ quality: quality ? Number(quality) : 75 })
    .resize(Number(width))
    .toBuffer();

  return new Response(resizedImageBuffer);
}

// export async function POST(req: NextRequest) {
//   const formData = await req.formData();
//   const image = formData.get("image");

//   if (!image || !(image instanceof Blob)) {
//     return NextResponse.json(
//       { error: "No image file uploaded" },
//       { status: 400 }
//     );
//   }

//   const buffer = await image.arrayBuffer();
//   const filename = image.name || "image";
//   const fileExtension = path.extname(filename);
//   const baseFilename = path.basename(filename, fileExtension);

//   // const originalPath = path.join("./public/rooms/", `${baseFilename}${fileExtension}`);

//   // fs.writeFileSync(originalPath, Buffer.from(buffer));

//   const thumbnailBuffer = await sharp(Buffer.from(buffer))
//     .blur(1)
//     .resize(10)
//     .toBuffer();

//   const thumbnailPath = path.join("./public/pool/", `${baseFilename}-thumbnail.jpg`);
//   fs.writeFileSync(thumbnailPath, thumbnailBuffer);

//   return NextResponse.json({ message: "Success" }, { status: 201 });
// }
