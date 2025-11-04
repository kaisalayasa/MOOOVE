export const hasToken = (token) => {
  if (!token) {
    window.alert('Please login to access the page');
    return false; 
  }

  return true;
};
