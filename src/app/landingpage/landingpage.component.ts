import { Component,AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeComponent } from '../resume/resume.component';
import { HireMeComponent } from '../hire-me/hire-me.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ServiceComponent } from '../service/service.component';
import { OurprojectComponent } from '../ourproject/ourproject.component';
import { ContactusComponent } from '../contactus/contactus.component';
import AOS from 'aos';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ResumeComponent,HireMeComponent,HeroComponent,AboutComponent,
    SkillsComponent,ServiceComponent,OurprojectComponent,ContactusComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements AfterViewInit {

    ngAfterViewInit() {
      AOS.refresh(); // Reinitialize AOS after view is loaded
    }

}
