import { getStoryblokApi } from '@/app/storyblok';
import  ProductCard  from './ProductCard';

export const ProductCatalogSection = ({ stories }) => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <img className="w-full h-[10%]" src="https://www.ci.harrisburg.or.us/sites/default/files/styles/full_node_primary_extra_wide/public/imageattachments/library/page/5551/library_lego_banner.jpg?itok=Lv_p2H19"></img>
      <h1 className="mt-8 text-sm font-bold text-center sm:text-sm md:text-base lg:text-xl text-gray-800">Main catalog</h1>
      <h2 className="text-2xs text-center sm:text-xs md:text-sm lg:text-base text-gray-400 italic">Take a look at what we have for you</h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 md:gap-12 xl:gap-15">
        {stories.map((story) => (
          <li key={story.id}>
            <ProductCard blok={story.content} slug={story.slug.split('/').pop()} />
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
