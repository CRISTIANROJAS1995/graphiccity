import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateRoutesService {

  constructor() { }

  validateRoutes(Permissions, Url) {
    let isPermissions = false;
    if (Permissions != null) {
      for (const url of Permissions) {
        if (url.value === Url) {
          isPermissions = true;
        }
      }
      return isPermissions;
    }
  }
}
