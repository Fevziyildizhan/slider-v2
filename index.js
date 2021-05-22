const btn_go = document.getElementById('btn-go')
const btn_back = document.getElementById('btn-back')
const card_img = document.getElementById('card-img')

var current_slide;
var current_slide_index;
const photoSlide = 
[
    {
        path : '../img/1.jpg'
    },
   {
       path : '../img/2.jpg'
   },
   {
       path : '../img/3.jpg'
   },
   {
       path : '../img/4.jpg'
   },
   {
       path : '../img/5.jpg'
   }

]

slide()

function slide(){
    current_slide = 0;
    current_slide_index = current_slide + 1;

    updateSlide()
}

function updateSlide(){
    let slide = photoSlide[current_slide]

   card_img.src = slide.path

}

//btn_go.addEventListener('click', ()=>changeSlide())
//btn_back.addEventListener('click', ()=>changeSlide())

btn_go.addEventListener('click',()=>{
    changeSlide()
    updateSlide()
})

btn_back.addEventListener('click', ()=>{
    changeSlide(false)
    updateSlide()
})


function changeSlide(next = true){
    if (next) {
        current_slide++;
        current_slide_index = current_slide + 1;
        if (current_slide > photoSlide.length - 1) {
          current_slide = 0;
          current_slide_index = current_slide + 1;
        }
        if (current_slide > photoSlide.length - 1) {
            current_slide_index = 0;
        }
      } else {
        current_slide--;
        current_slide_index = current_slide + 1;
  
        if (current_slide < 0) {
          current_slide = photoSlide.length - 1;
          current_slide_index = 0;
        }
      }
      updateSlide()
}