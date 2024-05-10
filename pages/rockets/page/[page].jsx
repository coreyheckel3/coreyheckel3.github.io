import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getRocketData } from '..';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getRocketData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}

const RocketsPage = ({ data, pageNumber }) => {
  const router = useRouter();
  const { page } = router.query;
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    if (data && data.docs) {
      setRockets(data.docs);
    }
  }, [data]);

  useEffect(() => {
    if (data.totalPages && pageNumber > data.totalPages) {
      router.push('/404');
    }
  }, [data.totalPages, pageNumber, router]);

  return (
    <div>
      <h1>List of Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Link href={`/rockets/${rocket.id}`} as={`/rockets/${rocket.id}`} passHref>
              {rocket.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
      {pageNumber > 1 && (
        <Link href={`/rockets/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        )}
        {pageNumber > 1 && ' | '}
        {data.nextPage && (
        <Link href={`/rockets/page/${pageNumber + 1}`}>
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

export default RocketsPage;
 