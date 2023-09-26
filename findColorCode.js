if (window.location.pathname === "/search") {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('i').replace("+", " ").trim()
        .replace(/[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@\[\\\]\^_`{\|}~]/g, "").replace(/ +/g, " ");

    const searches = [
        "find color code",
        "finding the color code",
        "find color",
        "renk kodunu bulma",
        "renkin kodunu bul",
        "renk kodu bulma"
    ];

    if (searches.includes(search)) {
      
      const colorContainerStyles = {
  width: '200px',
  border: '2px solid',
  borderRadius: '5px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
};

const colorPickerStyles = {
  marginRight: '10px'
};

let colorCodeStyles = {
  fontSize: '27px'
};

function displayColorCode(selectedColor) {
  const colorCodeDisplay = document.getElementById('colorCode');
  colorCodeDisplay.innerText = selectedColor;

  colorCodeStyles.color = selectedColor;

  Object.assign(colorCodeDisplay.style, { color: selectedColor });
}

const colorContainer = document.createElement('div');
colorContainer.classList.add('color-container');

const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
colorPicker.setAttribute('id', 'colorPicker');
colorPicker.addEventListener('input', (event) => displayColorCode(event.target.value));
colorPicker.style.marginRight = '10px';

const colorCode = document.createElement('b');
colorCode.setAttribute('id', 'colorCode');
colorCode.style.fontSize = '27px';

colorContainer.appendChild(colorPicker);
colorContainer.appendChild(colorCode);

Object.assign(colorContainer.style, colorContainerStyles);

document.body.appendChild(colorContainer);
const colorContainerElement = document.querySelector('.color-container');
const colorPickerElement = document.getElementById('colorPicker');
const colorCodeElement = document.getElementById('colorCode');

Object.assign(colorContainerElement.style, colorContainerStyles);
Object.assign(colorPickerElement.style, colorPickerStyles);
Object.assign(colorCodeElement.style, colorCodeStyles);

function displayColorCode(selectedColor) {
  const colorCodeDisplay = document.getElementById('colorCode');
  colorCodeDisplay.innerText = selectedColor;
  colorCodeStyles.color = selectedColor;
  Object.assign(colorCodeDisplay.style, colorCodeStyles);
}
      
}
}