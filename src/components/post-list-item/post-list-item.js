import React, {Component} from "react";

import './post-list-item.css';

export default class PostListItem extends Component {

  render () {
    const {label, onDelete, onToogleImportant, onToogleLiked, important, like} = this.props;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
      classNames +=' important';
    }
    if (like) {
      classNames +=' like';
    }

    return (
      <div className={classNames}>
        <span 
          className='app-list-item-label'
          onClick={onToogleLiked}
        >
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button 
            type='button' 
            className='btn-star btn-sm'
            onClick={onToogleImportant}
          >
            <i className="bi bi-star-fill"></i>
          </button>
          <button 
            type='button' 
            className='btn-trash btn-sm'
            onClick={onDelete}
          >
            <i className="bi bi-trash"></i>
          </button>
          <i className="bi bi-heart-fill"></i>
        </div>
      </div>
    )
  }
}
