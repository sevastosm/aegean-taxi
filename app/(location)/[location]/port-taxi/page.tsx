export default function PortTaxiPage({ params }) {
    const { location } = params;
  
    return (
      <div>
        <h1>{location.toUpperCase()} port taxi</h1>
        <p>Welcome to the {location} airport page. Here, you can find all relevant information about the airport.</p>
      </div>
    );
  }