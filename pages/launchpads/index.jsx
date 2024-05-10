import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
export default function launchpads({ data, pageNumber }) {
  return (
    <>
      <Head>
        <title>Launchpads</title>
      </Head>
      <h1>List of Launchpads</h1>
      <ul>
        {data.docs.map((launchpad) => (
          <li key={launchpad.id}>
            <Link href={`/launchpads/${launchpad.id}`} as={`/launchpads/${launchpad.id}`} passHref>
              {launchpad.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/launchpads/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        {' | '}
        <Link href={`/launchpads/page/${pageNumber + 1}`}>
          Next Page
        </Link>
      </p>
    </>
  );
}

export async function getLaunchpadData(pageNumber) {
  const limit = 10;
  const { data } = await axios.post('https://api.spacexdata.com/v4/launchpads/query', {
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
  const { data, pageNumber: fetchedPageNumber } = await getLaunchpadData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}