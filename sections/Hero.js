import React from 'react';
import { Button, Header, Paragraph } from 'flotiq-components-react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Hero = ({ heroImage, headerText, paragraphText, buttonLabel }) => {
    const router = useRouter();
    return (
        <div className="w-full relative">
            <div
                className="hidden lg:block absolute right-0 w-1/2 h-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('${heroImage}')` }}
            />
            <div className="max-w-7xl mx-auto lg:px-8 flex flex-wrap">
                <div
                    className="flex flex-col items-start justify-center
                py-5 lg:py-20 px-4 lg:px-0 lg:pr-10
                w-full lg:basis-6/12 order-2 lg:order-1 lg:min-h-1/2vh "
                >
                    <Header
                        additionalClasses={['!font-thin !text-5xl md:!text-6xl lg:!text-7xl font-roboto']}
                    >
                        {headerText}
                    </Header>
                    <Paragraph additionalClasses={['w-full lg:w-1/2 !font-thin !text-2xl lg:mt-5']}>
                        {paragraphText}
                    </Paragraph>
                    <Button
                        label={buttonLabel}
                        onClick={() => { router.push('/products/1'); }}
                        rounded="none"
                        size="md"
                        variant="info"
                        additionalClasses={['!text-white !font-light !text-2xl !bg-secondary mt-8 hover:opacity-80']}
                    />
                </div>
                <div
                    className="w-full lg:basis-6/12 lg:hidden lg:w-auto
                    order-1 lg:order-2 lg:right-0 lg:w-1/2 h-full image-wrapper"
                >
                    <Image
                        src={heroImage}
                        alt="Hero"
                        width="1920"
                        height="1209"
                        className="w-full lg:absolute"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
