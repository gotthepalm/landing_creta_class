const body = document.querySelector('body');
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 40,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// Window Scroll
const header = document.querySelector('.header_section');
const topButton = document.querySelector('.top_button');
window.addEventListener('scroll', () => {
	if (window.scrollY > header.offsetHeight) {
		header.classList.add('on_scroll')
	} else {
		header.classList.remove('on_scroll')

	}
	if (window.scrollY > 150) {
		topButton.classList.add('active')
	} else {
		topButton.classList.remove('active')
	}
});
// Mobile Menu 
const menuButton = document.querySelector(".mobile_menu_button");
const menu = document.querySelector(".mobile_menu");
const menuLink = document.querySelectorAll('.mobile_menu__link')

menuButton.addEventListener("click", function () {
	menuButton.classList.toggle("active");
});
menuLink.forEach((item) => {
	item.addEventListener('click', () => {
		menuButton.classList.remove('active');
	})
});

// Tabs
const tabsNavAll = document.querySelectorAll('[data-tab]');
const tabsContentAll = document.querySelectorAll('[data-tab-content]');

tabsNavAll.forEach(tabNav => {
	tabNav.addEventListener('click', event => {
		if (tabNav.classList.contains('active')) return;
		tabsNavAll.forEach(nav => nav.classList.remove('active'));
		tabsContentAll.forEach(content => content.classList.remove('active'));
		tabNav.classList.add('active');
		const targetContentId = event.currentTarget.dataset.tab;
		const targetContent = document.querySelector(`[data-tab-content="${targetContentId}"]`);
		targetContent.classList.add('active');
	});
});

// Accordions for FAQ
const accordionTitleAll = document.querySelectorAll('[data-accordion-title]');

accordionTitleAll.forEach(function (item) {
	if (item.classList.contains('active')) {
		const content = item.nextElementSibling;
		content.style.height = content.scrollHeight + 'px';
		console.log(content.scrollHeight);
	}
});

accordionTitleAll.forEach(function (item) {
	item.addEventListener('click', function () {
		if (item.classList.contains('active')) {
			item.classList.remove('active');
			const content = item.nextElementSibling;
			content.style.height = '';
			return;
		} else {
			accordionTitleAll.forEach(function (i) {
				i.classList.remove('active');
			});
			item.classList.add('active');
			accordionTitleAll.forEach(function (item) {
				const content = item.nextElementSibling;
				content.style.height = '';
			});
			const content = item.nextElementSibling;
			content.style.height = content.scrollHeight + 'px';
		}
	});
});
