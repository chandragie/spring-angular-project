import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef
} from "@angular/core";
import { YoutubeSearchService } from "../../services/youtube-search.service";
import { fromEvent } from "rxjs";
import { map, filter, debounceTime, switchAll, tap } from "rxjs/operators";
import { VideoDetail } from "../video-detail.model";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"]
})
export class SearchBoxComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<VideoDetail[]>();

  constructor(private youtube: YoutubeSearchService, private el: ElementRef) {}

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    fromEvent(this.el.nativeElement, "keyup")
      .pipe(
        map((e: any) => e.target.value), // extract the value of the input
        filter(text => text.length > 1), // filter out if empty
        debounceTime(500), // only once every 500ms
        tap(() => this.loading.emit(true)), // enable loading
        map((query: string) => this.youtube.search(query)), // search
        switchAll()
      ) // produces values only from the most recent inner sequence ignoring previous streams
      .subscribe(
        // act on the return of the search
        _results => {
          this.loading.emit(false);
          this.results.emit(_results);
        },
        err => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
