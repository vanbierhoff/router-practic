import { RouterModuleInterface } from '../../models/router-module-interface';


export interface RouterLoaderInterface {
    upload(module: RouterModuleInterface): Promise<any>;
}
