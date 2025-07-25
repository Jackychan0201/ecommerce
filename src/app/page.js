import { getStoryblokApi } from '@/app/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { Header } from '@/components/ui/Header';

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
      <Header/>
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
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