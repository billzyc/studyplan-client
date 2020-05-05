const defaultState = null;

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'openModal':
      return action.modalKey;

    default:
      return state;
  }
}

// Action Creators
export function openModal(modalKey) {
  return {
    type: 'openModal',
    modalKey: modalKey
  };
}

export function closeModal() {
  return {
    type: 'openModal',
    modalKey: null
  };
}
