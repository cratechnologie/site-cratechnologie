
    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysUserRegistrationService {

      controller = "sysUserRegistrations" ;

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ) {
       }


     //get all the entities
     getAll(): Observable<any> {
       return this.http.get(environment.apiUrl + "/" + this.controller );
     }

      //get the entity by id
      get(id): Observable<any> {
        return this.http.get(environment.apiUrl + "/" + this.controller + "/" + id );
      }

      //get the entity by id
      deny(id): Observable<any> {
        return this.http.post(environment.apiUrl + "/" + this.controller + "/deny/" + id,{} );
      }

      //get the entity by ids
      getBulk( ids :  string[] ): Observable<any> {
        return this.http.get(environment.apiUrl  + "/" + this.controller + "/bulk/" + ids.join(","));
      }



      //get the all the data need to edit a single entity
      getEditionData( sysUserRegistrationEditionDataRequest  ) : Observable<any> {



          return this.http.post(environment.apiUrl + "/" + this.controller + "/editionData" , sysUserRegistrationEditionDataRequest );



      }


      //get the entity by ids
      registerData( sysUserRegistrationTypesId :  string[] ): Observable<any> {
        return this.http.get(environment.apiUrl  + "/" + this.controller + "/registerData/" + sysUserRegistrationTypesId.join(","));
      }

      //search the entities witch match criterias , sorted and paginated
      search(filter,page,pageSize,multiSortMeta): Observable<any> {
        let params = "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/search?" + encodeURI(params) );

      }

      //search the entities witch match criterias , sorted and paginated
      searchOurPool(filter,page,pageSize,multiSortMeta): Observable<any> {
        let params = "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchOurPool?" + encodeURI(params) );

      }

      //delete all entity
      deleteAll() : Observable<any> {
        return this.http.delete(environment.apiUrl  + "/" + this.controller );
      }

      //delete an entity
      delete(id): Observable<any> {
        return this.http.delete(environment.apiUrl + "/" + this.controller + "/" + id);
      }

      //get the entity by ids
      deleteBulk( ids :  string[] ): Observable<any> {
        return this.http.delete(environment.apiUrl + "/" + this.controller + "/bulk/" + ids.join(","));
      }







      //create an entity
      validateIntro(data): Observable<any> {
          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
          //, data)
         return this.http.post(environment.apiUrl + "/" + this.controller +"/validateIntro",data);
      }

      //create an entity
      validateTiersNonHuman(data): Observable<any> {
          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller +"/validateTiersNonHuman", data);
      }


      //create an entity
      validateTiersHuman(data): Observable<any> {
          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller +"/validateTiersHuman", data);
      }

      //create an entity
      validateConnexion(data): Observable<any> {
          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller +"/validateConnexion", data);
      }


      //create an entity
      create(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller , data);
      }



      registerAdminAdmin( sysUserRegistration ,   sysTiersNonHumanProfilImage  ,   sysTiersHumanProfilImage ) : Observable<any> {

          let formData = new FormData();

          sysUserRegistration.dateCreation = ( sysUserRegistration.dateCreation != "" ) ? this.utilsService.parseDateForSearch( sysUserRegistration.dateCreation , "full" ) : "" ;
          sysUserRegistration.dateModification = ( sysUserRegistration.dateModification != "" ) ? this.utilsService.parseDateForSearch( sysUserRegistration.dateModification , "full" ) : "" ;


          console.log("--------cinema-------");
          console.log(sysUserRegistration);
          console.log("--------Apllinaire-------");

          formData.append(
                         "sysUserRegistration" ,
                          new Blob( [ JSON.stringify( sysUserRegistration) ]  ,{ type: "application/json" } )
                        ) ;

          if(  sysTiersNonHumanProfilImage != null && sysTiersNonHumanProfilImage != "" )
          {
            formData.append( "sysTiersNonHumanProfilImage" , sysTiersNonHumanProfilImage ) ;
          }

          if(  sysTiersHumanProfilImage != null && sysTiersHumanProfilImage != "" )
          {
            formData.append( "sysTiersHumanProfilImage" , sysTiersHumanProfilImage ) ;
          }


          return this.http.post( environment.apiUrl + "/" + this.controller + "/registerAdminAdmin" ,
                               formData ,
                               {
                                 responseType : "json" ,
                                // observe : "events"
                               }
                           );

     }

     registerAdminPublic( sysUserRegistration ,   sysTiersNonHumanProfilImage  ,   sysTiersHumanProfilImage ) : Observable<any> {

         let formData = new FormData();

         sysUserRegistration.dateCreation = ( sysUserRegistration.dateCreation != "" ) ? this.utilsService.parseDateForSearch( sysUserRegistration.dateCreation , "full" ) : "" ;
         sysUserRegistration.dateModification = ( sysUserRegistration.dateModification != "" ) ? this.utilsService.parseDateForSearch( sysUserRegistration.dateModification , "full" ) : "" ;

         console.log("--------cinema-------");
         console.log(sysUserRegistration);
         console.log("--------Apllinaire-------");


        formData.append(
                        "sysUserRegistration" ,
                         new Blob( [ JSON.stringify( sysUserRegistration) ]  ,{ type: "application/json" } )
                       ) ;

         if(  sysTiersNonHumanProfilImage != null && sysTiersNonHumanProfilImage != "" )
         {
           formData.append( "sysTiersNonHumanProfilImage" , sysTiersNonHumanProfilImage ) ;
         }

         if(  sysTiersHumanProfilImage != null && sysTiersHumanProfilImage != "" )
         {
           formData.append( "sysTiersHumanProfilImage" , sysTiersHumanProfilImage ) ;
         }


         return this.http.post( environment.apiUrl + "/" + this.controller + "/registerAdminPublic" ,
                              formData ,
                              {
                                responseType : "json" ,
                               // observe : "events"
                              }
                          );

    }


      //create an entity
      approveAdminAdmin(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller + "/approveAdminAdmin", data);
      }

      //create an entity
      approvePublicAdmin(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller + "/approvePublicAdmin", data);
      }




      buildSysUserRegistration( sysUserRegistrationEditionDataResponse ){



        let sysDataEntities = [] ;
        let sysDataEntitySysTiersHuman = {
          sysDataEntity : { id : "sys_tiers" } ,
          sysDataEntityInstanceId : sysUserRegistrationEditionDataResponse['sysUserRegistration']['id'] ,
          keyEntity : "sysTiersHuman",
          dataEntity : JSON.stringify(  sysUserRegistrationEditionDataResponse['sysTiersHuman'] )
        } ;

        let sysDataEntitySysTiersNonHuman = {
          sysDataEntity : { id : "sys_tiers" } ,
          sysDataEntityInstanceId : sysUserRegistrationEditionDataResponse['sysUserRegistration']['id'] ,
          keyEntity : "sysTiersNonHuman",
          dataEntity : JSON.stringify(  sysUserRegistrationEditionDataResponse['sysTiersNonHuman'] )
        } ;

        sysDataEntities.push(sysDataEntitySysTiersHuman);
        sysDataEntities.push(sysDataEntitySysTiersNonHuman);

        sysUserRegistrationEditionDataResponse['sysUserRegistration']['sysDataEntities'] = sysDataEntities ;

        return sysUserRegistrationEditionDataResponse ;

      }

      getKeyEntity( sysUserRegistration , keyEntity  ){

        let obj = {} ;

        if( Array.isArray( sysUserRegistration.sysDataEntities ) )
        {
          Object.entries( sysUserRegistration.sysDataEntities ).forEach(([key, value]) => {
              if(value['keyEntity'] ==  keyEntity  && value['dataEntity'] != null && value['dataEntity'] != ""  ){
                obj = JSON.parse(value['dataEntity'] ) ;
                return ;
              }
          });
        }
        return obj ;
      }

      //update an entity
      update( data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
        return this.http.put( environment.apiUrl + "/" + this.controller  , data );
      }


      //bulk create  entities
      createBulk(data): Observable<any> {
        if( Array.isArray( data) )
        {
          Object.entries(data).forEach(([key, value]) => {

          data[key].dateCreation = ( data[key].dateCreation != "" ) ? this.utilsService.parseDateForSearch( data[key].dateCreation, "full" ) : "" ;
          data[key].dateModification = ( data[key].dateModification != "" ) ? this.utilsService.parseDateForSearch( data[key].dateModification, "full" ) : "" ;
          }) ;
        }
        return this.http.post( environment.apiUrl + "/" + this.controller + "/bulk" , data );
      }

      //bulk update entities
      updateBulk( data ): Observable<any> {
        if( Array.isArray( data) )
        {
          Object.entries(data).forEach(([key, value]) => {

          data[key].dateCreation = ( data[key].dateCreation != "" ) ? this.utilsService.parseDateForSearch( data[key].dateCreation, "full" ) : "" ;
          data[key].dateModification = ( data[key].dateModification != "" ) ? this.utilsService.parseDateForSearch( data[key].dateModification, "full" ) : "" ;
          }) ;
        }

        return this.http.put( environment.apiUrl + "/" + this.controller + "/bulk" , data );

      }

      //edit the entity attribute id
      createWithMedia( sysUserModificationId ,  filesMapIds , filesLinkedMapIds , files , filesLinked ) : Observable<any> {

        let formData = new FormData();

        //fill with data
        formData.append(
                        "filesMapIds" ,
                         new Blob( [ JSON.stringify( filesMapIds) ]  ,{ type: "application/json" } )
                       ) ;

        formData.append(
                "filesLinkedMapIds" ,
                new Blob( [ JSON.stringify( filesLinkedMapIds) ]  ,{ type: "application/json" } )
              ) ;

       formData.append(
                       "sysUserModificationId" ,
                        new Blob( [ JSON.stringify( sysUserModificationId) ]  ,{ type: "application/json" } )
                      ) ;

        if( Array.isArray( files) )
        {
           //fetch files
           Object.entries( files ).forEach( ( [ key , file ] ) => {
             formData.append( "files" , file ) ;
           });
        }

        if( Array.isArray( filesLinked) )
        {
           //fetch files
           Object.entries( filesLinked ).forEach( ( [ key , file ] ) => {
             formData.append( "filesLinked" , file ) ;
           });
        }

        return this.http.post( environment.apiUrl + "/" + this.controller + "/createWithMedia" ,
                             formData ,
                             {
                               responseType : "json" ,
                               observe : "events"
                             }
                         );

      }





    }
