import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import projectData from '/data/projectData.json';
import { Box, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import Footer from '/components/Footer';
import Navigation from '/components/Navigation';
import "/components/styles.css"

export default function Projects() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Head>
        <title>Projects</title>
      </Head>
      <Navigation />
      
      <Box
        component="main"
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '20px',
          width: '100%', // Ensure full width
        }}
      >
        <Typography fontSize= '50px' variant="h1" className="header" sx={{ marginBottom: '20px', color: 'aliceblue' }}>
          Projects
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
          {projectData.map((project) => (
            <Card key={project.id} sx={{ width: 345, backgroundColor: '#383838', color: '#fff' }}>
              <CardActionArea component={Link} href={`/projects/${project.id}`} sx={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {project.position}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {project.startDate} - {project.endDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 'auto', width: '100%' }}>
        <Footer />
      </Box>
    </Box>
  );
}
