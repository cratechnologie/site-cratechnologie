
  import { SysGeoCity } from "src/app/sys/models/sysGeoCity";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysGeoNeighbourhood {

              id : string ;

              sysGeoCity : SysGeoCity ;

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
