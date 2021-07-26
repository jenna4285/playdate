import React from "react";

function CommentCard(props) {
    console.log(props.comment)
  return (
    // <div className="card mb-3" style="max-width: 540px;">
    <div className =" mb-3 mt-3"> 
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.comment.commenter.picture} className="img-fluid rounded" alt="..." />
        </div>
        <div className="col-md-8">
          <div>
            <h5>{props.comment.commenter.fullname}</h5>
            <p>
              {props.comment.comment}
            </p>
            <p>
              <small className="text-muted">{props.comment.createdAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
