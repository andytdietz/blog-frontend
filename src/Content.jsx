import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Andy's fantastic blogging journey",
      body: "Giving the people what they want",
      image_url:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Why am I writing a blog?",
      body: "Again, it's what the people want",
      image_url:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "What will I write about?",
      body: "Musings from my favorite blog by Creed Bratton. https://creedthoughtsgov.com/",
      image_url:
        "https://ew.com/thmb/0jLj0ITrfMEz6ulIiPCRoIzzPXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-office-2000-655c537bfac04025aef24d328f0f9b88.jpg",
    },
    {
      id: 4,
      title: "So you think you can blog?",
      body: "Well, similar to starting a podcast, anyone can do it, but most people shouldn't!",
      image_url: "https://miro.medium.com/v2/resize:fit:1400/1*ID0PcNdie73qAgK_iOP8YQ.png",
    },
  ];
  return (
    <>
      <PostsNew />
      <PostsIndex posts={posts} />
    </>
  );
}
