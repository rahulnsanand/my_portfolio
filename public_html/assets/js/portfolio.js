
// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });

	// Function to trigger the download
	function openInNewTab() {
		const url = 'assets/resume/rahuls_resume.pdf'; // Path to your file
		const newTab = window.open(url, '_blank');
		if (newTab) {
			newTab.focus(); // Focus on the new tab
		} else {
			// If the popup was blocked, alert the user
			alert('Please allow popups for this site.');
		}
	}

	// Add event listener to button
	document.getElementById('downloadResume_Main').addEventListener('click', openInNewTab);

	// Add event listener to button
	document.getElementById('downloadResume_Secondary').addEventListener('click', openInNewTab);


	var map;
	var mapOptions = {
		scrollWheelZoom: false,
	};

	var id = 'map';

	var centerLatLng = [12.966043458314124, 77.69754380845836];
	map = L.map(id, mapOptions).setView(centerLatLng, 14);

	L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
		attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
	}).addTo(map);


	L.control.bigImage({
		position: 'topright'
	}).addTo(map);
});