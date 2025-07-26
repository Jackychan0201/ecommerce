import { storyblokInit, apiPlugin } from "@storyblok/react";
import { ProductCard } from "@/components/ui/ProductCard";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_API,
  use: [apiPlugin],
  components: {
    product: ProductCard
  }
});
