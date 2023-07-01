import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';
import {Link} from 'react-router-dom';

export default function Nav({onSearch, logout}) {
    return(
        <nav>
            <img
                src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/250px-Rick_and_Morty.svg.png"
                alt=""
                width="20%"
            />
            <button className={style.random} onClick={() => onSearch(Math.floor(Math.random() * (827 - 1) + 1))}>Random Character</button>
            <button className={style.link} onClick={logout}>LogOut</button>
            <SearchBar onSearch={onSearch} />
            <Link to='/home' className={style.link}>Home</Link>
            <Link to='/about' className={style.link}>About</Link>
            <Link to='/favorites' className={style.link}>Favorites</Link>
        </nav>
    );
}