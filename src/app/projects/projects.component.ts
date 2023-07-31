import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Project One',
      description: 'This is a description of Project One.',
      image: 'path/to/image1.jpg', // Aggiorna con il percorso dell'immagine
      link: 'https://link-to-project-one.com'
    },
    {
      title: 'Project Two',
      description: 'This is a description of Project Two.',
      image: 'path/to/image2.jpg', // Aggiorna con il percorso dell'immagine
      link: 'https://link-to-project-two.com'
    },
    {
      title: 'Project Three',
      description: 'This is a description of Project Three.',
      image: 'path/to/image3.jpg', // Aggiorna con il percorso dell'immagine
      link: 'https://link-to-project-three.com'
    }
  ];

}
