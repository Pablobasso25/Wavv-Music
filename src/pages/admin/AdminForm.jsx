import { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";

const AdminForm = ({ type = "user", editData = null, onSave = null }) => {
  const isUser = type === "user";
  const isEditing = editData !== null;

 
  const [formData, setFormData] = useState(
    isUser
      ? { username: "", email: "", password: "" }
      : { title: "", artist: "", url: "", cover: "", plays: "" }
  );


  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario...", formData);
  };

  return (
    <Card className="mb-4 bg-dark text-white border-secondary">
      <Card.Body>
        <h4>
          {isUser
            ? isEditing
              ? "Editar usuario"
              : "Agregar nuevo usuario"
            : isEditing
            ? "Editar canción"
            : "Agregar nueva canción"}
        </h4>
        <Form onSubmit={handleSubmit}>
          
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AdminForm;