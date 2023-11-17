import { useState } from 'react';
import styles from './TaskItem.module.css';

import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {

    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckBoxChange = (e) => {
        setIsChecked(!isChecked)
        toggleTask(task.id)
    }

    return (
        <li className={styles.task}>
            <div className={styles["task-group"]}>

                <input type="checkbox"
                    className={styles.checkbox}
                    checked={isChecked}
                    onChange={handleCheckBoxChange}
                    name={task.name}
                    id={task.id}
                />

                <label htmlFor={task.id} className={styles.label}>
                    {task.name}
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={2} width={24} height={24} />
                    </p>
                </label>
            </div>
            <div className={styles["task-group"]}>
                <button className='btn'
                        aria-label={`Update ${task.name} Task`}
                        onClick={() => enterEditMode(task)}
                >
                    <PencilSquareIcon />
                </button>

                <button className={`btn ${styles.delete}`}
                        aria-label={`Delete ${task.name} Task`}
                        onClick={() => deleteTask(task.id)}
                >
                    <TrashIcon />
                </button>
            </div>
        </li>
    )
}

export default TaskItem