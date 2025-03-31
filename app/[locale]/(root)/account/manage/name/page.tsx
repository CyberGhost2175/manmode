import { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'

import { auth } from '@/auth'

import { ProfileForm } from './profile-form'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { getSetting } from '@/lib/actions/setting.actions'
import {getMessages} from "next-intl/server";
import {createTranslator} from "next-intl";

const PAGE_TITLE = 'Change Your Name'
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

export default async function ProfilePage() {
  const messages = await getMessages();
  const t = createTranslator({ locale: "ru", messages,namespace: "Account" });
  const session = await auth()
  return (
    <div className='mb-24'>
      <SessionProvider session={session}>
        <div className='flex gap-2 '>
          <Link href='/account'>{t('title')}</Link>
          <span>›</span>
          <Link href='/account/manage'>{t('loginSecurity')}</Link>
          <span>›</span>
          <span>{t('editName')}</span>
        </div>
        <h1 className='h1-bold py-4'>{t('editName')}</h1>
        <Card className='max-w-2xl'>
          <CardContent className='p-4 flex justify-between flex-wrap'>
            <p className='text-sm py-2'>
              {t('condition')}
            </p>
            <ProfileForm />
          </CardContent>
        </Card>
      </SessionProvider>
    </div>
  )
}
