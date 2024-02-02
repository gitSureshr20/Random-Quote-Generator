const refresh = document.querySelector(".refresh");
const QuoteWrapper = document.querySelector(".QuoteWrapper");
const loading = document.querySelector(".loading");

function showLoader(){
    loading.classList.add("show")
    QuoteWrapper.classList.add("hide")
}
function removeLoader(){
    loading.classList.remove("show")
    QuoteWrapper.classList.remove("hide")
}

async function fetchRandomQuote(){

    showLoader()
    try{

        const response = await fetch("https://api.quotable.io/quotes/random",{
            method:"GET"
        });
        const result = await response.json();
        if(result){
            removeLoader()
            displayQuotes(result[0])
        }
        
    }catch(err){
        console.log(err)
    }
}

function displayQuotes(getQuote){
    QuoteWrapper.innerHTML=`
        <div class="quoteItem">
        <p>${getQuote.author}</p>
        <p class="content">${getQuote.content}</p>
        <p>${getQuote.dateAdded}</p>
        <p>${getQuote.tags[0]}</p>
        </div>
    `
}

refresh.addEventListener("click",()=>{
    fetchRandomQuote();
})
fetchRandomQuote();
