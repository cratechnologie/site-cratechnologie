

import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClientModule,HttpClient, HttpHeaders, HttpErrorResponse ,HttpParams} from '@angular/common/http';
//import jwt_decode from "jwt-decode";
import { ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  getStatut() : any {
     return environment.statut_data ;
  }

  getBooleanDataStruct() : any {
     return environment.booleanDataStruct ;
  }

  getBooleanDataStructYesNo() : any {
     return environment.booleanDataStructYesNo ;
  }



  getFragmentAsObject(fragment : string){

    let parts = (fragment != null ) ? fragment.split('&') : "";
    let params = {} ;

    Object.entries( parts ).forEach( ( [ key , part ] ) => {
      const pieces = part.split('=');
      if(pieces.length == 2)
      {
        params[pieces[0]] = pieces[1];
      }
    });

    return params
  }

  getFragmentAsObjectProjections(fragment : string , projection ){

    let parts = (fragment != null ) ? fragment.split('&') : "";
    let params = {} ;


    Object.entries( parts ).forEach( ( [ key , part ] ) => {
      const pieces = part.split('=');


      if( pieces.length == 2   && projection.includes( pieces[0] )  )
      {
        params[pieces[0]] = pieces[1];
      }
    });

    return params
  }


  getFragmentAsParamsProjections(fragment : string , projection ){
    let paramsObject = this.getFragmentAsObjectProjections( fragment  , projection ) ;
    let params = ""
    Object.entries( paramsObject ).forEach( ( [ key , part ] ) => {
        params +="&"+key+"="+ part ;
    });

    return encodeURI(params);
  }

  objectToHttpParamsNotEmpty( source , excludeParams ? ) {

      let toExlude = ( excludeParams != undefined  && excludeParams != null && excludeParams instanceof Array ) ? excludeParams : [] ;
      let destination = {} ;

      Object.entries( ( source as Array<Object>  ) ).forEach( ( [ key , value ] ) => {

        if(  toExlude.indexOf(key) >= 0    )
        {
          return ;
        }

        if( value != "" )
        {
          destination[key] = value ;
        }

      });

      //let httpParams =  "" ; //new HttpParams({ fromObject: destination }) ;
      let httpParams = new HttpParams({ fromObject: destination }) ;


      return  httpParams ;
  }


  buildPersitParamsRemoteData( dataSource  )
  {
    let params = new URLSearchParams();

    Object.entries( dataSource ).forEach( ( [ key , value ] ) => {
        let val : string = value as string ;
        params.set( key , val ) ;

    });

    return params.toString();
  }

  /**
   *
   * @size
   *
   *
   **/
  wellFormatFileSize(size){
    let format = "";
     size = Number(size);

    if( size < 1000){
      format = size + " Octets" ;
    }else
    if( size < 1000000){
      format = Math.ceil(size / 1000 ) + " Ko" ;
    }else
    if( size < 1000000000){
      format = Math.ceil(size / 1000 ) + " Mo" ;
    }else {
      format = Math.ceil(size / 1000 ) + " Go" ;

    }
    return format ;
  }


   validateEmail  (email) {
     return email.match(
     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   );
  }

  parseDateForSearch(val: string, type : string) : string {


    if(val != undefined && val != "")
    {
      let date = new Date(val);
      let month = date.getMonth() + 1   ;
      let day = date.getDate()  ;
      let hour = date.getHours() ;
      let minute = date.getMinutes() ;
      let seconde = date.getSeconds() ;

      let monthString = ( month < 10 ) ? "0" + month : month ;
      let dayString = ( day < 10 ) ? "0" + day : day ;
      let hourString = ( hour < 10 ) ? "0" + hour : hour ;
      let minuteString = ( minute < 10 ) ? "0" + minute : minute ;
      let secondeString = ( seconde < 10 ) ? "0" + seconde : seconde ;

      val = date.getFullYear() +"-"+ monthString + "-" + dayString ;//+ " "+ hourString+ ":" + minuteString+ ":" + secondeString;
      if(type == "full" )
      {
        val = date.getFullYear() +"-"+ monthString + "-" + dayString + " "+ hourString+ ":" + minuteString+ ":" + secondeString;

      }
    }
    return val ;
  }

/*
   dataURItoBlob(dataURI) {
      const byteString = window.atob(dataURI);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: 'image/png' });
      return blob;
   }*/

  parseFilterEntryForSearch(key , operation,val)  {


      switch ( operation )
      {
        case 'equals':
          operation = 'EQUAL';
          break;
        case 'notEquals':
            operation = 'NOT_EQUAL';
            break;
        case 'contains':
          operation = 'MATCH';
          break;
        case 'endsWith':
          operation = 'MATCH_END';
          break;
        case 'startsWith':
            operation = 'MATCH_BEGIN';
            break;
        case 'notContains':
            operation = 'NOT_MATCH';
            break;
        case 'dateIs':
          operation = 'MATCH_DATE';
          val = this.parseDateForSearch(val,"less") ;
          break;
        case 'dateIsNot':
           operation = 'NOT_MATCH_DATE';
            val = this.parseDateForSearch(val,"less") ;
          break;
        case 'dateBefore':
            operation = 'LESS_THAN_DATE';
            val = this.parseDateForSearch(val,"less") ;
            break;
        case 'dateAfter':
            operation = 'GREATER_THAN_DATE';
            val = this.parseDateForSearch(val,"less") ;
            break;
      case 'among':
          operation = 'AMONG';

          if( Array.isArray( val) )
          {
            val = val.join(',');
            /*val = val.slice(1,val.length);
            val = val.slice(0,val.length-1);*/
          }else {
            val = JSON.stringify(val);
            val = val.slice(1,val.length);
            val = val.slice(0,val.length-1);
          }
          break;
        case "lt":
            operation = 'LESS_THAN';
            break;
        case 'gt':
            operation = 'GREATER_THAN';
            break;
        case 'lte':
            operation = 'LESS_THAN_EQUAL';
            break;
        case 'gte':
            operation = 'GREATER_THAN_EQUAL';
            break;
      }


    return {"key":key , "value" : val , "operation" : operation } ;
  }

  getFileNameWithoutExtension( filename )
  {
    let extension = this.getFileExtension( filename ) ;
    let parts = filename.split( extension ) ;
    return parts[0] ;
  }

  getFileExtension(filename)
  {
    /*
      var parts = filename.split('.');
    return parts[parts.length-1];
    */

    return filename.split('.').pop();
  }

  parseSortForSearch( multiSortMeta )  {

      let params = [] ;

      if( multiSortMeta != undefined )
      {
          Object.entries(multiSortMeta).forEach(([key, value]) => {
            let order = ( value["order"] == 1 ) ? "asc" : "desc";
            let field = value["field"] ;
            params.push( { "field" : field , "order" : order } ) ;
          });
      }

      //console.log(params);
      return params;
  }

  parseFilterForSearch(filters)  {
    let filters_converted = [];

    if( filters != undefined )
    {

    Object.entries(filters).forEach(([key, value]) => {
        let returnFilter = {}, key_='',val='',operation='';

        if( Array.isArray( value) )
        {
            for( let i = 0 ; i < value.length ; i++ )
            {
                val =  value[i]['value'] ;
                operation =  value[i]['matchMode'] ;
                key_ = key ;

                if( val != null )
                {
                  returnFilter = this.parseFilterEntryForSearch(key_,operation,val);
                  filters_converted.push( returnFilter );
                }
            }
        }

        else
        {
          if( key == "global" )
          {
              val =  value['value'] ;
              operation =  value['matchMode'] ;
              key_ =  'awkaa' ;
              if( val != null )
              {
                returnFilter = this.parseFilterEntryForSearch(key_,operation,val);
                filters_converted.push( returnFilter );
              }
          }
          else
          {
            val =  value['value'] ;
            operation =  value['matchMode'] ;
            key_ = key ;

            if( val != null )
            {
              returnFilter = this.parseFilterEntryForSearch(key_,operation,val);
              filters_converted.push( returnFilter );
            }
          }

        }

    });

    }

    return filters_converted ;
  }


  parseRemoteApiErrors(errors){

    let returnError = {} ;
    Object.entries(errors).forEach(([key, value]) => {
      let messages =  [] ;
      Object.entries(value).forEach(([keyI , errorI]) => {
        messages.push(errorI["message"]) ;
      });

      returnError[key] = " "+messages.join("\n") + " " ;

    });

    return returnError ;
  }


  isPdfFile( extension ? : string ) : boolean {

    return ( extension != null ) ? [ 'pdf' ].includes( extension ) : false ;

  }

  isImageFile( extension ? : string ) : boolean {

    return ( extension != null ) ? [ 'tif','tiff','bmp','jpg','jpeg','gif','png','eps','raw' ].includes( extension )  : false ;

  }

  isAudioFile( extension ? : string) : boolean {

    return ( extension != null ) ? [ 'mp3' , 'wav' , '3gp' , 'aa' , 'aax' , 'aiff' , 'alac' , 'm4p' ].includes( extension )  : false ;

  }

  isVideoFile( extension ? : string ) : boolean {

    return ( extension != null ) ? ['mp4' , 'flv' , 'flv' , 'mp4' , 'f4p' , 'amv' , 'mov' ].includes( extension )  : false ;

  }




    convertDataURIToBinary (dataURI){

        var BASE64_MARKER = ';base64,';
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for(let cmp = 0; cmp < rawLength; cmp++) {
          array[cmp] = raw.charCodeAt(cmp);
        }
        return array;
    }

    BinaryToBlob(dataURI){

      var binary= this.convertDataURIToBinary(dataURI);
      var blob=new Blob([binary] , { type : 'audio/ogg' } );
      var blobUrl = URL.createObjectURL(blob);

    }


    dataURItoBlob(dataURI) {
       const byteString = window.atob(dataURI);
       const arrayBuffer = new ArrayBuffer(byteString.length);
       const int8Array = new Uint8Array(arrayBuffer);
       for (let i = 0; i < byteString.length; i++) {
         int8Array[i] = byteString.charCodeAt(i);
       }
       const blob = new Blob([int8Array], { type: 'image/png' });
       return blob;
    }





  isSvgFile( extension ? : string ) : boolean {

    return ( extension != null ) ? [ 'svg' ].includes( extension )  : false ;

  }




  fileImage() : string {
    return environment.fileImage ;
  }





}
