const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://www.vodafone.co.uk/newscentre/app/uploads/2023/05/PileOfOldLaptops-1536x1024.jpg.webp">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quas.'
    profile_img.innerHTML = '<img src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'November 4th 2024'

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}