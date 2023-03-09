const quotes = [{
    quote: `'I wanna hug you until we both feel okay'`,
},{
    quote: `'I found love and friendship in one person'`,
}, {
    quote: `'I love spending time with you'`,
},{
    quote: `'I hope I make you as happy as you make me'`,
}, {
    quote: `"I'm thankful for you"`,
}, {
    quote: `'You stole my heart since day one'`,
}, {
    quote: `"I'll wait, I don't want anyone else"`,
}, {
    quote: `'I love you so much'`,
}, {
    quote: `'I found love in your laugh'`,
}, {
    quote: `'Sometimes home is a person. You are my home'`,
}, {
    quote: `'You will always be my favorite, always'`,
}, {
    quote: `'You are all I ever wanted love to be'`,
}, {
    quote: `"I choose you, and I'll choose you, over and over and over"`,
}, {
    quote: `"I can't get over how cute you are"`,
}, {
    quote: `'I love the feeling I get when I see you'`,
}, {
    quote: `'I love knowing that you are mine'`,
},

]

let button =document.querySelector(".btn");
let letters =document.querySelector(".letters");

button.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

    letters.innerHTML = quotes[random].quote
})