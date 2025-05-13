import react from 'react';

const TestimonialCard = ({name,review}) =>{
    return(
        <div>
        <h2>{name}</h2>
        <p>{review}</p>
        </div>
    )
};

export default TestimonialCard;