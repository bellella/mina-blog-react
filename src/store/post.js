//action type
export const GET_POSTS = "POST/GET_POSTS";
export const SET_POSTS = "POST/SET_POSTS";
export const ADD_POSTS = "POST/ADD_POSTS";
export const SET_CATEGORIES = "POST/SET_CATEGORIES";
export const SET_HAS_MORE = "POST/SET_HAS_MORE";
export const START_INITIALIZE = "COMMON/START_INITIALIZE";
export const SET_INITIALIZE = "COMMON/SET_INITIALIZE";

//state
const initalState = {
  posts: [],
  lastId: null,
  hasMore: true,
  categories: [],
  initialized: false
};

//action
export const postActions = {
  getPosts: (lastId) => ({ type: GET_POSTS, lastId }),
  setPosts: (value) => ({ type: SET_POSTS, value }),
  addPosts: (value) => ({ type: ADD_POSTS, value }),
  setHasMore: (value) => ({ type: SET_HAS_MORE, value }),
  setCategories: (value) => ({ type: SET_CATEGORIES, value }),
  startInitialize: (value) => ({ type: START_INITIALIZE, value }),
  setInitialize: (value) => ({ type: SET_INITIALIZE, value }),
};

//reducer
export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.value,
      };
    case ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.value],
      };
    case SET_HAS_MORE:
      return {
        ...state,
        hasMore: action.value,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.value,
      };
    case SET_INITIALIZE:
      return {
        ...state,
        initialized: action.value,
      };
    default:
      return state;
  }
};
