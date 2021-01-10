const defaultState = {};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.profileInfo };

    case 'remove':
      return {};

    default:
      return state;
  }
}

// Action Creators
export function updateProfile(profileInfo) {
  return {
    type: 'update',
    profileInfo: profileInfo
  };
}

export function removeProfile() {
  return {
    type: 'remove'
  };
}
