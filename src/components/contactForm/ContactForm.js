import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    setName({ name: e.target.value });
    setPhone({ phone: e.target.value });
    setEmail({ email: e.target.value });
  };
  // console.log(handleChange);

  return (
    <form className="contact-form">
      name:
      <input
        type="text"
        placeholder="Ralph Emerson"
        value={name.name}
        onChange={handleChange.handleChange}
      />
      phone:
      <input
        type="tel"
        placeholder="234-456-7890"
        value={phone.phone}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        onChange={handleChange.handleChange}
      />
      email:
      <input
        type="email"
        placeholder="bob@gmail.com"
        value={email.email}
        onChange={handleChange.handleChange}
      />
      <input type="submit" onSubmit={handleSubmit.handleSubmit} />
      console.log(onSubmit)
    </form>
  );
};
