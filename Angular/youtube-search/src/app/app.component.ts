import { Component } from "@angular/core";
import { VideoDetail } from "./youtube/video-detail.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my Youtube Search";
  results: VideoDetail[];
  loading: boolean;
  message = "";

  updateResults(results: VideoDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = "Video with that keyword not found.";
    } else {
      this.message = "Top 10 results:";
    }
  }
}
