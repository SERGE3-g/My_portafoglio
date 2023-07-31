import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    {
      name: 'Programming Languages',
      skills: ['java','JavaScript','C++','TypeScript', 'Python', 'Java']
    },
    {
      name: 'Frameworks',
      skills: ['Angular', 'React', 'Vue.js', 'Spring', 'Django']
    },
    {
      name: 'Tools',
      skills: ['Git', 'Webpack', 'Docker']
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    }
     

  ];

  currentYear = new Date().getFullYear();

}
