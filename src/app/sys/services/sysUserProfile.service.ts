
    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysUserProfileService {

      controller = "sysUserProfile" ;

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ) {
       }


      //get the entity by id
      get(): Observable<any> {
        return this.http.get(environment.apiUrl + "/" + this.controller  );
      }


       //edit the entity attribute id
      update( sysTiers ,   profileImageFile ) : Observable<any> {

        let formData = new FormData();

        sysTiers.dateCreation = ( sysTiers.dateCreation != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateCreation , "full" ) : "" ;
        sysTiers.dateModification = ( sysTiers.dateModification != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateModification , "full" ) : "" ;
        sysTiers.birthPlace = ( sysTiers.birthPlace != "" ) ? this.utilsService.parseDateForSearch( sysTiers.birthPlace , "full" ) : "" ;

       formData.append(
                       "sysTiers" ,
                        new Blob( [ JSON.stringify( sysTiers) ]  ,{ type: "application/json" } )
                      ) ;

        if( profileImageFile != undefined && profileImageFile != null && profileImageFile != '' )
        {
          formData.append( "profileImageFile" , profileImageFile ) ;
        }

        return this.http.put( environment.apiUrl + "/" + this.controller   ,
                             formData ,
                             {
                               responseType : "json" ,
                               //observe : "events"
                             }
                         );
      }

       //update an entity
       changePassword( data): Observable<any> {
         return this.http.put( environment.apiUrl + "/" + this.controller+ "/changePassword"  , data );
       }


    }
