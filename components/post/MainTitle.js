import styles from './MainTitle.module.css';

export default function({children}){
  return <h1 className = {styles.mainTitle}>
    {children}
  </h1>
}