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
import InfiniteScroll from 'react-infinite-scroller';

const Home: NextPage = () => {
    const [todoGroupList, setTodoGroupList] = useState<TodoGroupItemType[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(0)

    const createTodoGroup = async (): Promise<void> => {
        const response = await createTodoGroupApi({title: `할일 그룹 ${totalCount + 1}`});

        if (response?.status !== 201) {
            alert(response?.data.message);
            return;
        }

        await getTodoGroup()
    }

    const getTodoGroup = async (nextPage?: boolean): Promise<void> => {
        const selectPage = nextPage ? page + 1 : page;

        if (last !== 0 && last < selectPage) return;

        const response = await selectTodoGroupApi({page: selectPage, count: 12});

        if (response?.status !== 200) {
            alert(response?.data.message);
            return;
        }

        setTotalCount(response.data.totalCount);
        setTodoGroupList([...todoGroupList, ...response.data.items]);
        setPage(response.data.page);
        setLast(response.data.last);
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

            <InfiniteScroll
                className={styles.todoGroupListWarp}
                initialLoad={false}
                pageStart={1}
                loadMore={() => getTodoGroup(true)}
                hasMore={true}
            >
                {
                    todoGroupList.map((todoGroup, i) => {
                        return <TodoGroupItem
                            title={todoGroup.title}
                            updatedAt={todoGroup.updatedAt}
                            key={i}
                        />
                    })
                }
            </InfiniteScroll>

        </div>
    )
}

export default Home
