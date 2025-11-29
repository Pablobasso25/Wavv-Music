import { useForm } from "react-hook-form";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  ProgressBar,
  ListGroup,
  Badge,
} from "react-bootstrap";


const RegisterScreen = () => {
  
  const onSubmit = () => {}; // Placeholder
  const handleSubmit = (func) => (e) => { e.preventDefault(); func({}); }; // Placeholder

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 mt-2">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={7}>
          <Card className="bg-dark text-white border-secondary shadow">
            <Card.Header className="border-secondary">
              <h4 className="text-center mb-0">Registro en Harmony Stream</h4>
              <small className="text-center d-block text-warning mt-1">
                🔒 Contraseña debe ser <strong>MUY FUERTE</strong> para
                registrarse
              </small>
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Button 
                  type="submit"
                  className="btn-primary-custom w-100 py-2"
                  disabled={true}
                  variant="secondary" 
                >
                  Registrarse
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterScreen;