import {
  GET_ISSUE_COMMENTS_IS_PENDING,
  GET_ISSUE_COMMENTS_WAS_SUCCESSFUL,
  GET_ISSUE_COMMENTS_HAD_ERROR,
  POST_ISSUE_COMMENT_IS_PENDING,
  POST_ISSUE_COMMENT_WAS_SUCCESSFUL,
  POST_ISSUE_COMMENT_HAD_ERROR,
  HYDRATE_COMMENT_IS_PENDING,
  HYDRATE_COMMENT_WAS_SUCCESSFUL,
  HYDRATE_COMMENT_HAD_ERROR,
  CREATE_REACTION_IS_PENDING,
  CREATE_REACTION_WAS_SUCCESSFUL,
  CREATE_REACTION_HAD_ERROR,
  DELETE_REACTION_IS_PENDING,
  DELETE_REACTION_WAS_SUCCESSFUL,
  DELETE_REACTION_HAD_ERROR
} from '../constants';

import { fetchUrlPreview, fetchPostIssueComment, fetchCreateIssueReactionComment, fetchDeleteReaction } from '../api';

const getIssueComments = (url) => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({ type: GET_ISSUE_COMMENTS_IS_PENDING });

    return fetchUrlPreview(url, accessToken).then(data => {
      dispatch({
        type: GET_ISSUE_COMMENTS_WAS_SUCCESSFUL,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ISSUE_COMMENTS_HAD_ERROR,
        payload: error,
      })
    })
  };
};

const hydrateComment = (comment) => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({ type: HYDRATE_COMMENT_IS_PENDING });

    return fetchUrlPreview(comment.reactions.url, accessToken).then(data => {
      dispatch({
        type: HYDRATE_COMMENT_WAS_SUCCESSFUL,
        commentID: comment.id,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: HYDRATE_COMMENT_HAD_ERROR,
        payload: error,
      })
    })
  };
};

export const postIssueComment = (body, owner, repoName, issueNum) => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({ type: POST_ISSUE_COMMENT_IS_PENDING });

    return fetchPostIssueComment(body, owner, repoName, issueNum, accessToken).then(data => {
      dispatch({
        type: POST_ISSUE_COMMENT_WAS_SUCCESSFUL,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: POST_ISSUE_COMMENT_HAD_ERROR,
        payload: error,
      })
    })
  };
};

export const getHydratedComments = (url) => {
  return (dispatch, getState) => {
    return dispatch(getIssueComments(url)).then(() => {
      const comments = getState().issue.comments;

      comments.filter(comment => comment.reactions.total_count > 0).forEach((comment) => {
          return dispatch(hydrateComment(comment))
      });
    })
  }
}

export const createIssueCommentReaction = (type, commentID, owner, repoName) => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({ type: CREATE_REACTION_IS_PENDING });

    return fetchCreateIssueReactionComment(type, commentID, owner, repoName, accessToken).then(data => {
      dispatch({
        type: CREATE_REACTION_WAS_SUCCESSFUL,
        commentID: commentID,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_REACTION_HAD_ERROR,
        payload: error,
      })
    })
  };
}

export const deleteReaction = (reactionID) => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({ type: DELETE_REACTION_IS_PENDING });

    return fetchDeleteReaction(reactionID, accessToken).then(() => {
      dispatch({
        type: DELETE_REACTION_WAS_SUCCESSFUL,
        reactionID: reactionID,
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_REACTION_HAD_ERROR,
        payload: error,
      })
    })
  };
}
