import ProjectCard from '../components/ProjectCard.js';
import ProjectsSection from '../components/ProjectSection.js';
import { Typography, Card} from '@mui/material/';
import Head from 'next/head';

export default function Homepage(){
  return <>
    <Head>
      <title> Projects </title>
    </Head>
    <Card>
      <Typography variant="h2"> Mikhail Ivanov </Typography>
    </Card>
    <ProjectsSection />
  </>
}