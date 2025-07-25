import { storyblokInit, apiPlugin } from "@storyblok/react";
import { ProductCard } from "@/components/ui/ProductCard";

export const getStoryblokApi = storyblokInit({
  accessToken: "Vy5QrL1C9KQTApwrd330DQtt",
  use: [apiPlugin],
  components: {
    product: ProductCard
  }
});
