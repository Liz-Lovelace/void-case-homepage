import styles from './SideNote.module.css';
import ReactTooltip from 'react-tooltip';

function display(){
  console.log('a');
}

export default function({children}) {
  
  return <button onClick={display} className={styles.sideNote}>
    <span>
      1
    </span>
    <aside> 
      ass-ide
    </aside>
  </button>
}