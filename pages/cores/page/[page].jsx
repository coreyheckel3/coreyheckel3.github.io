import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCoreData } from '..';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getCoreData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}

const CoresPage = ({ data, pageNumber }) => {
  const router = useRouter();
  const { page } = router.query;
  const [cores, setCores] = useState([]);

  useEffect(() => {
    if (data && data.docs) {
      setCores(data.docs);
    }
  }, [data]);

  useEffect(() => {
    if (data.totalPages && pageNumber > data.totalPages) {
      router.push('/404');
    }
  }, [data.totalPages, pageNumber, router]);

  return (
    <div>
      <h1>List of Cores</h1>
      <ul>
        {cores.map((core) => (
          <li key={core.id}>
            <Link href={`/cores/${core.id}`} as={`/cores/${core.id}`} passHref>
              {core.serial}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        {pageNumber > 1 && (
          <Link href={`/cores/page/${pageNumber - 1}`}>
            Previous Page
          </Link>
        )}
        {pageNumber > 1 && ' | '}
        {data.nextPage && (
          <Link href={`/cores/page/${pageNumber + 1}`}>
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

export default CoresPage;
