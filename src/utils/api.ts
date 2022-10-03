// const getHeaders = () => {
//     return `Bearer ${
//       JSON.parse(localStorage.getItem("okta-token-storage") || "").idToken
//         .idToken
//     }`;
//   };
  const getParamsString = (params: any) => {
    let string = "";
    if (params) {
      string = "?" + Object.entries(params).map((ele) => `${ele[0]}=${ele[1]}`).join('&');
    }
    return string;
  };
  const get = (urls: string[], headers?: object, params?: object) => {
    return fetch(urls.join("/") + "" + getParamsString(params), {
      headers: {
        ...headers,
        "Content-Type": "application/json",
        // Authorization: getHeaders(),
      },
    });
  };
  
  const post = async (urls: string[], data?: object, headers?: object) => {
    return await fetch(urls.join("/"), {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        // Authorization: getHeaders(),
      },
      body: JSON.stringify(data),
    });
  };
  
  const put = async (urls: string[], data?: object, headers?: object) => {
    return await fetch(urls.join("/"), {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        // Authorization: getHeaders(),
      },
      body: JSON.stringify(data),
    });
  };
  
  const api = {
    get,
    post,
    put
  };
  export default api;
  