import { useRouter } from "next/router";

export default function ClientProjectsPage({ Component, pageProps }) {
  const router = useRouter();

  function loadClientProjects() {
    // router.push("/clients/test/projectA"); // programmatic navigation
    router.push({
      pathname: "/clients/[clientId]/[projectId]",
      query: {
        clientId: "test",
        projectId: "projectA",
      },
    });
  }

  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadClientProjects}>Load project</button>
    </div>
  );
}
