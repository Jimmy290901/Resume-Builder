import React from "react";
import Button from "react-bootstrap/Button";
import "./Profile.css";
import profileSampleImg from "../../assets/profile_logo.png";

function Profile({data, editSec, setEditSec}) {
    return (
        <div className="profile">
            <img src={data.photoURL || profileSampleImg} alt="profile" className="profile-photo" />
            {/* <span className="photoContainer profile-photo" /> */}
            <div className="details">
                <span className="profile-name">{data.name}</span>
                <span className="profile-email">{data.email}</span>
                <p className="profile-desc">{data.bio}</p>
                <Button variant="light" className="grey-btn" onClick={() => setEditSec(true)}>Edit</Button>
            </div>
        </div>
    );
}

export default Profile;