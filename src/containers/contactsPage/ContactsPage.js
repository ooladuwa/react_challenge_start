import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, newContact } = props;
  console.log(newContact);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  // console.log(setDuplicateCheck);
  console.log(contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicateCheck === false) {
      contacts.push(newContact);
      // newContact({ contacts: contacts });
      setName("");
      setPhone("");
      setEmail("");
      //these are intended to clear the form after pushing the new contact into the contacts array
    } else {
      return "Contact already exists";
    }
  };
  useEffect(() => {
    setDuplicateCheck(
      contacts.filter(function (name) {
        console.log(contacts.name);
        return name === contacts.name ? true : false;
      })
    );
  }, [contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>

      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
