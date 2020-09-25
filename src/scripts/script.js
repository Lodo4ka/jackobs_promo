const btnPasteText = document.querySelector('.photo-board-btn-paste-text');
const photoDashboard = document.querySelector('.photo-board-dasboard');
const inputLabel = document.querySelector('.photo-board-dasboard-input');
const btnAddSmile= document.querySelector('.photo-board-btn-add-smile');
const inpPhoto= document.querySelector('#inpPhoto');
const downloadPhoto= document.querySelector('.download-photo');
const simplePhoto= document.querySelector('.simple-photo-one');
const boardDashboard = document.querySelector('.photo-board-dasboard');
const previewPhoto = document.querySelector('.preview-photo .photo');
const modalAddPhoto = document.querySelector('.modal-add-photo');
const moneyPhoto = document.querySelector('.money');
const hobbiesPhoto = document.querySelector('.hobbies');
const healthPhoto = document.querySelector('.health');
const lovePhoto = document.querySelector('.love');
const familyLeft = document.querySelector('.family .left');
const familyRight = document.querySelector('.family .right');
const familyOne = document.querySelector('.travel .one');
const familyTwo = document.querySelector('.travel .two');
const familyThree = document.querySelector('.travel .three');

let currentNode = null;

btnPasteText.addEventListener('click', () => {
    inputLabel.focus();
})

const callModal = (node) => {
    modalAddPhoto.style = `
        display: block;
    `;
    currentNode = node;
}

const clearBackground = (node, pathImg, reader = false) => {
    node.style = `
        background-image: ${ reader ? `url(${pathImg})` : pathImg};
    `;
    node.textContent = '';
}

moneyPhoto.addEventListener('click', callModal(moneyPhoto));
hobbiesPhoto.addEventListener('click', callModal(moneyPhoto));
healthPhoto.addEventListener('click', callModal(moneyPhoto));
lovePhoto.addEventListener('click', callModal(moneyPhoto));

modalAddPhoto.addEventListener('click', (event) => {
    modalAddPhoto.style = `display: none;`
    currentNode = null;
})

inpPhoto.addEventListener('change', function(event) {
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

downloadPhoto.addEventListener('click', (event) => {
    inpPhoto.click();
})

simplePhoto.addEventListener('click', function(event) {
    const backgrpundImage = window.getComputedStyle(simplePhoto).getPropertyValue('background-image');
    clearBackground(previewPhoto, backgrpundImage);
    clearBackground(currentNode, backgrpundImage);
})

btnAddSmile.addEventListener('click', () => {
    document.querySelector('.emoji-picker-icon.emoji-picker').click();
});

html2canvas(document.querySelector(".photo-board-dasboard-photos")).then(canvas => {
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
