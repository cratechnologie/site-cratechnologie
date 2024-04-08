
  import { SysGeoCountry } from "src/app/sys/models/sysGeoCountry";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysGeoTerritorialDivisionLevelOneType } from "src/app/sys/models/sysGeoTerritorialDivisionLevelOneType";

  export interface SysGeoRegion {

              id : string ;

              sysGeoCountry : SysGeoCountry ;

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
              sysGeoTerritorialDivisionLevelOneType : SysGeoTerritorialDivisionLevelOneType ;


  }
