import todolist from '../images/todolist.jpg'
import done from '../images/done.jpg'
import writting from '../images/writting.jpg'

import './../styles/header.css'

import { Switch, Route } from 'react-router-dom'



const Header = () => {
    return (
        <Switch>
            <Route path="/" exact render={()=><img src={todolist} alt=""/>} />
            <Route path="/new" render={()=><img src={writting} alt=""/>} />
            <Route path="/trash" render={()=><img src={done} alt=""/>} />
        </Switch>

    )
}



export default Header;
