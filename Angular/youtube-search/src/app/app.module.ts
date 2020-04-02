import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchBoxComponent } from "./youtube/search-box/search-box.component";
import { SearchResultComponent } from "./youtube/search-result/search-result.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, SearchResultComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
