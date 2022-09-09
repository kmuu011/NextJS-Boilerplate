import type {NextPage} from 'next';
import styles from '../../styles/todoGroup/TodoGroup.module.scss';
import {useEffect, useState} from "react";
import SetHead from "../../src/component/common/Head";
import CircleButton from "../../src/component/common/button/CircleButton";
import {CircleButtonProps} from "../../src/type/props";
import addImage from "../../public/static/button/add/add.svg";
import {createTodoGroupApi, selectTodoGroupApi} from "../../src/api/todoGroup";
import TodoGroupItem from "../../src/component/todoGroup/todoGroupItem";
import {TodoGroupItemType} from "../../src/type/todoGroup";

const Home: NextPage = () => {
    const [todoGroupList, setTodoGroupList] = useState<TodoGroupItemType[]>([]);
    const [totalCount, setTotalCount] = useState(0);

    const createTodoGroup = async (): Promise<void> => {
        const response = await createTodoGroupApi({title: `할일 그룹 ${totalCount + 1}`});

        if (response?.status !== 201) {
            alert(response?.data.message);
            return;
        }

        await getTodoGroup()
    }

    const getTodoGroup = async (): Promise<void> => {
        const response = await selectTodoGroupApi({page: 1, count: 10});

        if (response?.status !== 200) {
            alert(response?.data.message);
            return;
        }

        setTotalCount(response.data.totalCount);
        setTodoGroupList(response.data.items);
    }

    const circleButtonProps: CircleButtonProps = {
        image: addImage,
        action: createTodoGroup
    }

    useEffect(() => {
        getTodoGroup();
    }, []);

    return (
        <div className={styles.container}>
            <SetHead/>

            <div className={styles.circleButtonWrap}>
                <CircleButton {...circleButtonProps}/>
            </div>

            <div className={styles.todoGroupWarp}>
                {
                    todoGroupList.map(todoGroup => {
                        return <TodoGroupItem title={todoGroup.title}/>
                    })
                }

            </div>

        </div>
    )
}

export default Home
