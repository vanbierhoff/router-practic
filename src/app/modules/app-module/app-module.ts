import { RouterModuleInterface } from '../../router-module/models/router-module-interface';



const APP_MODULE: RouterModuleInterface = {
    component: async () => await
        import( './app-component').then(m => m.AppComponent)
};

export default APP_MODULE;
