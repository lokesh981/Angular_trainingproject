import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { EventService } from './events/shared/event.service';
import { navbar } from './nav/navbar.component';
import { AuthService } from './user/auth.service';
import { userRoutes } from './user/user.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    navbar,
    SessionListComponent,
    DurationPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    
  {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState

  }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
