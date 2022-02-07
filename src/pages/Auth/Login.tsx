import { Col, Container, Form, Row, Button } from "react-bootstrap"
import { AppPageLayout} from "../../components"

export const Login = () => {
    return(
        <AppPageLayout>
            <Container fluid="md">
                <Row>
                    <Col>
                        <section>
                            image
                        </section>
                    </Col>
                    <Col>
                        <section>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control  type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  type="password" placeholder="Password" />
                                </Form.Group>                            
                                <Button variant="primary" type="submit" value="Login">
                                    Submit
                                </Button>
                            </Form>
                        </section>
                    </Col>
                </Row>
            </Container>
        </AppPageLayout>
    )
}