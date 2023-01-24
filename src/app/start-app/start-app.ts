import { routerStoreFactory } from '../app-modules/router/router-store/factory/router-store-factory';
import { RouterManager } from '../app-modules/router/router-manager/router-manager';
import { RouterLoader } from '../app-modules/router/router-loader/router-loader';
import APP from '../modules/app-module/app-module';


export let ROUTER: RouterManager = {} as RouterManager;

export function startApp(): void {
    new APP();
    const routerStore = routerStoreFactory();
    ROUTER = new RouterManager(routerStore, new RouterLoader());
}
