function selectCountry(event, country) {
	event.preventDefault();
	document.getElementById('dropbtn').innerHTML = country + ' <span class="arrow">▼</span>';
}

window.addEventListener('scroll', function() {
	const button = document.querySelector('.back-to-top');
	if (window.scrollY > window.innerHeight / 0.3) {
			button.style.display = 'block';
	} else {
			button.style.display = 'none';
	}
});

