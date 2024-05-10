import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
export default function Rockets({data, pageNumber}) {
  return (
    <>
      <Head>
        <title>Rockets</title>
      </Head>
      <h1>List of Rockets</h1>
      <ul>
        {data.docs.map((rocket) => (
          <li key={rocket.id}>
            <Link href={`/rockets/${rocket.id}`} as={`/rockets/${rocket.id}`} passHref>
              {rocket.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/rockets/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        {' | '}
        <Link href={`/rockets/page/${pageNumber + 1}`}>
          Next Page
        </Link>
      </p>
    </>
  );
}

export async function getRocketData(pageNumber) {
  const limit =10;
  const { data } = await axios.post('https://api.spacexdata.com/v4/rockets/query', {
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
  const { data, pageNumber: fetchedPageNumber } = await getRocketData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}