const ALLBtn = document.getElementById('ALLBtn');
const WebpageBtn = document.getElementById('WebpageBtn');
const SwiftBtn = document.getElementById('SwiftBtn');
const NewsBtn = document.getElementById('NewsBtn');
const RecentBtn = document.getElementById('RecentBtn');
const ProcessBtn = document.getElementById('ProcessBtn');
const ArticleBtn = document.getElementById('ArticleBtn');

const ALL = document.getElementById('ALL');
const Webpage = document.getElementById('Webpage');
const Swift = document.getElementById('Swift');
const News = document.getElementById('News');
const Recent = document.getElementById('Recent');
const Process = document.getElementById('Process');
const Article = document.getElementById('Article');

let black = 1;

const locationBtn = [ALLBtn, WebpageBtn, SwiftBtn, NewsBtn, RecentBtn, ProcessBtn, ArticleBtn];
const locationContent = [ALL, Webpage, Swift, News, Recent, Process, Article];

function changeTab(index) {
  if (black === index) return;

  // reset previous
  locationBtn[black].classList.remove("w3-black");
  locationBtn[black].classList.add("w3-white");
  locationContent[black].classList.remove("active");

  // activate new
  locationBtn[index].classList.remove("w3-white");
  locationBtn[index].classList.add("w3-black");
  locationContent[index].classList.add("active");

  // update
  black = index;
}

locationBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => changeTab(i));
});


/*
const ALLBtn = document.getElementById("ALLBtn");
const WebpageBtn = document.getElementById("WebpageBtn");
const SwiftBtn = document.getElementById("SwiftBtn");
const NewsBtn = document.getElementById("NewsBtn");
const RecentBtn = document.getElementById("RecentBtn");
const ProcessBtn = document.getElementById("ProcessBtn");
const ArticleBtn = document.getElementById("ArticleBtn");

const ALL = document.getElementById("ALL");
const Webpage = document.getElementById("Webpage")
const Swift = document.getElementById("Swift")
const News = document.getElementById("News")
const Recent = document.getElementById("Recent")
const Process = document.getElementById("Process")
const Article = document.getElementById("Article");


let black = 1;
const locationBtn = ["ALLBtn", "WebpageBtn", "SwiftBtn", "NewsBtn", "RecentBtn", "ProcessBtn", "ArticleBtn"];
const locationContent = ["ALL", "Webpage", "Swift", "News", "Recent", "Process", "Article"];

ALLBtn.addEventListener('click', () => {
    if (black != 0) {
        ALLBtn.classList.remove("w3-white");
        ALLBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");
        ALL.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 0;
    }
}
);

WebpageBtn.addEventListener('click', () => {
    if (black != 1) {
        WebpageBtn.classList.remove("w3-white");    
        WebpageBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");   
        Webpage.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 1;
    }
}   
);

SwiftBtn.addEventListener('click', () => {
    if (black != 2) {
        SwiftBtn.classList.remove("w3-white");  
        SwiftBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");
        Swift.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 2;
    }   
}
);

NewsBtn.addEventListener('click', () => {
    if (black != 3) {
        NewsBtn.classList.remove("w3-white");
        NewsBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");
        News.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 3;
    }  
}
);

RecentBtn.addEventListener('click', () => {
    if (black != 4) {
        RecentBtn.classList.remove("w3-white");
        RecentBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");
        Recent.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 4;
    }   
}
);

ProcessBtn.addEventListener('click', () => {
    if (black != 5) {
        ProcessBtn.classList.remove("w3-white");
        ProcessBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");
        Process.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 5;
    }
}
);

ArticleBtn.addEventListener('click', () => {
    if (black != 6) {
        ArticleBtn.classList.remove("w3-white");
        ArticleBtn.classList.add("w3-black");
        locationBtn[black].classList.remove("w3-black");
        locationBtn[black].classList.add("w3-white");
        Article.classList.add("active");
        locationContent[black].classList.remove("active");
        var black = 6;
    }
}
);
*/

