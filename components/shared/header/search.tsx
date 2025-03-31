import { SearchIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { getAllCategories } from '@/lib/actions/product.actions'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { getSetting } from '@/lib/actions/setting.actions'
import { getTranslations } from 'next-intl/server'

export default async function Search() {
  const {
    site: { name },
  } = await getSetting()
  const categories = await getAllCategories()

  const t = await getTranslations()
  return (
      
    <form action='/search' method='GET' className='flex   m-auto items-end  items-stretch h-10'>
     
      <Input
        className='flex-1 rounded-none rounded-l-md dark:border-gray-200 bg-gray-100 text-black text-base h-full'
        placeholder={t('Header.Search Site', { name })}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2 '
      >
          <SearchIcon className='w-6 h-6' />
        </button>
      </form>
  )
}
