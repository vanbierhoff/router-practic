import './style.scss';
import 'reflect-metadata';
import { ROUTER, startApp } from './app/start-app/start-app';
import { fromEvent } from 'rxjs';


startApp();


const button = document.querySelector('.load');

if (button) {
    fromEvent(button, 'click').subscribe(() => {
        ROUTER.uploadRoute('/');
    });
}


