import React, { useState } from "react";
import "./ResumeSection.css";
import Button from "react-bootstrap/Button";
import Item from "../Item/Item.jsx";
import PopupModal from "../PopupModal/PopupModal.jsx";

function ResumeSection({type, data, dispatch}) {
    const [show, showModal] = useState(false);
    const items = data.map((dataItem, index) => <Item key={index} type={type} id={index} data={dataItem} dispatch={dispatch} />);
    return (
        <div className="section">
            <Button variant="outline-secondary" className="add-new-btn" onClick={() => showModal(true)}>Add New</Button>{' '}
            {items}
            <PopupModal type={type} data={{}} action="Add new " show={show} showModal={showModal} dispatch={dispatch}/>
        </div>
    );
}

export default ResumeSection;