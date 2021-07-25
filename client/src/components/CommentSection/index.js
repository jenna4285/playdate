import React from "react"

function CommentSection (props) {

    return(
        <div id="comment-section" className="row">
					<div id="input-row" className="row">
						<form id="comment-form">
							<input
								name="commentContent"
								value={props.comment.commentContent}
								id="comment-input"
								onChange={props.handleInputChange}
								placeholder="Post a public comment..."
							/>
							<button className="btn btn-success" onClick={props.saveCommentHandler}>
								Post Comment
							</button>
						</form>
					</div>
					{props.activityInfo.comments ? (
						props.activityInfo.comments.map((item) => (
							<div className="comments-row row">
								{item.comment}<span/>{item.createdAt}<span/>{item.commenter.fullname}
							</div>
						))
					) : null}
				</div>
    )
}

export default CommentSection