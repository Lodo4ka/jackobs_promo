window.onload = function () {
    const btnPasteText = document.querySelector('.photo-board-btn-paste-text');
    const headerLogo = document.querySelector('.header .logo');
    const photoDashboard = document.querySelector('.photo-board-dasboard');
    const inputLabel = document.querySelector('.photo-board-dasboard-input');
    const btnAddSmile= document.querySelector('.photo-board-btn-add-smile');
    const changeBAckgoundBtn = document.querySelector('.photo-board-btn-change-back');
    const photoBucket= document.querySelector('.photo-board-btn-bucket');
    const inpPhoto= document.getElementById('inpPhoto');
    const downloadPhoto= document.querySelector('.download-photo');
    const downloadDream = document.querySelector('body .download-dream');
    const laoder = document.querySelector('.loader-container');
    const background = document.querySelector('.background ');

    const simplePhotoOne= document.querySelector('.simple-photo-one');
    const simplePhotoTwo= document.querySelector('.simple-photo-two');
    const simplePhotoThree= document.querySelector('.simple-photo-three');
    const simplePhotoFour= document.querySelector('.simple-photo-four');
    const simplePhotoFive= document.querySelector('.simple-photo-five');
    const emojiKeyboard= document.querySelector('.emoji-keyboard');
    const emojiKeyboardClose= document.querySelector('.emoji-keyboard-close');

    const modalAddPhoto = document.querySelector('.modal-add-photo');
    const addPhotoInterface = document.querySelector('.add-photo-interface');

    const moneyPhoto = document.querySelector('.money');
    const hobbiesPhoto = document.querySelector('.hobbies');
    const healthPhoto = document.querySelector('.health');
    const lovePhoto = document.querySelector('.love');
    const family = document.querySelector('.family');
    const familyLeft = document.querySelector('.family .left');
    const familyRight = document.querySelector('.family .right');
    const travel = document.querySelector('.travel');
    const travelOne = document.querySelector('.travel .one');
    const travelTwo = document.querySelector('.travel .two');
    const travelThree = document.querySelector('.travel .three');
    const photoBoardDashboard = document.querySelector(".photo-board-dasboard-photos");

    let currentNode = null;
    inputLabel.value = 'мои мечты сбудутся'

    const generateNodeInitial = (text) => {
        const divPhoto = document.createElement('div');
        divPhoto.classList.add('photo');
        divPhoto.textContent = text;
        return divPhoto;
    }

    const initStatePhoto = {
        money:  generateNodeInitial('Деньги'),
        hobbies: generateNodeInitial('Хобби'),
        health: generateNodeInitial('Здоровье'),
        love: generateNodeInitial('Любовь'),
        left: generateNodeInitial('Семья'),
        right: generateNodeInitial('Дети'),
        one: generateNodeInitial('Путешествие'),
        two: generateNodeInitial('Путешествие'),
        three: generateNodeInitial('Путешествие'),
    };

    const moneyPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const hobbiesPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const loveSetPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const familyLeftPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const familyRightPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const travelOnePhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const travelTwoPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const travelThreePhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }

    const healthSetPhotos = {
        simplePhotoOne: `url('img/250.jpeg')`,
        simplePhotoTwo: `url('img/250.jpeg')`,
        simplePhotoThree: `url('img/250.jpeg')`,
        simplePhotoFour: `url('img/250.jpeg')`,
        simplePhotoFive: `url('img/250.jpeg')`,
    }


    btnPasteText.addEventListener('click', () => {
        inputLabel.style.visibility = 'visible';
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

    const addPreviewPhoto = (node, top, left) => {
        modalAddPhoto.style = `
            display: block;
            transform: rotate(0deg)
        `;
        addPhotoInterface.style = `
            display: block;
            top: ${top};
            left: ${left};
        `;
        if (node.classList.contains('one')
            || node.classList.contains('two')
            || node.classList.contains('three')) {
            travel.style.zIndex = '100';
        }
        else if(node.classList.contains('left')
            || node.classList.contains('right')) {
            family.style.zIndex = '100';
        }
        else if (node.classList.contains('photo-board-dasboard')) {
            addPhotoInterface.style.zIndex = '100';
        }
        else {
            node.style.zIndex = '100';
        }
        node.appendChild(addPhotoInterface);
    }

    const clearPhotoPreview = (node) => {
        if (node.classList.contains('one')
            || node.classList.contains('two')
            || node.classList.contains('three')) {
            travel.style.zIndex = null;
        }
        else if(node.classList.contains('left')
            || node.classList.contains('right')) {
            family.style.zIndex = null;
        }
        else if (node.classList.contains('photo-board-dasboard')) {
            addPhotoInterface.style.zIndex = null;
        }
        else {
            node.style.zIndex = null;
        }

        addPhotoInterface.style = `
            display: none;
            top: 0;
            left: 0;
        `;

        modalAddPhoto.style = `
            display: none;
        `;
    }

    moneyPhoto.addEventListener('click', function() {
        simplePhotoOne.style.backgroundImage = moneyPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = moneyPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = moneyPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = moneyPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = moneyPhotos['simplePhotoFive']
        if( $( window ).width() > 1200){
            addPreviewPhoto(moneyPhoto, '-65px', '170px');
            currentNode = moneyPhoto;
        } else{
            $('.modal').addClass('active');
            $('.modal__title').text('Деньги');
        }
    });

    function clearModal(){
        $('.modal').removeClass('active');
        $('.modal__title').text('');
    }

    $('.close-modal').on('click', () => {
        clearModal();
    });

    hobbiesPhoto.addEventListener('click', () => {
        addPreviewPhoto(hobbiesPhoto, '-140px', '158px');
        simplePhotoOne.style.backgroundImage = hobbiesPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = hobbiesPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = hobbiesPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = hobbiesPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = hobbiesPhotos['simplePhotoFive']
        currentNode = hobbiesPhoto;
    });

    healthPhoto.addEventListener('click', () => {
        addPreviewPhoto(healthPhoto, '10px', '213px');
        simplePhotoOne.style.backgroundImage = healthSetPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = healthSetPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = healthSetPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = healthSetPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = healthSetPhotos['simplePhotoFive']
        currentNode = healthPhoto;
    });

    lovePhoto.addEventListener('click', () => {
        addPreviewPhoto(lovePhoto, '-108px', '213px');
        simplePhotoOne.style.backgroundImage = loveSetPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = loveSetPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = loveSetPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = loveSetPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = loveSetPhotos['simplePhotoFive']
        currentNode = lovePhoto;
    });

    familyLeft.addEventListener('click', () => {
        addPreviewPhoto(familyLeft, '-161px', '323px');
        simplePhotoOne.style.backgroundImage = familyLeftPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = familyLeftPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = familyLeftPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = familyLeftPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = familyLeftPhotos['simplePhotoFive']
        currentNode = familyLeft;
    });

    familyRight.addEventListener('click', () => {
        addPreviewPhoto(familyRight, '-161px', '235px');
        simplePhotoOne.style.backgroundImage = familyRightPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = familyRightPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = familyRightPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = familyRightPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = familyRightPhotos['simplePhotoFive']
        currentNode = familyRight;
    });

    travelOne.addEventListener('click', () => {
        addPreviewPhoto(travelOne, '-147px', '400px');
        simplePhotoOne.style.backgroundImage = travelOnePhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = travelOnePhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = travelOnePhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = travelOnePhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = travelOnePhotos['simplePhotoFive']
        currentNode = travelOne;
    });

    travelTwo.addEventListener('click', () => {
        addPreviewPhoto(travelTwo, '-147px', '297px');
        simplePhotoOne.style.backgroundImage = travelTwoPhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = travelTwoPhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = travelTwoPhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = travelTwoPhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = travelTwoPhotos['simplePhotoFive']
        currentNode = travelTwo;
    });

    travelThree.addEventListener('click', () => {
        addPreviewPhoto(travelThree, '-147px', '180px');
        simplePhotoOne.style.backgroundImage = travelThreePhotos['simplePhotoOne']
        simplePhotoTwo.style.backgroundImage = travelThreePhotos['simplePhotoTwo']
        simplePhotoThree.style.backgroundImage = travelThreePhotos['simplePhotoThree']
        simplePhotoFour.style.backgroundImage = travelThreePhotos['simplePhotoFour']
        simplePhotoFive.style.backgroundImage = travelThreePhotos['simplePhotoFive']
        currentNode = travelThree;
    });

    Array.from(emojiKeyboard.children).forEach(imgEmoji => {
        imgEmoji.classList.add('draggable');
    })

    modalAddPhoto.addEventListener('click', () => {
        modalAddPhoto.style = `display: none;`
        clearPhotoPreview(currentNode);
    })

    const searchOpaAndDelete = () => {
        Array.from(photoDashboard.children)
            .filter(child => !child.classList.contains('opa'))
            .forEach(child => photoDashboard.append(child))
    }

    inpPhoto.addEventListener('change', function() {
        const photo = inpPhoto.files[0];
        if (photo) {
            const reader = new FileReader();
            reader.addEventListener('load', function() {
                if (currentNode.classList.contains("add-photo-interface")) {
                    searchOpaAndDelete();
                    const div = document.createElement('div');
                    div.style = `
                        height: 94%;
                        width: 97%;
                        position: absolute;
                        top: 20px;
                        right: 15px;
                        background-image: url(${reader.result});
                        background-repeat: no-repeat;
                        background-size: cover;
                    `;
                    div.classList.add('opa');
                    const opa = document.querySelector('.opa');
                    if(opa) photoDashboard.removeChild(opa);
                    photoDashboard.appendChild(div);
                    clearPhotoPreview(currentNode);
                } else {
                    clearBackground(currentNode, reader.result, true);
                    clearPhotoPreview(currentNode);
                }
            })
            reader.readAsDataURL(photo);
        }
    })

    downloadPhoto.addEventListener('click', () => {
        inpPhoto.click();
    });

    simplePhotoOne.addEventListener('click', function(event) {
        // if ($(window).width() < 960) {
        //     alert('Less than 960');
        // }
        // else {
        //     alert('More than 960');
        // }
        event.stopPropagation()
        const backgrpundImage = window.getComputedStyle(simplePhotoOne)
                .getPropertyValue('background-image');
        if (currentNode.classList.contains("photo-board-dasboard")) {
            searchOpaAndDelete();
            const div = document.createElement('div');
            div.style = `
                height: calc(100% - 20px);
                width: calc(100% - 20px);
                position: absolute;
                top: 10px;
                right: 10px;
                background-image: ${backgrpundImage};
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            const opa = document.querySelector('.opa');
            if(opa) photoDashboard.removeChild(opa);
            photoDashboard.appendChild(div)
        } else {
            clearBackground(currentNode, backgrpundImage);
            clearPhotoPreview(currentNode);
        }
    });

    simplePhotoTwo.addEventListener('click', function(event) {
        event.stopPropagation();
        const backgrpundImage = window.getComputedStyle(simplePhotoTwo)
                    .getPropertyValue('background-image');
        if (currentNode.classList.contains("add-photo-interface")) {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: calc(100% - 20px);
                width: calc(100% - 20px);
                position: absolute;
                top: 10px;
                right: 10px;
                background-image: ${backgrpundImage};
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div)
            const opa = document.querySelector('.opa');
            if(opa) photoDashboard.removeChild(opa);
            clearPhotoPreview(currentNode);
        } else {
            clearBackground(currentNode, backgrpundImage);
            clearPhotoPreview(currentNode);
        }
    });

    simplePhotoThree.addEventListener('click', function(event) {
        event.stopPropagation();
        const backgrpundImage = window.getComputedStyle(simplePhotoThree)
            .getPropertyValue('background-image');
        if (currentNode.classList.contains("add-photo-interface")) {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: calc(100% - 20px);
                width: calc(100% - 20px);
                position: absolute;
                top: 10px;
                right: 10px;
                background-image: ${backgrpundImage};
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div);
            const opa = document.querySelector('.opa');
            if(opa) photoDashboard.removeChild(opa);
            clearPhotoPreview(currentNode);
        } else {
            clearBackground(currentNode, backgrpundImage);
            clearPhotoPreview(currentNode);
        }
    });

    simplePhotoFour.addEventListener('click', function(event) {
        event.stopPropagation();
        const backgrpundImage = window.getComputedStyle(simplePhotoFour)
            .getPropertyValue('background-image');
        if (currentNode.classList.contains("add-photo-interface")) {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: calc(100% - 20px);
                width: calc(100% - 20px);
                position: absolute;
                top: 10px;
                right: 10px;
                background-image: ${backgrpundImage};
                background-repeat: no-repeat;
                background-size: cover;
            `
            div.classList.add('opa');
            photoDashboard.appendChild(div);
            const opa = document.querySelector('.opa');
            if(opa) photoDashboard.removeChild(opa);
            clearPhotoPreview(currentNode);
        } else {
            clearBackground(currentNode, backgrpundImage);
            clearPhotoPreview(currentNode);
        }
    });

    simplePhotoFive.addEventListener('click', function(event) {
        event.stopPropagation();
        const backgrpundImage = window.getComputedStyle(simplePhotoFive)
        .getPropertyValue('background-image');
        if (currentNode.classList.contains("add-photo-interface")) {
            const div = document.createElement('div');
            searchOpaAndDelete();
            div.style = `
                height: calc(100% - 20px);
                width: calc(100% - 20px);
                position: absolute;
                top: 10px;
                right: 10px;
                background-image: ${backgrpundImage};
                background-repeat: no-repeat;
                background-size: cover;
            `;
            div.classList.add('opa');
            photoDashboard.appendChild(div);
            const opa = document.querySelector('.opa');
            if(opa) photoDashboard.removeChild(opa);
            clearPhotoPreview(currentNode);
        } else {
            clearBackground(currentNode, backgrpundImage);
            clearPhotoPreview(currentNode);
        }
    });

    btnAddSmile.addEventListener('click', () => {
        emojiKeyboard.style.display = 'block';
    });

    interact('.draggable')
    .draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
        })
    ],
    listeners: {
        start(e) {
            const element = e.target;
            element.style.maxHeight = '3rem';
            element.style.zIndex = '100000000000';
            element.style.position = 'absolute';
            photoBoardDashboard.classList.add('draggable');
            photoBoardDashboard.appendChild(element);
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
        var x = (parseFloat(target.getAttribute('data-x')) || 460)
        + (event.dx)
        var y = (parseFloat(target.getAttribute('data-y')) || -20)
         + (event.dy)
        //   ;
        // translate the element
        // target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener

    downloadDream.addEventListener('click', () => {
        laoder.style.display = 'flex';
        background.style.opacity = '1';
        photoDashboard.style.height = '800px'
        html2canvas(photoDashboard,
            {
                y: 300,
            }
        )
        .then(canvas => {
            photoBoardDashboard.style.height = null;
            saveAs(canvas.toDataURL(), 'screen.png')
        })
        .finally(() => {
            laoder.style.display = 'none';
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
        addPreviewPhoto(photoDashboard, '110px', '-170px');
        currentNode = addPhotoInterface;
    });

    emojiKeyboardClose.addEventListener('click', () => {
        emojiKeyboard.style.display = 'none';
    })

    headerLogo.addEventListener('click', () => {
        const logoInPhoto = document.querySelector('.photo-board-dasboard .logo');
        const displayLogoInPhoto = window.getComputedStyle(logoInPhoto).getPropertyValue('display');
        displayLogoInPhoto === 'block' ? (logoInPhoto.style.display = 'none') : (logoInPhoto.style.display = 'block');
    })

    photoBucket.addEventListener('click', () => {
        const newChild = Array
            .from(photoBoardDashboard.children)
            .filter(child => !child.classList.contains('draggable'))
            .map(child => {
                if (child.className === 'family') {
                     Array.from(child.children)
                        .forEach(childInner => {
                            const newNodeInner = initStatePhoto[childInner.className]
                            if (newNodeInner) {
                                removeAllChildNodes(childInner);
                                childInner.appendChild(newNodeInner)
                            }
                        });
                }
                else if (child.className === 'travel') {
                    Array.from(child.children)
                        .forEach(childInner => {
                            const newNodeInner = initStatePhoto[childInner.className]
                            removeAllChildNodes(childInner);
                            childInner.appendChild(newNodeInner)
                        });
                }
                else {
                    const newNode = initStatePhoto[child.className];
                    removeAllChildNodes(child);
                    child.appendChild(newNode);
                }
                return child;
            });
        removeAllChildNodes(photoBoardDashboard);
        newChild.forEach(child => {
            photoBoardDashboard.appendChild(child);
        })
        const opa = document.querySelector('.opa');
        if (opa) {
            photoDashboard.removeChild(document.querySelector('.opa'));
        }
    });

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}