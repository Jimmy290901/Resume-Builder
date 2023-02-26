import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./PopupModal.css";
import React, {useState} from "react";
import {TextField, LargeTextField, DateField} from "../FormElements/FormElements.jsx";


function PopupModal({type, action, data, show, showModal, dispatch}) {

    const [institute, setInstitute] = useState(data.institution || "");
    const [degree, setDegree] = useState(data.degree || "");
    const [company, setCompany] = useState(data.org || "");
    const [role, setRole] = useState(data.role || "");
    const [title, setTitle] = useState(data.title || "");
    const [startDate, setStartDate] = useState(data.startDate || "");
    const [endDate, setEndDate] = useState(data.endDate || "");
    const [date, setDate] = useState(data.date || "");


    const [desc, setDesc] = useState(data.description || "");

    const [validated, setValidated] = useState(false);


    function saveDetails(e) {
        const form = e.currentTarget;
        console.log(form.checkValidity());
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
            return;
        }
        setValidated(false);
        e.preventDefault();
        let newData = {}
        switch(type) {
            case "education" :
                newData = {
                    institution: institute,
                    degree: degree,
                    start_date: startDate,
                    end_date: endDate,
                    description: desc
                }
                break;
            case "work experience":
                newData = {
                    org: company,
                    role: role,
                    start_date: startDate,
                    end_date: endDate,
                    description: desc
                }
                break
            case "achievement":
                newData = {
                    title: title,
                    date: date,
                    description: desc
                }
                break;
            default: newData = {}
        }
        if (action === "Add an ") {
            dispatch({
                type: action + type,
                data: newData
            });
        } else {
            dispatch({
                type: action + type,
                data: newData,
                id: data.id
            });
        }

        showModal(false);

        if (action === "Add new ") {
            setInstitute(data.institution || "");
            setDegree(data.degree || "");
            setCompany(data.org || "");
            setRole(data.role || "");
            setTitle(data.title || "");
            setDesc(data.description || "");
        }
    }

    function handleCancel() {
        showModal(false);
        setValidated(false);

        setInstitute(data.institution || "");
        setDegree(data.degree || "");
        setCompany(data.org || "");
        setRole(data.role || "");
        setTitle(data.title || "");
        setDesc(data.description || "");
    }
    
    return (
        <Modal show={show} onHide={() => showModal(false)}>
            <Modal.Header>
                <Modal.Title>{action + type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} className="flex-column" onSubmit={saveDetails}>
                    {type === "education" &&
                        <div>
                            <TextField label="Institution" state={institute} setState={setInstitute} />
                            <TextField label="Degree" state={degree} setState={setDegree} />
                            <div className="flex-row dates-field set-column-gap">
                                <DateField label="Start Date" state={startDate} setState={setStartDate} />
                                <DateField label="End Date" state={endDate} setState={setEndDate} />
                            </div>
                        </div>
                        
                    }
                    {type === "work experience" &&
                        <div>
                            <TextField label="Company" state={company} setState={setCompany} />
                            <TextField label="Role" state={role} setState={setRole} />
                            <div className="flex-row dates-field set-column-gap">
                                <DateField label="Start Date" state={startDate} setState={setStartDate} />
                                <DateField label="End Date" state={endDate} setState={setEndDate} />
                            </div>
                        </div>
                    }
                    {type === "achievement" && 
                        <div>
                            <TextField label="Title" state={title} setState={setTitle} />
                            <DateField label="Date" state={date} setState={setDate} />
                        </div>
                    }

                    <LargeTextField label="Description" state={desc} setState={setDesc} />
                    
                    <div className="flex-row set-column-gap">
                        <Button variant="primary blue-color" type="submit">Save</Button>
                        <Button variant="light" className="grey-btn" onClick={handleCancel}>Cancel</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default PopupModal;