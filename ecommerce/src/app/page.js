import { getStoryblokApi } from '@/app/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export async function fetchData() {
	const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'products'
  });
  return data;
}

export default async function Home() {
  const { data } = await fetchData();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-10">E-Commerce</h1>
      <ul className="mt-20 grid grid-cols-2 gap-10">
          {data.stories.map((story) => (
            <li key={story.id}>
              <StoryblokStory story={story} />
            </li>
          )
        )}
      </ul>
    </main>
  );
}