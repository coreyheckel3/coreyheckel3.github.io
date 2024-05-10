import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Launches({ data, pageNumber }) {
  console.log('Data:', data); // Logging data to inspect its structure
  return (
    <>
      <Head>
        <title>Launches</title>
      </Head>
      <h1>List of Launches</h1>
      <ul>
        {data.docs.map((launch) => (
          <li key={launch.id}>
            <Link href={`/launches/${launch.id}`} as={`/launches/${launch.id}`} passHref>
              {launch.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/launches/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        {' | '}
        <Link href={`/launches/page/${pageNumber + 1}`}>
          Next Page
        </Link>
      </p>
    </>
  );
}

export async function getLaunchData(pageNumber) {
  const limit = 10;
  const { data } = await axios.post('https://api.spacexdata.com/v4/launches/query', {
    query: {},
    options: {
      limit,
      page: pageNumber,
    },
  });
  return { data, pageNumber };
}

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getLaunchData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}
