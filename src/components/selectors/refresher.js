// Login Selectors, Will be spliting into different file
export const getRefresherState = (store) => store.refreshStatus;
export const getRefreshState = (store) => {
  const refreshStatus = getRefresherState(store);
  return refreshStatus;
};
