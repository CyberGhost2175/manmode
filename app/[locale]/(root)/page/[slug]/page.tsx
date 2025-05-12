import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import { getWebPageBySlug } from '@/lib/actions/web-page.actions'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params

  const { slug } = params

  const webPage = await getWebPageBySlug(slug)
  if (!webPage) {
    return { title: 'Web page not found' }
  }
  return {
    title: webPage.title,
  }
}

export default async function ProductDetailsPage(props: {
    params: Promise<{ slug: string, locale?: string }>
    searchParams: Promise<{ page: string; color: string; size: string }>
}) {
    const params = await props.params;
    const { slug, locale = 'en' } = params;


    const webPage = await getWebPageBySlug(slug, locale);

    if (!webPage) notFound();

    const bgClass =
    slug === 'about-us'
      ? 'bg-about'
      : slug === 'customer-service'
      ? 'bg-customer'
      : slug === 'help'
      ? 'bg-help'
      : '';

    return (
      <div className={`min-h-screen ${bgClass} flex items-center justify-center`}>
        <div className="relative w-full max-w-3xl my-12">
          <div className="absolute inset-0 bg-black/70 z-0 rounded-lg" />
          <div className="relative z-10 p-8">
            <h1 className="h1-bold py-4 text-center text-white">{webPage.title}</h1>
            <section className="text-justify text-lg web-page-content text-white font-bold">
              <ReactMarkdown>{webPage.content}</ReactMarkdown>
            </section>
          </div>
        </div>
      </div>
    );
}

