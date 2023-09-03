import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      // height: '400px',
      width: '30%',
      position: { bottom: '0' },
    });
  }
}
