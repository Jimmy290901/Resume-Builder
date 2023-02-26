import React from "react";
import Form from "react-bootstrap/form";

function TextField({label, state, setState}) {
    return (
        <Form.Group className="mb-4" controlId={"form"+label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" className="textField" required value={state} onChange={(e) => setState(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
                {label} could not be empty.
            </Form.Control.Feedback>
        </Form.Group>
    );
}

function LargeTextField({label, state, setState}) {
    return (
        <Form.Group className="mb-3 largeTextGroup" controlId={"form"+label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as="textarea" className="largeTextField" required  value={state} onChange={(e) => setState(e.target.value)} />
            <Form.Control.Feedback type="invalid">
                {label} could not be empty.
            </Form.Control.Feedback>
        </Form.Group>
    );
}

function DateField({label, state, setState}) {
    return (
        <Form.Group className="mb-4" controlId={"form"+label.trim()}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="date" required value={state} onChange={(e) => setState(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
                {label} could not be empty.
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export {TextField, LargeTextField, DateField};