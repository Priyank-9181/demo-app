import React from "react";
import List from "./taskListCom/List";
import NoData from "./taskListCom/NoData";

function TaskList({ state, dispatch }) {
  if (state.length === 0) {
    return <NoData />;
  } else {
    return <List state={state} dispatch={dispatch} />;
  }
}

export default TaskList;
