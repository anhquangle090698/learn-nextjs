import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface MultiParamPageProps {
}

export default function App(props: MultiParamPageProps) {

    const params = useRouter();

    return (
        <div>
            Multi Param Page

            <h3>{JSON.stringify(params.query)}</h3>
        </div>
    );
}
