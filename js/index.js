var arr = [
    {
        quote: "“Things change. And friends leave. Life doesn't stop for anybody.” ",
        author: "― Stephen Chbosky"
    },
    {
        quote: "“It's not what happens to you, but how you react to it that matters.“",
        author: "―Deb Sofield"
    },
    {
        quote: "“You cannot control the behavior of others, but you can always choose how you respond to it.”",
        author: "― Roy T. Bennett"
    },
    {
        quote: "“The most important thing is to enjoy your life—to be happy—it's all that matters.”",
        author: "-Audrey Hepburn"
    },
    {
        quote: "“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”",
        author: "― Roy T. Bennett"
    },
    {
        quote: "“the scary part is that people don't realize how much they've changed .”",
        author: "―Simone Elkeles,"
    },
    {
        quote: "“Life becomes easier and more beautiful when we can see the good in other people.”",
        author: "― Roy T. Bennett"
    }
]


var reapetRandomNum;
function displayQuote() {
    var randomnum = Math.floor(Math.random() * arr.length);

    //     do {
    //         randomnum = Math.floor(Math.random() * arr.length);
    //    }while(randomnum === reapetRandomNum)




    if (randomnum === reapetRandomNum) {
        randomnum = (randomnum + 1) % arr.length;
    }
    // console.log(randomnum)
    reapetRandomNum = randomnum;



    document.getElementById("quote").innerHTML = arr[randomnum].quote;
    document.getElementById("author").innerHTML = arr[randomnum].author;
}