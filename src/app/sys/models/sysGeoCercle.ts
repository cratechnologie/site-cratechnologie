
  import { SysGeoRegion } from "src/app/sys/models/sysGeoRegion";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysGeoCercle {

              id : string ;

              sysGeoRegion : SysGeoRegion ;

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
