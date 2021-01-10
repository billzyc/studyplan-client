const defaultState = [];

function compareSemesters(a, b) {
  const semesterA = a.semester_code;
  const semesterB = b.semester_code;

  let comparison = 0;
  if (semesterA > semesterB) {
    comparison = 1;
  } else if (semesterA < semesterB) {
    comparison = -1;
  }
  return comparison;
}

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'replaceCurrentSemester':
      return action.semesterInfo.sort(compareSemesters);

    case 'addSemester':
      return [...state, action.semesterInfo].sort(compareSemesters);

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
