const outerDiv = document.querySelector('.outerContainer');
const width = 200;
const height = 300;
const alt = 'This is a paragraph';
const src = `https://source.unsplash.com/random/${width}x${height}`;
const myHTML = `
<div class="xyz">
    <p>${alt} </p>
    <img src="${src}" alt="${alt}">
</div>
`;

// outerDiv.innerHTML = myHTML;
