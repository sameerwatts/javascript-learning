const baseURL = 'https://api.github.com/users/';
const paraEl = document.querySelector('.userdata');

function handleError(err) {
  console.log('Wrong fetch');
  console.log(err);
  paraEl.textContent = err;
}

async function getGithubUserData(username) {
  paraEl.textContent = 'Loading..............';
  const response = await fetch(`${baseURL}${username}`);
  const data = await response.json();
  console.log(data);
  paraEl.textContent = `${data.name} - ${data.bio}`;
}

getGithubUserData('sameerwatts').catch(handleError);
// dataPromise
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(handleError);
(async () => {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ a: 1, b: 'Textual content' }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();
