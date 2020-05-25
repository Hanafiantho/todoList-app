import React, { useState } from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import TodoForm from "./TodoForm";

function Todo() {
  const [modal, setModal] = useState(false);
  const [newTodo, setNewTodo] = useState({
    id: "",
    name: "",
    completed: false,
  });

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  console.log(newTodo);

  return (
    <React.Fragment>
      <Card className='w-50 mx-auto mt-5'>
        <CardBody>
          <TodoForm
            modal={modal}
            toggle={toggle}
            newTodo={newTodo}
            handleChange={handleChange}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default Todo;
