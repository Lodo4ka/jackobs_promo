window.onload = function () {
    const btnPasteText = document.querySelector('.photo-board-btn-paste-text');
    const photoDashboard = document.querySelector('.photo-board-dasboard');
    const inputLabel = document.querySelector('.photo-board-dasboard-input');
    const btnAddSmile= document.querySelector('.photo-board-btn-add-smile');
    const changeBAckgoundBtn= document.querySelector('.photo-board-btn-change-back');
    const photoBucket= document.querySelector('.photo-board-btn-bucket');
    const inpPhoto= document.getElementById('inpPhoto');
    const downloadPhoto= document.querySelector('.download-photo');
    const downloadDream = document.querySelector('.download-dream');

    const simplePhotoOne= document.querySelector('.simple-photo-one');
    const simplePhotoTwo= document.querySelector('.simple-photo-two');
    const simplePhotoThree= document.querySelector('.simple-photo-three');
    const simplePhotoFour= document.querySelector('.simple-photo-four');
    const simplePhotoFive= document.querySelector('.simple-photo-five');
    const emojiKeyboard= document.querySelector('.emoji-keyboard');
    const emojiKeyboardClose= document.querySelector('.emoji-keyboard-close');

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
    const photoBoardDashboard = document.querySelector(".photo-board-dasboard-photos");

    const initBody = document.querySelector('body').outerHTML; 

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

    Array.from(emojiKeyboard.children).forEach(imgEmoji => {
        imgEmoji.classList.add('draggable');
    })

    modalAddPhoto.addEventListener('click', () => {
        modalAddPhoto.style = `display: none;`
    })

    const searchOpaAndDelete = () => {
        Array.from(photoDashboard.children).filter(child => !child.classList.contains('opa')).forEach(child => photoDashboard.append(child))
    }

    inpPhoto.addEventListener('change', function() {
        const photo = inpPhoto.files[0];
        if (photo) {
            const reader = new FileReader();
            
            reader.addEventListener('load', function() {
                if (currentNode.className === "photo-board-dasboard") {
                    searchOpaAndDelete();
                    const div = document.createElement('div');
                    div.style = `
                        height: 94%;
                        width: 97%;
                        position: absolute;
                        top: 20px;
                        right: 15px;
                        background-image: url(${reader.result});
                        opacity: 0.5;
                        background-repeat: no-repeat;
                        background-size: cover;
                    `
                    div.classList.add('opa');
                    photoDashboard.appendChild(div)
                } else {
                    clearBackground(previewPhoto, reader.result, true);
                    clearBackground(currentNode, reader.result, true);
                }
            })
            reader.readAsDataURL(photo);
        }
    })

    downloadPhoto.addEventListener('click', () => {
        inpPhoto.click();
    });

    simplePhotoOne.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoOne).getPropertyValue('background-image');
        if (currentNode.className === "photo-board-dasboard") {
            searchOpaAndDelete();
            const div = document.createElement('div');
            div.style = `
                height: 94%;
                width: 97%;
                position: absolute;
                top: 20px;
                right: 15px;
                background-image: ${backgrpundImage};
                opacity: 0.5;
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div)
        } else {
            clearBackground(previewPhoto, backgrpundImage);
            clearBackground(currentNode, backgrpundImage);
        }
    });

    simplePhotoTwo.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoTwo).getPropertyValue('background-image');
        if (currentNode.className === "photo-board-dasboard") {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: 94%;
                width: 97%;
                position: absolute;
                top: 20px;
                right: 15px;
                background-image: ${backgrpundImage};
                opacity: 0.5;
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div)
        } else {
            clearBackground(previewPhoto, backgrpundImage);
            clearBackground(currentNode, backgrpundImage);
        }
    });

    simplePhotoThree.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoThree).getPropertyValue('background-image');
        if (currentNode.className === "photo-board-dasboard") {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: 94%;
                width: 97%;
                position: absolute;
                top: 20px;
                right: 15px;
                background-image: ${backgrpundImage};
                opacity: 0.5;
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div);
        } else {
            clearBackground(previewPhoto, backgrpundImage);
            clearBackground(currentNode, backgrpundImage);
        }
    });

    simplePhotoFour.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoFour).getPropertyValue('background-image');
        if (currentNode.className === "photo-board-dasboard") {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: 94%;
                width: 97%;
                position: absolute;
                top: 20px;
                right: 15px;
                background-image: ${backgrpundImage};
                opacity: 0.5;
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div);
        } else {
            clearBackground(previewPhoto, backgrpundImage);
            clearBackground(currentNode, backgrpundImage);
        }
    });

    simplePhotoFive.addEventListener('click', function() {
        const backgrpundImage = window.getComputedStyle(simplePhotoFive).getPropertyValue('background-image');
        if (currentNode.className === "photo-board-dasboard") {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: 94%;
                width: 97%;
                position: absolute;
                top: 20px;
                right: 15px;
                background-image: ${backgrpundImage};
                opacity: 0.5;
                background-repeat: no-repeat;
                background-size: cover;
            `;
            div.classList.add('opa');
            photoDashboard.appendChild(div);
        } else {
            clearBackground(previewPhoto, backgrpundImage);
            clearBackground(currentNode, backgrpundImage);
        }
    });

    btnAddSmile.addEventListener('click', () => {
        emojiKeyboard.style.display = 'block';
    });


    // target elements with the "draggable" class
    interact('.draggable')
    .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
        interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
        })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
        start(e) {
            // emojiKeyboard.style.maxWidth =
            const element = e.target;
            element.style.maxHeight = '3rem';
            photoBoardDashboard.classList.add('draggable')
            photoBoardDashboard.appendChild(element); 
            // call this function on every dragmove event
        },
        move: dragMoveListener,

        // call this function on every dragend event
        end (event) {
            emojiKeyboard.style.display = 'none';
            photoBoardDashboard.classList.remove('draggable')
        }
    }
    })

    function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener

    downloadDream.addEventListener('click', () => {
    html2canvas(photoBoardDashboard, {
        useCORS: true,
		allowTaint: false,
		logging: false
    })
    .then(canvas => {
        saveAs(canvas.toDataURL(), 'screen.png')
    });

    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
          link.href = uri;
          link.download = filename;
    
          //Firefox requires the link to be in the body
          document.body.appendChild(link);
    
          //simulate click
          link.click();
    
          //remove the link when done
          document.body.removeChild(link);
        } else {
          window.open(uri);
        }
      }
    })

    changeBAckgoundBtn.addEventListener('click', () => {
        modalAddPhoto.style = `
            display: block;
        `;
        currentNode = photoDashboard;
    });

    photoBucket.addEventListener('click', () => {
        document.body.outerHTML = initBody;
    })

    emojiKeyboardClose.addEventListener('click', () => {
        emojiKeyboard.style.display = 'none';
    })
}