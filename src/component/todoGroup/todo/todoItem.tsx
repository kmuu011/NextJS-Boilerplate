import {FunctionComponent, useState} from "react";
import styles from "../../../../styles/todoGroup/todo/Todo.module.scss";
import {TodoItemProps} from "../../../type/props";
import {UpdateTodoDto} from "../../../type/todo";
import {deleteTodoApi, updateTodoApi} from "../../../api/todo";
import confirmImage from "../../../../public/static/button/confirm/confirm.svg";
import deleteImage from "../../../../public/static/button/delete/delete.svg";
import Image from "next/image";

const TodoGroupItem: FunctionComponent<TodoItemProps> = ({
    todoGroupIdx,
    index, content,
    completedAt,
    todoListReload
 }) => {
    const [modifyMode, setModifyMode] = useState<boolean>(false);
    const [todoContent, setTodoContent] = useState<string>(content);
    const complete = completedAt !== null;

    const updateTodo = async (complete?: boolean, offModifyMode?: boolean): Promise<void> => {
        const updateTodoDto: UpdateTodoDto = {
            content: todoContent
        };

        if (complete !== undefined) updateTodoDto.complete = complete;

        const response = await updateTodoApi(todoGroupIdx, index, updateTodoDto);

        if (response?.status !== 200) {
            alert(response?.data.message);
            return;
        }

        if(offModifyMode){
            setModifyMode(false);
        }
    }

    const deleteTodo = async (): Promise<void> => {
        const response = await deleteTodoApi(todoGroupIdx, index);

        if(response?.status !== 200){
            alert(response?.data.message);
            return;
        }

        todoListReload(undefined, true);
        setModifyMode(false);
    }

    return (
        <div
            className={styles.todoItem}
        >
            <input
                type={"checkbox"}
                defaultChecked={complete}
                onChange={(e) => {
                    updateTodo(e.target.checked);
                }}
            />
            {modifyMode ?
                <input
                    defaultValue={todoContent}
                    onChange={(e) => {
                        setTodoContent(e.target.value)
                    }}
                />
                :
                <div
                    className={styles.content}
                    onClick={() => {setModifyMode(true)}}
                >
                    {todoContent}
                </div>
            }
            {modifyMode ?
                <div className={styles.buttonWrap}>
                    <div onClick={() => updateTodo(undefined, true)}>
                        <Image src={confirmImage} alt="적용버튼" width={34} height={34}/>
                    </div>
                    <div onClick={() => deleteTodo()}>
                        <Image src={deleteImage} alt="삭제버튼" width={34} height={34}/>
                    </div>
                </div>
                :
                ''
            }
        </div>
    )
}

export default TodoGroupItem
