export function canUselocalStorage() {
  try {
    localStorage.setItem('test__localstorage', 'test_localstorage');
    localStorage.removeItem('test__localstorage');
    window.canUselocalStorage = true;
    return true;
  } catch () {
    window.canUselocalStorage = false;
    return false;
  }
};
