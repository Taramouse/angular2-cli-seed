import { Component } from '@angular/core';
import { AboutComponent } from './+about';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'scotchy-scotch-app',
  templateUrl: 'scotchy-scotch.component.html',
  styleUrls: ['scotchy-scotch.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/about', component: AboutComponent}
])
export class ScotchyScotchAppComponent {
  title = 'scotchy-scotch works!';
}
