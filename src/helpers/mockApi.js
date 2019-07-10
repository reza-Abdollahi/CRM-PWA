const delay = process.env.NODE_ENV === 'test' ? 0 : 1000;

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
                let responseJson = { secretKey: `fake-jwt-token-${user.id}` };
                resolve(fetchResponse(true, responseJson));
            } else {
                resolve(fetchResponse(false, {message: "Username or password is incorrect"}));
            }

            return;
        }

        // get user profile
        if (url.match(/\/customer/) && opts.method === 'GET') {
            if (opts.headers && opts.headers.Authorization) {
              const user = getUserFromResponse(db, opts.headers);
              if (user)
                resolve(fetchResponse(true, user));
              else
                resolve(fetchResponse(false, {message: "invalid user"}));
            } else {
              // return 401 not authorised if token is null or invalid
              resolve(fetchResponse(false, {message: "UnAuthorized"}, 401));
            }
            return;
        }

        // get lines
        if (url.match(/\/ActiveFile$/) && opts.method === 'GET') {
            if (opts.headers && opts.headers.Authorization) {
              const user = getUserFromResponse(db, opts.headers);
              if (user) {
                const lines = db.lines.filter(line => line.userId === user.id).map(l =>
                  ({id: l.id, "number": l.number})
                );
                resolve(fetchResponse(true, lines));
              }
              else resolve(fetchResponse(false, {message: "invalid user"}));

            } else {
                // return 401 not authorised if token is null or invalid
                resolve(fetchResponse(false, {message: "UnAuthorized"}, 401));
            }

            return;
        }

        // get line details
        if (url.match(/\/ActiveFile\/\d+$/) && opts.method === 'GET') {
            if (opts.headers && opts.headers.Authorization) {
              const user = getUserFromResponse(db, opts.headers);
              const urlParts = url.split('/'),
                    lineId = parseInt(urlParts[urlParts.length - 1]);
              if (user && lineId) {
                const lines = db.lines.filter(line => line.userId === user.id && line.id === lineId),
                      line = lines.length ? lines[0] : undefined;
                resolve(fetchResponse(true, line));
              }
              else resolve(fetchResponse(false, {message: "invalid user or lineId"}));

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

function getUserFromResponse(db, responseHeaders) {
  const authHeaderParts = responseHeaders.Authorization.split('-')
      ,userid = parseInt(authHeaderParts[authHeaderParts.length - 1])
      ,matchedUsers = db.users.filter(user => user.id === userid)
      ,user = matchedUsers.length ? matchedUsers[0] : null;
  return user;
}

function getStaticData() {
  // array of registered users
  let users = [
    {
      id: 1,
      username: 'reza',
      password: '123',
      isMale: true,
      firstName: 'Reza',
      lastName: 'Abdollahi',
      phone: "",
      cellPhone: "989359175720",
      eMail: 'abdollahi.reza@live.com',
      address: 'Shiraz, Iran',
      balance: 11098,
      company: null,
    },
    {
      id: 2,
      username: 'test',
      password: '123',
      isMale:true,
      firstName:"مسعود",
      lastName:"کلانتری",
      fatherName:null,
      nationalCode:null,
      birthDate:13491220,
      phone:"2177202699",
      cellPhone:"989121790377",
      postalCode:"1649714541",
      address:"نارمک - گلبرگ  شرقی -  بین مهر مداین -  پ  379  خدمات کامپیوتر گلبرگ",
      eMail:"golbargcom@gmail.com",
      balance:11098,
      company:null
    },
  ];

  const lines = [
    {
      id:127307,
      number:2177202699,
      status:"active",
      prepaidService:null,
      activeService: {
        accounts:null,
        id:2657676,
        tarrifId:8084,
        startDateTime:13980202141833,
        endDateTime:13980430141833,
        tarrifClass:"spring campaign",
        serviceTitle:"spring campaign - 3months - 10240Gig - 16Mbps"
      },
      userId: 1,
    },
    {
      id:127308,
      number:2177202799,
      status:"غیرفعال",
      prepaidService:null,
      activeService: {
        accounts:null,
        id:2657776,
        tarrifId:8085,
        startDateTime:13980202141833,
        endDateTime:13980430141833,
        tarrifClass:"تابستانه",
        serviceTitle:" تابستانه (۱۰گیگ ۳ماه ۴۰۹۶)"
      },
      userId: 2,
    },
    {
      id:127309,
      number:2177202899,
      status:"فعال",
      prepaidService: {
        accounts:null,
        id:2657876,
        tarrifId:8086,
        startDateTime:13980402141833,
        endDateTime:13980702141833,
        tarrifClass:"تابستانه",
        serviceTitle:" تابستانه (۱۰گیگ ۳ماه ۴۰۹۶)"
      },
      activeService: {
        accounts:null,
        id:2657875,
        tarrifId:8086,
        startDateTime:13980102141833,
        endDateTime:13980402141833,
        tarrifClass:"بهاری",
        serviceTitle:"بهاری (۱۰گیگ ۳ماه ۴۰۹۶)"
      },
      userId: 2,
    },
  ];
  return {users, lines};
}
