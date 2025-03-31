import BrowsingHistoryList from '@/components/shared/browsing-history-list'
import { Card, CardContent } from '@/components/ui/card'
import { Home, PackageCheckIcon, User } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import {useTranslations} from "next-intl";

const PAGE_TITLE = 'Your Account'
export const metadata: Metadata = {
  title: PAGE_TITLE,
}
export default function AccountPage() {
  const t = useTranslations('Account')
  return (
    <div>
      <h1 className='h1-bold py-4'>{t('title')}</h1>
      <div className='grid md:grid-cols-3 gap-4 items-stretch'>
        <Card>
          <Link href='/account/orders'>
            <CardContent className='flex items-start gap-4 p-6'>
              <div>
                <PackageCheckIcon className='w-12 h-12' />
              </div>
              <div>
                <h2 className='text-xl font-bold'>{t('orders')}</h2>
                <p className='text-muted-foreground'>
                  {t('descOrders')}
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card>
          <Link href='/account/manage'>
            <CardContent className='flex items-start gap-4 p-6'>
              <div>
                <User className='w-12 h-12' />
              </div>
              <div>
                <h2 className='text-xl font-bold'>{t('loginSecurity')}</h2>
                <p className='text-muted-foreground'>
                  {t('loginSecurityDesc')}
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card>
          <Link href='/account/addresses'>
            <CardContent className='flex items-start gap-4 p-6'>
              <div>
                <Home className='w-12 h-12' />
              </div>
              <div>
                <h2 className='text-xl font-bold'> {t('Addresses')}</h2>
                <p className='text-muted-foreground'>
                  {t('AddressesDesc')}
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
      <BrowsingHistoryList className='mt-16' />
    </div>
  )
}
