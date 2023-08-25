import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))])
  ]
})
export class HomepageComponent implements OnInit{
  loading = true;
  currentPage = 1; // Offers Slider
  cardsPerPage = 5; // Offers Slider
  currentImage = 1; //Image Slider
  imagesPerPage = 1; //Image Slider
  bounceIn: any;
  bounceInRight: any;

  cards = [
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 1',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 2',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 3',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 4',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 5',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 6',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 7',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 8',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 9',
      price: '$20 USD'
    },
    {
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png',
      title: 'Titulo 10',
      price: '$20 USD'
    }
  ];

  carrousel_images = [
    {
      img: 'https://www.itl.cat/pngfile/big/114-1144946_dishonored-video-games-dishonored-emily-father.jpg',
    },
    {
      img: 'https://images4.alphacoders.com/851/851935.jpg',
    },
    {
      img: 'https://wallpapercave.com/wp/wp9364949.jpg',
    },
    {
      img: 'https://cdn.mos.cms.futurecdn.net/6fFXPBLHH9WTayaF5DQMJn.jpg'
    }
  ]


  texts = [
    {
      title1: 'Outer Games: Embarking on Cosmic Journeys, One Galaxy at a Time.',
      text1: 'At Outer Games, we are more than just a store – we are a haven for gamers, a realm where your gaming dreams come to life. As passionate gamers ourselves, we understand the thrill, excitement, and camaraderie that gaming brings. That\'s why we\'ve curated a meticulously chosen selection of video games and accessories that cater to your every gaming desire.',
      text2: 'Founded with a burning passion for gaming, Outer Games has embarked on a journey to provide a unique and extraordinary gaming experience. With years of experience in the gaming industry, we have carefully crafted a space where both casual gamers and hardcore enthusiasts can find a home. Our story is woven with the threads of countless virtual adventures, and were thrilled to share our passion with you.',
      text3: 'Our commitment to you goes beyond the products we offer. We are dedicated to providing an exceptional shopping experience, backed by our knowledgeable staff who are always eager to assist you. Have a question about a game? Need recommendations for a multiplayer adventure? Were here to guide you every step of the way. Your satisfaction is our mission.',
      text4: 'We do not have much connection, you and I. Still, this encounter feels especial.'
    }
  ]

  constructor( private router: Router ) {

  }

  ngOnInit(): void {
    this.waiting();
  }

  //Loading method
  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 2000);
  }

  //Image Slider
  get visibleImages() {
    const startIndex = (this.currentImage - 1) * this.imagesPerPage;
    const endIndex = startIndex + this.imagesPerPage;
    return this.carrousel_images.slice(startIndex, endIndex);
  }


  // Slider offers
  get visibleCards() {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.cards.slice(startIndex, endIndex);
  }


  //Animations
  triggerbounceInAnimation() {
    this.bounceIn = !this.bounceIn; 
  }

  //Router
  gameDetails(){
    this.router.navigate(['/dashboard/games']);
  }

  


}





