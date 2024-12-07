import React from "react";
import "./Headers.css";
function Headers() {
  return (
    <header>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
    </header>
  );
}
export default Headers;
