import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { filterCards, orderCards } from '../../redux/actions';
import styles from './Favorite.module.css'

export function Favorites({favorites}) {
    const filter = useRef(null);
    const order = useRef(null);
    const dispatch = useDispatch();

    function handleReset(e) {
        dispatch({type: "RESET"});
        filter.current.value= "";
        order.current.value= "";
    }
    return (
        <><select className={styles.select} ref={order} onChange={(e) => dispatch(orderCards(e.target.value))}>
        {["", "Ascendente", "Descendente"].map((e, i) => (
          <option value={e} key={i}>{e}</option>))}
        </select>
        <select className={styles.select} ref={filter} onChange={(e) => dispatch(filterCards(e.target.value))}>
        {["", "Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option value={e} key={i}>{e}</option>))}
        </select>
        <button className={styles.select} value= "reset" onClick={handleReset}>Reset</button>
        <div>
            {favorites.map((e, i)=>
                <Card 
                name = {e.name}
                status = {e.status}
                species = {e.species}
                gender = {e.gender}
                origin = {e.origin}
                image = {e.image}
                id = {e.id}
                onClose = {false}
                fav={true}
                key={i++}
                />
            )}
        </div></>
    )
}

export function mapStateToProps(state) {
    return {
      favorites: state.favorites,
    };
  }
  
  export default connect(mapStateToProps, null)(Favorites);