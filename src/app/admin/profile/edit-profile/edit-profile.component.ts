import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private route:Router) { }
  gotoprofile(){
    this.route.navigate(['admin/edit-profile']);
  }
  ngOnInit(): void {
  }

}