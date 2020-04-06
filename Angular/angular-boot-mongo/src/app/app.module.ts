import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './component/add-tutorial/add-tutorial.component';
import { TutorialListComponent } from './component/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './component/tutorial-details/tutorial-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialListComponent,
    TutorialDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
