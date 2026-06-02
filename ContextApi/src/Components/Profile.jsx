import { useContext } from "react";
import UserContext from "../Context/UserContext";
import "../style/Profile.css";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-top"></div>

          <div className="profile-icon">
            👤
          </div>

          <h2 className="profile-name">Please Login</h2>
          <p className="profile-role">No user found</p>
          <p className="profile-email">Login first to view your profile</p>

          <div className="profile-footer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-top"></div>

        <div className="profile-icon">
          👤
        </div>

        <h2 className="profile-name">{user.username}</h2>
        <p className="profile-role">User Profile</p>
        <p className="profile-email">{user.email}</p>

        <div className="profile-footer"></div>
      </div>
    </div>
  );
}

export default Profile;