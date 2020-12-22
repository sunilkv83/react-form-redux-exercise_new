//My Locations Selectors

export const getAllLocationState = (store) => store.mylocation;
export const getLocationList = (store) =>
  getAllLocationState(store) ? getAllLocationState(store).allIds : [];

export const getLocationById = (store, id) =>
  getAllLocationState(store)
    ? { ...getAllLocationState(store).byIds[id], id }
    : {};

export const getLocations = (store) =>
  getLocationList(store).map((id) => getLocationById(store, id));

export const getAllLocations = (store) => {
  const allLocations = getLocations(store);
  return allLocations;
};
