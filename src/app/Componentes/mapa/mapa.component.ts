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
    this.loadGoogleMapsScript(() => {
      this.initializeMap();
    });
  }

  loadGoogleMapsScript(callback: () => void) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}`;
    script.onload = callback;
    document.body.appendChild(script);
  }


  initializeMap() {
    const center = { lat: 6.248805, lng: -75.574713 };

    const mapOptions = {
      center: center,
      zoom: 10
    };

    const mapElement = document.getElementById('google-map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, mapOptions);
    } else {
      console.error('Element with ID "google-map" not found in the DOM.');
    }

  }
}