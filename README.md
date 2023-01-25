# router-practic

### it's learning project


It's simple implementation lazyLoad js & html files with webpack & es6 modules.

### start

if you not use your strategies routerStoreStrategy or etc, just run startApp function.


### Use

for create module you need use VModuleDecorator

```
@VModuleDecorator({
    path: '/',
    selector: '#app',
    template: async () => await import('./view/app.template.html'),
    component: async () => await
        import( './app-component').then(m => m.AppComponent)
})
```
