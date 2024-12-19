export default function PortPage({ params }) {
    const { location } = params;
  
    return (
      <div>
        <h1>{location.toUpperCase()} port </h1>
        <p>Welcome to the {location} airport page. Here, you can find all relevant information about the port.</p>
      </div>
    )
  }