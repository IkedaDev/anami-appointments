import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';



export const yellowFlowersGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  if(new Date().getDate() === 21 && new Date().getMonth() === 2){
    return true;
  }
  
  router.navigateByUrl('/')
  return false;
};
