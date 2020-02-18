const li = document.getElementsByClassName('item');

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('mousemove', function (event) {
        event.target.style.backgroundColor = "red";
    })
}


for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseleave', function (event) {
        event.target.style.backgroundColor = "blueviolet";
    })
}