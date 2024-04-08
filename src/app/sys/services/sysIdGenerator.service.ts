
    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysIdGeneratorService {

      controller = "sysIdGenerator" ;

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ) {
       }


      //get the entity by ids
      generate( params :  any )  {

        params = "entities="+ JSON.stringify(params)  ;

        return this.http.get(environment.apiUrl  + "/" + this.controller + "/generate?" + encodeURI(params) );
      }



    }
