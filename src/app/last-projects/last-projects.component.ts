import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { SharedServicesService } from '../services/shared-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent {

  projects: any[] = [];
  displayedProjects: any[] = [];
  numProjectsToShow = 3;
  reposToShow: string[] = ['DEV003-burger-queen-api-client', 'DEV003-md-links', 'DEV003-social-network'];
  // reposToHide: string[] = ['alextina', 'burger-queen-mock-server'];
  projectImages: { [key: string]: string } = {};

  constructor(
    private githubSvc: GithubService,
    public sharedSvc: SharedServicesService,
    private http: HttpClient,
  ) {

  }

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
        this.displayedProjects = this.projects.filter(project => this.reposToShow.includes(project.name)).slice(0, this.numProjectsToShow);
        // this.displayedProjects = this.projects.filter(project => !this.reposToHide.includes(project.name)).slice(0, this.numProjectsToShow);
      },
      error: (error) => {
        console.log(error);
      },
    })
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
