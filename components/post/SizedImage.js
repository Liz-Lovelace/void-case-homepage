import Image from 'next/image';
import styles from './SizedImage.module.css';

const mediaPath = '/posts_content';

function detectMediaType(src){
  const extentionFinder = RegExp('[.](..?.?.?.?.?.?)$');
  let extention = extentionFinder.exec(src)[1];
  if (['jpg'].includes(extention))
    return 'image';
  else if (['webm'].includes(extention))
    return 'video';

  console.log(`WARNING: can't find extention of "${src}" with extention "${extention}"`);
  
  return 'image';
}

export default function({src, width, height, text, alt}){
  if (src[0] == '/')
    src = `${mediaPath}${src}`;
  const mediaType = detectMediaType(src);
  let media;
  if (mediaType == 'image')
    media = <a href={src} target="_blank">
      <Image
        className = {styles.media}
        src = {src} 
        alt = {alt}
        title = {alt}
        width = {width}
        height = {height}
        layout = "responsive"
      />
    </a>
  else if (mediaType == 'video')
    media = <video
      className = {styles.media}
      controls
      width="100%"
      src={src}
    />

  return <div className={styles.container}>
    {media}
    <p> {text ? text : alt} </p>
  </div>
}