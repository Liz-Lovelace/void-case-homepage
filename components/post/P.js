export default function({children}){
  let style = {
    marginTop: '1.6em',
  };
  return <p style={style}> 
    {children}
  </p>
}