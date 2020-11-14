interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

export function signIn() {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'kksmsndhbcgftryehsjamnchdudkdkssdkdlmvlkrnveriovnrivnsdjvnsdk',
        user: {
          name: 'Gideon Fernandes',
          email: 'gideon.de.fernandes@gmail.com',
        },
      });
    }, 2000);
  });
};
