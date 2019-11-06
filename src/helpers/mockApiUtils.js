
export function fetchResponse(success, data, statusCode) {
  return {
    ok: success, status: statusCode || 200, text: () => Promise.resolve(JSON.stringify(data)),
  };
}

export function getUserFromResponse(db, responseHeaders) {
  const authHeaderParts = responseHeaders.Authorization.split('-');
  const userid = parseInt(authHeaderParts[authHeaderParts.length - 1], 10);
  const matchedUsers = db.users.filter((user) => user.id === userid);
  const user = matchedUsers.length ? matchedUsers[0] : null;
  return user;
}

export function getStaticData() {
  // array of registered users
  const users = [
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
      isMale: true,
      firstName: "مسعود",
      lastName: "کلانتری",
      fatherName: null,
      nationalCode: null,
      birthDate: 13491220,
      phone: "2177202699",
      cellPhone: "989121790377",
      postalCode: "1649714541",
      address: "نارمک - گلبرگ  شرقی -  بین مهر مداین -  پ  379  خدمات کامپیوتر گلبرگ",
      eMail: "golbargcom@gmail.com",
      balance: 11098,
      company: null,
    },
  ];

  const lines = [
    {
      id: 127307,
      number: 2177202699,
      status: "active",
      prepaidService: null,
      activeService: {
        accounts: null,
        id: 2657676,
        tarrifId: 8084,
        startDateTime: 13980202141833,
        endDateTime: 13980430141833,
        tarrifClass: "spring campaign",
        serviceTitle: "spring campaign - 3months - 10240Gig - 16Mbps",
      },
      userId: 1,
    },
    {
      id: 127308,
      number: 2177202799,
      status: "غیرفعال",
      prepaidService: null,
      activeService: {
        accounts: null,
        id: 2657776,
        tarrifId: 8085,
        startDateTime: 13980202141833,
        endDateTime: 13980430141833,
        tarrifClass: "تابستانه",
        serviceTitle: " تابستانه (۱۰گیگ ۳ماه ۴۰۹۶)",
      },
      userId: 2,
    },
    {
      id: 127309,
      number: 2177202899,
      status: "فعال",
      prepaidService: {
        accounts: null,
        id: 2657876,
        tarrifId: 8086,
        startDateTime: 13980402141833,
        endDateTime: 13980702141833,
        tarrifClass: "تابستانه",
        serviceTitle: " تابستانه (۱۰گیگ ۳ماه ۴۰۹۶)",
      },
      activeService: {
        accounts: null,
        id: 2657875,
        tarrifId: 8086,
        startDateTime: 13980102141833,
        endDateTime: 13980402141833,
        tarrifClass: "بهاری",
        serviceTitle: "بهاری (۱۰گیگ ۳ماه ۴۰۹۶)",
      },
      userId: 2,
    },
  ];
  return { users, lines };
}
