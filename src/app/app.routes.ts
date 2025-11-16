import { Route } from '@angular/router';
import { HomeComponent } from './home.component/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        title: "DogIn - Home"
    }
];
