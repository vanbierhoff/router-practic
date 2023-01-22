import { VModuleDecorator } from '../../router-module/decorators/v-module/v-module.decorator';


@VModuleDecorator({
    path: '/',
    template: async () => await import('./view/app.template.html'),
    templateUrl: './view/app.template.html',
    component: async () => await
        import( './app-component').then(m => m.AppComponent)
})
class APP {
}

export default APP;
