import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
}

@Component({
  standalone: true,
  selector: "app-projects",
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent implements OnInit {
  private http = inject(HttpClient);
  projects: Project[] = [];
  ngOnInit() {
    this.http
      .get<Project[]>("assets/projects.json")
      .subscribe((d) => (this.projects = d));
  }
}
