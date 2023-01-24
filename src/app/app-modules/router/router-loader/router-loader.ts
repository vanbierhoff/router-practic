import { RouterLoaderInterface } from './models/router-loader-interface';
import { RouterModuleInterface } from '../models/router-module-interface';


export class RouterLoader implements RouterLoaderInterface {

    async uploadModule(module: RouterModuleInterface): Promise<any> {
        let template: Promise<HTMLElement> | undefined;
        if (module.template) {
            template = this.uploadTemplate(module);
        }
        const component: Promise<any> = this.uploadComponent(module);
        
        return Promise.all([{template}, {component}]);

    }


    private async uploadTemplate(module: RouterModuleInterface): Promise<HTMLElement> {
        return module.template!().then(x => x.default);
    }

    private async uploadComponent(module: RouterModuleInterface): Promise<any> {
        return await module.component().then((component: any) => component);
    }

}
