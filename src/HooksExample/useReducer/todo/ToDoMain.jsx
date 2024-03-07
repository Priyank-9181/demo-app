import React, { useReducer } from "react";
import ToDoNav from "./ToDoNav";
import AddTask from "./task/AddTask";
import TaskList from "./taskList/TaskList";
import styles from "./style/todo.module.css";
import {
  getTaskInLocalStorage,
  setTaskInLocalStorage,
} from "./utils/localStorage";

export const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  UPDATETASK: "UPDATETASK",
};

const initialState = getTaskInLocalStorage();

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.DELETE:
      return state.filter((value) => {
        if (value.id === action.payload) {
          return false;
        }
        return true;
      });

    case ACTIONS.UPDATE:
      return state.map((value) => {
        if (value.id === action.payload) {
          return { ...value, isCompleted: !value.isCompleted };
        }
        return value;
      });

    case ACTIONS.UPDATETASK:
      return state.map((value) => {
        if (value.id === action.payload.id) {
          return { ...value, task: action.payload.task };
        }
        return value;
      });

    default:
      return state;
  }
}

function ToDoMain() {
  const [state, dispatch] = useReducer(reducer, initialState);
  setTaskInLocalStorage(state);

  return (
    <div className={styles.outerContainer}>
      <ToDoNav />
      <div className={styles.innerContainer}>
        <AddTask dispatch={dispatch} />
        <TaskList dispatch={dispatch} state={state} />
      </div>
    </div>
  );
}

export default ToDoMain;
