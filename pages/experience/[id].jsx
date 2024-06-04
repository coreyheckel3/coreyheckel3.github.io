import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import Link from 'next/link';
import Navigation from '/components/Navigation';

// Example of importing JSON directly
// Import your JSON file if it's not being served as static content
import experienceData from '/data/experienceData.json'; 

const Experience = () => {
  const [experience, setExperience] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log('Experience useEffect fired with project:', id);
    // Check if experienceData is available and not undefined
    if (experienceData) {
      const foundExperience = experienceData.find(p => p.id === id);
      if (foundExperience) {
        setExperience(foundExperience);
        setLoading(false);
        console.log(foundExperience);
      }
    }
  }, [id]);

  if (loading) {
    return <div><h2>Loading...</h2></div>;
  } else if (!experience) {
    return <div><h2>Experience not found.</h2></div>;
  } else {
    return (
      <>
      <Navigation />
      
      <Card
        variant='outlined'
        sx={{
          maxWidth: 550,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 5,
          border: '1px solid #1e8678',
          boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
        }}
      >
        <CardHeader
          title={experience.title}
          subheader={`${experience.startDate} - ${experience.endDate}`}
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
                <dt className='title'>Position:</dt>
                <dd>{experience.position}</dd>
              </p>
              <p>
                <dt className='title'>Description:</dt>
                <dd>{experience.description}</dd>
              </p>
            </dl>
            <Link href='/experience'>Back to all Experience...</Link>
          </Typography>
        </CardContent>
      </Card>
      </>
    );
  }
};

export default Experience;
