import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Marathon } from './service/marathon.interface';
import { MarathonService } from './service/marathon.service';

@Injectable({
  providedIn: 'root'
})
export class MarathonResolver implements Resolve<Marathon> {

  constructor(private service: MarathonService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Marathon | Observable<Marathon> {
    return this.service.getMarathon(route.params['id']);
  }
}
