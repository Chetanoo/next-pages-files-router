import { useRouter } from "next/router";

export default function BlogPostsPage({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.query); // logs array

  return (
    <div>
      <h1>BlogPostsPage</h1>
    </div>
  );
}
