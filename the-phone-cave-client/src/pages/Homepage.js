import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useParams } from 'react-router-dom';
import axios from "axios";
import PhoneDetails from '../components/phoneDetails';

function Homepage(props) {

    const [phone, setPhoneDetails] = useState(null);
    const phoneId = useParams();

    const getPhoneDetails = () => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/phones/${phoneId}`)
          .then((response) => {
            setPhoneDetails(response.data);
          })
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getPhoneDetails();
      }, []);

    return (
        <>
            <h1>Welcome to the Phone Cave</h1>
            <h2>Discover our list of phones</h2>
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" margin>
                            <Row style={{ marginTop: '4.5rem', marginLeft: '1rem',marginRight: '1rem' }}>
                                <Col sm={4}>
                                    <ListGroup>
                                    <ListGroup>
                                        {props.phones?.map((phone) => {
                                            return (
                                                <ListGroup.Item action href={`#phones/${phone.id}`} onClick={getPhoneDetails()}>
                                                {phone.name}
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </ListGroup>
                                    </ListGroup>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content style={{textAlign:'left'}}>
                                    {props.phones?.map((phone) => {
                                            return (
                                        <Tab.Pane eventKey={`#phones/${phone.id}`}>
                                            <PhoneDetails phone={phone} />
                                        </Tab.Pane>
                                        )
                                    })}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
        </>
    )
}

export default Homepage;