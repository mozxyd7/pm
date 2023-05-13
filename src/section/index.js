import Container from 'react-bootstrap/Container';
import '../App.css'

function Slogan(){
    return(
        <Container className='sloganStyle' style={{"paddingRight": "50%", paddingLeft:"50%", paddingTop:"13%" ,paddingBottom:"15%" }}>
            <h1 className='sloganText'>revolutionizing real-estate investments.</h1>
        </Container>
    )
};

export default Slogan;