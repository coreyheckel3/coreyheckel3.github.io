import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import experienceData from '/data/experienceData.json'; // Path to your local JSON file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '/components/styles.css'
import CardMedia from '@mui/material/CardMedia';
import Footer2 from '/components/Footer2';


import Navigation from '/components/Navigation';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Navigation />
      <h1 className='header'>Professional Experience</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'left', marginLeft: '75px'}}>
        {experienceData.map((experience) => (
          <Card className='cardThing' key={experience.id} sx={{ width: 345 }}>
            <CardActionArea className='cardText' component={Link} href={`/experience/${experience.id}`} sx={{ textDecoration: 'none' }}>
            <CardMedia
                component="img"
                height="220"
                image={experience.image}
                alt={experience.title}
              />
              <CardContent className='card'>
                <Typography className='cardText' gutterBottom variant="h5" component="div">
                  {experience.title}
                </Typography>
                <Typography className='cardText' variant="body2" color="text.secondary">
                  {experience.position}
                </Typography>
                <Typography className='cardText' variant="body2" color="text.secondary">
                  {experience.startDate} - {experience.endDate}
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Footer2 />

    </>
  );
}
