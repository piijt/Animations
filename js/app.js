// Helper functions.. save keystrokes
  let log = console.log;
  let $ = function(foo) {
    return document.getElementById(foo);
  }
  let query = function(foo) {
    return document.querySelector(foo);
  }
  let queryAll = function(foo) {
    return document.querySelectorAll(foo);
  }
  // END HELPER FUNCTIONS

  let images = [
        "./img/1.png",
        "./img/2.png",
        "./img/7.png",
        "./img/8.png",
        "./img/9.png",
        "./img/10.png",
        "./img/11.png",
        "./img/12.png",
        "./img/13.png",
      ];

    let index = 0;
    let img;
    function buildImage() {
      img = document.createElement('img')
      img.src = images[index];
      document.getElementById('eyeAnimation').appendChild(img);
    }

    function changeImage(){
      img = document.getElementById('eyeAnimation').getElementsByTagName('img')[0]
      index++;
      index = index % images.length; // when last image get remainder and return to first image
      img.src = images[index];
    }

    setInterval(function () {
      changeImage();
    }, 1000);

    // TODO:



    function speedUp () {

    }

    function stop () {

    }

    function start () {

    }

    // grid
    let grid = document.createElement('div');
    grid.setAttribute("id", "grid");
    let getGrid = query('#grid');


    for (var i = 0; i < images.length; i++) {
      let all = images[i];
      const imgEl = document.createElement('img');
      const imgSrc = imgEl.src = all;
      let inDOM = grid.appendChild(imgEl);
      grid.appendChild(inDOM)
      log(inDOM)
    }

    // Projects
    
