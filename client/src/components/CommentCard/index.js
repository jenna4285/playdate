import React, { useEffect } from "react";
import "./style.css"
import {Link} from "react-router-dom"

function CommentCard(props) {

  return (
    // <div className="card mb-3" style="max-width: 540px;">
    <div className =" mb-3 mt-3"> 
      <div className="row g-0">
        <div className="col-2">
        <Link className="no-dec" to={'/profile/' + props.comment.commenter._id}><img src={props.comment.commenter.picture} className="img-fluid rounded rounded-small" alt={props.comment.commenter.fullname} /></Link>
        </div>
        <div className="col-10">
          <div>
          <Link className="comment-link" to={'/profile/' + props.comment.commenter._id}><h5 className="comment-h5">{props.comment.commenter.fullname}</h5></Link>
            <p className = "comment-p mb-0">
              {props.comment.comment}
            </p>
            <p className = "comment-p">
              <small className="comment-date text-muted">{props.comment.createdAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
