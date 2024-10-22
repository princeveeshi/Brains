import { Component, HostListener, OnInit } from '@angular/core';

interface PortfolioItem {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isScrollUpVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolled down 300px or more
    this.isScrollUpVisible = window.pageYOffset > 300;
  }

  // Scroll to the top of the page when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  ChooseUs = [
    {
      title: 'Assertive Communication',
      description: 'At MrD-Brains, we focus on prioritizing clear and proactive communication to ensure your vision is understood to achieve targeted business vision.',
      imageUrl: '../../assets/images/ChooseUs-Img/Assertive-Communication.png' 
    },
    {
      title: 'Scalable Teams',
      description: 'We implement adaptable development techniques and provide tailored solutions that grow with your evolving needs, ensuring that your software can grow and expand seamlessly with your organization.',
      imageUrl: '../../assets/images/ChooseUs-Img/Scalable-Team.png'
    },
    {
      title: 'Efficient Project Management',
      description: 'With the aid of Agile and DevOps, our skilled project managers optimize processes, guaranteeing that deadlines are fulfilled, resources are used effectively, and projects are carried out effectively',
      imageUrl: '../../assets/images/ChooseUs-Img/Efficient-Project-Management.png'
    },
    {
      title: 'Positive Experience',
      description: 'MrD-Brains is well-recognized software development company. We bring years of experience to the table with unmatched expertise for each project, assuring best possible and innovative solutions.',
      imageUrl: '../../assets/images/ChooseUs-Img/mean-icon.png'
    }  
  ];

  portfolioItems: PortfolioItem[] = [
    {
      title: 'HDFC Bank Credit Card Auto SMS and Email Project',
      description: 'Built an automated SMS and email notification system for HDFC Bank credit cards using ASP.NET Framework, Windows application, and SQL Server for efficient communication and data management.',
      imgUrl: 'assets/img/portfolio-1.jpg',
      link: '#!'
    },
    {
      title: 'IOCL Attendance Management System',
      description: 'Developed an attendance management system for IOCL using ASP.NET Framework, .NET Core, and SQL Server to efficiently track and manage employee attendance across multiple locations.',
      imgUrl: 'assets/img/portfolio-2.jpg',
      link: '#!'
    },
    {
      title: 'ViewBox Legacy System (AvenData)',
      description: 'Worked on the ViewBox legacy system for AvenData using Angular, .NET Core API, and SQL Server to manage and modernize legacy data systems, improving data accessibility and operational efficiency.',
      imgUrl: 'assets/img/portfolio-3.jpg',
      link: '#!'
    },
    {
      title: 'Appraisal Management System (IPG)',
      description: 'Developed an appraisal management system for IPG using Angular, .NET Core API, and SQL Server to streamline employee performance evaluations and automate appraisal workflows.',
      imgUrl: 'assets/img/portfolio-4.jpg',
      link: '#!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
