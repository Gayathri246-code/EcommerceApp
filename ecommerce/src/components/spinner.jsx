import { DNA } from 'react-loader-spinner'

export function Spinner() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <DNA
visible={true}
height="80"
width="80"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"
/>
    </div>
  )
}
export default Spinner