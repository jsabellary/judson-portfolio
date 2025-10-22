import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

interface Experience {
  organisation: string;
  role: string;
  start: string;
  end: string;
  type?: string;
  highlights: string[];
  stack?: string[];
}

@Component({
  standalone: true,
  selector: "app-experience",
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
})
export class ExperienceComponent implements OnInit {
  private http = inject(HttpClient);
  items: Experience[] = [];
  ngOnInit() {
    this.http
      .get<Experience[]>("assets/experience.json")
      .subscribe((d) => (this.items = d));
  }
}
