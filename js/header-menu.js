let humburger = document.querySelector('.humburger');
let navMobile = document.querySelector('.header__navigation_mobile');
let links = document.querySelector('.header-navigation__link');
let aboutContent = document.querySelector('.about-me__content');

function burgerMenu() { 
	humburger.addEventListener("click", (e) => {
		if (humburger.classList.contains('_active')) {
			humburger.classList.remove('_active');
			aboutContent.style.visibility = "visible";
			navMobile.style.visibility = "hidden";
		} else { 
			humburger.classList.add('_active');
			aboutContent.style.visibility = "hidden";
			navMobile.style.visibility = "visible";
		}

		links.forEach(link => { 
			link.addEventListener('click', () => { 
				if (humburger.classList.contains('_active')) { 
					humburger.classList.remove('_active');
					aboutContent.style.visibility = "visible";
					navMobile.style.visibility = "hidden";

					links.forEach(link => { 
						link.style.animation = `navLinkFade 1s ease forwards`;
					})
				}
			})
		})

	e.preventDefault();
	});

}

window.addEventListener('scroll', function() {
	navMobile.style.visibility = "hidden";
	aboutContent.style.visibility = "visible";
	humburger.classList.remove('_active');
});

burgerMenu();