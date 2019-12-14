let zinger = document.querySelector(".getZinger");
let currentObj;
let cardDiv = document.querySelector(".cardDiv");

zinger.addEventListener("click", (e)=>{
    e.preventDefault();
    axios.get("https://golden-girls-api.herokuapp.com/random/dorothy")
        .then(res => {currentObj = res.data; appendCard();})
        .catch(err => {console.log(err)});
    
});






// function createCard(obj){
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let name = document.createElement("h3");
//     name.classList.add("name");
//     name.textContent = obj.who;

//     let quote = document.createElement("p");
//     quote.classList.add("quote");
//     quote.textContent = '"' + obj.quote + '"';

//     let season = document.createElement("p");
//     season.classList.add("season");
//     season.textContent = "Season: " + obj.season;

//     let episode = document.createElement("p");
//     episode.classList.add("episode");
//     episode.textContent = "Episode: " + obj.episode;

//     let textDiv = document.createElement("div");
//     textDiv.classList.add("textDiv");

//     let quoteDiv = document.createElement("div");
//     quoteDiv.classList.add("quoteDiv");

//     let imgDiv = document.createElement("div");
//     imgDiv.classList.add("imgDiv");

//     let img = document.createElement("img");

//     let leftDiv = document.createElement("div");
//     leftDiv.classList.add("leftDiv");

//     if (obj.who === "Dorothy Zbornak"){
//         img.src = "https://i.pinimg.com/originals/66/65/a1/6665a1072dd19d3075812c903235c01f.jpg";
//     } else {
//         img.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-golden-girls-house-1564425239.jpg?crop=0.598xw:0.883xh;0.225xw,0.0102xh&resize=480:*";
//     }

//     imgDiv.appendChild(img);
//     textDiv.appendChild(name);
//     textDiv.appendChild(season);
//     textDiv.appendChild(episode);
//     quoteDiv.appendChild(quote);
//     leftDiv.appendChild(textDiv);
//     leftDiv.appendChild(quoteDiv);
//     card.appendChild(leftDiv);
//     card.appendChild(imgDiv);

//     return card;
// }


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


function createCard(obj){
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.margin = "2%";
    card.style.boxShadow = "0px 0px 8px 1px #111111"
    card.style.border = "none";

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = "https://imgix.ranker.com/user_node_img/45/882092/original/dorothy-zbornak-tv-characters-photo-u1?w=280&h=280&fit=crop&crop=faces&q=50&fm=pjpg";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = obj.who;

    const quote = document.createElement("p");
    quote.classList.add("card-text");
    quote.textContent = obj.quote;

    cardBody.appendChild(title);
    cardBody.appendChild(quote);
    card.appendChild(img);
    card.appendChild(cardBody);
    
    return card;
}

function appendCard(){
    let newCard = createCard(currentObj);
    cardDiv.appendChild(newCard);
}
