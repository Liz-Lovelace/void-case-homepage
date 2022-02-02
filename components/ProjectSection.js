import ProjectCard from './ProjectCard.js';
import styles from './ProjectSection.module.css';
import { Typography } from '@mui/material';
// this makes the module entangled
import projects from '../stuff/project_list.js'

let projectCards = projects.map(
  (page) => <ProjectCard
    key={page.title + page.description + page.path} 
    info={page}
    description={page.description}
  />
);

export default function ProjectSection(props) {  
  return <section className={styles.sec}>
    <Typography className={styles.header} variant = "h2"> Projects: </Typography>
    {projectCards}
  </section>
}