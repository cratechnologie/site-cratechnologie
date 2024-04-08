

    import { Injectable } from "@angular/core";
    import { Observable, throwError } from "rxjs";
    import { catchError } from "rxjs/operators";
    import { HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams,HttpEventType,HttpEvent} from "@angular/common/http";

    import { environment } from "src/environments/environment";
    import { UtilsService } from "src/app/shared/services/utils.service";


   import { DomSanitizer } from '@angular/platform-browser';
   import { map } from 'rxjs/operators';// This is where I import map operator


    @Injectable({
      providedIn: "root"
    })
    export class SysCmsMediaFileService {

      controller = "sysCmsMediaFiles" ;

      constructor( private http : HttpClient ,
                   private utilsService : UtilsService ,
                   private domSanitizer: DomSanitizer ) {
       }



      //get the entity by id
      get(id): Observable<any> {
        return this.http.get(environment.apiUrl+ "/" + this.controller + "/get/"+id);
      }

      //get the all the data need to edit a single entity
      getEdition(id): Observable<any> {
        return this.http.get(environment.apiUrl+ "/" + this.controller + "/getEdition/"+id);
      }

      //get all the entities
      getAll( sysCmsMediaDirectoryId : string): Observable<any> {
        return this.http.get(environment.apiUrl+ "/" + this.controller + "/all/"+sysCmsMediaDirectoryId);
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

        return this.http.get(environment.apiUrl+ "/" + this.controller + "/search?" + encodeURI(params) );

      }


      processLinkedFileElements( sysCmsMediaFile : any ,
                                 sysCmsMediaFilesMap : any ,
                                 sysCmsMediaFiles : any[] ,
                                 file ) : any
      {

        console.log(sysCmsMediaFiles);
        console.log("alassane");
        //if file was already edited
        if( sysCmsMediaFilesMap[sysCmsMediaFile.id] != undefined  )
        {
          //get the file index
          let index = sysCmsMediaFilesMap[sysCmsMediaFile.id] ;
          //check file is in the list
          if(sysCmsMediaFiles.length  > index &&  sysCmsMediaFiles[index] != undefined )
          {
            //replace last file
            sysCmsMediaFiles[index] = file ;
          }
          else
          {
            //add file to list
            sysCmsMediaFiles.push(file);
            //set the added file index
            sysCmsMediaFilesMap[sysCmsMediaFile.id] = sysCmsMediaFiles.length  - 1 ;
          }
        }
        //to be edited has new
        else
        {

          //add file to list
          sysCmsMediaFiles.push(file);

          //set the added file index
          sysCmsMediaFilesMap[sysCmsMediaFile.id] = sysCmsMediaFiles.length - 1 ;
        }


        return {
            sysCmsMediaFile : sysCmsMediaFile ,
            sysCmsMediaFilesMap : sysCmsMediaFilesMap ,
            sysCmsMediaFiles : sysCmsMediaFiles
         } ;
      }



      createLinkedFileFromLocal( sysCmsMediaFile , sysCmsMediaFilesMap , sysCmsMediaFiles )
      {
        let index = sysCmsMediaFilesMap[sysCmsMediaFile.id] ;

        if( sysCmsMediaFiles.length >  index && sysCmsMediaFiles[index] != undefined )
        {
          if( ["tif","tiff","bmp","jpg","jpeg","gif","png","eps","raw"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            let reader = new FileReader();
            reader.onload = () => {
              sysCmsMediaFile.url = reader.result as string;
              sysCmsMediaFile.urlDefault =  environment.fileImage;

            }

            reader.readAsDataURL(sysCmsMediaFiles[index]);

          }
          else if( ["mp4" , "flv" , "flv" , "mp4" , "f4p" , "amv" ,  "mov"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileVideo;
            let url = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(sysCmsMediaFiles[index]));
             sysCmsMediaFile.url = url;
          }
          else if( ["mp3"  , "wav"  , "3gp"  , "aa"  , "aax"  , "aiff"  , "alac"  , "m4p"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileAudio;
            let url = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(sysCmsMediaFiles[index]));
             sysCmsMediaFile.url = url;
          }
          else if( ["pdf"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.url =  environment.filePdf;
            sysCmsMediaFile.urlDefault =  environment.filePdf;
          }
          else if( ["docx","doc"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileDocx;
            sysCmsMediaFile.url =  environment.fileDocx;
          }
          else if( ["txt"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileTxt;
            sysCmsMediaFile.url =  environment.fileTxt;

          }
          else if( ["xls"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileXls;
            sysCmsMediaFile.url =  environment.fileXls;
          }
          else if( ["sql"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileSql;
            sysCmsMediaFile.url =  environment.fileSql;
          }
          else if( ["ppt"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.filePpt;
            sysCmsMediaFile.url =  environment.filePpt;

          }
          else if( ["zip","rar","arj"].includes( sysCmsMediaFile.extension.toLowerCase() ) )
          {
            sysCmsMediaFile.urlDefault =  environment.fileCompressed;
            sysCmsMediaFile.url =  environment.fileCompressed;
          }
          else
          {
            sysCmsMediaFile.urlDefault =  environment.fileGeneric;
            sysCmsMediaFile.url =  environment.fileGeneric;
          }
        }
      }


      buildUrlDefault( extension : String )
      {
        let urlDefault = environment.fileGeneric ;
        if( extension != undefined && ["tif","tiff","bmp","jpg","jpeg","gif","png","eps","raw"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.fileImage;
        }
        else if( extension != undefined && ["mp4" , "flv" , "flv" , "mp4" , "f4p" , "amv" ,  "mov"].includes( extension.toLowerCase() ) )
        {
          urlDefault = environment.fileVideo;

        }
        else if( extension != undefined && ["mp3"  , "wav"  , "3gp"  , "aa"  , "aax"  , "aiff"  , "alac"  , "m4p"].includes( extension.toLowerCase() ) )
        {
          urlDefault = environment.fileAudio;

        }
        else if( extension != undefined && ["pdf"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.filePdf;
        }
        else if( extension != undefined && ["docx","doc"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.fileDocx;
        }
        else if( extension != undefined && ["txt"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.fileTxt;

        }
        else if( extension != undefined && ["xls"].includes( extension.toLowerCase() ) )
        {
           urlDefault =  environment.fileXls;
         }
        else if( extension != undefined && ["sql"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.fileSql;
        }
        else if( extension != undefined && ["ppt"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.filePpt;
        }
        else if(extension != undefined &&  ["zip","rar","arj"].includes( extension.toLowerCase() ) )
        {
          urlDefault =  environment.fileCompressed;
        }
        return urlDefault ;
      }





       uploadMedia( sysCmsMediaFile , file )
       {
           //let headers = new HttpHeaders({ 'Content-Type': 'application/json' }) ;
           let formData = new FormData();

           //fill with data
           formData.append(
                           "sysCmsMediaFile" ,
                            new Blob( [ JSON.stringify( sysCmsMediaFile) ]  ,{ type: "application/json" } )
                          ) ;

           formData.append( "file" , file ) ;

           console.log(sysCmsMediaFile);

           if(sysCmsMediaFile['sysCmsMediaDirectory'] == null ||  sysCmsMediaFile['sysCmsMediaDirectory']["id"] == ""){
             return;
           }

           this.http.post(
              environment.apiUrl + "/" + this.controller + "/create"  ,
              formData , {
               reportProgress: true,
               observe: 'events',
             }).subscribe(

               (event)=>{

                  if (event.type === HttpEventType.UploadProgress) {

                       let progress = Math.round((100 * event.loaded) / event.total);
                       sysCmsMediaFile.progress = progress ;
                   }

                   if (event.type === HttpEventType.Response) {

                         sysCmsMediaFile.edit = false ;
                         sysCmsMediaFile.edited = false ;
                         sysCmsMediaFile.saved = true ;

                         sysCmsMediaFile.sizeFormatted =  this.utilsService.wellFormatFileSize( event.body["size"] ) ;
                         sysCmsMediaFile.urlDefault = this.buildUrlDefault(  event.body["extension"] )  ;
                         sysCmsMediaFile.url = environment.apiUrl +"/"+ this.controller +"/viewAsRendable/"  +  event.body["id"] + "."+  event.body["extension"] ;


                    }


              },
                error=>{
                }


              );
       }



      create(

                  sysCmsMediaFilesSources ,
                  sysCmsMediaFilesMap ,
                  sysCmsMediaFilesList ,
                  //sysDataEntity ,
                  options ,
                  callBack )
      {


         //
         const fileInput = document.createElement('input');
         let microTime = new Date().getTime() ;
         let inputId = "sysCmsMediaFileUploader-" + microTime  ;

          fileInput.setAttribute("type","file");
          fileInput.setAttribute("id",inputId);
          fileInput.setAttribute("multiple","");

          if(   options != undefined
              && options.extensions != undefined
              && options.extensions.length > 0
            )
          {
            fileInput.setAttribute("accept", options.extensions.join(',') );
          }

          fileInput.style.cssText = "visibility: hidden;";

          document.body.appendChild(fileInput);
          fileInput.addEventListener("change" , ( event : Event ) => {

              let files = ( <HTMLInputElement>event.target ).files ;


                //params to send to server for automatic id
                let entities =  JSON.stringify({ "sys_cms_media_file" : files.length } );
                //perform the request
                this.http.get( environment.apiUrl + "/sysIdGenerator/generate?entities=" + encodeURI( entities ) ).subscribe( result => {


                  Object.entries(files).forEach( ( [ key_file , file ] ) => {


                  let name =  this.utilsService.getFileNameWithoutExtension( file.name  ) ;
                  let extension =  this.utilsService.getFileExtension( file.name ) ;
                  let size = file.size ;
                  let id =  "" ;
                  let processLinkedFileElements = {} ;
                  let sysCmsMediaFile = {"id":"","name":"","extension":"","size":0,"edited":true, "edit":false,"sizeFormatted":"","editable":false,"sysCmsMediaFileType":null,"url":"","saved":false,"urlDefault":"" , "process": 0 /*,"sysDataEntity":sysDataEntity */} ;

                  //if the response
                  if( result["sys_cms_media_file"] != undefined &&  Array.isArray( result["sys_cms_media_file"] ) )
                  {
                    //get the id
                    id = result["sys_cms_media_file"][key_file] ;

                    //set attributes
                    sysCmsMediaFile.id = id ;
                    sysCmsMediaFile.name = name;

                    sysCmsMediaFile.extension = extension.toLowerCase() ;
                    sysCmsMediaFile.size = size ;
                    sysCmsMediaFile.sizeFormatted = this.utilsService.wellFormatFileSize( size)  ;

                    //sysCmsMediaFile.sysDataEntity = sysDataEntity ;


                    //process
                    processLinkedFileElements = this.processLinkedFileElements( sysCmsMediaFile ,
                                                                                sysCmsMediaFilesMap ,
                                                                                sysCmsMediaFilesList ,
                                                                                file ) ;

                    sysCmsMediaFilesSources.push( processLinkedFileElements["sysCmsMediaFile"] );
                    sysCmsMediaFilesMap = processLinkedFileElements["sysCmsMediaFilesMap"] ;
                    sysCmsMediaFilesList = processLinkedFileElements["sysCmsMediaFiles"] ;


                  }

                  });




                  Object.entries(sysCmsMediaFilesSources).forEach( ( [ key_sysCmsMediaFile , sysCmsMediaFile ] ) => {

                    if(    options != undefined
                        && options.extensions != undefined
                        && options.extensions.length > 0
                        && sysCmsMediaFile != undefined

                      )
                    {
                      if( ! options.extensions.includes( "." + sysCmsMediaFile["extension"].toLowerCase() ) )
                      {
                        var removed = sysCmsMediaFilesSources.splice(key_sysCmsMediaFile , 1 ) ;



                        //continue ;
                      }
                    }

                    if(    options != undefined
                        && options.sizeLimit != undefined
                        && sysCmsMediaFile != undefined
                      )
                    {
                      if( options.sizeLimit < sysCmsMediaFile["size"]  )
                      {
                        console.log(options.sizeLimit +' < '+ sysCmsMediaFile["size"]);
                        var removed = sysCmsMediaFilesSources.splice(key_sysCmsMediaFile , 1 ) ;
                        //continue ;
                      }
                    }

                  });

                  Object.entries(sysCmsMediaFilesSources).forEach( ( [ key_sysCmsMediaFile , sysCmsMediaFile ] ) => {


                    this.createLinkedFileFromLocal( sysCmsMediaFile ,
                                                           sysCmsMediaFilesMap ,
                                                           sysCmsMediaFilesList ) ;
                  });

                } ,
                error => {

                }) ;




          });

          //get element
          let el = document.getElementById(inputId);
          //trigger file chooser open
          el.click();

      }

      edit(       sysCmsMediaFilesSources,
                  sysCmsMediaFilesMap ,
                  sysCmsMediaFilesList ,
                  //sysDataEntity ,
                  options ,
                  index ,
                  callBack )
      {



        //
        const fileInput = document.createElement('input');
        let microTime = new Date().getTime() ;
        let inputId = "sysCmsMediaFileUploader-" + microTime  ;
        let sysCmsMediaFile = sysCmsMediaFilesSources[index] ;

         fileInput.setAttribute("type","file");
         fileInput.setAttribute("id",inputId);
         fileInput.setAttribute("multiple","");

         if(   options != undefined

             && options.extensions != undefined
             && options.extensions.length > 0
           )
         {
           fileInput.setAttribute("accept", options.extensions.join(',') );
         }
         fileInput.style.cssText = "visibility: hidden;";

         document.body.appendChild(fileInput);
         fileInput.addEventListener("change" , ( event : Event ) => {

             let file = ( <HTMLInputElement>event.target ).files[0] ;
             let name =  this.utilsService.getFileNameWithoutExtension( file.name  ) ;
             let extension =  this.utilsService.getFileExtension( file.name ).toLowerCase() ;
             let size = file.size ;

             if(    options != undefined
                 && options.sizeLimit != undefined
               )
             {
               if( options.sizeLimit > size  )
               {

                  sysCmsMediaFilesSources[index]["name"] = name  ;
                  sysCmsMediaFilesSources[index]["size"] = size  ;
                  sysCmsMediaFilesSources[index]["sizeFormatted"] = this.utilsService.wellFormatFileSize( size)  ;

                  sysCmsMediaFilesSources[index]["saved"] = false ;
                  sysCmsMediaFilesSources[index]["edit"] = false ;
                  sysCmsMediaFilesSources[index]["edited"] = true ;


                 let fileIndex = sysCmsMediaFilesMap[sysCmsMediaFilesSources[index]["id"]];
                 sysCmsMediaFilesList[fileIndex] = file ;
                 console.log("Console");
                  this.createLinkedFileFromLocal(  sysCmsMediaFilesSources[index] ,
                                                          sysCmsMediaFilesMap ,
                                                          sysCmsMediaFilesList) ;
              }
            }



        });

        //get element
        let el = document.getElementById(inputId);
        //trigger file chooser open
        el.click();

      }


      //delete an entity
      delete(id): Observable<any> {
        return this.http.delete(environment.apiUrl + "/" + this.controller + "/"+id);
      }

      rename( id , name ) : Observable<any> {
          return this.http.put( environment.apiUrl + "/" + this.controller +"/rename/"+id , name );
      }

      /*
      //create an entity
      create(data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
         return this.http.post(environment.apiUrl+"/sysCmsMediaFile/create", data);
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
        return this.http.post( environment.apiUrl+"/sysCmsMediaFile/createBulk" , data );
      }


      //update an entity
      update( data): Observable<any> {

          data.dateCreation = ( data.dateCreation != "" ) ? this.utilsService.parseDateForSearch( data.dateCreation , "full" ) : "" ;
          data.dateModification = ( data.dateModification != "" ) ? this.utilsService.parseDateForSearch( data.dateModification , "full" ) : "" ;
        return this.http.post( environment.apiUrl+"/sysCmsMediaFile/update" , data );
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
        return this.http.post( environment.apiUrl + "/sysCmsMediaFile/updateBulk" , { ids : ids , data : data });
      }


      //bulk delete entities
      deleteBulk( ids ): Observable<any> {
        return this.http.delete( environment.apiUrl + "/sysCmsMediaFile/deleteBulk/" + encodeURI(JSON.stringify(ids))  );
      }*/
    }
