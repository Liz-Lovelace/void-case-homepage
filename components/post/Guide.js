import SideNote from './SideNote.js';
import styles from './Guide.module.css';


export default function(){
  return <section className={styles.guide}>
    <h6> Reading pro tips </h6>
    <p> Click on images to open them in full size</p>
    <p> Blue circles
      <SideNote n='0'> 
        Yeah, just like that
      </SideNote> 
      have extra content in them
    </p>

  </section>
}