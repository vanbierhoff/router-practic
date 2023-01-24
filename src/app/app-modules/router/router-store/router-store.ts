import { RouterModuleInterface } from '../models/router-module-interface';
import { RouterStoreInterface } from '../router-loader/models/router-store.interface';



export class RouterStore implements RouterStoreInterface {

    constructor(
        private routes: RouterModuleInterface[],
        private getRouteStrategy?: any
    ) {
    }

    #modulesList: RouterModuleInterface[] = this.routes;

    add(route: RouterModuleInterface): RouterModuleInterface {
        return route;
    }

    remove(route: RouterModuleInterface): RouterModuleInterface {
        return route;
    }

    getRouteByPath(path: string): RouterModuleInterface {
        const routerModule = this.#modulesList.find(route => route.path === path);

        if (routerModule) {
            return routerModule;
        }
        throw new Error(`module for ${path} path doesn't exist`);
    }
}



