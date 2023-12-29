document.getElementById('registrationForm').addEventListener('submit', function (event) {
event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  let fields = document.getElementsByClassName('field'); // Получаем все поля ввода
  //let isValid = true; // Устанавливаем флаг валидности формы в значение true

  for (let i = 0; i < fields.length; i++) { // Проходимся по каждому полю в цикле
    let field = fields[i]; // Получаем текущее поле
    let value = field.value.trim(); // Получаем значение поля и удаляем пробелы в начале и в конце
    let errorMessage = field.nextElementSibling; // Получаем сообщение об ошибке для данного поля

    field.addEventListener('focus', function () { // Добавляем обработчик события фокуса для поля
      errorMessage.innerText = ''; // При фокусе очищаем сообщение об ошибке
    });

    field.addEventListener('blur', function () { // Добавляем обработчик события потери фокуса для поля
      if (value === '') { // Проверяем, содержит ли поле значение
        errorMessage.innerText = 'Это поле обязательно для заполнения'; // Если пустое, отображаем сообщение об ошибке
        isValid = false; // Устанавливаем флаг валидности в значение false
      } else {
        errorMessage.innerText = ''; // Если не пустое, очищаем сообщение об ошибке
      }
    });

    if (value === '') { // Проверяем, содержит ли поле значение после выхода из фокуса
      errorMessage.innerText = 'Это поле обязательно для заполнения'; // Если пустое, отображаем сообщение об ошибке
      isValid = false; // Устанавливаем флаг валидности в значение false
    } else {
      errorMessage.innerText = ''; // Если не пустое, очищаем сообщение об ошибке
    }
  }
});

let consentCheckbox = document.getElementById('consent'); // Получаем чекбокс согласия
let consentErrorMessage = document.getElementById('agree-error-message'); // Получаем сообщение об ошибке для чекбокса
let isValid = true; // Устанавливаем флаг валидности формы в значение true

consentCheckbox.addEventListener('change', function () { // Добавляем обработчик изменения значения чекбокса согласия
  if (!consentCheckbox.checked) { // Проверяем, отмечен ли чекбокс
    consentErrorMessage.innerText = 'Вы должны дать согласие на обработку данных'; // Если не отмечен, отображаем сообщение об ошибке
    isValid = false; // Устанавливаем флаг валидности в значение false
  } else {
    consentErrorMessage.innerText = ''; // Если отмечен, очищаем сообщение об ошибке
  }
});
//где-то здесь ошибка???
if (isValid) {
  console.log('Form Data:', {
    fields: Array.from(fields).map(field => field.value.trim()),
    consentCheckbox: consentCheckbox.checked
  });
}
