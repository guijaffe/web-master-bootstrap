import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document.querySelectorAll('a').forEach(link => {
	link.classList.add('text-decoration-none', 'cursor-pointer');
}); // Решил показать что умею добавлять сразу всем элементам определенные классы через js.

const hoverLinks = () => {
	const mainLink = document.getElementById('main-link');
	const mainImg = document.getElementById('main-img');
	const mainDesc = document.getElementById('main-desc');

	function updateMainContent(link) {
		mainLink.textContent = link.dataset.title;
		mainLink.href = link.dataset.link;
		mainImg.src = link.dataset.img;
		mainImg.alt = link.dataset.title;
		mainDesc.textContent = link.dataset.desc;
	}

	const firstLink = document.querySelector('.hover-link');
	if (firstLink) {
		updateMainContent(firstLink);
	}

	document.querySelectorAll('.hover-link').forEach(link =>
		link.addEventListener('mouseover', () => updateMainContent(link))
	);
};

hoverLinks();