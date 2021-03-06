import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test06SAWZ85resume';

  public headerTop: string = "0";
  public headerOpacity = 1;

  private prevYOffset = 0;
  public currentOffset = 0;

  public parallax: string = "";

  public constructor(private titleService: Title) {
	this.setTitle("James Jumawan");
  };

  @HostListener('window:scroll', []) onscroll(event:any){
    if (this.prevYOffset > window.pageYOffset) {
      this.headerTop = "0";
      this.headerOpacity = 1;
    } else {
      this.headerTop = "-65px";
      this.headerOpacity = 0;
    }
    this.prevYOffset = window.pageYOffset;
    this.currentOffset = window.pageYOffset;

    this.parallax = 'translateY(' + (window.pageYOffset * 0.3) + 'px)';
  }
  
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  logPosition(){
    console.log(window.pageYOffset);
  }
  
}
