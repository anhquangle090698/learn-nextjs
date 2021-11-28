// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      data: any[];
    }
  | { name: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(
    `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
  );
  const responseJson = await response.json();

  if (req.method !== "GET") {
    return res.status(404).json({ name: "data not found!" });
  }
  res.status(200).json(responseJson);
}
