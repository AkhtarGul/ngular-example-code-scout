import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../services/profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  constructor(private profSrv:ProfileService) { }
  public profiles: any[] = []
  ngOnInit(): void {

    this.getNewProfiles(60);
  }
  getNewProfiles(arg0: number) {
    // throw new Error('Method not implemented.');
    this.profSrv.getAllProfiles(arg0).subscribe((data:any)=>{
      if(data){
        data.results.forEach((res: any) => {
          this.profiles.push(res)
        });
      }
    })
  }

}
