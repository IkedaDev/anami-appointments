import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./layouts/binnacle/binnacle.component').then( c => c.BinnacleComponent),
        children: [
            {
                path: 'add',
                loadComponent: () => import('./pages/binnacle/add-patient/add-patient.component').then( c => c.AddPatientComponent )
            },{
                path:'history',
                loadComponent: () => import('./pages/binnacle/history-patient/history-patient.component').then( c => c.HistoryPatientComponent )
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
