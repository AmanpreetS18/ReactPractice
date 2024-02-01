

function Blog(props) {
  return (
    <div><h1>
        Blog Component</h1>
        <p>My name is {props.n}  </p> 
   <p>My age is {props.a}</p>
    <p>My salary is {props.s}</p>
    
        </div>
  )
}

export default Blog