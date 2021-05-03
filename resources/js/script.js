/*help */
function log(message){
    console.log('>'+message)
}
/*our cards*/ 
const cards=document.querySelectorAll('.card')
const dropzones=document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart',dragstart)
    card.addEventListener('drag',drag)
    card.addEventListener('dragend',dragend)
})

function drag(){
    //log('CARD: is dragging')

}

function dragstart(){
   // log('CARD: start dragging')
   dropzones.forEach(dropzone =>dropzone.classList.add('highlight'))

   this.classList.add('is-dragging')
}

function dragend(){
    //log('CARD: stop dragging')
    dropzones.forEach(dropzone =>dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

/** place where we will drop cards */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter',dragenter)
    dropzone.addEventListener('dragover',dragover)
    dropzone.addEventListener('dragleave',dragleave)
    dropzone.addEventListener('dragdrop',dragdrop)
})

function dragenter(){
    //log('DROPZONE: Enter in zone!')
}

function dragover(){
    //log('DROPZONE: Over')
    //this = dropone
    this.classList.add('over')

    //get dregging card
    const cardBeingDragged = document.querySelector('.is-dragging')
    
    this.appendChild(cardBeingDragged)
}

function dragleave(){
    //log('DROPZONE: Leave!')
    this.classList.remove('over')
    
}

function dragdrop(){
    //log('DROPZONE: dropped')
}

