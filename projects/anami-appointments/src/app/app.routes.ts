import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./layouts/binnacle/binnacle.component').then( c => c.BinnacleComponent),
        children: [
            {
                path: 'add',
                loadComponent: () => import('./pages/binnacle/input-patient/input-patient.component').then( c => c.InputPatientComponent )
            },{
                path: 'edit/:id',
                loadComponent: () => import('./pages/binnacle/input-patient/input-patient.component').then( c => c.InputPatientComponent )
            },{
                path:'history',
                loadComponent: () => import('./pages/binnacle/history-patient/history-patient.component').then( c => c.HistoryPatientComponent )
            },{
                path:'yellow-flowers',
                loadComponent: () => import('./pages/binnacle/yellow-flowers/yellow-flowers.component').then( c => c.YellowFlowersComponent )
            },{
                path:'**',
                redirectTo:'add'
            }
        ]
    },{
        path:'**',
        redirectTo:''  
    }
];
