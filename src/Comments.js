import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

function Comments() {
  const { userInfo, _ } = useContext(ConnexionContext);
  const { planet } = useParams();
  const [comments, setComments] = useState([]);
  const [isUserOnly, setIsUserOnly] = useState(false)
  const isAsc = useRef()

  const getComments = async () => {
    const docref = doc(db, "comments", planet);
    await getDoc(docref).then((docu) => {
      setComments(docu.data().comments);
    });
  };

  const reverseCommentsOrder = () => {
    setComments([...comments].reverse());
  };

  const getUserCommentsOnly = () => {
    setIsUserOnly(!isUserOnly)
  }

  useEffect(() => {
    isAsc.current = true;
    getComments();
  }, []);

  return (
    <div className="page page-comments">
      <div id="comment-container">
        {/* {!userInfo.auth.currentUser ? (
          <>
            <p>You have to be online to post comments</p>
            <Link to="/account/connexion">
              <button id="theButton" type="button">Log in</button>
            </Link>
          </>
        ) : (
          <CommentArea
            id={userInfo.auth.currentUser.uid}
            user={userInfo.info}
            planet={planet}
            setComments={setComments}
          />
        )} */}
      </div>
      <div id="commentsContainer">
        <div id="dropdown">
          <div className="dropdown">
            <button type="button" className="dropbtn">
              Filter
            </button>
            <ul className="dropdown-content">
              <li onClick={() => reverseCommentsOrder()}>
                filter {isAsc.current ? "ascending" : "descending"}
              </li>
              {userInfo.auth.currentUser && (
                <li onClick={() => getUserCommentsOnly()}>
                  {!isUserOnly ? "my comments" : "all" }
                </li>
              )}
            </ul>
          </div>
        </div>
      
      {/* {!isUserOnly ? comments.map((comment) => <UserComment commentData={comment} />) :  comments.filter(
            (comment) => comment.id === userInfo.auth.currentUser.uid
      ).map((comment) => <UserComment commentData={comment} />)} */}
      </div>
    </div>
  );
}


export default Comments;
