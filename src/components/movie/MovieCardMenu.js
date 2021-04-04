import React, {useState} from 'react';
import MovieCardMenuItem from './MovieCardMenuItem';
import { connect } from 'react-redux';
import { showModal } from '../../actions';

const menu = [
    {type: 'EDIT_MOVIE_TYPE', name: 'Edit'},
    {type: 'DELETE_MOVIE_TYPE', name: 'Delete'}
];

const MovieCardMenu = (props) => {
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const useToggleMenu = () => setMenuVisibility(!isMenuVisible);

    return (
        <div className="movie-card__menu">
            <button className="movie-card__menu-open-btn" onClick={useToggleMenu}/>
            {isMenuVisible && (
                <div className="movie-card__menu-popup">
                    <ul className="movie-card__menu-popup-list">
                        {menu.map(item => <MovieCardMenuItem
                            key={item.name}
                            onClick={() => props.showModal(item.type, props.movie.id)}
                            title={item.name}/>)
                        }
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={useToggleMenu}/>
                </div>
            )}
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return ownProps
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (modalType, movieId) => dispatch(showModal(modalType, movieId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardMenu);
