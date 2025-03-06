import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { APP_NAME } from '@/lib/constants'
import { Button } from "@/components/ui/button";

export default async function Search() {
    return (
        <form action='/search' method='GET' className='flex items-stretch h-10'>
            <Input
                className='flex-1 rounded-l-md rounded-r-none  bg-transparent
                text-white text-base dark:border-gray-300  h-full ' style={{ border: "0.2px solid grey" }}
                placeholder={`Поиск  ${APP_NAME}`}
                name='q'
                type='search'
            />
            <Button
                type='button'
                className='bg-primary text-primary-foreground cursor-pointer
                text-black h-full rounded-l-none   px-3 py-2 bg-orange-400'
            >
                <SearchIcon className='w-6 h-6' />
            </Button>
        </form>
    );
}
