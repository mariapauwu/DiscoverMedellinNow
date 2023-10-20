import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './nabvar.component.html',
    styleUrls: ['./nabvar.component.css']
})

export class NavbarComponent {
    toggleSubmenu(submenuElement: HTMLElement): void {
        if (submenuElement.style.display === 'block') {
            submenuElement.style.display = 'none';
        } else {
            submenuElement.style.display = 'block';
        }
    }

    openSubmenu(submenuElement: HTMLElement): void {
        submenuElement.style.display = 'block';
    }

    closeSubmenu(submenuElement: HTMLElement): void {
        submenuElement.style.display = 'none';
    }
    
}
