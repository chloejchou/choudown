import * as TagUtil from '../util/tag_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";

export const requestTags = name => dispatch => (
  TagUtil.fetchTags(name).then((data) => dispatch(receiveTags(data)))
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});
