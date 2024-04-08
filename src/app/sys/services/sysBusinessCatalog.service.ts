
    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysBusinessCatalogService {

      controller = "sysBusinessCatalog" ;

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ) {
       }

      //search the entities witch match criterias , sorted and paginated
      get( sysTiersNames  ,
           sysBusinessCatalogItemName ) : Observable<any> {

        let params = "" ;

         if(  sysTiersNames != undefined
           && sysTiersNames != "" )
        {
            params += "sysTiersNames=" + sysTiersNames ;
        }

        if(    sysBusinessCatalogItemName != undefined
          &&   sysBusinessCatalogItemName != ""   )
        {
            params += "&sysBusinessCatalogItemName=" + sysBusinessCatalogItemName ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "?" + encodeURI(params) );

      }
}
