import { SysBusinessCatalogItem } from "src/app/sys/models/sysBusinessCatalogItem";
import { SysTiers } from "src/app/sys/models/sysTiers";


  export interface SysBusinessCatalogEntry
 {

        sysTiers ?: SysTiers ;

        services ?:  Map<string,SysBusinessCatalogItem>  ;

        products ?: Map<string,SysBusinessCatalogItem>  ;

        expanded ? : boolean ;
   }
