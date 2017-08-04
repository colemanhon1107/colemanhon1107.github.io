var links = 
  ["http://pic.pimg.tw/lostinparadise/f6c19f6aa0dcaddb318d5a35c660c56d.jpg",

"http://i1.wp.com/dunkademics.com/wp-content/uploads/2016/10/lebron.png?resize=1296%2C757",

"https://s-media-cache-ak0.pinimg.com/736x/cf/49/ca/cf49ca22363a15a6e907a14584a7fd33--kobe-bryant-shooting.jpg",

"https://s-media-cache-ak0.pinimg.com/originals/4b/1c/00/4b1c00737d13acad00dcc5ac7ed11104.jpg",

"http://www.ifsandbutssportsbarbershop.com/wp-content/uploads/2012/02/preview_jordan_kobelebron_clev1.jpg"  
];


var index = 0;
var autoplay = false;
var titles = [
              "NBA GOATs" ,
              "Michael Jordan 23 -- Greatest player of all time.God of basketball who is the greatest player ever in the NBA history.", 
              "LeBron James 23 -- Greatest all-around player of all time.The King who is the only opponent to the God.", 
              "Kobe Bryant 24 -- Greatest scorer of all time.Black mamba - the man who's the closest to the god ever.", 
              "Greatness"
];
var title = document.getElementById("title");
function prevPic() {
  console.log("prevPic: " + index);
  var img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
  //text.src = titles[index % titles.length];
  title.innerHTML = titles[index % links.length];
}
function nextPic() {
  console.log("nextPic: " + index);
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  //text.src = titles[index % titles.length];
  title.innerHTML = titles[index % links.length];
  if(autoplay) {
    setTimeout(nextPic, 4200);   
  }
  

}
if(autoplay) {
    setTimeout(nextPic, 4200);   
}
