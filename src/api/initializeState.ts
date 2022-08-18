function initializeState(): [] {
  let state = localStorage.getItem('state');
  if (state === null) {
    localStorage.setItem('state', JSON.stringify([]));
    state = localStorage.getItem('state');
  }
  return JSON.parse(state!);
}

export default initializeState;
