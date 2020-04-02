import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { Tutorial } from "src/app/model/tutorial";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-tutorial",
  templateUrl: "./add-tutorial.component.html",
  styleUrls: ["./add-tutorial.component.css"]
})
export class AddTutorialComponent implements OnInit {
  tutorial = new Tutorial();
  submitted = false;

  constructor(
    private tutorialService: TutorialService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newTutorial() {
    this.tutorial = new Tutorial();
    this.submitted = false;
  }

  backToList() {
    this.router.navigate(["/tutorials"]);
  }
}
