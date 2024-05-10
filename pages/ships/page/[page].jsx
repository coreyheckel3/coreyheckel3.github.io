import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getShipData } from '..';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getShipData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}

const ShipsPage = ({ data, pageNumber }) => {
  const router = useRouter();
  const { page } = router.query;
  const [ships, setShips] = useState([]);

  useEffect(() => {
    if (data && data.docs) {
      setShips(data.docs);
    }
  }, [data]);

  useEffect(() => {
    if (data.totalPages && pageNumber > data.totalPages) {
      router.push('/404');
    }
  }, [data.totalPages, pageNumber, router]);

  return (
    <div>
      <h1>List of Ships</h1>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>
            <Link href={`/ships/${ship.id}`} as={`/ships/${ship.id}`} passHref>
              {ship.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
      {pageNumber > 1 && (
        <Link href={`/ships/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        )}
        {pageNumber > 1 && ' | '}
        {data.nextPage && (
        <Link href={`/ships/page/${pageNumber + 1}`}>
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

export default ShipsPage;
 