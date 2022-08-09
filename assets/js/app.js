
// graphics

let validaFunction = true;

data = [
  {
    value: 85,
    title: 'JavaScript',
    color: '#00ff43'
  },
  {
    value: 33,
    title: 'NodeJs',
    color: '#0ebff5'
  },
  {
    value: 92,
    title: 'Angular',
    color: 'rgba(255, 0, 0, 0.92)'
  },
  {
    value: 100,
    title: 'HTML',
    color: '#eaf144'
  }
];

let functionMouse = 'onmouseover = "mouseHover(this);"';

if (validaFunction) {
  functionMouse = functionMouse;
} else {
  functionMouse = '';
  animationGraphic();
}

let divGraphic = $('#inner-graphic');

data.forEach(element => {
  let valor = element.value;
  let titulo = element.title;
  let color = element.color;
  let tempGraphic = '';

  tempGraphic += `            
                <div class='card-graphic' ${functionMouse}>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70' class='get-value' value='${valor}'  color='${color}' style='stroke-dashoffset:calc( 440 - ( 440 * 0 ) / 100 ); stroke:${color};'></circle>
                    </svg>

                    <div class='porcent'>
                        <div class='value-graphic'>${valor}%</div>
                    </div>

                    <div class='card-title'>${titulo}</div>
                </div>
            `;

  divGraphic.append(tempGraphic);
});

function mouseHover(e) {
  const getAttrValue = $(e).find($('.get-value')).attr('value');
  const insertValue = $(e).find($('.get-value'));
  const getColor = $(e).find($('.get-value')).attr('color');

  if (getAttrValue != 0)
    insertValue.attr(
      'style',
      `stroke-dashoffset:calc( 440 - ( 440 * ${getAttrValue} ) / 100 ); stroke:${getColor};`
    );
}

function animationGraphic() {
  setTimeout(() => {
    const getDivGraphic = $('.get-value');

    getDivGraphic.each((index, element) => {
      
      const getAttrValue = $(element).attr('value');
      const insertValue = $(element);
      const getColor = $(element).attr('color');

      insertValue.attr(
        'style',
        `stroke-dashoffset:calc( 440 - ( 440 * ${getAttrValue} ) / 100 ); stroke:${getColor};`
      );
    });
  }, 500);
}

// graphics