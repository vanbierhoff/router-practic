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

    getRouteByPath(): RouterModuleInterface {
        return this.#modulesList[0];
    }
}



