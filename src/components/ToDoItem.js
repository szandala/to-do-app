const ToDoItem = (props) => (
    <div onClick={() => props.toggler(props.data.id)}>
        <article
            style={props.data.done? {} : {textDecoration: "line-through"}}
            id={props.data.id}
        >
            {props.data.text}
            - {props.data.done.toString()}
            </article>
        <hr />
    </div>
)

export default ToDoItem
