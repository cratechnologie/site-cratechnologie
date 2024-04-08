
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysOrganisation {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysOrganisationId : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       