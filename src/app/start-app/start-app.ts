import { routerStoreFactory } from '../app-modules/router/router-store/factory/router-store-factory';
import { RouterManager } from '../app-modules/router/router-manager/router-manager';
import { RouterLoader } from '../app-modules/router/router-loader/router-loader';
import APP from '../modules/app-module/app-module';
import { RouterFacade } from '../app-modules/router/router-facade/router-facade';
import { Renderer } from '../app-modules/renderer/renderer';


export let ROUTER: RouterFacade = {} as RouterFacade;

export function startApp(): void {
    new APP();
    const routerStore = routerStoreFactory();
    ROUTER = new RouterFacade(new RouterManager(routerStore, new RouterLoader()), new Renderer());
}
