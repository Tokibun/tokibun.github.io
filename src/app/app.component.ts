import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: [`app.component.css`],
  animations: [slideAnimation]
})
export class AppComponent {
  title = 'angular-site';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
}
