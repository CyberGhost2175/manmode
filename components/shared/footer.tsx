'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
    return (
        <footer className='bg-black  text-white underline-link'>
            <div className='w-full'>
                <Button
                    variant='ghost'
                    className='bg-gray-800 w-full  rounded-none '
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <ChevronUp className='mr-2 h-4 w-4' />
                    Вверх
                </Button>
            </div>
            <div className='p-4'>
                <div className='flex justify-center  gap-3 text-sm'>
                    <Link href='/app/(home)/page.tsx/conditions-of-use'>Условия использования</Link>
                    <Link href='/app/(home)/page.tsx/privacy-policy'> Уведомление о конфиденциальности</Link>
                    <Link href='/app/(home)/page.tsx/help'>Помощь</Link>
                </div>
                <div className='flex justify-center text-sm'>
                    <p> © 2025, {APP_NAME}</p>
                </div>
                <div className='mt-8 flex justify-center text-sm text-gray-400'>
                    улица Кабанбай Батыра 55, Астана, Казахстан, | +7 (707) 707-0007
                </div>
            </div>
        </footer>
    )
}