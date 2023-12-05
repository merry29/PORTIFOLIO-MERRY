import {Link} from "react-router-dom"
import { HeaderConter,HeaderNav } from "../style/header"



function Header() {
    return (
        < HeaderConter>
            <HeaderNav>
                <ul>
                    <li>
                         <Link to ="/">Formação</Link>
                    </li>

                    <li>
                         <Link to ="/Projetos">projetos</Link>
                    </li>

                    <li>
                         <Link to ="/Sobre">sobre</Link>
                    </li>

                </ul>
            </HeaderNav>
            
        </ HeaderConter>
    )
}

export default Header