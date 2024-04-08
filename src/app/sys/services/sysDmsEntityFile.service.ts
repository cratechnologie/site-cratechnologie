
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError } from "rxjs/operators";
  import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from "@angular/common/http";


      import { environment } from "src/environments/environment";
      import { UtilsService } from "src/app/shared/services/utils.service";


    @Injectable({
      providedIn: "root"
    })
    export class SysDmsEntityFileService {

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ) {
       }

      //get the entity by id
      get(id): Observable<any> {
        return this.http.get(environment.apiUrl+"/sysDmsEntityFile/get/"+id);
      }

      //get the all the data need to edit a single entity
      getEdition(id): Observable<any> {
        return this.http.get(environment.apiUrl+"/sysDmsEntityFile/getEdition/"+id);
      }

      //get all the entities
      getAll(): Observable<any> {
        return this.http.get(environment.apiUrl+"/sysDmsEntityFile/getAll");
      }

      //search the entities witch match criterias , sorted and paginated
      search(filters,page,pageSize,sortField,sortDirection): Observable<any> {
        let params = "" ;
        let filters_converted = this.utilsService.parseFilterForSearch(filters);

        params += (filters_converted.length > 0 ) ? "filters="+ JSON.stringify(filters_converted) : "" ;

        if( page != undefined )
        {
            params +="&page="+ ( Math.floor( page / pageSize )  );
        }

        if(pageSize != undefined )
        {
            params +="&pageSize="+pageSize ;
        }

        if(sortField != undefined )
        {
          params +="&sortField="+sortField ;
        }

        if( sortDirection != undefined )
        {
          sortDirection = (sortDirection == 1) ? "asc" : "desc";
          params +="&sortDirection="+sortDirection ;
        }

        return this.http.get(environment.apiUrl+"/sysDmsEntityFile/search?" + encodeURI(params) );

      }




      processFileElements( sysDmsEntityFile : any ,
                           sysDmsEntityFilesMap : any ,
                           sysDmsEntityFiles : any[] ,
                           file ) : any
      {
        //if file was already edited
        if( sysDmsEntityFilesMap[sysDmsEntityFile.id] != undefined  )
        {
          //get the file index
          let index = sysDmsEntityFilesMap[sysDmsEntityFile.id] ;
          //check file is in the list
          if( sysDmsEntityFiles.length  > index &&  sysDmsEntityFiles[index] != undefined )
          {
            //replace last file
            sysDmsEntityFiles[index] = file ;
          }
          else
          {
            //add file to list
            sysDmsEntityFiles.push(file);
            //set the added file index
            sysDmsEntityFilesMap[sysDmsEntityFile.id] = sysDmsEntityFiles.length  - 1 ;
          }
        }
        //to be edited has new
        else
        {
          //add file to list
          sysDmsEntityFiles.push(file);
          //set the added file index
          sysDmsEntityFilesMap[sysDmsEntityFile.id] = sysDmsEntityFiles.length - 1 ;
        }


        return {
            sysDmsEntityFile : sysDmsEntityFile ,
            sysDmsEntityFilesMap : sysDmsEntityFilesMap ,
            sysDmsEntityFiles : sysDmsEntityFiles
         } ;
      }

      createFileFromLocal( sysDmsEntityFile , sysDmsEntityFilesMap , sysDmsEntityFiles )
      {
        let index = sysDmsEntityFilesMap[sysDmsEntityFile.id] ;

        if( sysDmsEntityFiles.length >  index && sysDmsEntityFiles[index] != undefined )
        {
          if( ["tif","tiff","bmp","jpg","jpeg","gif","png","eps","raw"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            let reader = new FileReader();
            reader.onload = () => {
              sysDmsEntityFile.url = reader.result as string;
              sysDmsEntityFile.urlDefault =  environment.fileImage;

            }
            reader.readAsDataURL(sysDmsEntityFiles[index]);
          }
          else if( ["pdf"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            sysDmsEntityFile.urlDefault =  environment.filePdf;
          }
          else if( ["docx","doc"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            sysDmsEntityFile.urlDefault =  environment.fileDocx;

          }
          else if( ["txt"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            sysDmsEntityFile.urlDefault =  environment.fileTxt;
          }
          else if( ["xls"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            sysDmsEntityFile.urlDefault =  environment.fileXls;
          }
          else if( ["sql"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            sysDmsEntityFile.urlDefault =  environment.fileSql;
          }

          else if( ["ppt"].includes( sysDmsEntityFile.extension.toLowerCase() ) )
          {
            sysDmsEntityFile.urlDefault =  environment.filePpt;
          }

        }
      }

      edit( parentObject , attribute , sysDmsEntityFile , sysDmsEntityFilesMap , sysDmsEntityFiles , sysDataEntity , callBack )
      {

         if(sysDmsEntityFile == null )
         {
              sysDmsEntityFile = {
                "id" : "" ,
                "nom" : "" ,
                "extension" : "" ,
                "sysDataEntityInstanceId" : "" ,
                "sysDataEntity" : {} ,
                "size" : "" ,
                "status" : 1 ,
                "dateCreation" : null ,
                "dateModification" : null ,
                "sysUserCreation" : null ,
                "sysUserModification" : null ,
                "edit" : false ,
                "edited" : false ,
                "editable" : false ,
                "url" : "" ,
                "urlDefault" : environment.fileImage ,
                "saved" : false ,
                "sizeFormatted" : ""
              } ;
         }
         const fileInput = document.createElement('input');
         let microTime = new Date().getTime() ;
         let inputId = "sysDmsEntityFileUploader-" + microTime  ;

          fileInput.type = 'file';
          fileInput.id = inputId  ;
          fileInput.style.cssText = "visibility: hidden;";

          document.body.appendChild(fileInput);
          fileInput.addEventListener("change" , ( event : Event ) => {

              let file = ( <HTMLInputElement>event.target ).files[0];
              let nom =  file.name ;
              let extension =  this.utilsService.getFileExtension( file.name ) ;
              let size = file.size ;

              let id = ( sysDmsEntityFile != undefined  && sysDmsEntityFile != null  &&  sysDmsEntityFile.id != undefined  && sysDmsEntityFile.id != "" ) ? sysDmsEntityFile.id : "" ;
              let processFileElements = {} ;

              //if id is not specified
              if( id == ""  )
              {
                //params to send to server for automatic id
                let entities =  JSON.stringify({ "sysDmsEntityFile" : 1 } );
                //perform the request
                this.http.get( environment.apiUrl + "/sysIdGenerator/generate?entities=" + encodeURI( entities ) ).subscribe( result => {

                  //if the response
                  if( result["sysDmsEntityFile"] != undefined &&  Array.isArray( result["sysDmsEntityFile"] ) )
                  {
                    //get the id
                    id = result["sysDmsEntityFile"][0] ;

                    //set attributes
                    sysDmsEntityFile["id"] = id ;
                    sysDmsEntityFile["nom"] = nom ;
                    sysDmsEntityFile["extension"] = extension.toLowerCase() ; ;
                    sysDmsEntityFile["size"] = size ;
                    sysDmsEntityFile["saved"] = false ;


                    //process
                    processFileElements = this.processFileElements( sysDmsEntityFile ,
                                                                    sysDmsEntityFilesMap ,
                                                                    sysDmsEntityFiles ,
                                                                    file ) ;

                    this.createFileFromLocal( processFileElements["sysDmsEntityFile"] , processFileElements["sysDmsEntityFilesMap"] , processFileElements["sysDmsEntityFiles"] ) ;

                    sysDmsEntityFile = processFileElements["sysDmsEntityFile"] ;
                    sysDmsEntityFile.sysDataEntity = sysDataEntity ;
                    sysDmsEntityFilesMap = processFileElements["sysDmsEntityFilesMap"] ;
                    sysDmsEntityFiles = processFileElements["sysDmsEntityFiles"] ;

                    console.log(sysDmsEntityFile);

                    if( parentObject != null &&  attribute != null )
                    {
                      parentObject[attribute] = sysDmsEntityFile ;
                    }

                  }
                } ,
                error => {

                }) ;

              }
              //if has good id
              else
              {
                //set attributes
                sysDmsEntityFile["id"] = id ;
                sysDmsEntityFile["nom"] = nom ;
                sysDmsEntityFile["extension"] = extension.toLowerCase() ; ;
                sysDmsEntityFile["size"] = size ;
                sysDmsEntityFile["saved"] = false ;

                //process
                processFileElements = this.processFileElements( sysDmsEntityFile ,
                                                                sysDmsEntityFilesMap ,
                                                                sysDmsEntityFiles ,
                                                                file ) ;

                this.createFileFromLocal( processFileElements["sysDmsEntityFile"] , processFileElements["sysDmsEntityFilesMap"] , processFileElements["sysDmsEntityFiles"] ) ;

                sysDmsEntityFile = processFileElements["sysDmsEntityFile"] ;
                sysDmsEntityFile.sysDataEntity = sysDataEntity ;
                sysDmsEntityFilesMap = processFileElements["sysDmsEntityFilesMap"] ;
                sysDmsEntityFiles = processFileElements["sysDmsEntityFiles"] ;

                  console.log(sysDmsEntityFile);

                if(parentObject == null &&  attribute == null )
                {
                  parentObject[attribute] = sysDmsEntityFile ;
                }

              }

          });

          //get element
          let el = document.getElementById(inputId);
          //trigger file chooser open
          el.click();

          return null;
      }

      //create an entity
      create(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl+"/sysDmsEntityFile/create", data);
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
        return this.http.post( environment.apiUrl+"/sysDmsEntityFile/createBulk" , data );
      }


      //update an entity
      update( data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
        return this.http.post( environment.apiUrl+"/sysDmsEntityFile/update" , data );
      }

      //bulk update entities
      updateBulk( ids ,  data ): Observable<any> {
        if( Array.isArray( data) )
        {
          Object.entries(data).forEach(([key, value]) => {

          data[key].dateCreation = ( data[key].dateCreation != "" ) ? this.utilsService.parseDateForSearch( data[key].dateCreation, "full" ) : "" ;
          data[key].dateModification = ( data[key].dateModification != "" ) ? this.utilsService.parseDateForSearch( data[key].dateModification, "full" ) : "" ;
          }) ;
        }
        return this.http.post( environment.apiUrl + "/sysDmsEntityFile/updateBulk" , { ids : ids , data : data });
      }

      //delete an entity
      delete(id): Observable<any> {
        return this.http.delete(environment.apiUrl+"/sysDmsEntityFile/delete/"+id);
      }

      //bulk delete entities
      deleteBulk( ids ): Observable<any> {
        return this.http.delete( environment.apiUrl + "/sysDmsEntityFile/deleteBulk/" + encodeURI(JSON.stringify(ids))  );
      }


      /**
      * Open file in new window; only image or pdf file can be open
      * @author Alassane Niambélé
      * @param sysDmsEntityFile the file structure
      * @return void
      */
      open( sysDmsEntityFile   ) {
        //check file extension;only image or pdf file can be open
        if(
              this.utilsService.isPdfFile(sysDmsEntityFile["extension"].toLowerCase() )
          ||  this.utilsService.isImageFile(sysDmsEntityFile["extension"].toLowerCase() )
         )
        {
          //dimensions of the window
          let params = "width=0,height=0" ;
          //create new window
          let fileWindow =  window.open( environment.apiUrl + "/sysDmsEntityFile/viewAsRendable/" + sysDmsEntityFile["id"] + "."+ sysDmsEntityFile["extension"]  , "fileWindow" , params ) ;
          //change window title
          fileWindow.document.title = sysDmsEntityFile["nom"] + "." + sysDmsEntityFile["extension"] ;
        }
      }


      /**
      * Download file
      * @author Alassane Niambélé
      * @param sysDmsEntityFile the file structure
      * @return void
      */
      download( sysDmsEntityFile  ) {
        //trigger download from remote backend server
        window.open( environment.apiUrl + "/sysDmsEntityFile/download/" + sysDmsEntityFile["id"] ,"_self") ;
      }


      /**
      * Build preview  url of the file
      * @author Alassane Niambélé
      * @param sysDmsEntityFile the file structure
      * @return void
      */
      previewUrl(sysDmsEntityFile  ){
          let url = ( sysDmsEntityFile != undefined && sysDmsEntityFile != null && sysDmsEntityFile["id"] != null  && sysDmsEntityFile["extension"] != null  ) ?  environment.apiUrl + "/sysDmsEntityFile/view/" + sysDmsEntityFile["id"] + "."+sysDmsEntityFile["extension"] : "" ;
          return url  ;
      }


      /**
      * Build view as rendoble  url of the file
      * @author Alassane Niambélé
      * @param sysDmsEntityFile the file structure
      * @return void
      */
      viewAsRendableUrl(sysDmsEntityFile ){
        let url = ( sysDmsEntityFile != undefined && sysDmsEntityFile != null && sysDmsEntityFile["id"] != null  && sysDmsEntityFile["extension"] != null  ) ?  environment.apiUrl + "/sysDmsEntityFile/viewAsRendable/" + sysDmsEntityFile["id"] + "."+sysDmsEntityFile["extension"] : "" ;
        return url  ;
      }


      /**
      * Build view as rendoble  url of the file
      * @author Alassane Niambélé
      * @param sysDmsEntityFile the file structure
      * @return void
      */
      viewAsRendableUrlLocalUser(  ){
         return environment.fileDefaultUser  ;
      }

      /**
      * Build view as rendoble  url of the file
      * @author Alassane Niambélé
      * @param sysDmsEntityFile the file structure
      * @return void
      */
      viewAsRendableUrlLocalFile(  ){
         return environment.fileImage  ;
      }



    }
