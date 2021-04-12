import React from "react";

export default function EditRowForm(props) {
  const [user, setUser] = React.useState(props.currentUser);

  React.useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="editRowForm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.updatedUser(user.id, user);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <button>update</button>
            <button onClick={() => props.setEditRow(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}
