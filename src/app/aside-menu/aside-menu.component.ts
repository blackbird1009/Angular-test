import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {


  public items: any[];

  constructor(private router: Router) {
      this.items = this.mapItems(router.config);
  }

  private mapItems(routes: any[], path?: string): any[] {
    return routes.map(item => {
        const result: any = {
            icon: item.icon,
            path: (path ? `${ path }/` : '') + item.path
        };

        return result;
    });
  }

  ngOnInit(): void {
  }


}
