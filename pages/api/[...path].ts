// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

export const config = {
  api: {
    bodyParser: false, // not parser, send body directly to server
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //don't send cookie to API server
  req.headers.cookie = "";

  // /api/student support by NextJS
  // base URL : https://js-post-api.herokuapp.com

  proxy.web(req, res, {
    target: process.env.API_URL, //change environment variable
    changeOrigin: true, // (/api/student, /api/post, ...)
    selfHandleResponse: false, //proxy handle response
  });

  // res.status(200).json({ name: 'PATH -  Match all here' })
}
