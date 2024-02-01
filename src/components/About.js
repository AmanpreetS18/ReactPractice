import Contacts from './Contacts'

function About(props) {
  return (
    <div>
        <h1> About component
        </h1> 

        <Contacts n={props.n} a={props.a} s={props.s}/>
        </div>
  )
}

export default About