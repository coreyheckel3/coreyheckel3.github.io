import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
export default function Ships({data, pageNumber}) {
  return (
    <>
      <Head>
        <title>Ships</title>
      </Head>
      <h1>List of Ships</h1>
      <ul>
        {data.docs.map((ship) => (
          <li key={ship.id}>
            <Link href={`/ships/${ship.id}`} as={`/ships/${ship.id}`} passHref>
              {ship.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/ships/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        {' | '}
        <Link href={`/ships/page/${pageNumber + 1}`}>
          Next Page
        </Link>
      </p>
    </>
  );
}

export async function getShipData(pageNumber) {
  const limit = 10
  const { data } = await axios.post('https://api.spacexdata.com/v4/ships/query', {
        query: {},
        options: {
          limit,
          page: pageNumber
        },
      });
  return {data, pageNumber};
}
export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getShipData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}