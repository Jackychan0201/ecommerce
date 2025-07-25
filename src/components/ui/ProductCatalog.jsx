import { getStoryblokApi } from '@/app/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export const ProductCatalogSection = ({ stories }) => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <h1>Main catalog</h1>
      <h2>Take a look at what we have for you</h2>
      <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 md:gap-12 xl:gap-15">
        {stories.map((story) => (
          <li key={story.id}>
            <StoryblokStory story={story} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export async function ProductCatalog() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'products',
  });

  return <ProductCatalogSection stories={data.stories} />;
}
