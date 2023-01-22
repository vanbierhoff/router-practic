import { RouterManager } from './router-manager/router-manager';
import APP_MODULE from '../modules/app-module/app-module';


export function routerFactory(): RouterManager {
    const deps = RouterManager.createDeps([APP_MODULE]);

    const router = new RouterManager();
    router.init(deps.routerStore, deps.routerLoader);
    return router;
}


const ROUTER = routerFactory();


export default ROUTER;
