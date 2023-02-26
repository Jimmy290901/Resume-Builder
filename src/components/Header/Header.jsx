import React from "react";
import "./Header.css";
import logo from "../../assets/ClipboardOutlined.svg";
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <span className="app-name">Resume Builder</span>
            <Button variant="outline-dark" className="import-btn button">Import</Button>{' '}
            <Button variant="danger" className="export-btn button">Export</Button>{' '}
        </div>
    );
}

export default Header;