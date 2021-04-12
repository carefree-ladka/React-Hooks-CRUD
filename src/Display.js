import React from "react";
import Header from "./Header";
import Row from "./Row";

export default function Display({ data, deleteRow, onEditRow }) {
  return (
    <>
      <table style={{ width: "100%" }}>
        <thead>
          <Header />
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <Row
                  item={item}
                  onEditRow={onEditRow}
                  deleteRow={deleteRow}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  address={item.address}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
