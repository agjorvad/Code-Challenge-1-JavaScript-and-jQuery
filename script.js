let clickCount = 0; //needs to be global variable because if it's in the function it will start at 0 each time you click it.

$(document).ready(function(){
    $('#generateButton').on( 'click', createDivElement);
    $('body').on('click', '.swapButton', swapColor);
    $('body').on('click', '.deleteButton', deleteDiv);
});

function createDivElement(){
    clickCount++;
    let div = $('body').append($('<div class="red"><p>' + clickCount + '</p><button class="swapButton">Swap</button><button class="deleteButton">Delete</button></div>'));
}

function swapColor() {
    $(this).parent().toggleClass('yellow');
}

function deleteDiv() {
    $(this).parent().remove();
    //could also use $(this).closest('div').remove(); It should be 'div', not '.div' because div is an element and you are deleting the closest div element (not class).
}
