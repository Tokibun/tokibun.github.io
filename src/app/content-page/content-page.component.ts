import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimation } from '../animations';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css'],
  animations: [slideAnimation]
})
export class ContentPageComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
}
