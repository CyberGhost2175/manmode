'use client'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.actions'
import {useTranslations} from "next-intl";

export function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    const t=useTranslations('Login')
    return (
      <Button disabled={pending} className='w-full' variant='outline'>
        {pending ? 'Redirecting to Google...' : t('signGoogle')}
      </Button>
    )
  }
  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}
