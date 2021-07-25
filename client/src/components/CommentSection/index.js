import React, { useEffect, useState, useContext, useParams } from "react"
import API from "../../utils/API"
import UserContext from "../../utils/userContext";

function CommentSection (props) {
    const { dbUser } = useContext(UserContext);
    const [comments, setComments] = useState([])
    const [ comment, setComment ] = useState({
		commenter: dbUser._id,
		commentContent: ''
	});

    useEffect(() => {
        setComments(props.activityInfo.comments)
    },[props.activityInfo.comments])

    function saveCommentHandler(e) {
		e.preventDefault();
		// props.messageSuccess()
		API.addCommentByActivityID(props.id, {
			commenter: comment.commenter,
			comment: comment.commentContent
		}).then(response=>(setComments(response.data.comments)))
		
		setComment({
			commenter: dbUser._id,
			commentContent: ''
		});

	}
    function handleInputChange(event) {
		const { name, value } = event.target;
		setComment({ ...comment, [name]: value });
	}

    return(
        <div id="comment-section" className="row">
					<div id="input-row" className="row">
						<form id="comment-form">
							<input
								name="commentContent"
								value={comment.commentContent}
								id="comment-input"
								onChange={handleInputChange}
								placeholder="Post a public comment..."
							/>
							<button className="btn btn-success" onClick={saveCommentHandler}>
								Post Comment
							</button>
						</form>
					</div>
					{comments ? (
						comments.map((item) => (
							<div className="comments-row row">
								{item.comment}<span/>{item.createdAt}<span/>{item.commenter.fullname}
							</div>
						))
					) : null}
				</div>
    )
}

export default CommentSection