import { storyblokInit, apiPlugin, getStoryblokApi as getSbApi } from "@storyblok/react";
import { ProductCard } from "@/components/ui/ProductCard";

storyblokInit({
  accessToken: "exQ721uiv3yb7PziuRR9Fgtt",
  use: [apiPlugin],
  components: {
    product: ProductCard
  },
});

export const getStoryblokApi = () => getSbApi();
