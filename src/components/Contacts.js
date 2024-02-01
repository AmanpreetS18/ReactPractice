import Blog from './Blog'

function Contacts(props) {
  return (
    <div> 
        <h1>
        Contacts Component</h1>
       
<Blog n={props.n} a={props.a} s={props.s}/>
        </div>
  )
}

export default Contacts