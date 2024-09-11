

export const updateStorage =(key,value)=>{
    const data:any =JSON.parse(localStorage.getItem("bookinginfo"))
    const upadatedData = JSON.stringify({...data,[key]:value})
    localStorage.setItem("bookinginfo",upadatedData)
}

const data = {
    waypoints: [
      {
        exactLatLng: { lat: 37.4344701, lng: 25.3455634 },
        street: "JMK,  Mykonos, Greece",
        poiName: "JMK,  Mykonos, Greece",
        placeLatLng: { lat: 37.4344701, lng: 25.3455634 },
      },
      {
        exactLatLng: { lat: 37.4344701, lng: 25.3455634 },
        street: "JMK,  Mykonos, Greece",
        poiName: "JMK,  Mykonos, Greece",
        placeLatLng: { lat: 37.4344701, lng: 25.3455634 },
      },
    ],
    client: { name: "test test", phone: "+30342534253453425" },
    notes: "From Aegean Taxi Web App",
    pickupTime: "2024-09-19T19:46:00+03:00",
    unitOfLength: "KILOMETER",
    vehicleType: "BUSINESS",
    numberOfSeats: 4,
    paymentMethods: ["CASH"],
    prepaid: false,
    tariffId: "01460183-e7f9-4333-8e7e-954e641d036d",
  };