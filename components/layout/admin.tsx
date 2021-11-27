import * as React from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models/common';

export interface AdminProps {
}

export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Amin Layout</h1>

            <p>Sidebar</p>

            <Link href="/">
                <a>Home</a>
            </Link>

            <div style={{ margin: '0 20px' }}></div>

            <Link href="/promotion">
                <a>Promotion</a>
            </Link>

            <div>{children}</div>
        </div>
    );
}
