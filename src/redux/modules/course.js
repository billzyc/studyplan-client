const defaultState = null;

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'replaceCurrentCourse':
      return action.courseInfo;

    default:
      return state;
  }
}

// Action Creators
export function replaceCourse(courseInfo) {
  return {
    type: 'replaceCurrentCourse',
    courseInfo: courseInfo
  };
}
