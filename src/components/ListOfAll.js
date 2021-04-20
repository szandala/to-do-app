
import ToDoItem from './ToDoItem';

const ListOfAll = (props) => {

    const list = props.todos.map(it => (
        <ToDoItem
            key={it.id}
            data={it}
            toggler={props.toggler}
        />
    ));

    return (
        <ul>
            {list}
        </ul>
    )
}

export default ListOfAll;
