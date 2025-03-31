'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/db'
import WebPage, { IWebPage } from '@/lib/db/models/web-page.model'
import { formatError } from '@/lib/utils'

import { WebPageInputSchema, WebPageUpdateSchema } from '../validator'
import { z } from 'zod'

// CREATE
export async function createWebPage(data: z.infer<typeof WebPageInputSchema>) {
  try {
    const webPage = WebPageInputSchema.parse(data)
    await connectToDatabase()
    await WebPage.create(webPage)
    revalidatePath('/admin/web-pages')
    return {
      success: true,
      message: 'WebPage created successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}

// UPDATE
export async function updateWebPage(data: z.infer<typeof WebPageUpdateSchema>) {
  try {
    const webPage = WebPageUpdateSchema.parse(data)
    await connectToDatabase()
    await WebPage.findByIdAndUpdate(webPage._id, webPage)
    revalidatePath('/admin/web-pages')
    return {
      success: true,
      message: 'WebPage updated successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
// DELETE
export async function deleteWebPage(id: string) {
  try {
    await connectToDatabase()
    const res = await WebPage.findByIdAndDelete(id)
    if (!res) throw new Error('WebPage not found')
    revalidatePath('/admin/web-pages')
    return {
      success: true,
      message: 'WebPage deleted successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}

// GET ALL
export async function getAllWebPages() {
  await connectToDatabase()
  const webPages = await WebPage.find()
  return JSON.parse(JSON.stringify(webPages)) as IWebPage[]
}
export async function getWebPageById(webPageId: string) {
  await connectToDatabase()
  const webPage = await WebPage.findById(webPageId)
  return JSON.parse(JSON.stringify(webPage)) as IWebPage
}

// GET ONE PAGE BY SLUG
export async function getWebPageBySlug(slug: string, locale:string ='en') {
  await connectToDatabase();

  // Убираем возможный ведущий слеш в locale
  const cleanLocale = locale.replace(/^\//, '');

  // Формируем slug в зависимости от локали
  const localizedSlug = cleanLocale === 'ru' || cleanLocale === 'kz'
      ? `${slug}-${cleanLocale}`
      : slug; // Для английского slug остается таким же

  console.log(`Searching for page with slug: ${localizedSlug}`);

  const webPage = await WebPage.findOne({ slug: localizedSlug, isPublished: true });

  if (!webPage) {
    console.error(`WebPage not found for slug: ${localizedSlug}`);
    return null; // Возвращаем null вместо ошибки
  }

  return JSON.parse(JSON.stringify(webPage)) as IWebPage;
}
