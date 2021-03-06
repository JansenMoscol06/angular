import { Component, Input } from '@angular/core';
import { NavigationNode } from 'app/navigation/navigation.service';

@Component({
  selector: 'aio-top-menu',
  template: `<span *ngFor="let node of nodes"><a class="nav-link" [href]="node.path || node.url">{{ node.title }}</a></span>`,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }

    .nav-link {
      margin-right: 10px;
      margin-left: 20px;
      cursor: pointer;
    }

    @media (max-width: 700px) {
      .nav-link {
        margin-right: 8px;
        margin-left: 0px;
      }
    }
    @media (max-width: 600px) {
      .nav-link {
        font-size: 80%;
        margin-right: 8px;
        margin-left: 0px;
      }
    }`
  ]
})
export class TopMenuComponent {
  @Input()
  nodes: NavigationNode[];
}
