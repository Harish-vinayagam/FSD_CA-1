import react from 'react'
import TestimonialCard from './Components/TestimonialCard'

function App() {
  const people = [
    {name:'Emily Watson', review:'This service was amazing! Highly recommended'},
    {name:'Ligma', review:'Peak customer service!'}
  ];

  return (
    <div>
      <h1>Client Testomonials</h1>
      {people.map((member,index) =>(
        <TestimonialCard key={index} name={member.name} review={member.review}/>
      )
    )}
    </div>
  )
}

export default App
