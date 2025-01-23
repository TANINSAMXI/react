import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ContactsTable from "./components/ContactsTable";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedContacts = data.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          phone: user.phone,
        }));
        setContacts(formattedContacts);
      });
  }, []);

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSave = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <Container className="mt-4">
      <h1>Contacts App</h1>
      {showForm ? (
        <ContactForm onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <ContactsTable contacts={contacts} onDelete={handleDelete} />
          <Button
            variant="primary"
            onClick={() => setShowForm(true)}
            className="mt-3"
          >
            Add New Contact
          </Button>
        </>
      )}
    </Container>
  );
};

export default App;
