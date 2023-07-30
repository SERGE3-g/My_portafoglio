import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
 {path:'header',component:HeaderComponent},
 {path:'about',component:AboutMeComponent},
 {path:'contact',component:ContactComponent},
 {path:'projects',component:ProjectsComponent},
 {path:'skills',component:SkillsComponent},
  {path:'',redirectTo:'/header',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
