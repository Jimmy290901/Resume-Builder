import React, { useState } from "react";
import "./Item.css";
import Button from "react-bootstrap/Button";
import dropdown_inactive from "../../assets/CaretRightFilled.svg";
import dropdown_active from "../../assets/CaretDownFilled.svg";
import PopupModal from "../PopupModal/PopupModal.jsx";

function Item({id, type, data, dispatch}) {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const editData = {
        ...data,
        id : id
    };

    function handleDelete() {
        dispatch({
            type: "delete " + type,
            id: id
        });
    }

    return (
        <div className="item">
            <div className="item-header" onClick={() => setShow(!show)}>
                <img src={show ? dropdown_active : dropdown_inactive} alt="dropdown icon" />
                <span className="item-name">{data.institution || data.org || data.title}</span>
                <span className="date">{(data.date) || (data.start_date + " - " + data.end_date)}</span>
            </div>
            {   show && 
                <div className="item-body">
                    {   !data.title &&
                        <div className="deg-role flex-column">
                            <span className="title-heading">{(data.degree && "Degree") || (data.role && "Role")}</span>
                            <span className="deg-role-content">{data.degree || data.role}</span>
                        </div>
                    }
                    <div className="description flex-column">
                        <span className="title-heading">Description</span>
                        <span className="desc-content">{data.description}</span>
                    </div>
                    <div className="card-btn flex-row">
                        <Button variant="light" className="grey-btn" onClick={() => setShowModal(true)}>Edit</Button>
                        <Button variant="light" className="grey-btn" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
            }
            <PopupModal type={type} action="Edit " data={editData} show={showModal} showModal={setShowModal} dispatch={dispatch}/>
        </div>
    );
}

export default Item;