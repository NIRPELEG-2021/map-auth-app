import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './WorldMap.css';

// Fix for default marker icon in React-Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ selectedLocation, onLocationSelect }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onLocationSelect({ lat, lng });
    },
  });

  return selectedLocation ? (
    <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
      <Popup>
        <div>
          <strong>Selected Location</strong>
          <br />
          Latitude: {selectedLocation.lat.toFixed(4)}
          <br />
          Longitude: {selectedLocation.lng.toFixed(4)}
        </div>
      </Popup>
    </Marker>
  ) : null;
}

function WorldMap({ user, onLogout }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="map-container">
      <div className="map-header">
        <div className="header-content">
          <h2>World Map Explorer</h2>
          <div className="user-info">
            <span className="username">Welcome, {user.username}!</span>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="map-info">
        {selectedLocation ? (
          <div className="location-info">
            <strong>Selected Location:</strong> Lat: {selectedLocation.lat.toFixed(4)}, Lng:{' '}
            {selectedLocation.lng.toFixed(4)}
          </div>
        ) : (
          <div className="location-info">Click anywhere on the map to select a location</div>
        )}
      </div>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          selectedLocation={selectedLocation}
          onLocationSelect={handleLocationSelect}
        />
      </MapContainer>
    </div>
  );
}

export default WorldMap;
