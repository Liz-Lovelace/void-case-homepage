import React from 'react';
import styles from './ProjectCard.module.css';
import {Button, Typography, CardActions, Card, CardContent} from '@mui/material/';
import Image from 'next/image';
import Link from 'next/link';

export default function(props) {
  let title = props.info.title;
  let description = props.info.description;
  let path = props.info.path;
  let github = props.info.github;
  let imagePath = props.info.imagePath;
  
  return <Card className = {styles.card}>
    {imagePath ? <Image
      src={imagePath}
      width="3"
      height="1"
      layout="responsive"
      objectFit="cover"
      alt="project image"
    /> : null}
    <CardContent>
      <Typography variant="h4"  color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <a href={github}> 
        <Button variant="text"> GitHub </Button>
      </a>
      <Link href={path}>
        <a> 
          <Button variant="contained"> Live link </Button>
        </a>
      </Link>
    </CardActions>
  </Card>
}