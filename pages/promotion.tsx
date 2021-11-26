// import Header from '@/components/common/Header'; // ts config
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps, GetStaticPropsContext } from 'next';


const Header = dynamic(() => import('@/components/common/Header'), { ssr: false }) // component header only run at client-side
export interface PromotionPageProps {
}

export default function Promotion(props: PromotionPageProps) {

    const [listMovie, setListMovie] = React.useState([])
    const router = useRouter();

    const group = router.query.group

    const handleOnClick = () => {
        router.push({
            pathname: '/promotion',
            query: {
                group: 'GP02'
            }
        },
            undefined,
            {
                shallow: true //call api follow query router at client-side, no run getStaticProps of SSR
            }
        )
    }

    console.log("router query", router.query);

    //SSG with Data-fetching at client-side use useEffect
    React.useEffect(() => {

        if (!group) return;

        (async () => {
            const response = await fetch(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${group}`);
            const data = await response.json();

            setListMovie(data);
        })();
    }, [group]);

    return (
        <div>
            Promotion Page

            <Header></Header>

            <ul className='ul'>
                {
                    listMovie.map((m: any) => {
                        return <li key={m.maPhim}>{m.tenPhim}</li>
                    })
                }
            </ul>

            <button onClick={handleOnClick}>Load List Movie Group 2</button>

        </div>
    );
}

export const getStaticProps: GetStaticProps<PromotionPageProps> = async (context: GetStaticPropsContext) => {

    console.log('get static props');

    return {
        props: {}
    }
}