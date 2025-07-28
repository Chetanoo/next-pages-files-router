import Link from "next/link";

export default function ClientsPage({ Component, pageProps }) {
  const clients = [
    { name: "testname", id: "testname" },
    { name: "testname2", id: "testname2" },
  ];

  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map(({ name, id }) => (
          <li key={id}>
            {/*<Link href={`/clients/${id}`}>{name}</Link>*/}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id,
                },
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
