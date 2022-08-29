import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.idNumber}</td>
      <td>{contact.position}</td>
      <td>
       
        <button className="delete" type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
        <button
          type="button" className="edit"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Update
        </button>

       
      </td>
    </tr>
  );
};

export default ReadOnlyRow;