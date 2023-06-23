import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    hamburger.onclick = () => {
    const navBar = document.querySelector(".nav-bar") as HTMLElement;
    navBar.classList.toggle("active")};
  }
}
