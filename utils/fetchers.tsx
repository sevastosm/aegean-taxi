
export const tokenFetcher = () =>
  fetch('https://carky-api.azurewebsites.net/token', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=password&username=webapp@aegeantaxi.com&password=AegeanT@xi`,
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

export const sendSms = (
  apiToken: string,
  phoneNumbers: Array<string>,
  message: string
) =>
  fetch(
    `https://carky-api.azurewebsites.net/api/AdminDashboard/Clients/SendBulkSMSNotification`,
    {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${apiToken}`,
        'content-type': 'application/x-www-form-urlencoded',
      }),
      body: `PhoneNumbersArray=${phoneNumbers}&From=Aegean Taxi&Message=${message}`,
    }
  ).then((r) => r);