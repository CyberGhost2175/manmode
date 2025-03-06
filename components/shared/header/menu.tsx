import {ShoppingCartIcon, User } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
    return (
        <div className='flex justify-end'>
            <nav className='flex gap-3 w-full'>
                <Link href='/signin' className='flex items-center header-button'>
                    <User/>
                    <span className='font-bold'>Войти</span>
                </Link>

                <Link href='/cart' className='header-button'>
                    <div className="flex items-end">

                        <ShoppingCartIcon/>
                        Корзина
                    </div>
                </Link>
            </nav>
        </div>
    )
}