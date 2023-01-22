import { RouterLoaderInterface } from './models/router-loader-interface';
import { RouterModuleInterface } from '../models/router-module-interface';


export class RouterLoader implements RouterLoaderInterface {

    async upload(module: RouterModuleInterface): Promise<any> {
        if ('template' in module) {
            this.loadTemplate(module);
        }
        return await module.component().then((component: any) => {

            return new component(...module.deps ?? []);
        });
    }

    loadTemplate(module: RouterModuleInterface): void {
        if (module?.template) {
            module.template().then(x => console.log(x.default));
        }

    }
}
