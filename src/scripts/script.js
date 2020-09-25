window.onload = function () {
    const btnPasteText = document.querySelector('.photo-board-btn-paste-text');
    const photoDashboard = document.querySelector('.photo-board-dasboard');
    const inputLabel = document.querySelector('.photo-board-dasboard-input');
    const btnAddSmile= document.querySelector('.photo-board-btn-add-smile');
    const inpPhoto= document.getElementById('inpPhoto');
    const downloadPhoto= document.querySelector('.download-photo');

    const simplePhotoOne= document.querySelector('.simple-photo-one');
    const simplePhotoTwo= document.querySelector('.simple-photo-two');
    const simplePhotoThree= document.querySelector('.simple-photo-three');
    const simplePhotoFour= document.querySelector('.simple-photo-four');
    const simplePhotoFive= document.querySelector('.simple-photo-five');

    const previewPhoto = document.querySelector('.preview-photo .photo');
    const modalAddPhoto = document.querySelector('.modal-add-photo');

    const moneyPhoto = document.querySelector('.money');
    const hobbiesPhoto = document.querySelector('.hobbies');
    const healthPhoto = document.querySelector('.health');
    const lovePhoto = document.querySelector('.love');
    const familyLeft = document.querySelector('.family .left');
    const familyRight = document.querySelector('.family .right');
    const travelOne = document.querySelector('.travel .one');
    const travelTwo = document.querySelector('.travel .two');
    const travelThree = document.querySelector('.travel .three');

    let currentNode = null;

    btnPasteText.addEventListener('click', () => {
        inputLabel.focus();
    })

    const clearBackground = (node, pathImg, reader = false) => {
        node.style = `
            background-image: ${ reader ? `url(${pathImg})` : pathImg};
            background-repeat: no-repeat;
            background-size: cover; 
            background-position: center; 
        `;
        node.textContent = '';
    }

    moneyPhoto.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = moneyPhoto;
    });

    hobbiesPhoto.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = hobbiesPhoto;
    });

    healthPhoto.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = healthPhoto;
    });

    lovePhoto.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = lovePhoto;
    });

    familyLeft.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = familyLeft;
    });
    
    familyRight.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = familyRight;
    });

    travelOne.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = travelOne;
    });

    travelTwo.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = travelTwo;
    });

    travelThree.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = travelThree;
    });

    modalAddPhoto.addEventListener('click', () => {
        modalAddPhoto.style = `display: none;`
    })

    inpPhoto.addEventListener('change', function() {
        const photo = inpPhoto.files[0];
        if (photo) {
            const reader = new FileReader();
            
            reader.addEventListener('load', function() {
                clearBackground(previewPhoto, reader.result, true);
                clearBackground(currentNode, reader.result, true);
            })
            reader.readAsDataURL(photo);
        }
    })

    downloadPhoto.addEventListener('click', () => {
        inpPhoto.click();
    });

    simplePhotoOne.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoOne).getPropertyValue('background-image');
        clearBackground(previewPhoto, backgrpundImage);
        clearBackground(currentNode, backgrpundImage);
    });

    simplePhotoTwo.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoTwo).getPropertyValue('background-image');
        clearBackground(previewPhoto, backgrpundImage);
        clearBackground(currentNode, backgrpundImage);
    });

    simplePhotoThree.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoThree).getPropertyValue('background-image');
        clearBackground(previewPhoto, backgrpundImage);
        clearBackground(currentNode, backgrpundImage);
    });

    simplePhotoFour.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoFour).getPropertyValue('background-image');
        clearBackground(previewPhoto, backgrpundImage);
        clearBackground(currentNode, backgrpundImage);
    });

    simplePhotoFive.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoFive).getPropertyValue('background-image');
        clearBackground(previewPhoto, backgrpundImage);
        clearBackground(currentNode, backgrpundImage);
    });

    btnAddSmile.addEventListener('click', () => {
        document.querySelector('.emoji-picker-icon.emoji-picker').click();
    });

    html2canvas(document.querySelector(".photo-board-dasboard-photos"))
    .then(canvas => {
        document.body.appendChild(canvas)
    });

    $(function() {
        // Initializes and creates emoji set from sprite sheet
        window.emojiPicker = new EmojiPicker({
            emojiable_selector: '[data-emojiable=true]',
            assetsPath: '../lib/img/',
            popupButtonClasses: 'fa fa-smile-o'
        });
        // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
        // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
        // It can be called as many times as necessary; previously converted input fields will not be converted again
        window.emojiPicker.discover();    
    });
   
}