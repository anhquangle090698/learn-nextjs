import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface ProductDetailPageProps {
}

export default function App(props: ProductDetailPageProps) {

    const params = useRouter();

    return (
        <div>
            Product Detail Page

            <h3>{JSON.stringify(params.query)}</h3>
        </div>
    );
}
