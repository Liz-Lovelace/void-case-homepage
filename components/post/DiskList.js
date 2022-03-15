export default function({children, char = '->'}){
  const style = {
    marginTop: '0.3em',
    paddingLeft: '1em',
  }
  return <ul type="disk" style={style}>
    {children}
  </ul>
}