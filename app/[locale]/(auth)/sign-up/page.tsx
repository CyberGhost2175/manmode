import {Metadata} from 'next'
import {redirect} from 'next/navigation'

import {auth} from '@/auth'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

import SignUpForm from './signup-form'
import {useTranslations} from "next-intl";
import {getTranslations} from "next-intl/server";

export const metadata: Metadata = {
    title: 'Sign Up',
}

export default async function SignUpPage(props: {
    searchParams: Promise<{
        callbackUrl: string
    }>
}) {
    const searchParams = await props.searchParams

    const {callbackUrl} = searchParams

    const session = await auth()
    if (session) {
        return redirect(callbackUrl || '/')
    }
    const t = await getTranslations ('Register');
    return (
        <div className='w-full'>
            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl'>{t('title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <SignUpForm/>
                </CardContent>
            </Card>
        </div>
    )
}
