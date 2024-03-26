const arr_words_2 = [
  "3д Моделирование на заказ",
  "Расчет стоимости",
  "3d печать в Рыбинске",
  "Консультации по 3д печати",
];

const arr_images = [
  "./component/imaje/reclame_block/modelir_na_zakaz.jpg",
  "./component/imaje/reclame_block/raschet.jpg",
  "./component/imaje/reclame_block/pechat.jpg",
  "./component/imaje/reclame_block/consultacii.svg",
];

let word_1 = "ПРИВЕТ";
let word_2 = "Сайт Сообщества 3d vkaif";
let image_ = "./component/imaje/reclame_block/hello.jpg";

function renderAll() {
  ReactDOM.render(
    <>
      <div class="sketchfab-embed-wrapper  model_block">
        {" "}
        <iframe
          className="model_block__image"
          title="3d_vkaif"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/51095dae2e5f473b9268240a2be29de8/embed?autostart=1"
        >
          {" "}
        </iframe>{" "}
      </div>
      <div className="reclame_block">
        <div className="reclame_block__element_text">{word_1}</div>
        <h2 className="reclame_block__element_text">{word_2}</h2>
        <img src={image_} className="reclame_block__element_image" />
      </div>
      <a
        href="https://vk.com/3dvkaif"
        target="_blank"
        className="target_vk"
      ></a>
      <div className="secret_block"></div>
      <div className="secret_block">
        <p className="secret_block__element_text">
          сайт находится в разработке..!
        </p>
      </div>
    </>,
    document.querySelector("#root")
  );
}

setInterval(() => {
  let randomIndex = Math.floor(Math.random() * arr_words_2.length);
  word_2 = arr_words_2[randomIndex];
  word_1 = "Наши услуги:";
  image_ = arr_images[randomIndex];
  renderAll();
}, "4000");

renderAll();

const element = document.querySelector(".reclame_block");
element.addEventListener("click", () => {
  word_1 = "Привет";
  word_2 = "Сайт Сообщества 3d vkaif";
  image_ = "./component/imaje/reclame_block/hello.jpg";
  renderAll();
});
