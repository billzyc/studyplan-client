const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'replaceCurrentCourse':
      return action.courseInfo;

    case 'removeCourse':
      return [];

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

export function removeCourse() {
  return {
    type: 'removeCourse'
  };
}
