const ramenMenu = document.querySelector('div#ramen-menu')
const ramenDetail = document.querySelector('div#ramen-detail')
const mainImg = ramenDetail.querySelector('img')
const ramenName = ramenDetail.querySelector('h2.name')
const ramenRstrnt = ramenDetail.querySelector('h3.restaurant')
const ramenForm = document.querySelector('form#ramen-rating')
const formRating = ramenForm.querySelector('input#rating')
const formComment = ramenForm.querySelector('textarea#comment')

ramenForm.addEventListener('click', function (e) {
   
})
window.addEventListener('DOMContentLoaded', (event) =>  {
    fetch('http://localhost:3000/ramens')
    .then( data => data.json())
    .then(data => data.forEach(renderRamenImgs))


    ramenForm.addEventListener('submit', function(e) {
        e.preventDefault ()
       formObj = {
           comment: e.target.comment.value,
           rating: e.target.rating.value
       }
        console.log(e.target.dataset.id)
        
        fetch((`http://localhost:3000/ramens/${e.target.dataset.id}`), {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formObj)
        }).then
        (data => console.log(data))

    })






})

function renderRamenImgs (ramenObj) {
    const newRamenImg = document.createElement('img')
    
    newRamenImg.setAttribute('src', ramenObj.image)
    newRamenImg.setAttribute('class', 'menu-img')
    newRamenImg.dataset.dataId = ramenObj.id
    ramenMenu.append(newRamenImg)
    newRamenImg.addEventListener('click', function (e) {
    mainImg.setAttribute('src', ramenObj.image)
    ramenName.innerHTML = ramenObj.name
    ramenRstrnt.innerHTML = ramenObj.restaurant
    ramenForm.setAttribute('data-id', ramenObj.id)
    formRating.value = ramenObj.rating
    formComment.value = ramenObj.comment
    
    })
    
}