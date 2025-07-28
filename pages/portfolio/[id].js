import { useRouter } from "next/router";

export default function PortfolioProjectPage({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
}
