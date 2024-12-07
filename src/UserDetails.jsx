import React from "react";
import "./UserDetails.css";
function UserDetails({ userDetailObj }) {
  return (
    <>
      <div className="friend-card">
        <p className="not-inline-Display">name: {userDetailObj.name}</p>
        <p className="not-inline-Display">id: {userDetailObj._id}</p>
        {userDetailObj.friends.length === 0 ? (
          <p>No friends!!</p>
        ) : (
          <div className="array-of-friends-div">
            <p className="inline-Display">Friends: [</p>
            {userDetailObj.friends.map((friend, index) => (
              <React.Fragment key={friend}>
                <p className="inline-Display">{friend}</p>
                <p className="inline-Display">, </p>
              </React.Fragment>
            ))}
            <p className="inline-Display">]</p>
          </div>
        )}
      </div>
    </>
  );
}
export default UserDetails;
