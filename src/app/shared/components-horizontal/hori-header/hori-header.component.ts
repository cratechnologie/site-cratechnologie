 import { Component, OnInit, OnDestroy , ViewChild, ElementRef  , EventEmitter, Input, Output} from '@angular/core';

import { HorizontalNavService } from '../../services/horizontal-nav.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UtilsService } from 'src/app/shared/services/utils.service' ;
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  public firstName : string = "";
  public lastName : string = "";
  public company : string = "";
  public firstNameFirstLetter : string = "";
  public role_name : string = "" ;
  public dislayMenu  : boolean = false ;
  responsibeMenu  : boolean = false ;
  remoteLogoutComponent : any   ;

  Body:any = document.querySelector('body')
  public isConnected : boolean  = false ;


  userProfil = {

    "UR_FIRSTNAME":"",
    "UR_LASTNAME":"",
     "UR_OFFICE_PHONE":"",
    "UR_PHONE":"",
    "SUPPLIER_DIVISION_IDS": new Array<string>(),
    "BUSINESS_REGION_IDS": new Array<string>(),
    "DI_DIVISIONID":"",
    "WEBSITE":"",
    "RE_REGIONID":"",
    "DP_ADDRESS":"",
    "DP_NAMEFR":"",
    "kk":"",
    "UR_USERID":"",
    "UR_PASSWORD":"",
    "UR_CONFIRMATION_PASSWORD":"",
    "PROFILE_PICTURE_BASE_URL":"",
    "PROFILE_PICTURE_LINK":"",
    "DP_WEBSITE":"",
    "DP_PHONE":"",
    "DP_LOGO" :{"BASE_URL":"","Link":""},


  } ;


  @ViewChild('menu', { static: false }) public menu;

  constructor( public authService: AuthService, private router: Router, private utilsService : UtilsService ,private sanitizer: DomSanitizer ) {
  //  this.remoteLogoutComponent = this.sanitizer.bypassSecurityTrustResourceUrl( this.utilsService.remoteLogoutComponent);

   }

  ngOnInit(): void {

  //  this.isConnected = this.authService.isConnected();



   let user = localStorage.getItem('user');

   if( user != null &&  user != undefined )
   {
     let userParse = JSON.parse(user);
     this.firstName = userParse['UR_FIRSTNAME'] ;
     this.lastName = userParse['UR_LASTNAME'] ;
     this.firstNameFirstLetter = userParse['UR_FIRSTNAME'].charAt(0);

     if(  userParse['roles'].length > 0 )
     {
        this.role_name = userParse['roles'][0]['role_name'] ;
     }
   }




  }


  toggleResponsiveMenu(){
    if(this.responsibeMenu == true ){
      this.responsibeMenu = false ;
    }else{
      this.responsibeMenu = true ;

    }
  }
  hideMenu($event){
  /*
    const element = document.getElementById("menu");
    let offsetTop = element!.offsetTop ;
    let offsetLeft = element!.offsetLeft  ;
    let clientHeight = element!.clientHeight ;
    let clientWidth = element!.clientWidth ;

    console.log (
                 '$event.x   = '+   ($event.x  + 100)
         +'\n offsetLeft  = '+   offsetLeft
         +'\n clientWidth = '+  clientWidth


         +'\n $event.y  = '+    $event.y

         +'\n offsetTop  = '+    offsetTop
         +'\n clientHeight = '+   clientHeight
       ) ;  */

      setTimeout( () => {
        this.checkMenuPosition($event ) ;
      } , 500 );
  }

  checkMenuPosition($event){
    //$event.x: 493
    //$event.y: 157
    const element = document.getElementById("menu");
    let offsetTop = element!.offsetTop ;
    let offsetLeft = element!.offsetLeft ;
    let clientHeight = element!.clientHeight ;
    let clientWidth = element!.clientWidth ;

  //  let posLeft = element!.offsetLeft ;  this.menu.clientHeight  this.menu.clientWidth
/*
  console.log(

     $event.x  +' < '+  offsetLeft +' || '+  $event.x  +' > '+  ( offsetLeft + clientWidth )
  ) ;


  console.log(

     $event.y  +' < '+  ( offsetTop - 40 ) +' || '+  $event.y  +' > '+  ( offsetTop + clientHeight )

  ) ;

  console.log(this.menu.offsetLeft);

*/

/*

console.log (
     +'\n offsetLeft  = '+   offsetLeft
     +'\n offsetTop  = '+    offsetTop
     +'\n clientWidth = '+  clientWidth
     +'\n clientHeight = '+   clientHeight
   ) ;



console.log (

      '\n&& '+  $event.y +' >= '+   ( offsetTop - 40 )
     +'\n&& '+  $event.y +' <= '+   ( offsetTop + clientHeight )
   ) ;*/

    if(
        !   (
                 ($event.x ) >=   offsetLeft
             &&  ($event.x + 100 ) <=   ( offsetLeft + clientWidth )
             &&  $event.y >=   ( offsetTop - 40 )
             &&  $event.y + 25  <=   ( offsetTop + clientHeight )
           )

      )
    {
       this.dislayMenu = false ;
    }




  }

  logout(){

    localStorage.clear();
    this.postPrivateAuthentification();
    //this.router.navigate(['/home']) ;

    window.location.reload();

  }



    postPrivateAuthentification(){

      /*
      var iframe = (document?.querySelector('#ifr') as HTMLIFrameElement)
      var postMsg = {};

      if(  iframe.contentWindow != null )
      {
         iframe.contentWindow.postMessage(postMsg, this.remoteLogoutComponent );
      }
      */

    }


  toggleSidebarNotification() {
  }

  toggleSidebar(){
    const sidebar:boolean = this.Body.classList.value.includes('active');

    if (sidebar == true) {
      this.Body.classList.remove('active');
    }
    else {
      this.Body.classList.add('active');
    }
  }

  searchOpen(){
    this.Body?.classList.add('search-show')
  }

  search(e:any){
    e.preventDefault();

    this.Body?.classList.remove('search-show')
  }

  ngAfterViewInit(){
  }
}
