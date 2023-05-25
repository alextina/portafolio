import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];
  reposToHide: string[] = ['alextina'];
  projectImages: { [key: string]: string } = {};

  constructor(
    private githubSvc: GithubService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get<any>('assets/data/db.json').subscribe((data) => {
      this.projectImages = data.projects.reduce((acc: any, project: any) => {
        acc[project.name] = project.image;
        return acc;
      }, {});
    });

    this.githubSvc.getRepositories().subscribe({
      next: (data) => {
        this.projects = data;
        this.projects.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB.getTime() - dateA.getTime();
        });
        this.projects = this.projects.filter(project => !this.reposToHide.includes(project.name));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  openRepository(url: string) {
    window.open(url, '_blank');
  }

  getProjectImageUrl(projectName: string): string {
    const imageUrl = this.projectImages[projectName];
    if (imageUrl) {
      return imageUrl;
    } else {
      return `https://opengraph.githubassets.com/1/alextina/${projectName}`;
    }
  }

}
