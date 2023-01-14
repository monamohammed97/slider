// TBC
const reviews = [
  {
      id: 1,
      name: "@darryncodes",
      job: "Front-end developer",
      img: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
      text:
          '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."'
  },
  {
      id: 2,
      name: "@annajohnson",
      job: "UI Designer",
      img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      text:
          '"Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet."'
  },
  {
      id: 3,
      name: "@peterjones",
      job: "Intern",
      img: "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
      text:
          '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."'
  },
  {
      id: 4,
      name: "@billanderson",
      job: "UX Designer",
      img: "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png",
      text:
          '"Curabitur turpis felis, pellentesque feugiat tristique sit amet, vestibulum eu turpis. Sed commodo nulla quis metus consequat imperdiet. Aenean at elit dui. Donec sagittis ultricies."'
  }
];

const img = document.getElementById("img");
const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  testimonial.textContent = item.text;
  name.textContent = item.name;
  job.textContent = item.job;
}

rightBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
      currentItem = 0;
  }
  showPerson();
});

leftBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
      currentItem = reviews.length - 1;
  }
  showPerson();
});


const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);


// slider 3
var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
	  type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });
  