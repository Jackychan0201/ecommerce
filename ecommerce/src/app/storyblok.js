import { storyblokInit, apiPlugin } from "@storyblok/react";
import { Product } from "@/components/ui/Product";

export const getStoryblokApi = storyblokInit({
  accessToken: "Vy5QrL1C9KQTApwrd330DQtt",
  use: [apiPlugin],
  components: {
    product: Product
  }
});
