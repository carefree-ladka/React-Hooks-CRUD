import React from "react";
import { v4 as uuidv4 } from "uuid";
import Display from "./Display";
import EditRowForm from "./EditRowForm";

const initialFormState = { id: null, name: "", email: "", address: "" };
export default function AddInput() {
  /* const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [address, setAddress] = React.useState(); */
  const [state, setState] = React.useState(initialFormState);
  const [data, setData] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(initialFormState);
  const [editRow, setEditRow] = React.useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onAddData = (e) => {
    const { name, email, address } = state;
    e.preventDefault();
    if (!state.name && !state.email && !state.address) {
      return;
    } else {
      setData((prevData) => [
        ...prevData,
        { name, email, address, id: uuidv4() }
      ]);
    }

    //setData([...data, { name, email, address, id: uuidv4() }]);
    setState({ name: "", email: "", address: "" });
    console.log(data);
  };

  const onRowDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onEditRow = (user) => {
    setEditRow(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address
    });
  };

  const onUpdateUser = (id, updatedUser) => {
    setEditRow(false);
    setData(data.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <>
      {editRow ? (
        <EditRowForm
          editRow={editRow}
          setEditRow={setEditRow}
          currentUser={currentUser}
          updatedUser={onUpdateUser}
        />
      ) : (
        <div className="addInput">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={state.address}
              onChange={handleChange}
            />
            <input type="submit" onClick={onAddData} />
          </form>
        </div>
      )}

      <Display data={data} deleteRow={onRowDelete} onEditRow={onEditRow} />
    </>
  );
}
