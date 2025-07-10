const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yestBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yestBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaaaaa, I like you too";
    gif.src =
        "https://raw.githubusercontent.com/DrazelDeveloper/Img/main/gif.webp";    
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor( Math.random() * maxY);

    noBtn.stlye.left = randomX + "px";
    noBtn.style.top =randomY + "px";
});