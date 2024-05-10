import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLaunchpadData } from '..';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getLaunchpadData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}

const LaunchpadsPage = ({ data, pageNumber }) => {
  const router = useRouter();
  const { page } = router.query;
  const [launchpads, setLaunchpads] = useState([]);

  useEffect(() => {
    if (data && data.docs) {
      setLaunchpads(data.docs);
    }
  }, [data]);

  useEffect(() => {
    if (data.totalPages && pageNumber > data.totalPages) {
      router.push('/404');
    }
  }, [data.totalPages, pageNumber, router]);

  return (
    <div>
      <h1>List of Launchpads</h1>
      <ul>
        {launchpads.map((launchpad) => (
          <li key={launchpad.id}>
            <Link href={`/launchpads/${launchpad.id}`} as={`/launchpads/${launchpad.id}`} passHref>
              {launchpad.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
      {pageNumber > 1 && (
        <Link href={`/launchpads/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
      )}
        {pageNumber > 1 && ' | '}
        {data.nextPage && (
        <Link href={`/launchpads/page/${pageNumber + 1}`}>
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

export default LaunchpadsPage;
 