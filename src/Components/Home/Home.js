import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are You Sure You Want To Delete?");
    if (proceed) {
      console.log("deleting user of id", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  console.log(users);
  return (
    <div>
      <h2>Available users {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} :: {user.email}
            <button onClick={() => handleUserDelete(user._id)}>X</button>
            <Link to={`/update/${user._id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
