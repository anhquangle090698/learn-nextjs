import * as React from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models/common';

export interface MainProps {
}

export function MainLayout({ children }: LayoutProps) {

  React.useEffect(() => {

    console.log("main layout mounting");

    return () => console.log("main layout unmounting");
  }, []);

  return (
    <div>
      <h1>Main Layout</h1>

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
