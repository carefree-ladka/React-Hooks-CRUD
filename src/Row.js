import React from "react";

export default function Row({
  id,
  item,
  name,
  email,
  address,
  deleteRow,
  onEditRow
}) {
  return (
    <>
      <tr>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <button onClick={() => deleteRow(id)}>delete</button>
          <button onClick={() => onEditRow(item)}>Edit</button>
        </td>
        <td>{name}</td>
        <td> {email} </td>
        <td> {address} </td>
      </tr>
    </>
  );
}
