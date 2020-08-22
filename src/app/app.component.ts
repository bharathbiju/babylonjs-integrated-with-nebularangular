
import { Component, OnInit, OnDestroy, NgModule} from '@angular/core';
// import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbActionsModule } from '@nebular/theme';
// import { map, takeUntil } from 'rxjs/operators';
// import { Subject } from 'rxjs';

// import { UserData } from 'src/app/@core/data/users';
// import { LayoutService } from 'src/app/@core/utils/layout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';

//   constructor(private sidebarService: NbSidebarService,
//     private menuService: NbMenuService,
//     private themeService: NbThemeService,
//     private userService: UserData,
//     private layoutService: LayoutService,
//     private breakpointService: NbMediaBreakpointsService) {
// }


//   toggleSidebar(): boolean {
//     this.sidebarService.toggle(true, 'menu-sidebar');
//     this.layoutService.changeLayoutSize();

//     return false;
//   }

}
