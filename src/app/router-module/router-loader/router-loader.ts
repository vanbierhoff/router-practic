import { RouterLoaderInterface } from './models/router-loader-interface';
import { RouterModuleInterface } from '../models/router-module-interface';


export class RouterLoader implements RouterLoaderInterface {
    
    async upload(module: RouterModuleInterface): Promise<any> {
        return await module.component().then((component: any) => new component(...module.deps ?? []));

    }
}
