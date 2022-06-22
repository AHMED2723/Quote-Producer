var quotesArr=[
    {
        quote:"Be yourself; everyone else is already taken",
        person:"Oscar Wilde",
    },
    {
        quote:" I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ",
        person:"Marilyn Monroe",
    },
    {
        quote:" Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        person:"Albert Einstein",
    },
    {
        quote:"So many books, so little time",
        person:"Frank Zappa",
    },
    {
        quote:"A room without books is like a body without a soul",
        person:"Marcus Tullius Cicero",
    },

    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        person:"Bernard M. Baruch",
    },

];
function generate()
{
    var random = Number.parseInt(Math.random()*quotesArr.length + 1);
    document.getElementById('quote').innerHTML=quotesArr[random].quote;
    document.getElementById('author').innerHTML=quotesArr[random].person;
}
