import { Component,AfterViewInit  } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent  implements AfterViewInit {

  ngAfterViewInit() {
    AOS.refresh(); // Reinitialize AOS after view is loaded
  }

}
