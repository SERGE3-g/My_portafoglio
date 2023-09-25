import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { LanguageComponent } from './language/language.component';
import { CertificationComponent } from './certification/certification.component';

const routes: Routes = [
 {path:'header',component:HeaderComponent},
 {path:'about-me',component:AboutMeComponent},
 {path:'contact',component:ContactComponent},
 {path:'projects',component:ProjectsComponent},
 {path:'skills',component:SkillsComponent},
 {path:'portfolio',component:PortfolioComponent},
 {path:'experience',component:ExperienceComponent},
 {path:'education',component:EducationComponent},
 {path:'language',component:LanguageComponent},
 {path:'certification',component:CertificationComponent},
{path:'',redirectTo:'/header',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
