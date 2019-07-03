const delay = 1000;

export function mockBackendApi() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const db = getStaticData();

        // authenticate
        if (url.match(/\/authentication\/login/) && opts.method === 'POST') {
            let params = JSON.parse(opts.body);

            let filteredUsers = db.users.filter(user => {
                return user.username === params.username && user.password === params.password;
            });

            if (filteredUsers.length) {
                let user = filteredUsers[0];
                let responseJson = {
                    Id: user.id,
                    Username: user.username,
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    Token: `fake-jwt-token-${user.id}`
                };
                resolve(fetchResponse(true, responseJson));
            } else {
                resolve(fetchResponse(false, {message: "Username or password is incorrect"}));
            }

            return;
        }

        // get lines
        if (url.match(/\/ActiveFile/) && opts.method === 'GET') {
            if (opts.headers && opts.headers.Authorization) {
              let authHeaderParts = opts.headers.Authorization.split('-')
                ,userid = parseInt(authHeaderParts[authHeaderParts.length - 1])
                ,matchedUsers = db.users.filter(user => user.id === userid)
                ,user = matchedUsers.length ? matchedUsers[0] : null;

                resolve(fetchResponse(true, user.lines));
            } else {
                // return 401 not authorised if token is null or invalid
                resolve(fetchResponse(false, {message: "UnAuthorized"}, 401));
            }

            return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));

      }, delay);
    });
  };
}

function fetchResponse(success, data, statusCode) {
  return { ok: success, status: statusCode || 200, text: () => Promise.resolve(JSON.stringify(data)) };
}

function getStaticData() {
  // array of registered users
  let users = [
    {
      id: 1,
      username: 'reza',
      password: '123',
      firstName: 'Reza',
      lastName: 'Abdollahi',
      lines: [
        {id: 3, phoneNumber: 2184211308, statusText: "connected"}
      ]
    },
    {
      id: 2,
      username: 'test',
      password: '123',
      firstName: 'John',
      lastName: 'Smith',
      lines: [
        {id: 1, phoneNumber: 2184211310, statusText: "requested"},
        {id: 2, phoneNumber: 2184211309, statusText: "connected"}
      ]
    },
  ];
  return {users};
}
