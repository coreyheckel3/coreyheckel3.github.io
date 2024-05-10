import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPayloadData } from '..';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
  const pageNumber = parseInt(query.page || 1, 10);
  const { data, pageNumber: fetchedPageNumber } = await getPayloadData(pageNumber);
  return {
    props: { data, pageNumber: fetchedPageNumber },
  };
}

const PayloadsPage = ({ data, pageNumber }) => {
  const router = useRouter();
  const { page } = router.query;
  const [payloads, setPayloads] = useState([]);

  useEffect(() => {
    if (data && data.docs) {
      setPayloads(data.docs);
    }
  }, [data]);

  useEffect(() => {
    if (data.totalPages && pageNumber > data.totalPages) {
      router.push('/404');
    }
  }, [data.totalPages, pageNumber, router]);

  return (
    <div>
      <h1>List of Payloads</h1>
      <ul>
        {payloads.map((payload) => (
          <li key={payload.id}>
            <Link href={`/payloads/${payload.id}`} as={`/payloads/${payload.id}`} passHref>
              {payload.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
      {pageNumber > 1 && (
        <Link href={`/payloads/page/${pageNumber - 1}`}>
          Previous Page
        </Link>
        )}
        {pageNumber > 1 && ' | '}
        {data.nextPage && (
        <Link href={`/payloads/page/${pageNumber + 1}`}>
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

export default PayloadsPage;
 