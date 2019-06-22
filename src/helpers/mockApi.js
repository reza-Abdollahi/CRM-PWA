const delay = 1000;

export function mockBackendApi() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const db = getStaticData();

        // authenticate
        if (url.match(/\/users\/authenticate/) && opts.method === 'POST') {
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

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));

      }, delay);
    });
  };
}

function fetchResponse(success, data) {
  return { ok: success, text: () => Promise.resolve(JSON.stringify(data)) };
}

function getStaticData() {
  // array of registered users
  let users = [
    {
      id: 1,
      username: 'reza',
      password: '123',
      firstName: 'Reza',
      lastName: 'Abdollahi'
    },
    {
      id: 2,
      username: 'test',
      password: '123',
      firstName: 'John',
      lastName: 'Smith'
    },
  ];
  return {users};
}
