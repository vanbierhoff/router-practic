import './style.scss';
import 'reflect-metadata';
import ROUTER from './app/router-module/router-factory';



setTimeout(() => {
    ROUTER.upload().then(module => console.log(module));
}, 5000);


