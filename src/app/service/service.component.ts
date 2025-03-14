import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services = [
    { icon: "flaticon-3d-design", title: "Web Design", description: "Design responsive and userfriendly layout using HTML CSS." },
    { icon: "flaticon-app-development", title: "Web Application", description: "Design & develop your business application with fast response." },
    { icon: "flaticon-web-programming", title: "Web Development", description: "Develop dynamic websites according to client needs." },
    { icon: "flaticon-branding", title: "Window Application", description: "Design and develop robust and scalable Windows applications." },
    { icon: "flaticon-computer", title: "Design Database", description: "Design robust and scalable databases with perfection." },
    { icon: "flaticon-vector", title: "API Development", description: "Develop APIs using interfaces and SOLID principles." },
    { icon: "flaticon-vector", title: "FrontEnd", description: "Make your application beautiful and responsive." },
    { icon: "flaticon-zoom", title: "SEO", description: "Make your application or website rank on top with us." }
  ];
}
