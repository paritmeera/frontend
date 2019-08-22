import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints ,BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    small=false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.small=true;
        console.log(
          'Matches small viewport or handset in portrait mode'
        );
      } else {
        this.small=false
      }
    });



  }

}
