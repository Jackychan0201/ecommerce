import { storyblokInit, apiPlugin, getStoryblokApi as getSbApi } from "@storyblok/react";
import { ProductCard } from "@/components/ui/ProductCard";

storyblokInit({
  accessToken: process.env.STORYBLOK_API,
  use: [apiPlugin],
  components: {
    product: ProductCard
  },
});

export const getStoryblokApi = () => getSbApi();
