import {FunctionComponent} from "react";
import styles from "../../../styles/todoGroup/TodoGroup.module.scss";
import {TodoGroupItemProps} from "../../type/props";
import Link from "next/link";

const TodoGroupItem: FunctionComponent<TodoGroupItemProps> = ({
    index, title, updatedAt
}) => {

    return (
        <Link href={`/todoGroup/${index}/todo`}>
        <div
            className={styles.todoGroupItem}
        >
            <div className={styles.todoWrap}>

            </div>
            <div className={styles.todoGroupTitle}>
                {title}
            </div>
            <div>
                {updatedAt}
            </div>
        </div>
        </Link>
    )
}

export default TodoGroupItem
