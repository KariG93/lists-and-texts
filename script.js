let randomNames = ['Zsolt', 'Bela', 'Tibi', 'Ancsa', 'Eva', 'Gabor']

$('ul').append(
    '<li>Hello World!</li>'
);


for (let i = 0; i < randomNames.length; i++) {
    if (randomNames[i] === 'Gabor') {
        $('ul').append(`<li><strong>${randomNames[i]}<strong></li>`);}
    else {
        $('ul').append(`<li>${randomNames[i]}</li>`);
    }
};


randomNames.forEach((name) => {
    if (name === 'Gabor') {
        $('ul').append('<li><strong>Gabor</strong></li>');}
    else {
        $('ul').append('<li>' + name + '</li>');
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('main').append('<h2>' + additionalBlock.title + '</h2>');
$('main').append(`<p>${additionalBlock.text}</p>`);

$('button').click(() => {
    console.log("Yeah, you clicked me")
})

$('.anotherButton').click(() => {
    $('.button1').text('Its changing!');
})
  
$('.button3').click(() => {
    $('button').css('background-color', 'blue');
})

$('.button3').on( "click", function() {
    let color = document.getElementById("colorName").value;
    $('button').css('background-color', color);
    $( ".button3" ).off();
})
