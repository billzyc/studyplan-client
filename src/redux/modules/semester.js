const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'replaceCurrentSemester':
      return action.semesterInfo;

    default:
      return state;
  }
}

// Action Creators
export function replaceSemester(semesterInfo) {
  return {
    type: 'replaceCurrentSemester',
    semesterInfo: semesterInfo
  };
}
