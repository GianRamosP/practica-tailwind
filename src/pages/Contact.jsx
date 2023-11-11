import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getContact } from "../data/items";

export default function Contact() {
  const params = useParams();
  const contact = useMemo(
    () => getContact(params.contactid),
    [params.contactid]
  );

  if (!contact) {
    throw new Error("Contact does not exist");
  }

  return (
    <>
      <h1>{contact.name}</h1>
      <p>{contact.phone}</p>
    </>
  );
}
