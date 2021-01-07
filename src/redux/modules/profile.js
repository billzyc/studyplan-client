const defaultState = {};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.profileInfo };

    default:
      return state;
  }
}

// Action Creators
export function updateProfile(profileInfo) {
  console.log(profileInfo);
  return {
    type: 'update',
    profileInfo: profileInfo
  };
}
