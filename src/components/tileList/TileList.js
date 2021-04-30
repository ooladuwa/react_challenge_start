import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  // const { contacts } = props;
  props.contacts.map((contact) => {
    return <Tile key={contact.id} contact={contact} />;
  });
  // console.log(contacts);
  // console.log(tile);
  return null;
};
