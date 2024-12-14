export default function AirportPage({ params }) {
    const { location } = params;
  
    return (
      <div>
        <h1>{location.toUpperCase()} Airport</h1>
        <p>Welcome to the {location} airport page. Here, you can find all relevant information about the airport.</p>
      </div>
    );
  }