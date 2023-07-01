import style from './Card.module.css';
import {Link} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';

export function Card(props) {
   const [isFav, setIsFav] = useState(props.fav);

   useEffect(() => {
      props.favorites &&
        props.favorites.forEach((fav) => {
          if (fav.id === props.id) {
            setIsFav(true);
          }
        });
    });

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      }else{
         setIsFav(true);
         props.addFav({
            image: props.image,
            name: props.name,
            status: props.status,
            species: props.species,
            gender: props.gender,
            origin: props.origin,
            id: props.id,
         });
      }
   }
   return (
      <div className={style.card}>
         {isFav ? (<button className={style.fav} onClick={handleFavorite}>❤️</button>) : (<button className={style.fav} onClick={handleFavorite}>🤍</button>)}
         <img className={style.image} src={props.image} alt='' />
         <button className={style.button} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}><h2 className={style.name}>{props.name}</h2></Link>
         <h2 className={style.status}> {props.status}</h2>
         <h2 className={style.species}> {props.species}</h2>
         <h2 className={style.gender}> {props.gender}</h2>
         <h2 className={style.origin}> {props.origin.name}</h2>
      </div>
   );
}

export function mapStateToProps(state) {
   return {
      favorites: state.favorites,
   }
}

export function mapDispatchToProps(dispatch){
   return {
      addFav: function (character) {
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);