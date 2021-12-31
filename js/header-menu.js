let humburger = document.querySelector('.humburger');
let navMobile = document.querySelector('.header__navigation_mobile');
let back = document.querySelector('body');
let navList = document.querySelector('.header-navigation__list');
let links = document.querySelector('.header-navigation__link');
let aboutContent = document.querySelector('.about-me__content');
let overlay = document.querySelector('.about-me');

function burgerMenu(selector) { 
	humburger.addEventListener("click", (e) => {
		console.log(e);
		e.preventDefault();
		animateBurger();
		hideContent();
		showNavigation();
		hideNavigation();
	});

	function animateBurger() { 
		humburger.addEventListener("click", () => {
			humburger.classList.toggle('_active');
		});		
	}

	function hideContent() { 
		navMobile.classList.toggle('_active');
		if (navMobile.classList.contains('_active')) {
			aboutContent.style.visibility = "hidden";
		} else { 
			aboutContent.style.visibility = "visible";
		}
	}

	function showNavigation() { 
		if (navMobile.classList.contains('_active')) {
			navMobile.style.visibility = "visible";
		} else { 
			navMobile.style.visibility = "hidden";
		}
	}
	

	function hideNavigation() { 
		overlay.addEventListener("click", () => {
			navMobile.style.visibility = "hidden";
			aboutContent.style.visibility = "visible";
			// hideContent();
		});
	}
}

window.addEventListener('scroll', function() {
	navMobile.style.visibility = "hidden";
	aboutContent.style.visibility = "visible";
	humburger.classList.toggle('_active');
});

burgerMenu();