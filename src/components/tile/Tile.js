import React from "react";

export const Tile = (props) => {
  const { contact } = props;
  console.log(contact);

  let values = Object.values(contact);
  values.map((value) => {
    console.log(value);
    return (
      <div>
        <p className="tile-title">{value.name}</p>
        <p className="tile">{value.phone}</p>
        <p className="tile">{value.email}</p>
      </div>
    );
  });
};
