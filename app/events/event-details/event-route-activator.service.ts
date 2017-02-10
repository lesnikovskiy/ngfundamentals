import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/events.service";

@Injectable()
export class EventServiceActivator implements CanActivate {
    constructor(
        private eventService: EventService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        
        if (!eventExists)
            this.router.navigate(['/404']);

        return eventExists;
    }
}