
    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysTiersService {

      controller = "sysTierss" ;

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ) {
       }


     //get all the entities
     getAll(): Observable<any> {
       return this.http.get(environment.apiUrl + "/" + this.controller );
     }



     getAllTiersNonHumanByRelationType(  params   ) : Observable<any> {

       let paramsSent = "" ;

        paramsSent += (  params['name'] != undefined &&  params['name'] != null && params['name'] != "" ) ? "&name="+ JSON.stringify(params['name']) : "" ;

        paramsSent += (  params['sysTiersPoolOwnerId'] != undefined && params['sysTiersPoolOwnerId'] != null &&  params['sysTiersPoolOwnerId'] != "" ) ? "&sysTiersPoolOwnerId="+ params['sysTiersPoolOwnerId'] : "" ;

        paramsSent += (  params['sysTiersRelationTypeIds'] != undefined && params['sysTiersRelationTypeIds'] != null &&  params['sysTiersRelationTypeIds'] != "" ) ? "&sysTiersRelationTypeIds="+ params['sysTiersRelationTypeIds'] : "" ;

        paramsSent += (  params['sysGeoRegionAddressIds'] != undefined && params['sysGeoRegionAddressIds'] != null &&  params['sysGeoRegionAddressIds'] != "" ) ? "&sysGeoRegionAddressIds="+  params['sysGeoRegionAddressIds'] : "" ;
        paramsSent += (  params['sysGeoRegionBusinessIds'] != undefined && params['sysGeoRegionBusinessIds'] != null &&  params['sysGeoRegionBusinessIds'] != "" ) ? "&sysGeoRegionBusinessIds="+  params['sysGeoRegionBusinessIds'] : "" ;

        paramsSent += (  params['sysTiersDivisionIds'] != undefined && params['sysTiersDivisionIds'] != null &&  params['sysTiersDivisionIds'] != "" ) ? "&sysTiersDivisionIds="+  params['sysTiersDivisionIds'] : "" ;
        paramsSent += (  params['sysTiersDivisionSuppliedIds'] != undefined && params['sysTiersDivisionSuppliedIds'] != null &&  params['sysTiersDivisionSuppliedIds'] != "" ) ? "&sysTiersDivisionSuppliedIds="+  params['sysTiersDivisionSuppliedIds'] : "" ;

       return this.http.get(environment.apiUrl + "/" + this.controller + "/getAllTiersNonHumanByRelationType?" + encodeURI( paramsSent ) );

     }

     getAllLightTiersNonHumanByRelationType(  params   ) : Observable<any> {

       let paramsSent = "" ;

        paramsSent += (  params['name'] != undefined &&  params['name'] != null && params['name'] != "" ) ? "&name="+ JSON.stringify(params['name']) : "" ;

        paramsSent += (  params['sysTiersPoolOwnerId'] != undefined && params['sysTiersPoolOwnerId'] != null &&  params['sysTiersPoolOwnerId'] != "" ) ? "&sysTiersPoolOwnerId="+ params['sysTiersPoolOwnerId'] : "" ;

        paramsSent += (  params['sysTiersRelationTypeIds'] != undefined && params['sysTiersRelationTypeIds'] != null &&  params['sysTiersRelationTypeIds'] != "" ) ? "&sysTiersRelationTypeIds="+ params['sysTiersRelationTypeIds'] : "" ;

        paramsSent += (  params['sysGeoRegionAddressIds'] != undefined && params['sysGeoRegionAddressIds'] != null &&  params['sysGeoRegionAddressIds'] != "" ) ? "&sysGeoRegionAddressIds="+  params['sysGeoRegionAddressIds'] : "" ;
        paramsSent += (  params['sysGeoRegionBusinessIds'] != undefined && params['sysGeoRegionBusinessIds'] != null &&  params['sysGeoRegionBusinessIds'] != "" ) ? "&sysGeoRegionBusinessIds="+  params['sysGeoRegionBusinessIds'] : "" ;

        paramsSent += (  params['sysTiersDivisionIds'] != undefined && params['sysTiersDivisionIds'] != null &&  params['sysTiersDivisionIds'] != "" ) ? "&sysTiersDivisionIds="+  params['sysTiersDivisionIds'] : "" ;
        paramsSent += (  params['sysTiersDivisionSuppliedIds'] != undefined && params['sysTiersDivisionSuppliedIds'] != null &&  params['sysTiersDivisionSuppliedIds'] != "" ) ? "&sysTiersDivisionSuppliedIds="+  params['sysTiersDivisionSuppliedIds'] : "" ;

       return this.http.get(environment.apiUrl + "/" + this.controller + "/getAllLightTiersNonHumanByRelationType?" + encodeURI( paramsSent ) );

     }



      //get the entity by id
      get(id): Observable<any> {
        return this.http.get(environment.apiUrl + "/" + this.controller + "/" + id );
      }
      //get the entity by id
      getMe(): Observable<any> {
        return this.http.get(environment.apiUrl + "/" + this.controller + "/getMe" );
      }

      //get the entity by id
      getMyOrganisation(): Observable<any> {
        return this.http.get(environment.apiUrl + "/" + this.controller + "/getMyOrganisation" );
      }

      //get the entity by ids
      getBulk( ids :  string[] ): Observable<any> {
        return this.http.get(environment.apiUrl  + "/" + this.controller + "/bulk/" + ids.join(","));
      }

      //get the all the data need to edit a single entity
      getEditionData( id ? ) : Observable<any> {

        if( typeof id !== "undefined") {

          return this.http.get(environment.apiUrl + "/" + this.controller + "/editionData"  );

        } else {

          return this.http.get(environment.apiUrl + "/" + this.controller + "/editionData/" + id );

        }

      }


      //search the entities witch match criterias , sorted and paginated
      search(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
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
      searchTiersHuman(filter,page,pageSize,multiSortMeta ,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchTiersHuman?" + encodeURI(params) );

      }

      searchByRelationType(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchByRelationType?" + encodeURI(params) );

      }

      searchTiersHumanByRole(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchTiersHumanByRole?" + encodeURI(params) );

      }

      searchTiersNonHumanByRelationType(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchTiersNonHumanByRelationType?" + encodeURI(params) );

      }

      //search the entities witch match criterias , sorted and paginated
      searchTiersNonHuman(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchTiersNonHuman?" + encodeURI(params) );

      }

      //search the entities witch match criterias , sorted and paginated
      searchMinePoolTiers(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchMinePoolTiers?" + encodeURI(params) );

      }

      //search the entities witch match criterias , sorted and paginated
      searchMineOrganisationTiersMembers(filter,page,pageSize,multiSortMeta,paramsGiven ?): Observable<any> {
        let params = (paramsGiven != undefined ) ? paramsGiven : "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filter);
        let sort_converted = this.utilsService.parseSortForSearch(multiSortMeta);

        params += (filters_converted.length > 0 ) ? "&filter="+ JSON.stringify(filters_converted) : "" ;
         params += ( sort_converted.length > 0  ) ? "&sort="+ JSON.stringify(sort_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  + 1 );
        }

        if( pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchMineOrganisationTiersMembers?" + encodeURI(params) );

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
      create(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller , data);
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



      //edit the entity attribute id
      updateWithMedia( sysTiers ,   profileImageFile ) : Observable<any> {

        let formData = new FormData();

        sysTiers.dateCreation = ( sysTiers.dateCreation != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateCreation , "full" ) : "" ;
        sysTiers.dateModification = ( sysTiers.dateModification != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateModification , "full" ) : "" ;
        sysTiers.birthPlace = ( sysTiers.birthPlace != "" ) ? this.utilsService.parseDateForSearch( sysTiers.birthPlace , "full" ) : "" ;


       formData.append(
                       "sysTiers" ,
                        new Blob( [ JSON.stringify( sysTiers) ]  ,{ type: "application/json" } )
                      ) ;


       formData.append( "profileImageFile" , profileImageFile ) ;



        return this.http.post( environment.apiUrl + "/" + this.controller + "/updateWithMedia" ,
                             formData ,
                             {
                               responseType : "json" ,
                              // observe : "events"
                             }
                         );

      }

      //edit the entity attribute id
      updateWithMediaMe( sysTiers ,   profileImageFile ) : Observable<any> {

        let formData = new FormData();

        sysTiers.dateCreation = ( sysTiers.dateCreation != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateCreation , "full" ) : "" ;
        sysTiers.dateModification = ( sysTiers.dateModification != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateModification , "full" ) : "" ;
        sysTiers.birthPlace = ( sysTiers.birthPlace != "" ) ? this.utilsService.parseDateForSearch( sysTiers.birthPlace , "full" ) : "" ;


       formData.append(
                       "sysTiers" ,
                        new Blob( [ JSON.stringify( sysTiers) ]  ,{ type: "application/json" } )
                      ) ;


       formData.append( "profileImageFile" , profileImageFile ) ;



        return this.http.post( environment.apiUrl + "/" + this.controller + "/updateWithMediaMe" ,
                             formData ,
                             {
                               responseType : "json" ,
                              // observe : "events"
                             }
                         );

      }

      //edit the entity attribute id
      updateWithMediaMyOrganisation( sysTiers ,   profileImageFile ) : Observable<any> {

        let formData = new FormData();

        sysTiers.dateCreation = ( sysTiers.dateCreation != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateCreation , "full" ) : "" ;
        sysTiers.dateModification = ( sysTiers.dateModification != "" ) ? this.utilsService.parseDateForSearch( sysTiers.dateModification , "full" ) : "" ;
        sysTiers.birthPlace = ( sysTiers.birthPlace != "" ) ? this.utilsService.parseDateForSearch( sysTiers.birthPlace , "full" ) : "" ;


       formData.append(
                       "sysTiers" ,
                        new Blob( [ JSON.stringify( sysTiers) ]  ,{ type: "application/json" } )
                      ) ;


       formData.append( "profileImageFile" , profileImageFile ) ;



        return this.http.post( environment.apiUrl + "/" + this.controller + "/updateWithMediaMyOrganisation" ,
                             formData ,
                             {
                               responseType : "json" ,
                              // observe : "events"
                             }
                         );

      }



      getSysTiersContactSpecificLocal( sysTiers , sysTiersContactTypeId )
      {

          let contact : any = {
                  firstname : "",
                  lastname : "",
                  email : "",
                  sysCchEntityLinkedPhoneNumber : {
                      phoneNumber : ""
                  }
           } ;

          if( sysTiers != undefined &&sysTiers['sysTiersContacts'] != undefined )
          {
            Object.entries(sysTiers['sysTiersContacts']).forEach(([key, value]) => {

                  if(   value["sysTiersContactType"]
                    &&  value["sysTiersContactType"]["id"]
                    &&  value["sysTiersContactType"]["id"] ==  sysTiersContactTypeId )
                  {
                      contact = value as  Object;
                  }

            });
          }
          return contact ;

      }


      getSysCchEntityLinkedPhoneNumberSpecificLocal( sysTiers , sysCchEntityLinkedPhoneNumberTypeId )
      {

          let phoneNumberLocal : any = {

           } ;

           if( sysTiers != undefined &&sysTiers['sysCchEntityLinkedPhoneNumbers'] != undefined )

          {
            Object.entries(sysTiers['sysCchEntityLinkedPhoneNumbers']).forEach(([key, value]) => {

                  //console.log(  value["sysCchEntityLinkedPhoneNumberType"]["id"] + ' == ' + sysCchEntityLinkedPhoneNumberTypeId + ' // ' + sysTiers["firstname"] ) ;
                  if(   value["sysCchEntityLinkedPhoneNumberType"]
                    &&  value["sysCchEntityLinkedPhoneNumberType"]["id"]
                    &&  value["sysCchEntityLinkedPhoneNumberType"]["id"] ==  sysCchEntityLinkedPhoneNumberTypeId )
                  {
                      phoneNumberLocal = value as  Object;
                  }

            });
          }

          //console.log(phoneNumberLocal);

          return phoneNumberLocal ;

      }

    }
