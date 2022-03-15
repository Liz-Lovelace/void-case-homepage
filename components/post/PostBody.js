import styles from './PostBody.module.css';

export default function({children}){
  return <article className={styles.postBody}>
    {children}
  </article>
}