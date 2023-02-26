import React, {useState, useRef} from "react";
import "./EditBasic.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import uploadIcon from "../../assets/UploadOutlined.svg";

function EditBasic({data, dispatch, editSec, setEditSec}) {
    const inputPhotoRef = useRef(null);
    const photoContRef = useRef(null);

    //declaring state variables
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [bio, setBio] = useState(data.bio);
    const [imgURL, setImgURL] = useState(data.photoURL || undefined);

    function uploadPhoto() {
        inputPhotoRef.current?.click();
    };

    function storePhotoURL(e) {
        setImgURL(URL.createObjectURL(e.target.files[0]));
        photoContRef.current.style.background = `url(${URL.createObjectURL(e.target.files[0])})`;
    }

    function saveDetails(e) {
        e.preventDefault();
        dispatch({
            type: "update profile",
            data: {
                name: name,
                email: email,
                bio: bio,
                photoURL: imgURL
            }
        });
        setEditSec(false);
    }

    return (
        <Form className="form-layout">
            <div className="editBasicForm">
                <Form.Group className="mb-3 photoContainer flex-row center" ref={photoContRef} controlId="formFile">
                    <Form.Control type="file" accept="image/*" className="d-none" ref={inputPhotoRef} onChange={storePhotoURL}/>
                    <Button variant="outline-secondary" className="flex-row upload-btn" onClick={uploadPhoto}>
                        <img src={uploadIcon} alt="upload icon" />
                        <span>Upload photo</span>
                    </Button>{' '}
                </Form.Group>
                <div className="textGroup">
                    <Form.Group className="mb-4" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" className="textField" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label>Email-Id</Form.Label>
                        <Form.Control type="email" className="textField" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3 largeTextGroup" controlId="formShortBio">
                    <Form.Label>Short Bio</Form.Label>
                    <Form.Control as="textarea" className="largeTextField" value={bio} onChange={(e) => setBio(e.target.value)} />
                </Form.Group>
            </div>
            <Button variant="primary blue-color save-btn" type="submit" onClick={saveDetails}>Save</Button>
        </Form>
    );
}

export default EditBasic;