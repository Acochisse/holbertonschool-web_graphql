import { usestate } from 'react';
import { graphql } from 'react-apollo';
import { getTasksQuery } from '../queries/queries';
import TaskDetails from './TaskDetails';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  function displayTasks() {
    var data = props.data;
    if (data.loading) {
      return (<div>Loading tasks...</div>);
    } else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={(e) => { setState({ selected: task.id }) }}>{task.name}</li>
        );
      })
    }
  }

export default graphql(getTasksQuery)(TaskList);
