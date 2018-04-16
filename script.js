let clickCount = 0;


$(document).ready(function(){
    $('#generateButton').on( 'click', createDivElement);
    $('#generateButton').on( 'click', clickHandler);
    $('#generateButton').on( 'click', makeButtons);
});

function createDivElement(){
    $('#generateButton').append($('div'));
    console.log( 'div');
}
function clickHandler(){
    console.log( 'Counter button was clicked');
    clickCount++;
    $('div').text( clickCount );
}

function makeButtons(){
    $('div').append('<button class="swapButton">Swap</button>', '<button class="deleteButton">Delete</button>' );
}