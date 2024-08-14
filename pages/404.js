import React from 'react';
import Head from 'next/head';
import { Button, Header } from 'flotiq-components-react';
import Link from 'next/link';
import Layout from '../layouts/layout';

const NotFoundPage = () => (
    <Layout className="py-32">
        <Head>
            <title>Page not found</title>
        </Head>
        <div className="text-center mt-5 py-32">
            <Header additionalClasses={['!font-thin !text-5xl md:!text-6xl lg:!text-7xl font-roboto text-center']}>
                Page not found, sorry
            </Header>

            {/* Example usage of button */}
            <Link href="/">
                <Button
                    rounded="none"
                    size="md"
                    variant="info"
                    additionalClasses={['!text-white !font-light !text-2xl !bg-secondary mt-8 hover:opacity-80']}
                    label="Go back to index"
                />
            </Link>
        </div>
    </Layout>
);

export default NotFoundPage;
