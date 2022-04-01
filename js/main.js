const bg = [
  `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
  'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
  'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
  'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
  'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(to top, #30cfd0 0%, #d4fc79 100%)',
  'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
]

const createFanos = () => {
  let fanos = document.createElement('div')
  fanos.className = "fanos";
  fanos.innerHTML = `
          <div class="line"></div>
          <div class="fanos-head">
            <div class="fanos-head-line"></div>
            <div class="flex">
              <div class="fanos-head-left"></div>
              <div class="fanos-head-right"></div>
            </div>
          </div>
          <div class="fanos-body">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
          </div>
          <div class="fanos-head fanos-footer">
            <div class="flex">
              <div class="fanos-head-left"></div>
              <div class="fanos-head-right"></div>
            </div>
            <div class="fanos-head-line"></div>
        </div>`;
  return fanos
}
const createEl = (className) => {
  let element = document.createElement('div');
  element.className = className
  return element
}

window.addEventListener('DOMContentLoaded', () => {

  let classes = ['star', 'star-2', 'lighten', 'moon']
  let globalWidth = window.innerWidth;
  let len = globalWidth / 40; // 
  let lineContainer = document.getElementById('lineContainer');

  function display() {
    lineContainer.innerHTML = ''
    let zinaContainer = createEl('zina-container')
    lineContainer.appendChild(zinaContainer)

    for (let i = 0; i < len; i++) {
      if (i % 6 == 0) { // every 6 element insert [ Fanos ]
        lineContainer.appendChild(createFanos())
      } else {
        let random = Math.floor(Math.random() * classes.length) 
        lineContainer.appendChild(createEl(classes[random])) // create element with random class of class and insert into dom
      }
      zinaContainer.appendChild(createEl('zina'))
    }

    let listOfZina = [...document.querySelectorAll('.zina')];
    listOfZina.forEach(item => {
      let random = Math.floor(Math.random() * bg.length)
      item.style.backgroundImage = bg[random]; // Set Color of background as gradient
    })
  }
  display()

  setInterval(() => {
    display() // Reload shape every 5 second
  }, 5000)
})



