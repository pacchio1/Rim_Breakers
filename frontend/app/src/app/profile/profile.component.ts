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
      this.profileService.getUserByEmail(this.emailAccount).subscribe(
        (response: Profile) => {
          this.profile = response;
        },
        (error: any) => {
          console.error('Error fetching user profile:', error);
        }
      );
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
    
  }

  onSubmit() {
    if(this.newPassword === this.confirmPassword) {
      if (this.emailAccount !== null) {
        this.profileService.getNewPassword(this.emailAccount, this.confirmPassword); 
        alert('Password modificata'); 
        this.router.navigateByUrl('/home');
      }
    }
  }
}
