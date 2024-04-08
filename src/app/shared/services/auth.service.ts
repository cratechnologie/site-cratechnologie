import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import {Router,ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClientModule,HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from '@angular/common/http';


import { UtilsService } from './utils.service';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  controller = "sysAuthentification" ;

  constructor( private http : HttpClient ,
               private utilsService : UtilsService ,
               private router : Router
             ) {
   }

   hasRoleRemote( role ){

   }

   hasRoleLocal(role){
     let jwtSysRoles = this.getSessionItem("jwtSysRoles");
     let jwtSysRolesArray = ( jwtSysRoles != ""  ) ? JSON.parse(jwtSysRoles)  : [] ;
     let findRole = false ;

     //check if role
     if( jwtSysRolesArray.find(x => x === role)  )
     {
       findRole = true ;
     }

     return findRole ;
    //return true ;
   }


   hasOrganisationRelationLocal(relation){
     let jwtOrganisationSysTiersRelationTypes = this.getSessionItem("jwtOrganisationSysTiersRelationTypes");
     let jwtOrganisationSysTiersRelationTypessArray = ( jwtOrganisationSysTiersRelationTypes != ""  ) ? JSON.parse(jwtOrganisationSysTiersRelationTypes)  : [] ;
     let findRelation = false ;

     //check if role
     if( jwtOrganisationSysTiersRelationTypessArray.find(x => x === relation)  )
     {
       findRelation = true ;
     }

     return findRelation ;
     //return true ;

   }

  //get all the entities
  isAuthenticatedRemote(  ) : Observable<any> {
    return this.http.get(environment.apiUrl + "/" + this.controller + "/isAuthenticated" );
  }

  // //get all the entities
  // isAuthenticatedLocal(  )
  // {
  //     let isAuthenticated = false ;
  //     let jwt = this.getSessionItem("jwt");
  //     let milliseconds = (Math.floor((new Date).getTime() / 1000));

  //     if(  jwt != '' && jwt != null )
  //     {
  //       let decoded = jwt_decode(jwt);

  //       if(  decoded != null
  //         && decoded.hasOwnProperty("exp")
  //         && decoded["exp"] >  milliseconds
  //         )
  //       {
  //          isAuthenticated = true ;
  //       }

  //     }

  //     return isAuthenticated ;

  //  }

  signin( data ) {
    return this.http.post(environment.apiUrl + "/" + this.controller + "/signin" ,  data );
  }

  signout(  ) {
     this.http.get(environment.apiUrl + "/" + this.controller + "/signout"  ).subscribe(
       response => {
         localStorage.clear();
         this.router.navigate(['signin']);
       },
       error => {
       }
     ) ;;
  }


  /**
   * Vérifie que la session est active
   *
   * @return void ne retourne rien
   */
  getSessionItem(key)
  {
    //return this.user ;
    let session = "" ;
    let sessionObject = null  ;
    let ret = ""  ;

    if(
              localStorage.getItem('session')  != null
          &&  ( sessionObject = JSON.parse( localStorage.getItem('session') ) )  != null
          &&  sessionObject[key] != undefined
      )
    {
       ret =  sessionObject[key]  ;
     }

    return ret ;

  }


  getSysUser(){
    let sysTiers = this.getSessionItem("sysTiers");
    return sysTiers ;
  }

  getSysTiersOrganisation(){
    let sysTiers = this.getSysUser() ;
    return ( sysTiers != null && sysTiers != "" &&  sysTiers["sysTiersOrganisation"] != undefined ) ? sysTiers["sysTiersOrganisation"] : null ;
  }

  /**
   * Vérifie que la session est active
   *
   * @return void ne retourne rien
   */
  setSessionItem(key,value)
  {
    //return this.user ;
    let session = "" ;
    let sessionObject = null  ;
    let ret = ""  ;

    if(
              localStorage.getItem('session')  != null
          &&  ( sessionObject = JSON.parse( localStorage.getItem('session') ) )  != null
          //&&  sessionObject[key] != undefined
      )
    {

       sessionObject[key] = value ;
       localStorage.setItem("session", JSON.stringify( sessionObject));

     }


  }


}
