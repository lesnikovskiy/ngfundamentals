import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./shared/events.service";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "./shared/index";

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" 
                    [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService, 
        private toastr: ToastrService) {

    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => this.events = events);
        this.events = this.route.snapshot.data["events"];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}