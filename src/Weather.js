import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
export const TemperatureInCelcius = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data));
    }, []);
    return (
      <div>
        <h2>The JSON below is loaded from an external API!</h2>
        <code>{JSON.stringify(users)}</code>
      </div>
    );
  }
// export const TemperatureInCelcius =() =>{
    
//     return(<div><Button type="button" variant='outline-primary'size='lg'>Tem</Button>
//     <Container>
//         <Row>
//             <Col>1 of 2</Col>
//             <Col>2 of 2</Col>
//         </Row>
//         <Row>
//             <Col>1 of 3</Col>
//             <Col>2 of 3</Col>
//             <Col>3 of 3</Col>
//         </Row>
//     </Container></div>)
    
// }
const Weather =() => {
    const [temp, setTemp] = useState(0);
     const [count, setCount] = useState(0);

     useEffect(() => {
         for(let i=0;i<5;i++)
         {
         setTemp(temp+1);
         console.log("useEffect");}
     },[]);
     return(<div><h2>today weather is {temp}.</h2>
     </div>)
    
}
export default Weather;

    
  
