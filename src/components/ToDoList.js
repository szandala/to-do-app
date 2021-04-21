
const ToDoList = (props) => {
    const list = props.toDoList.map(it => (
        <span key={it.id}>
            <li
                style={it.done ? { textDecoration: "line-through" } : {}}
                onClick={() => props.changeStatus(it.id)}
            >
                {it.text}
            </li>
            <hr />
        </span>
    ))
    return (
        <ul>
            {list}
        </ul>
    )
}

export default ToDoList;
