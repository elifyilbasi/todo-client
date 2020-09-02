import { connect } from "react-redux";
import TodoPage from "./TodoPage";
import {
  todosFetched,
  todoAdded,
  todoDeleted,
  todoToggled,
} from "../todoDucks";
import { showLoading, hideLoading } from "../../app/loading/loadingDucks";

function mapStateToProps(state) {
  return { todoList: state.todos.todoList };
}

const mapDispatchToProps = {
  todosFetched,
  showLoading,
  hideLoading,
  todoAdded,
  todoDeleted,
  todoToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
