import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Cores({ data, pageNumber }) {
  console.log('Data:', data); // Logging data to inspect its structure
  return (
    <>
      <Head>
        <title>Cores</title>
      </Head>
      <h1>List of Cores</h1>
      <ul>
        {data.docs.map((core) => (
          <li key={core.id}>
            <Link href={`/cores/${core.id}`} as={`/cores/${core.id}`} passHref>
              {core.serial}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/cores/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        {' | '}
        <Link href={`/cores/page/${pageNumber + 1}`}>
          Next Page
        </Link>
        <Link href={'/'}>
          Home
        </Link>
      </p>
    </>
  );
}

export async function getCoreData(pageNumber) {
  const limit = 10;
  const { data } = await axios.post('https://api.spacexdata.com/v4/cores/query', {
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
  const { data, pageNumber: fetchedPageNumber } = await getCoreData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}
