
    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysBusinessCatalogItemService {

      controller = "sysBusinessCatalogItems" ;

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
      searchMine(filter,page,pageSize,multiSortMeta): Observable<any> {
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

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchMine?" + encodeURI(params) );

      }


      //search the entities witch match criterias , sorted and paginated
      searchProduct(filter,page,pageSize,multiSortMeta): Observable<any> {
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

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchProduct?" + encodeURI(params) );

      }

      searchService(filter,page,pageSize,multiSortMeta): Observable<any> {
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

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchService?" + encodeURI(params) );

      }

      //search the entities witch match criterias , sorted and paginated
      searchProductMine(filter,page,pageSize,multiSortMeta): Observable<any> {
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

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchProductMine?" + encodeURI(params) );

      }

      searchServiceMine(filter,page,pageSize,multiSortMeta): Observable<any> {
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

        return this.http.get(environment.apiUrl + "/" + this.controller + "/searchServiceMine?" + encodeURI(params) );

      }

      //delete all entity
      deleteAll() : Observable<any> {
        return this.http.delete(environment.apiUrl  + "/" + this.controller );
      }

      //delete an entity
      deleteService(id): Observable<any> {
        return this.http.delete(environment.apiUrl + "/" + this.controller + "/service/" + id);
      }
      deleteProduct(id): Observable<any> {
        return this.http.delete(environment.apiUrl + "/" + this.controller + "/product/" + id);
      }

      //get the entity by ids
      deleteBulk( ids :  string[] ): Observable<any> {
        return this.http.delete(environment.apiUrl + "/" + this.controller + "/bulk/" + ids.join(","));
      }





      //create an entity
      /*create(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl + "/" + this.controller , data);
      }*/


      //edit the entity attribute id
      createProduct(
            data
        ,   imageOneFile
        ,   imageTwoFile
        ,   imageThreeFile
        ,   imageFourFile


      ) : Observable<any> {

       let formData = new FormData();

       data.price = ( typeof data.price === "undefined" || data.price == null   ) ? 0 : data.price ;

       data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
       data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;

      formData.append(
                      "data" ,
                       new Blob( [ JSON.stringify( data) ]  ,{ type: "application/json" } )
                     ) ;

       if( imageOneFile != undefined && imageOneFile != null && imageOneFile != '' )
       {
         formData.append( "imageOneFile" , imageOneFile ) ;
       }

       if( imageTwoFile != undefined && imageTwoFile != null && imageOneFile != '' )
       {
         formData.append( "imageTwoFile" , imageTwoFile ) ;
       }

       if( imageThreeFile != undefined && imageThreeFile != null && imageThreeFile != '' )
       {
         formData.append( "imageThreeFile" , imageThreeFile ) ;
       }

       if( imageFourFile != undefined && imageFourFile != null && imageFourFile != '' )
       {
         formData.append( "imageFourFile" , imageFourFile ) ;
       }

       return this.http.post( environment.apiUrl + "/" + this.controller+"/product"   ,
                            formData ,
                            {
                              responseType : "json" ,
                              //observe : "events"
                            }
                        );
      }


      updateProduct( data
        ,   imageOneFile
        ,   imageTwoFile
        ,   imageThreeFile
        ,   imageFourFile) : Observable<any> {

        let formData = new FormData();

        data.price = ( typeof data.price === "undefined" || data.price == null   ) ? 0 : data.price ;

        data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
        data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;

       formData.append(
                       "data" ,
                        new Blob( [ JSON.stringify( data) ]  ,{ type: "application/json" } )
                      ) ;


                             if( imageOneFile != undefined && imageOneFile != null && imageOneFile != '' )
                             {
                               formData.append( "imageOneFile" , imageOneFile ) ;
                             }

                             if( imageTwoFile != undefined && imageTwoFile != null && imageOneFile != '' )
                             {
                               formData.append( "imageTwoFile" , imageTwoFile ) ;
                             }

                             if( imageThreeFile != undefined && imageThreeFile != null && imageThreeFile != '' )
                             {
                               formData.append( "imageThreeFile" , imageThreeFile ) ;
                             }

                             if( imageFourFile != undefined && imageFourFile != null && imageFourFile != '' )
                             {
                               formData.append( "imageFourFile" , imageFourFile ) ;
                             }
                             return this.http.put( environment.apiUrl + "/" + this.controller +"/product"   ,
                             formData ,
                             {
                               responseType : "json" ,
                               //observe : "events"
                             }
                         );
      }

      //update an entity
      createService( data): Observable<any> {

          data.price = ( typeof data.price === "undefined" || data.price == null   ) ? 0 : data.price ;

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;


        return this.http.post( environment.apiUrl + "/" + this.controller+"/service"  , data );
      }

      updateService( data): Observable<any> {

          data.price = ( typeof data.price === "undefined" || data.price == null   ) ? 0 : data.price ;

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
        return this.http.put( environment.apiUrl + "/" + this.controller+"/service"  , data );
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
      createWithMedia( imageFourId ,  filesMapIds , filesLinkedMapIds , files , filesLinked ) : Observable<any> {

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
                       "imageFourId" ,
                        new Blob( [ JSON.stringify( imageFourId) ]  ,{ type: "application/json" } )
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





            //get the entity attribute imageOneId
            getImageOneId(id) : Observable<any> {
              return this.http.get(environment.apiUrl + "/" + this.controller + "/" + id +"/imageOneId");
            }

            //delete the entity attribute id
            deleteImageOneId(id) : Observable<any> {
              return this.http.delete(environment.apiUrl  + "/" + this.controller + "/" + id +"/imageOneId");
            }

            //edit the entity attribute id
            editImageOneId(id,sysDmsEntityFile,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "sysDmsEntityFile" ,
                               new Blob( [ JSON.stringify( sysDmsEntityFile) ]  ,{ type: "application/json" } )
                             ) ;

              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageOneId" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );

            }

            //edit the entity attribute id
            editContentImageOneId(id,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageOneId-content" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );
            }




            //get the entity attribute imageTwoId
            getImageTwoId(id) : Observable<any> {
              return this.http.get(environment.apiUrl + "/" + this.controller + "/" + id +"/imageTwoId");
            }

            //delete the entity attribute id
            deleteImageTwoId(id) : Observable<any> {
              return this.http.delete(environment.apiUrl  + "/" + this.controller + "/" + id +"/imageTwoId");
            }

            //edit the entity attribute id
            editImageTwoId(id,sysDmsEntityFile,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "sysDmsEntityFile" ,
                               new Blob( [ JSON.stringify( sysDmsEntityFile) ]  ,{ type: "application/json" } )
                             ) ;

              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageTwoId" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );

            }

            //edit the entity attribute id
            editContentImageTwoId(id,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageTwoId-content" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );
            }




            //get the entity attribute imageThreeId
            getImageThreeId(id) : Observable<any> {
              return this.http.get(environment.apiUrl + "/" + this.controller + "/" + id +"/imageThreeId");
            }

            //delete the entity attribute id
            deleteImageThreeId(id) : Observable<any> {
              return this.http.delete(environment.apiUrl  + "/" + this.controller + "/" + id +"/imageThreeId");
            }

            //edit the entity attribute id
            editImageThreeId(id,sysDmsEntityFile,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "sysDmsEntityFile" ,
                               new Blob( [ JSON.stringify( sysDmsEntityFile) ]  ,{ type: "application/json" } )
                             ) ;

              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageThreeId" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );

            }

            //edit the entity attribute id
            editContentImageThreeId(id,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageThreeId-content" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );
            }




            //get the entity attribute imageFourId
            getImageFourId(id) : Observable<any> {
              return this.http.get(environment.apiUrl + "/" + this.controller + "/" + id +"/imageFourId");
            }

            //delete the entity attribute id
            deleteImageFourId(id) : Observable<any> {
              return this.http.delete(environment.apiUrl  + "/" + this.controller + "/" + id +"/imageFourId");
            }

            //edit the entity attribute id
            editImageFourId(id,sysDmsEntityFile,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "sysDmsEntityFile" ,
                               new Blob( [ JSON.stringify( sysDmsEntityFile) ]  ,{ type: "application/json" } )
                             ) ;

              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageFourId" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );

            }

            //edit the entity attribute id
            editContentImageFourId(id,file) : Observable<any> {

              let formData = new FormData();

              //fill with data
              formData.append( "file" , file ) ;

              return this.http.put(environment.apiUrl + "/" + this.controller + "/" + id +"/imageFourId-content" ,
                                   formData ,
                                   {
                                     responseType : "json" ,
                                     observe : "events"
                                   }
                               );
            }




    }
