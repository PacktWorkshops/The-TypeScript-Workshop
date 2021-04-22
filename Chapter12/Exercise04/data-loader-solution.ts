const updateUISolution = (message: any): void => {
  const item = document.getElementById('my-data');
  if (item) {
    item.innerText = `Here is your data: ${message}`;
  }
};

fetch('http://localhost:8080/data.json').then((response) => {
  response.json().then((body) => updateUISolution(body.message));
});
