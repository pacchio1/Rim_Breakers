import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { Profile } from '../_model/profile.model';
import { ProfileService } from '../_service/profile.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../_service/localStorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit {

  newPassword: string = '';
  confirmPassword: string = '';
  emailAccount: string | null = '';
  profile: Profile | null = null;
  dropdown: string | null = null;

  constructor(public themeService: ThemeService, private profileService: ProfileService, private router: Router, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.emailAccount = localStorage.getItem('emailAccount');

    if (this.emailAccount !== null) {
      this.profileService.getUserByEmail(this.emailAccount).subscribe({
        next: (response: Profile) => {
          this.profile = response;
          console.log(this.profile?.idUser)
        },
        error: (error: any) => {
          console.error('Error fetching user profile:', error);
        }
      });
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleDropdown(item: string): void {
    if (this.dropdown === item) {
      this.dropdown = null;
    } else {
      this.dropdown = item;
    }
  }

  userExit() {
    localStorage.removeItem('emailAccount');
    this.localStorageService.triggerStorageChange();
    this.router.navigateByUrl('/home');
  }

  userDelete() {
    console.log(this.profile?.idUser);
  
    if (this.profile?.idUser !== undefined) {
      this.profileService.getDeleteUser(this.profile?.idUser).subscribe(
        (response: any) => {
          console.log('User deleted successfully:', response);
          // localStorage.removeItem('emailAccount');
          // this.localStorageService.triggerStorageChange();
          // this.router.navigateByUrl('/home');
        },
        (error: any) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }
  
  onSubmit() {
    if(this.newPassword === this.confirmPassword) {
      if (this.emailAccount !== null) {
        if(this.profile?.idUser !== undefined) {
          this.profileService.getNewPassword(this.confirmPassword, this.profile?.idUser).subscribe((response: any) => {
            console.log('Password updated succesfully:', response);
          }, 
          (error: any) => {
            console.error('Error updating password:', error);
          }
          )
          alert('Password modificata'); 
          this.router.navigateByUrl('/home');
        }
      }
    }
  }
}
