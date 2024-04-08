
  import { SysGeoCercle } from "src/app/sys/models/sysGeoCercle";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysGeoCommune {

              id : string ;

              sysGeoCercle : SysGeoCercle ;

              name : string ;

              description : string ;

              status : number ;

              longitude : string ;

              latitude : string ;

              map : string ;
              zipcode : string ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
