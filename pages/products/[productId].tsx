import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface ProductDetailPageProps {
    movie: any;
}

export default function App({ movie }: ProductDetailPageProps) {

    const params = useRouter();

    if (!movie) return null;

    return (
        <div>
            Product Detail Page

            {/* <h3>{JSON.stringify(params.query)}</h3> */}

            <p>{movie.tenPhim}</p>
            <p>{movie.trailer}</p>
            <p>{movie.danhGia}</p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('Get Static Paths');

    const response = await fetch('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
    const data = await response.json();

    return {
        paths: data.map((movie: any) => ({ params: { productId: String(movie.maPhim) } })), //params (type string)
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<ProductDetailPageProps> = async (context: GetStaticPropsContext) => {

    //server-side
    //build-time only run (yarn build)
    //re-run in dev (yarn dev)
    //support fetch of client-side=
    //server-side communication client-side forward script(next-data) container data from server => log at client-side

    console.log('Get Static Props', context.params?.productId); //context have contain param at getStaticPaths above
    const productId = context.params?.productId;

    if (!productId) return {
        notFound: true,
    }

    const response = await fetch(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${productId}`);
    const data = await response.json();

    return {
        props: {
            movie: data
        }
    }
}