function checkAllowedIn(data) {
  const drunk = data.get('drunk');
  const age = data.get('age');
  const country = data.get('country');

  if (drunk !== '0') {
    return {
      isAllowed: false,
      message: 'you are too drunk'
    };
  }

  console.log(data);

  switch (country) {
    case 'Australia':
    case 'Poland':
    case 'UK':
      if (age < 18) {
        return {
          isAllowed: false,
          message: 'you are too young'
        };
      }
      return {
        isAllowed: true,
        message: 'you are allowed'
      };
    case 'USA':
      if (age < 21) {
        return {
          isAllowed: false,
          message: 'you are too young'
        };
      }
      return {
        isAllowed: true,
        message: 'you are allowed in'
      };
    default:
      return {
        isAllowed: false,
        message: 'you are not allowed in'
      };
  }
}

const handleSubmitBtn = (e) => {
  e.preventDefault();
  const beer = document.querySelector('.beer');
  const button = document.querySelector('.button');
  const form = document.querySelector('.form');
  const message = document.querySelector('.message');

  message.innerHTML = '';
  button.classList.remove('button--green', 'button--red');

  const data = new FormData(form);
  const result = checkAllowedIn(data);
  console.log(result);
  if (!result.isAllowed) {
    beer.src = './assets/red_beer.svg';
    message.innerHTML = '';
    message.append(document.createTextNode(result.message));
    button.classList.add('button--red');
    return;
  }
  beer.src = './assets/green_beer.svg';
  button.classList.add('button--green');
  message.append(document.createTextNode(result.message));
};

const submitBtn = document.querySelector('.button');
submitBtn.addEventListener('click', handleSubmitBtn);
