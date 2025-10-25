import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProjectsComponent } from "./projects.component";
import { ExperienceComponent } from "./experience.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, title: "Home — Judson Able Bellary" },
  {
    path: "projects",
    component: ProjectsComponent,
    title: "Projects — Judson Able Bellary",
  },
  {
    path: "experience",
    component: ExperienceComponent,
    title: "Experience — Judson Able Bellary",
  },
  { path: "**", redirectTo: "" },
];
