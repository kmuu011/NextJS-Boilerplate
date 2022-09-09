import {FunctionComponent} from "react";
import styles from "../../../styles/todoGroup/TodoGroup.module.scss";
import {TodoGroupItemProps} from "../../type/props";

const TodoGroupItem: FunctionComponent<TodoGroupItemProps> = ({
    title, updatedAt
}) => {

    return (
        <div className={styles.todoGroupItem}>
            <div className={styles.todoWrap}>

            </div>
            <div className={styles.todoGroupTitle}>
                {title}
            </div>
            <div>
                {updatedAt}
            </div>
        </div>
    )
}

export default TodoGroupItem
