import {useRef, useEffect} from 'react';
import {URL_MARKER_DEFAULT} from '../../const';
import useMap from '../../hooks/useMap';
import {City, Offer} from '../../types/offer';
import {Icon, Marker} from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });
      map.setZoom(city.location.zoom,);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coordinates[0],
          lng: offer.coordinates[1],
        });

        marker
          .setIcon(
            defaultCustomIcon
          );
        marker.addTo(markers);
      });
      markers.addTo(map);
    }
    return (() => {
      markers.clearLayers();
    });
  }, [map, offers, city.location.latitude, city.location.longitude, city.location.zoom]);

  return (
    <section className="cities__map map"
      style={{height: '700px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
