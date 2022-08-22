import { reducer } from '../reducers/reducer';

function createStore(reducer) {
  let state;
  const listeners = [];
  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);
