document.addEventListener("DOMContentLoaded", function() {
    const memes = JSON.parse(localStorage.getItem('memes')) || []; 

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; 

    memes.forEach(meme => {
        const memeElement = document.createElement('div');
        memeElement.classList.add('meme');

        const image = document.createElement('img');
        image.src = meme.src;
        image.alt = meme.text;

        const caption = document.createElement('p');
        caption.textContent = meme.text;

        memeElement.appendChild(image);
        memeElement.appendChild(caption);

        gallery.appendChild(memeElement);
    });
});
