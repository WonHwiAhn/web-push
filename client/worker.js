console.log('Service Worker Loaded');

self.addEventListener('push', e => {
	const data = e.data.json();
	console.log('Push Recieved...');
	self.registration.showNotification(data.title, {
		body: 'Notified by WHAHN',
		icon: 'https://img.cafe24.com/images/hosting2/main_css/h1_logo.png',
	});
});
