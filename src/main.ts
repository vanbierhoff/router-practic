import './style.scss';
import 'reflect-metadata';
import { ROUTER, startApp } from './app/start-app/start-app';



// setTimeout(() => {
//     ROUTER.upload().then(module => console.log(module));
// }, 5000);

startApp();

setTimeout(() => {
    ROUTER.upload().then();
}, 5000);


