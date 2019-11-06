import { fetchResponse, getStaticData, getUserFromResponse } from './mockApiUtils';

export const delay = process.env.NODE_ENV === 'test' ? 0 : 1000;

export function mockBackendApi() {
  const realFetch = window.fetch;
  window.fetch = function fakeFetch(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const db = getStaticData();

        // authenticate
        if (url.match(/\/authentication\/login/) && opts.method === 'POST') {
          const params = JSON.parse(opts.body);

          const filteredUsers = db.users.filter((user) => user.username === params.username
            && user.password === params.password);

          if (filteredUsers.length) {
            const user = filteredUsers[0];
            const responseJson = { secretKey: `fake-jwt-token-${user.id}` };
            resolve(fetchResponse(true, responseJson));
          } else {
            resolve(fetchResponse(false, { message: "Username or password is incorrect" }));
          }

          return;
        }

        // get user profile
        if (url.match(/\/customer/) && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization) {
            const user = getUserFromResponse(db, opts.headers);
            if (user) {
              resolve(fetchResponse(true, user));
            } else {
              resolve(fetchResponse(false, { message: "invalid user" }));
            }
          } else {
            // return 401 not authorised if token is null or invalid
            resolve(fetchResponse(false, { message: "UnAuthorized" }, 401));
          }
          return;
        }

        // get lines
        if (url.match(/\/ActiveFile$/) && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization) {
            const user = getUserFromResponse(db, opts.headers);
            if (user) {
              const lines = db.lines.filter((line) => line.userId === user.id)
                .map((l) => ({ id: l.id, number: l.number }));
              resolve(fetchResponse(true, lines));
            } else resolve(fetchResponse(false, { message: "invalid user" }));
          } else {
            // return 401 not authorised if token is null or invalid
            resolve(fetchResponse(false, { message: "UnAuthorized" }, 401));
          }

          return;
        }

        // get line details
        if (url.match(/\/ActiveFile\/\d+$/) && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization) {
            const user = getUserFromResponse(db, opts.headers);
            const urlParts = url.split('/');
            const lineId = parseInt(urlParts[urlParts.length - 1], 10);
            if (user && lineId) {
              const lines = db.lines.filter((line) => line.userId === user.id
                && line.id === lineId);
              const line = lines.length ? lines[0] : undefined;
              resolve(fetchResponse(true, line));
            } else resolve(fetchResponse(false, { message: "invalid user or lineId" }));
          } else {
            // return 401 not authorised if token is null or invalid
            resolve(fetchResponse(false, { message: "UnAuthorized" }, 401));
          }

          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response));
      }, delay);
    });
  };
}
