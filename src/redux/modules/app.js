const defaultState = {
  landingLoaded: false,
  coursesLoaded: false
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'updateLanding':
      return { ...state, landingLoaded: action.landingLoaded };
    case 'updateCourse':
      return { ...state, coursesLoaded: action.coursesLoaded };
    default:
      return state;
  }
}

// Action Creators
export function setLandingLoaded(landingLoaded) {
  return {
    type: 'updateLanding',
    landingLoaded
  };
}

export function updateCoursesLoaded(coursesLoaded) {
  return {
    type: 'updateCourse',
    coursesLoaded: coursesLoaded
  };
}
