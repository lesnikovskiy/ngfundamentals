import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, ActivatedRouteSnapshot } from "@angular/router";

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/nav.component";
import { Error404Component } from "./errors/404.component";
import {
    TOASTR_TOKEN,
    JQ_TOKEN,
    Toastr, 
    CollapsibleWellCompnent, 
    SimpleModalComponent,
    ModalTriggerDirective
} from "./common/index";
import { AuthService } from "./user/auth.service";
import { appRoutes } from "./routes";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellCompnent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective        
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventListResolver,
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("You have not saved this event, do you really want to cancel?");

    return true;
}