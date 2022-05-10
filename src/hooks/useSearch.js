export const useSearch = (data, value) => {
  let filteredData;

  if (!value) {
    filteredData = data;
    return [filteredData];
  }

  let searchValue = value && Object.values(value)[0];
  let searchKey = value && Object.keys(value)[0];
  filteredData = data.filter((el) => {
    return el[searchKey].toLowerCase().includes(searchValue?.toLowerCase());
  });
  return [filteredData];
};