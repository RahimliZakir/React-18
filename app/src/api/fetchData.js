import { wrapPromise } from "./wrapPromise";

export const fetchData = (url) => {
  const promise = fetch(url)
    .then((resp) => resp.json());

  return wrapPromise(promise);
};
