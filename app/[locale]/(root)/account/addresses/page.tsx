'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {useTranslations} from "next-intl";

export default function AddressesPage() {
    const [addresses, setAddresses] = useState<{ street: string; city: string; zip: string }[]>([])
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')

    const handleAddAddress = () => {
        if (!street || !city || !zip) return // Проверка на пустые поля
        setAddresses([...addresses, { street, city, zip }])
        setStreet('')
        setCity('')
        setZip('')
    }
const t= useTranslations('Account')
    return (
        <div className="container py-10">
            <h1 className="text-2xl font-bold mb-6">{t('MyAddresses')}</h1>

            {/* Форма для добавления адреса */}
            <Card className="mb-6">
                <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">{t('AddNewAddress')}</h2>

                    <div className="grid gap-4">
                        <div>
                            <Label htmlFor="street">{t('Street')}</Label>
                            <Input id="street" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="city">{t('AddressDetails.City')}</Label>
                            <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="zip">{t('AddressDetails.PostalCode')}</Label>
                            <Input id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                        </div>
                        <Button onClick={handleAddAddress} className="w-full">{t('AddNewAddress')}</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Список добавленных адресов */}
            {addresses.length > 0 && (
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
                        <ul className="space-y-2">
                            {addresses.map((address, index) => (
                                <li key={index} className="border rounded-lg p-4">
                                    <p><strong>Street:</strong> {address.street}</p>
                                    <p><strong>City:</strong> {address.city}</p>
                                    <p><strong>Postal Code:</strong> {address.zip}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
