const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'replaceCurrentSemester':
      return action.semesterInfo;

    case 'addSemester':
      return [...state, action.semesterInfo];

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

export function addSemester(semesterInfo) {
  return {
    type: 'addSemester',
    semesterInfo: semesterInfo
  };
}
