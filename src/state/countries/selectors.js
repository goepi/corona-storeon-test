import max from 'lodash/max';

export const getMaxCases = (countriesById) => {
  return max(Object.keys(countriesById).map((id) => countriesById[id].latestData.cases));
};
