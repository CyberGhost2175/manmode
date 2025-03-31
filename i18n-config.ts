export const i18n = {
  locales: [
    { code: 'en-US', name: 'English', icon: '🇺🇸' },
    { code: 'ru', name: 'Русский', icon: 'ru' },
    { code: 'kz', name: 'Казахский', icon: 'kz' },
  ],
  defaultLocale: 'ru-RU',
}

export const getDirection = (locale: string) => {
  return locale === 'kz' ? 'ltr' : 'ltr'
}
export type I18nConfig = typeof i18n
export type Locale = I18nConfig['locales'][number]
