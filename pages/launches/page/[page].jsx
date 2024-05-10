import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLaunchData } from '..';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getLaunchData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}

const LaunchesPage = ({ data, pageNumber }) => {
  const router = useRouter();
  const { page } = router.query;
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    if (data && data.docs) {
      setLaunches(data.docs);
    }
  }, [data]);

  useEffect(() => {
    if (data.totalPages && pageNumber > data.totalPages) {
      router.push('/404');
    }
  }, [data.totalPages, pageNumber, router]);

  return (
    <div>
      <h1>List of Launches</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            <Link href={`/launches/${launch.id}`} as={`/launches/${launch.id}`} passHref>
              {launch.name} - {launch.flight_number}
            </Link>
          </li>
        ))}
      </ul>
      <p>
      {pageNumber > 1 && (
        <Link href={`/launches/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
      )}
        {pageNumber > 1 && ' | '}
        {data.nextPage && (
        <Link href={`/launches/page/${pageNumber + 1}`}>
          Next Page
        </Link>
        )}
        {' | '}
        <Link href={'/'}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default LaunchesPage;
