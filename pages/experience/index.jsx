import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import experienceData from '/data/experienceData.json'; // Path to your local JSON file
import { Box, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import Footer from '/components/Footer';
import Navigation from '/components/Navigation';
import "/components/styles.css"

export default function Experience() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
         // Adjust this to the height of your footer
      }}
    >
      <Head>
        <title>Experience</title>
      </Head>
      <Navigation />
      
      <Box
        component="main"
        sx={{
          padding: '20px',
        }}
      >
        <Typography fontSize='50px' variant="h1" className="header" sx={{ marginBottom: '20px', color: 'aliceblue', textAlign: 'center'}}>
          Professional Experience
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'left',
            marginLeft: '75px',
          }}
        >
          {experienceData.map((experience) => (
            <Card key={experience.id} sx={{ width: 345, backgroundColor: '#383838', color: '#fff' }}>
              <CardActionArea component={Link} href={`/experience/${experience.id}`} sx={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={experience.image}
                  alt={experience.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {experience.position}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {experience.startDate} - {experience.endDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      <Footer/>
    </Box>
  );
}
