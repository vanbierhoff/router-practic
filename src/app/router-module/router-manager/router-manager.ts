import { RouterStore } from '../router-store/router-store';
import { RouterLoader } from '../router-loader/router-loader';
import { RouterModuleInterface } from '../models/router-module-interface';


export class RouterManager {

    #routerStore: RouterStore = {} as RouterStore;
    #routerLoader: RouterLoader = {} as RouterLoader;

    init(routerStore: RouterStore, loader: RouterLoader): void {
        this.#routerStore = routerStore;
        this.#routerLoader = loader;
    }

    async upload(path?: string): Promise<any> {
        return await this.#routerLoader.upload(this.#routerStore.getRouteByPath());
    }

    static createDeps(routes: RouterModuleInterface[]): { routerStore: RouterStore, routerLoader: RouterLoader } {
        const routerStore = new RouterStore(routes);
        const routerLoader = new RouterLoader();

        return {
            routerStore,
            routerLoader
        };
    }

}
