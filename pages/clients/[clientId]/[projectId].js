import { useRouter } from "next/router";

export default function SelectedClientProjectPage({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>SelectedClientProjectPage</h1>
    </div>
  );
}
