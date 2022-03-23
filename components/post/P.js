export default function({children}){
  let style = {
    //padding for the sidenotes to not get cut off
    paddingTop: "0.2em",
    marginTop: '1.6em',
  };
  return <p style={style}> 
    {children}
  </p>
}