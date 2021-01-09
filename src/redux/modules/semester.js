const defaultState = null;

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
      if (action.semesterInfo) {
        return action.semesterInfo.sort(compareSemesters);
      }
      return null;

    case 'addSemester':
      if (state) {
        return [...state, action.semesterInfo].sort(compareSemesters);
      } else {
        return [action.semesterInfo].sort(compareSemesters);
      }

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
