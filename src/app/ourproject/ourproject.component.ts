import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ourproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourproject.component.html',
  styleUrl: './ourproject.component.css'
})
export class OurprojectComponent {
  projects = [
    { 
      name: 'FastEx', 
      images: [
        './assets/project-images/fastmain.png',
        './assets/project-images/FastEx-services.png',
        './assets/project-images/FastEx-complain.png',
        './assets/project-images/FastEx-aboutUs.png',
        './assets/project-images/FastEx-contactUs.png',
        './assets/project-images/FastEx-complain.png',
        './assets/project-images/FastEx-location.png',
        './assets/project-images/fast-tariff.png'
      ]
    },
    { 
      name: 'Daewoo LMS', 
      images: [
        './assets/project-images/DaewooLMS-Index.png',
        './assets/project-images/DaewooLMS-degital-Libarary.png',
        './assets/project-images/DaewooLMS-liberaryData.png',
        './assets/project-images/DaewooLMS-DaewooCommunity.png',
        './assets/project-images/DaewooLMS-Home-Support.png',
        './assets/project-images/DaewooLMS-Identity-Account-Login.png',
        './assets/project-images/DaewooLMS-QuizQuestionAnswers.png',
        './assets/project-images/DaewooLMS-QuizQuestionAnswers-Create.png',
        './assets/project-images/DaewooLMS-AdminUsers-AdminIndex.png'
      ]
    },
    { 
      name: 'Study Abroad', 
      images: [
        './assets/project-images/studymain.png',
        './assets/project-images/SA-Home-Aboutus.png',
        './assets/project-images/SA-Home-OurServices.png',
        './assets/project-images/SA-Home-Search.png',
        './assets/project-images/SA-Identity-Account-Login.png',
        './assets/project-images/SA-StudentProfiles-Create.png'
      ]
    },
    { 
      name: 'TripeeOnline', 
      images: [
        './assets/project-images/tripeeIndex.png',
        './assets/project-images/Tripee-Client-PlanATrip.png',
        './assets/project-images/Tripee-Client-Tours.png',
        './assets/project-images/Tripee-Vendor-Login.png',
        './assets/project-images/Tripee-Home-CustomerBookingCreate.png',
        './assets/project-images/Tripee-Home-TopAgency.png',
        './assets/project-images/Tripee-Vendor-customDashboard.png',
        './assets/project-images/tripee1.png',
        './assets/project-images/Tripee-Vendor-ListingHistory.png',
      ]
    },
    { 
      name: 'HoloDocs', 
      images: [
        './assets/project-images/Holodocsmain.png',
        './assets/project-images/Holodocs-login.png',
        './assets/project-images/Holodocs-signup.png',
        './assets/project-images/Holodocs-forget-password.png',
        './assets/project-images/Holodocs-template-doc-main.png',
        './assets/project-images/Holodocs-template-doc.png',
        './assets/project-images/Holodocs-template-doc.png'
      ]
    },
    { 
      name: 'Lost and Found', 
      images: [
        './assets/project-images/LNF-main.png',
        './assets/project-images/LNF-login.png',
        './assets/project-images/LAF-AddLostAndFound.png',
        './assets/project-images/LAF-LNFIndex.png',
        './assets/project-images/LAF-HandoverDetails.png',
        './assets/project-images/LAF-ReceivedDetail.png'
      ]
    },
    { 
      name: 'Tracking App', 
      images: [
        './assets/project-images/Windowapp1.png',
        './assets/project-images/windowapp2.png',
      ]
    }
  ];

  selectedProjectImages: string[] = [];
  selectedProjectTitle: string = '';
  isModalOpen = false;
  selectedFullScreenImage = '';
  isFullScreen = false;

  openModal(name: string, images: string[]) {
    this.selectedProjectTitle = name;
    this.selectedProjectImages = images;
    this.isModalOpen = true;
}

  closeModal() {
    this.isModalOpen = false;
  }

  openFullScreen(img: string) {
    this.selectedFullScreenImage = img;
    this.isFullScreen = true;
}

// Close Full-Screen View
closeFullScreen() {
    this.isFullScreen = false;
}
}
