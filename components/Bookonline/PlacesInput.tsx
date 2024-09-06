import React, { useState, useRef, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { useGoogleMaps } from './GoogleMapsProvider';

const libraries = ['places'];

export default function PlacesInput() {
  const google = useGoogleMaps();


  const inputRef = useRef(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (google) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

      // When the user selects an address from the dropdown
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setAddress(place.formatted_address || '');
      });
    }
  }, [google]);



  return (
    <div>
      <h1>Manual Google Places Autocomplete</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type to search for places..."
        style={{
          width: '300px',
          height: '40px',
          padding: '10px',
          fontSize: '16px',
        }}
      />

      {address && (
        <div>
          <h2>Selected Address:</h2>
          <p>{address}</p>
        </div>
      )}
    </div>
  );
}
