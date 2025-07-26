import { getStoryblokApi } from '@/app/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { ProductContent } from '@/components/ui/ProductContent'
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'products',
  });

  return data.stories.map((story) => ({
    slug: story.slug.split('/').pop(),
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/products/${slug}`, {
      version: 'draft',
    });

    return (
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-grow flex flex-col items-center p-8">
          <ProductContent blok={data.story.content} />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
