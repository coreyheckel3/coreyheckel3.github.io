import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader
} from '@mui/material';

const Core = () => {
  const [coreData, setCoreData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const  coreId = {id}

  useEffect(() => {
    console.log('Core useEffect fired with id:', coreId.id);
    async function fetchData() {
      try {
        const {data: core} = await axios.get(
          `https://api.spacexdata.com/v4/cores/${coreId.id}`
        );
        setCoreData(core);
        setLoading(false);
        console.log(core);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [coreId.id]);

  if (loading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  } else {
    return (
      <Card
        variant='outlined'
        sx={{
          maxWidth: 550,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 5,
          border: '1px solid #1e8678',
          boxShadow:
            '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
        }}
      >
        <CardHeader
          title={coreData.serial}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />

        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='span'
            sx={{
              borderBottom: '1px solid #1e8678',
              fontWeight: 'bold'
            }}
          >
            <dl>
              <p>
                <dt className='title'>Block:</dt>
                {coreData && coreData.block ? (
                  <dd>{coreData.block}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Reuses:</dt>
                {coreData && coreData.reuse_count ? (
                  <dd>{coreData.reuse_count}</dd>
                  ) : (
                    <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>RTLS Attempts:</dt>
                {coreData && coreData.rtls_attempts ? (
                  <dd>{coreData.rtls_attempts}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>RTLS Landings:</dt>
                {coreData && coreData.rtls_landings ? (
                  <dd>{coreData.rtls_landings}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>ASDS Attempts:</dt>
                {coreData && coreData.asds_attempts ? (
                  <dd>{coreData.asds_attempts}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>ASDS Landings:</dt>
                {coreData && coreData.asds_landings ? (
                  <dd>{coreData.asds_landings}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Last Update:</dt>
                {coreData &&  coreData.last_update ? (
                  <dd>{coreData.last_update}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
              <p>
                <dt className='title'>Launches:</dt>
                {coreData && coreData.launches && coreData.launches.length > 0 ? (
                <dd>
                {coreData.launches.map((launch, index) => (
                    <Link key={index} href={`/launches/${launch}`}>{launch}</Link>
                    ))}
                    </dd>
                ) : (
                    <dd>N/A</dd>
                )}
                </p>
                <p>
                <dt className='title'>Status:</dt>
                {coreData && coreData.status ? (
                  <dd>{coreData.status}</dd>
                ) : (
                  <dd>N/A</dd>
                )}
              </p>
            </dl>
            <Link href='/cores/page/0'>Back to all Cores...</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default Core;