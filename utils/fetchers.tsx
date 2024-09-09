import dayjs from "dayjs";

export const tokenFetcher = async () =>
  await fetch("https://carky-api.azurewebsites.net/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=password&username=webapp@aegeantaxi.com&password=AegeanT@xi`,
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

export const verifyToken = async ({
  token,
  firstName,
  lastName,
  mobileNumber,
}: any) => {
  const captcha = token;

  const data = await fetch(
    "https://us-central1-aegean-service.cloudfunctions.net/api/verify",
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        mobile: mobileNumber,
        captcha: captcha,
      }),
    }
  );
  return await data.json();
};

export const sendSms0 = (
  apiToken: string,
  phoneNumbers: Array<string>,
  message: string
) =>
  fetch(
    `https://carky-api.azurewebsites.net/api/AdminDashboard/Clients/SendBulkSMSNotification`,
    {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${apiToken}`,
        "content-type": "application/x-www-form-urlencoded",
      }),
      body: `PhoneNumbersArray=${phoneNumbers}&From=Aegean Taxi&Message=${message}`,
    }
  ).then((r) => r);

export async function sendSms(phoneNumbers: string, message: string) {
  const data: any = {
    message: message,
    phone: phoneNumbers,
  };

  await fetch(
    "https://us-central1-aegean-service.cloudfunctions.net/api/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

// fetch("https://dashboard.nexmo.com/getting-started/api/demo/sms", {
//   headers: {
//     accept: "application/json",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,haw;q=0.7,el;q=0.6",
//     "content-type": "application/json",
//     "csrf-token": "6qKj9EQH-wu4xIY0rVlkSAX8ZypdqKaK5n64",
//     "sec-ch-ua":
//       '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"macOS"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "a4e48bb4-5554-47c4-a889-771cdd9ca2ef",
//     "x-tracking-request-id": "9e9ed3fd-1d40-43b3-82bf-078969a15bd5",
//     "x-tracking-session-id": "80a8511e-bab6-41ba-93ce-de959ea4e807",
//     "x-xsrf-token": "a4e48bb4-5554-47c4-a889-771cdd9ca2ef",
//   },
//   referrer: "https://dashboard.nexmo.com/getting-started/sms",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: '{"from":"Vonage APIs","message":"Hello from Vonage SMS API"}',
//   method: "POST",
//   mode: "cors",
//   credentials: "include",
// });



export const createOrder = async (contextState: any) => {
  // new order
  if (contextState && contextState.startLocationLat) {
    contextState.searchingForDriver = true;
    let orderDetailsRes;
    dayjs.tz.setDefault();
    let dayjsLocal = dayjs(
      `${contextState.pickUpDate} ${contextState.pickUpTime}`
    );
    // console.log(`${contextState.pickUpDate} ${contextState.pickUpTime}`)
    // console.log(dayjsLocal.format())

    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/`,
        {
          method: "POST",
          headers: new Headers({
            Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
          }),
          body: JSON.stringify({
            waypoints: [
              {
                exactLatLng: {
                  lat: contextState.startLocationLat,
                  lng: contextState.startLocationLng,
                },
                street: contextState.pickUpLocation,
                poiName: contextState.pickUpLocation,
                placeLatLng: {
                  lat: contextState.startLocationLat,
                  lng: contextState.startLocationLng,
                },
              },
              {
                exactLatLng: {
                  lat: contextState.endLocationLat,
                  lng: contextState.endLocationLng,
                },
                street: contextState.dropLocation,
                poiName: contextState.dropLocation,
                placeLatLng: {
                  lat: contextState.endLocationLat,
                  lng: contextState.endLocationLng,
                },
              },
            ],
            client: {
              name: `${contextState.firstName} ${contextState.lastName}`,
              phone: contextState.phoneNumber,
            },
            notes: "From Aegean Taxi Web App",
            // pickupTime: encodeURIComponent(dayjsLocal.toISOString()),
            pickupTime: dayjsLocal.format(),
            unitOfLength: "KILOMETER",
            vehicleType: contextState.selectedCar.vehicleType,
            numberOfSeats: contextState.selectedCar.numberOfSeats,
            // paymentMethods: contextState.selectedCar.paymentMethods,
            paymentMethods: ["CASH"],
            prepaid: false,
            tariffId: contextState.selectedCar.tariffId,
          }),
        }
      );

      if (res.ok) {
        return await res.json();
        //handle ok
      } else {
        //handle err
      }
    } catch (error) {
      console.log("CREATE ORDER ERROR", error);
      //handle catch
    }
  }
};




export const cancelOrder = async (orderId: string) => {
  if (orderId) {
    fetch(
      `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${orderId}/status`,
      {
        method: "PUT",
        headers: new Headers({
          Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
        }),
        body: JSON.stringify({
          status: "CANCELLED_BY_DISPATCH",
        }),
      }
    ).then(
      (res) => res,
      (error) => error
    );
  }
};

export const getOrderUpdate = async (orderId: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${orderId}/update`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
      }),
    }
  )
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return error
      }
    );
}

export const getOrderData = async (orderId: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${orderId}/request`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
      }),
    }
  )
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return { noOrder: "No order found" };
      }
    );
}
export const getOrderDetails = async (orderId: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${orderId}/offer`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
      }),
    }
  )
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return error
      }
    );
}

export const getDriver = async (orderId: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${orderId}/request`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
      }),
    }
  )
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return error
      }
    );
}


export const getAvailableRouteCars = async (
  contextState: any,
  dayjsLocal: any,
  apiToken: string,
  start_location_lat: any,
  start_location_lng: any,
  end_location_lat: any,
  end_location_lng: any,
  clearDirections: any
) => {
  return fetch(
    // `https://carky-api.azurewebsites.net/api/AdminDashboard/Orders/EstimateOrderInfo?model.pickupLocation.geography.lat=${start_location_lat}&model.pickupLocation.geography.lng=${start_location_lng}&model.dropoffLocation.geography.lat=${end_location_lat}&model.dropoffLocation.geography.lng=${end_location_lng}`,
    `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME
    }/dispatch/v1/tariff?origin=${start_location_lat},${start_location_lng}&destination=${end_location_lat},${end_location_lng}&pickupTime=${encodeURIComponent(
      dayjsLocal.toISOString()
    )}&tripDistance=${contextState.directions.routes[0].legs[0].distance.value
    }&tripDuration=${contextState.directions.routes[0].legs[0].duration.value * 1000
    }`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
      }),
    }
  )
    .then((res) => res.json())
    .then(
      (result) => {
        // for (const tarrif in result.tarrifs) {
        //   let cat = carCategories.find(
        //     (car) => car.Id === result.PricePerCategories[tarrif].Id
        //   );

        //   availCars.push({ ...result.PricePerCategories[tarrif], ...cat });
        // }
        return result.tariffs;
      },
      () => {
        clearDirections();
        // try {
        //   setError(error);
        // } catch (error) {
        //   setError('No available route');
        // }
      }
    );
};