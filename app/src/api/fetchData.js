import { wrapPromise } from "./wrapPromise";

export const fetchData = (url) => {
  const promise = fetch(url)
    .then((resp) => resp.json())
    .then((resp) => resp);

  return wrapPromise(promise);
};
