export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  daily_mix: null,
  // token:
  // "BQCnYFdgvofC0lYv1xmNolHZZB6IGL6aPmyQp8cqLfzGNUcDYuOSN92SGM_4VsFBiIv-zrSn9vwHQUw79_QXPScn0fDtX2xLHaoMRjew4TEC1RvcEtjOxAkcQO58FvH6GBqSOJ27Inau3BNNjSs1cwxuOm14jY4z7nvadbEzxSLGkWVT",
};

// here state represent your object you have created

const reducer = (state, action) => {
  // console.log("the action is : ", action);
  switch (action.type) {
    case "SET_USER":
      // this is returning an object
      return {
        // passing the actual object in this and  and update this
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_DAILY_MIX":
      return {
        ...state,
        daily_mix: action.daily_mix,
      };
    default:
      // if case is not exist the simple return our empty object
      return state;
  }
};

export default reducer;
