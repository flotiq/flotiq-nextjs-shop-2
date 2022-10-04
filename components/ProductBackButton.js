import React from 'react';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const ProductBackButton = ({ backButtonText }) => (
    <Link href="/">
        <a
            href="replace"
            className="border-transparent pt-12 pb-5 flex
            items-center flex items-center font-light md:text-2xl text-sm font-size"
        >
            <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
            {backButtonText}
        </a>
    </Link>
);

export default ProductBackButton;
