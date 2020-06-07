import React from "react";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import Form from "reactstrap/lib/Form";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import ModalFooter from "reactstrap/lib/ModalFooter";

function TodoForm(props) {
  return (
    <React.Fragment>
      <Button color="primary" className="w-100 mb-3" onClick={props.toggle}>
        Create New Todo
      </Button>
      <Modal size="sm" isOpen={props.modal} toggle={props.toggle}>
        <Form onSubmit={props.handleSubmit}>
          <ModalHeader>Form Create</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label className="font-weight-bold">Todo</Label>
              <Input
                type="text"
                name="name"
                placeholder="input new todo"
                value={props.newTodo.name}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" color="secondary" onClick={props.toggle}>
              Cancel
            </Button>
            <Button size="sm" color="primary">
              Create
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(TodoForm);
