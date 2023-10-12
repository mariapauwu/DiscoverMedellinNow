import { Component, OnInit } from "@angular/core";
import { environment } from 'src/environments/environment';

declare var google: any;


@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {
  googleMapsApiKey = environment.googleMapsApiKey;


  ngOnInit() {
    // Cargar la API de Google Maps utilizando la clave de API
    this.loadGoogleMapsScript(() => {
      // Inicializar el mapa
      this.initializeMap();
    });
  }

  // Función para cargar la API de Google Maps
  loadGoogleMapsScript(callback: () => void) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}`;
    script.onload = callback;
    document.body.appendChild(script);
  }

  // Función para inicializar el mapa
  initializeMap() {
    // Coordenadas del centro del mapa
    const center = { lat: 6.248805, lng: -75.574713 };

    // Opciones del mapa
    const mapOptions = {
      center: center,
      zoom: 10
    };

    // Crear el mapa y asociarlo al elemento con ID 'google-map' en la plantilla
    const mapElement = document.getElementById('google-map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, mapOptions);
    } else {
      console.error('Element with ID "google-map" not found in the DOM.');
    }


    // Puedes agregar marcadores, polígonos, etc., al mapa aquí
  }
}