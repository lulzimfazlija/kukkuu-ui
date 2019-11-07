export const updateURLParam = (url: string, param: string, value: string) => {
  return url.replace(`/${param}/`, `/${value}/`);
};
