import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import CustomInput from "reactstrap/lib/CustomInput";
import Popconfirm from "antd/lib/popconfirm";

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
              <Col sm='1' className='pl-0'>
                <Popconfirm
                  title='Are you sure ?'
                  placement='left'
                  onConfirm={() => props.handleDelete(todo.id)}
                  okText='Yes'
                  cancelText='No'
                >
                  <div
                    style={{ cursor: "pointer" }}
                    className='text-danger h5 text-right mb-0'
                  >
                    <i className='fa fa-trash'></i>
                  </div>
                </Popconfirm>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
