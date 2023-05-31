export const unauthorizedRequest = async (url: string, method: string, body?: object) => {
  const request: object = body
    ? {
        method: method,

        body: JSON.stringify(body),
      }
    : {
        method: method,
      };

  const response = await fetch(url, request);

  if (response.status === 200) {
    return await response.json();
  } else {
    return response.status;
  }
};
