import React from 'react';
import Link from 'next/link';
import { Button, Card } from 'flotiq-components-react';
import Image from 'next/image';

const ProductCard = ({ name, description, price, productImage, buttonLabel, slug }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['!bg-transparent mb-5 cursor-pointer']}
    >
        <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
            <a href="replace" className="w-full image-wrapper">
                <Image
                    src={productImage}
                    width="702"
                    height="924"
                    alt={name}
                    objectFit="cover"
                />
            </a>
        </Link>
        <Card.Body additionalClasses={['!px-0 !pt-3']}>
            <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
                <a href="replace">
                    <Card.Title additionalClasses={['flex justify-between !font-medium !text-2xl']}>
                        <span>{name}</span>
                        <span>
                            $
                            {price}
                        </span>
                    </Card.Title>
                    <div
                        className="line-clamp-2 mt-2 mb-3 text-lg font-light"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </a>
            </Link>
            <Button
                label={buttonLabel}
                rounded="none"
                size="sm"
                additionalClasses={['bg-secondary w-full justify-center text-xl font-light snipcart-add-item']}
                data-item-id={slug}
                data-item-price={price}
                data-item-image={productImage}
                data-item-name={name}
                data-item-url="/"
            />
        </Card.Body>
    </Card>
);

export default ProductCard;
