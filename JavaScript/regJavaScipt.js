const form = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const Names = form.elements['name'].value;
	const LastName = form.elements['Last-Name'].value;
	const email = form.elements['email'].value;
	const password = passwordInput.value;
	const confirmPassword = confPassword.value;
	const celular = form.elements['celular'].value;

	if (contraseña !== confirmarContraseña) {
		alert('Las contraseñas no coinciden.');
		return;
	}

});
