const body = document.querySelector('body');
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
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
	breakpoints: {
		768: {
			slidesPerView: 2,
			// slidesPerGroup: 2,
		},
		1024: {
			slidesPerView: 3,
			// slidesPerGroup: 3,
		}
	},
});

// Window Scroll
const header = document.querySelector('.header_section');
const topButton = document.querySelector('.top_button');
window.addEventListener('scroll', () => {
	if (window.scrollY > header.offsetHeight) {
		header.classList.add('on_scroll');
	} else {
		header.classList.remove('on_scroll');
	}
	if (window.scrollY > 200) {
		topButton.classList.add('active');
	} else {
		topButton.classList.remove('active');
	}
});
// Mobile Menu
const menuButton = document.querySelector('.mobile_menu_button');
const menu = document.querySelector('.mobile_menu');
const menuLink = document.querySelectorAll('.mobile_menu__link');

menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('active');
});
menuLink.forEach(item => {
	item.addEventListener('click', () => {
		menuButton.classList.remove('active');
	});
});

// Tabs
const tabsNavAll = document.querySelectorAll('[data-tab]');
const tabsContentAll = document.querySelectorAll('[data-tab-content]');

tabsNavAll.forEach(tabNav => {
	tabNav.addEventListener('click', event => {
		if (tabNav.classList.contains('active')) return;
		tabsNavAll.forEach(nav => nav.classList.remove('active'));
		tabsContentAll.forEach(content => content.classList.remove('active'));
		console.log(event)
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
// Video Tabs
const videoTabsNavAll = document.querySelectorAll('[data-video-tab]');
const videoTabsContentAll = document.querySelectorAll('[data-video-tab-content]');

videoTabsNavAll.forEach(item => {
	item.addEventListener('click', event => {
		if (item.classList.contains('active')) return;
		videoTabsNavAll.forEach(button => button.classList.remove('active'));
		videoTabsContentAll.forEach(content => content.classList.remove('active'));
		item.classList.add('active');
		console.log(event)
		const targetContentId = event.target.dataset.videoTab;
		const targetContent = document.querySelector(`[data-video-tab-content="${targetContentId}"]`);
		targetContent.classList.add('active');
	});
});