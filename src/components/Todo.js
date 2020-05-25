import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const todoList = useSelector((state) => state.todo);
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

  const handleChecked = (e) => {
    console.log(e.target.checked);
    console.log(e.target.id);
  };

  console.log(newTodo);
  console.log(todoList);

  return (
    <React.Fragment>
      <Card className='w-50 mx-auto mt-5'>
        <CardBody className='bg-light'>
          <TodoForm
            modal={modal}
            toggle={toggle}
            newTodo={newTodo}
            handleChange={handleChange}
          />
          <TodoList todoList={todoList} handleChecked={handleChecked} />
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default Todo;
