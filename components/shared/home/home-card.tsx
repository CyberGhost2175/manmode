import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Card, CardContent, CardFooter} from '@/components/ui/card'
import {useTranslations} from "next-intl";
type CardItem = {
    title: string
    link: { text: string; href: string }
    items: {
        name: string
        items?: string[]
        image: string
        href: string
    }[]
}
type Item = {
    name: string;
    items?: string[];
    image: string;
    href: string;
};

export function HomeCard({cards}: { cards: CardItem[]  }) {
    const t = useTranslations('Categories')
    return (
        <div className='space-y-8 '>

            {/* Категории */}
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 place-items-center  ' style={{
                margin: '0 auto',
                width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                {cards[0].items.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className='relative aspect-[4/3] w-full block overflow-hidden rounded-md h-[170px]'
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='object-cover brightness-50'
                        />
                        <span
                            className='absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold'>
              { t(item.name)}
            </span>
                    </Link>
                ))}
            </div>

            {/* Новые поступления и бестселлеры */}
            <div className=' grid-cols-1 md:grid-cols-2 gap-4 flex justify-center items-center'>
                {cards.slice(1, -1).map((card: CardItem) => (
                    <Card key={card.title} className='bg-white  shadow w-full '>
                        <CardContent className='p-6'>
                            <h3 className='text-xl font-bold mb-4 text-center'>{card.title}</h3>
                            <div className='grid grid-cols-2 gap-4 place-items-center'>
                                {card.items.slice(0, 4).map((item:Item ) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className='flex flex-col items-center gap-2 w-full max-w-[200px]'
                                    >
                                        <div className='relative aspect-square w-full'>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className='object-contain'
                                            />
                                        </div>
                                        <p className='text-sm text-center line-clamp-2 w-full'>
                                            {item.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            {card.link && (
                                <div className='mt-4 text-center'>
                                    <Link
                                        href={card.link.href}
                                        className='inline-block text-primary hover:underline '
                                    >
                                        {card.link.text}
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className='bg-white rounded-lg shadow  w-full '>
                <CardContent className='p-6  '>
                    <h3 className='text-xl font-bold mb-4 text-center' >{cards[cards.length - 1].title}</h3>
                    <div className='flex grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4
                     justify-center items-center w-full place-items-center'>
                        {cards[cards.length - 1].items.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className='flex flex-col items-center gap-2 w-full'
                            >
                                <div className='relative aspect-square w-full max-w-[180px]'>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className='object-contain'
                                    />
                                </div>
                                <p className='text-sm text-center line-clamp-2 w-full'>
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                    {cards[cards.length - 1].link && (
                        <div className='mt-4 text-center place-items-center'>
                            <Link
                                href={cards[cards.length - 1].link.href}
                                className='inline-block text-primary hover:underline text-center'
                            >
                                {cards[cards.length - 1].link.text}
                            </Link>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

    )
}