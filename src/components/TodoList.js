import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import CustomInput from "reactstrap/lib/CustomInput";

function TodoList(props) {
  return (
    <div className='px-3'>
      {props.todoList.map((todo, key) => (
        <Card key={key} className='my-2 px-2'>
          <CardBody className='p-2'>
            <Row>
              <Col>
                <CustomInput
                  type='checkbox'
                  id={todo.id}
                  label={todo.name}
                  className={todo.completed ? "text-muted" : "font-weight-bold"}
                  checked={todo.completed}
                  onChange={(e) => props.handleChecked(e)}
                />
              </Col>
              <Col sm='1' className='pl-0 text-danger h5 mb-0 text-right'>
                <div>
                  <i className='fa fa-trash'></i>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
