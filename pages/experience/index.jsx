import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import experienceData from '/data/experienceData.json'; // Path to your local JSON file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <h1>Experience</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {experienceData.map((experience) => (
          <Card key={experience.id} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} href={`/experience/${experience.id}`} sx={{ textDecoration: 'none' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {experience.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Position: {experience.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.startDate} - {experience.endDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <p>
        <Link href='/'>
          Home
        </Link>
      </p>
    </>
  );
}
