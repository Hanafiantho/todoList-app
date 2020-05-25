import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "uuid/dist/v4";
import { add_todo, update_todo } from "../redux/actions/todoActions";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.name !== "") {
      newTodo["id"] = uuid();
      newTodo["name"] = newTodo.name
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(" ");
      dispatch(add_todo(newTodo));
      setNewTodo({
        id: "",
        name: "",
        completed: false,
      });
      toggle();
    }
  };

  const handleChecked = (e) => {
    dispatch(update_todo({ id: e.target.id, completed: e.target.checked }));
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
            handleSubmit={handleSubmit}
          />
          <TodoList todoList={todoList} handleChecked={handleChecked} />
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default Todo;
