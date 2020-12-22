export const getScreeningState = (store) => store.screening;

export const getcreeningList = (store) =>
getScreeningState(store) ? getScreeningState(store).allIds : [];

export const getScreeningById = (store, id) =>
getScreeningState(store) ? { ...getScreeningState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getScreenings = (store) =>
getcreeningList(store).map((id) => getScreeningById(store, id));

export const getAllScreening = (store) => {
  const allScreenings =  getScreenings(store);
  return allScreenings;
};