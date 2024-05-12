import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import projectData from '/data/projectData.json'; // Path to your local JSON file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Academic Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'left' }}>
        {projectData.map((project) => (
          <Card key={project.id} sx={{ width: 345 }}>
            <CardActionArea component={Link} href={`/projects/${project.id}`} sx={{ textDecoration: 'none' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.startDate} - {project.endDate}
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
