import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link'

export interface ProductPageProps {
  movie: any[];
}

export default function Product(props : ProductPageProps) {

  const { movie } = props;

  // console.log('movie', movie);
  
  return (
    <div>
      Product Page

      {
        movie.map(m => {
          return <Link key={m.id} href={`/products/${m.id}`}>
            <a style={{margin: 20}}>{m.name}</a>
          </Link>
        })
      }
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context : GetStaticPropsContext) => {

  //server-side
  //build-time only run (yarn build)
  //re-run in dev (yarn dev)
  //support fetch of client-side
  //server-side communication client-side forward script(next-data) container data from server => log at client-side

  const response = await fetch('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  const data = await response.json();

  return {
    props: {
      movie: data.map((movie: any) => ({id: movie.maPhim, name: movie.tenPhim}))
    }
  }
}