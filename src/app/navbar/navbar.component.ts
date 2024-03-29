import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  ngOnInit() {}

  redirectToCategoryList(): void {
    this.router.navigate(['/admin/category-list']);
  }

  redirectToBlogPostList(): void {
    this.router.navigate(['/admin/blogpost-list']);
  }
}
