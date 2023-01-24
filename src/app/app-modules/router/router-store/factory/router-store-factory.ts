import { V_META } from '../../decorators/v-module/models/v-module-meta';
import { VModuleStoreInstance } from '../../decorators/v-module/v-module.decorator';
import { VModuleDecoratorInterface } from '../../decorators/v-module/models/v-module-decorator.interface';
import { RouterStore } from '../router-store';



export function routerStoreFactory(getRouteStrategy?: any): RouterStore {
    const modulesList: VModuleDecoratorInterface[] = Reflect.getMetadata(V_META, VModuleStoreInstance.constructor);

    const routesList = modulesList.map(item => item.config);
    
    return new RouterStore(routesList, getRouteStrategy || undefined);

}
