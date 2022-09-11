import {FunctionComponent} from "react";
import styles from "../../../styles/todoGroup/TodoGroup.module.scss";
import {TodoGroupItemProps} from "../../type/props";
import Link from "next/link";
import TodoItem from "./todo/todoItem";

const TodoGroupItem: FunctionComponent<TodoGroupItemProps> = ({
    index, title, todoList, updatedAt
}) => {

    console.log(todoList)

    return (
        <Link href={`/todoGroup/${index}/todo`}>
            <div
                className={styles.todoGroupItem}
            >
                <div className={styles.todoWrap}>
                    {
                        todoList.map((todo, i) => {
                            return <TodoItem
                                preview={true}
                                todoGroupIdx={index}
                                index={todo.idx}
                                content={todo.content}
                                completedAt={todo.completedAt}
                                key={i}
                            />
                        })
                    }

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
