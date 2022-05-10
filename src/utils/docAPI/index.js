const user = {
  userid: localStorage.getItem("token"),
};
const isFunction = (fn) => ({}.toString.call(fn) === "[object Function]");
const isPlainObject = (obj) => ({}.toString.call(obj) === "[object Object]");
function handleErrors(response) {
  if (!response.ok) {
    if (response.status == 400) {
      return response.json().then((data) => {
        console.error(data.data.errors);
        throw new Error(JSON.stringify(data.data.errors));
      });
    } else if (response.status === 401) {
      location.href = "/";
      localStorage.clear();
    } else throw new Error(JSON.stringify(response.statusText));
  }
  return response;
}

const requestor =
  (defaults) =>
  (method, requestURL, options = {}) => {
    if (isPlainObject(options) === false) options = {};
    const onError = options.onError;
    delete options.onError;
    let contentType = "application/json;";
    // merging defaults and other passed options, and deep merging body and headers.
    options = Object.assign(
      {},
      defaults,
      options,
      { method },
      { headers: { ...defaults.headers, ...options.headers } }
    );

    console.log(options);

    return fetch(requestURL, options)
      .then((response) => {
        handleErrors(response);
        if (response && response.headers && isFunction(response.headers.get))
          contentType = response.headers.get("Content-Type");
        if (contentType.includes("application/json;")) return response.json();
        return response.blob();
      })
      .catch((error) => {
        console.error(JSON.stringify(error));
        isFunction(onError) && onError(error);
        return { error, status: "unsuccess" };
      });
  };

// Defaulting the headers ...
const callerMethod = requestor({
  headers: {
    Accept: "application/json, text/plain, /",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default () => {
  var baseurl = "https://jsonplaceholder.typicode.com";

  return {
    collection(collName) {
      return {
        create(data) {
          return callerMethod("POST", `${baseurl}/${collName}`, data);
        },
        read(data) {
          return callerMethod("GET", `${baseurl}/${collName}`, data);
        },
        readone(id) {
          return callerMethod("GET", `${baseurl}/${collName}/${id}`);
        },
        update(data) {
          return callerMethod("PATCH", `${baseurl}/${collName}`, data);
        },
        delete(data) {
          return callerMethod("DELETE", `${baseurl}/${collName}`, data);
        },
      };
    },
  };
};
