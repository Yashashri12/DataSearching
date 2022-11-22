import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGlobleContext } from "./context";

const Ads = () => {
    const {hits,isLoading}=useGlobleContext();
  
 
  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return (
    <>
    <Container>
      <Row>
      {hits.map((curPost)=>{
        const{
            _id,primaryText,hedline,description,company}=curPost;
        return(
          <Col>
          <div className="card" key={_id}>
              <p>{hedline}</p>
              <h3>{primaryText}</h3>
              <p>{description}</p>
              <div style={{textAlign: 'right'}}>
                <p><a href={company.url} target="_blank">{company.name}</a></p>
              </div>
          </div>
          </Col>
        )
      })}
      </Row>
    </Container>
    </>
  );
};

export default Ads;
