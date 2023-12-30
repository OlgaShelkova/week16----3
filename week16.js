document.getElementById('registrationForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Предотвращаем отправку формы по умолчанию

	let isValid = true; // Устанавливаем флаг валидности формы в значение true
	let fields = document.getElementsByClassName('field'); // Получаем все поля ввода

	for (let i = 0; i < fields.length; i++) {// Проходимся по каждому полю в цикле
		
		let field = fields[i]; // Получаем текущее поле
		let errorMessage = field.nextElementSibling; // Получаем сообщение об ошибке для данного поля

		field.addEventListener('focus', function () {// Добавляем обработчик события фокуса для поля
			
			errorMessage.innerText = ''; // При фокусе очищаем сообщение об ошибке
		});

		field.addEventListener('blur', function () {// Добавляем обработчик события потери фокуса для поля
			
			let value = field.value.trim(); // Получаем значение поля и удаляем пробелы в начале и в конце
			if (value === '') {
				// Проверяем, содержит ли поле значение
				errorMessage.innerText = 'Это поле обязательно для заполнения'; // Если пустое, отображаем сообщение об ошибке
				isValid = false; // Устанавливаем флаг валидности в значение false
			}
		});

		// Проверка значений полей в момент отправки формы
		let value = field.value.trim();
		if (value === '') {
			errorMessage.innerText = 'Это поле обязательно для заполнения';
			isValid = false;
		}
	}

	let consentCheckbox = document.getElementById('consent'); // Получаем чекбокс согласия
	let consentErrorMessage = document.getElementById('agree-error-message'); // Получаем сообщение об ошибке для чекбокса

	if (!consentCheckbox.checked) {
		// Проверяем, отмечен ли чекбокс
		consentErrorMessage.innerText = 'Вы должны дать согласие на обработку данных'; // Если не отмечен, отображаем сообщение об ошибке
		isValid = false; // Устанавливаем флаг валидности в значение false
	}

	if (isValid) {
		console.log('Form Data:', {
			fields: Array.from(fields).map((field) => field.value.trim()),
			consentCheckbox: consentCheckbox.checked,
		});
	}
});