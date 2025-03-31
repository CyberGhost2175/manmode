import useSettingStore from '@/hooks/use-setting-store'
import Link from 'next/link'
import React from 'react'
import {useTranslations} from "next-intl";

export default function CheckoutFooter() {
    const t = useTranslations('Checkout')
  const {
    setting: { site },
  } = useSettingStore()
  return (
    <div className='border-t-2 space-y-2 my-4 py-4'>
      <p>
          {t('help')} <Link href='/page/help'>{t('helpCenter')}</Link> или{' '}
        <Link href='/page/contact-us'>{t('contactUs')}</Link>{' '}
      </p>
      <p>
         {site.name}
        &apos;s <Link href='/page/privacy-policy'>{t('privacyPolicy')}</Link> и
        <Link href='/page/conditions-of-use'> {t('termsOfUse')}</Link>.
      </p>
      <p>
          {t('returnItem')}.{' '}
        <Link href='/page/returns-policy'>
          Смотрите {site.name}&apos;s {t('returnPolicy')}.
        </Link>
      </p>
    </div>
  )
}
