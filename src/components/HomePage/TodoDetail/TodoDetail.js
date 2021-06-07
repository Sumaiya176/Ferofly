import React from "react";
import './TodoDetail.css'

const TodoDetail = ({todo}) => {
  return (
    <div className="col-md-4 py-5 px-5">
      <div className="todo-detail p-4">
        <h6>{todo.title}</h6>
        <p className="px-3">
          <small>
            <i>{todo.description}</i>
          </small>
        </p>
      </div>
    </div>
  );
};

export default TodoDetail;
