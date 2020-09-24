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

btnPasteText.addEventListener('click', () => {
    inputLabel.focus();
})

moneyPhoto.addEventListener('click', () => {
    modalAddPhoto.style = `
        display: block;
    `
})

inpPhoto.addEventListener('change', function() {
    const photo = inpPhoto.files[0];
    
    if (photo) {
        const reader = new FileReader();
        
        reader.addEventListener('load', function() {
            previewPhoto.style = `
                background-image: url(${reader.result});
            `;
            previewPhoto.textContent = '';
        })
        reader.readAsDataURL(photo);
    }
})

downloadPhoto.addEventListener('click', () => {
    inpPhoto.click()
})

simplePhoto.addEventListener('click', function() {
    const backgrpundImage = window.getComputedStyle(simplePhoto).getPropertyValue('background-image');
    previewPhoto.style = `
        background-image: ${backgrpundImage};
    `;
    previewPhoto.textContent = '';
})

btnAddSmile.addEventListener('click', () => {
    document.querySelector('.emoji-picker-icon.emoji-picker').click();
})

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
