import React from "react";
import "./showFriendsCss.css"; // Assuming your styles are here

const FriendCard = ({ name, friends, _id }) => {
  return (
    <div className="friend-card">
      <div className="inside-friend-card">
        <p style={{ dispaly: "inline" }}>name: {name}</p>
      </div>
      <div className="inside-friend-card">
        <p style={{ dispaly: "inline" }}>id: {_id}</p>
      </div>

      {friends.length === 0 ? (
        <p className="inside-friend-card"> No friends!!</p>
      ) : (
        <div className="inside-friend-card">
          <p style={{ display: "inline" }}>Friends List: [</p>
          {friends.map((friend, index) => (
            <div style={{ display: "inline" }} key={index}>
              <p style={{ display: "inline" }}>{friend}</p>
              <p style={{ display: "inline" }}>, </p>
            </div>
          ))}
          <p style={{ display: "inline" }}>]</p>
        </div>
      )}
    </div>
  );
};

function ShowFriends({ friends }) {
  console.log("inside showFriends");
  return (
    <div className="friend-container">
      {friends ? (
        friends.length === 0 ? (
          <p>No Friends available.</p>
        ) : (
          friends.map((friend) => (
            <FriendCard
              name={friend.name}
              friends={friend.friends}
              _id={friend._id}
              key={friend._id}
            />
          ))
        )
      ) : (
        <p>Friends data is undefined.</p>
      )}
    </div>
  );
}

export default ShowFriends;
