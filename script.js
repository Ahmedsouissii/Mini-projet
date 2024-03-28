let memes = JSON.parse(localStorage.getItem('memes')) || [];

document.getElementById('previewButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const memeText = document.getElementById('memeText').value;

    if (fileInput.files.length === 0) {
        alert('Please upload an image.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageUrl = event.target.result;
        const memeContainer = document.getElementById('memeContainer');

        memeContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
        memeContainer.innerHTML += `<p>${memeText}</p>`;

        document.getElementById('downloadButton').disabled = false;
        document.getElementById('shareButton').disabled = false;

        const newMeme = {
            src: imageUrl,
            text: memeText
        };
        memes.push(newMeme);

        localStorage.setItem('memes', JSON.stringify(memes));
    };

    reader.readAsDataURL(file);
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const memeContainer = document.getElementById('memeContainer');
    const memeImage = memeContainer.querySelector('img');

    const downloadLink = document.createElement('a');
    downloadLink.href = memeImage.src;
    downloadLink.download = 'meme.png';
    downloadLink.click();
});

document.getElementById('shareButton').addEventListener('click', function() {
    const memeContainer = document.getElementById('memeContainer');
    const memeImage = memeContainer.querySelector('img');

    const shareUrl = 'https://example.com/meme?image=' + encodeURIComponent(memeImage.src);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), 'Partager sur Facebook', 'width=600,height=400');
});
