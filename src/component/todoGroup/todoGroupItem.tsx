import {FunctionComponent} from "react";
import styles from "../../../styles/todoGroup/TodoGroup.module.scss";
import {TodoGroupItemProps} from "../../type/props";

const TodoGroupItem: FunctionComponent<TodoGroupItemProps> = ({title}) => {
    return (
        <div className={styles.todoGroupItem}>
            {title}
        </div>
    )
}

export default TodoGroupItem
