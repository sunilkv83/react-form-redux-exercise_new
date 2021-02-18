// Login Selectors, Will be spliting into different file
export const getLoginState = (store) => store.login;
export const getLoggedInUser = (store) => {
  const loggedInUser = getLoginState(store);
  return loggedInUser;
};
