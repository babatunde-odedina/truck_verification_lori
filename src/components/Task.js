import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    // <div className="task item">
    //   <input type="checkbox" onClick={() => onToggle(task.id)}/>
    //   <h3>{task.id}. {' ' + task.text}</h3>
    // </div>
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        <i
          className={`${
            !task.reminder
              ? 'fa-regular fa-square'
              : 'fa-regular fa-circle-check'
          }`}
          onClick={() => onToggle(task.id)}
          style={{ marginRight: 10, cursor: 'pointer' }}
        ></i>
        {task.id}. {' ' + task.text}
      </h3>
      <a href={task.link} target='_blank'>
        {task.link !== '' ? 'Click here to Validate' : ''}
      </a>
    </div>
  );
};

export default Task;
