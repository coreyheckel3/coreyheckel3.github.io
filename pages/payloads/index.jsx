import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
export default function Payloads({data, pageNumber}) {
  return (
    <>
      <Head>
        <title>Payloads</title>
      </Head>
      <h1>List of Payloads</h1>
      <ul>
        {data.docs.map((payload) => (
          <li key={payload.id}>
            <Link href={`/payloads/${payload.id}`} as={`/payloads/${payload.id}`} passHref>
              {payload.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/payloads/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        {' | '}
        <Link href={`/payloads/page/${pageNumber + 1}`}>
          Next Page
        </Link>
      </p>
    </>
  );
}

export async function getPayloadData(pageNumber) {
  const limit = 10;
  const { data } = await axios.post('https://api.spacexdata.com/v4/payloads/query', {
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
  const { data, pageNumber: fetchedPageNumber } = await getPayloadData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}