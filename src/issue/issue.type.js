import { createActionSet } from '@utils';

export const GET_ISSUE_COMMENTS = createActionSet('GET_ISSUE_COMMENTS');
export const POST_ISSUE_COMMENT = createActionSet('POST_ISSUE_COMMENT');
export const EDIT_ISSUE = createActionSet('EDIT_ISSUE');
export const CHANGE_LOCK_STATUS = createActionSet('CHANGE_LOCK_STATUS');
export const GET_ISSUE_DIFF = createActionSet('GET_ISSUE_DIFF');
export const GET_ISSUE_FROM_URL = createActionSet('GET_ISSUE_FROM_URL');