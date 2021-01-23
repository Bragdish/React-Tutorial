import userEvent from "@testing-library/user-event";
import React from "react";
const User = ({ login, id, url, avatar_url }) => {
    const imgStyle = {
        border: '5px solid',
        width: '200px',
        height: '200px',
    }
    return (
        <div className="col-lg-3" style={{ padding: '20px', border: '5px dotted blue' }}>
            <img src={avatar_url} style={imgStyle} ></img>
            <div>{login}</div>
        </div>

    );
};
export default User;