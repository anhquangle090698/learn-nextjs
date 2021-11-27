
import { LayoutProps } from '@/models/common';
import * as React from 'react';

export interface EmptyProps {
}

export function EmptyLayout({ children }: LayoutProps) {
    return (
        <div>
            {children}
        </div>
    );
}
