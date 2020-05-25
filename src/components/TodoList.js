import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CustomInput from "reactstrap/lib/CustomInput";

function TodoList(props) {
  return (
    <div className='px-3'>
      {props.todoList.map((todo, key) => (
        <Card key={key} className='my-2'>
          <CardBody className='p-2'>
            <CustomInput
              type='checkbox'
              id={todo.id}
              label={todo.name}
              className={todo.completed ? "text-muted" : "font-weight-bold"}
              checked={todo.completed}
              onChange={(e) => props.handleChecked(e)}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
