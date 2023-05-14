const cssCode = document.querySelector("#css-code");
const copyBtn = document.querySelector("#copy-btn");
const sliders = document.querySelectorAll("#slider");
const dimensions = document.querySelectorAll(
  "#dimension input[type ='number']"
);

sliders.forEach((slider) => {
  slider.addEventListener("input", createBlob);
});

dimensions.forEach((dimension) => {
  dimension.addEventListener("change", createBlob);
});

// console.log(dimensions);
// console.log(sliders[0].value);

function createBlob() {
  let radius1 = sliders[0].value;
  let radius2 = sliders[1].value;
  let radius3 = sliders[2].value;
  let radius4 = sliders[3].value;

  let height = dimensions[0].value;
  let width = dimensions[1].value;

  let blobRadius = `${radius1}% ${100 - radius1}% ${
    100 - radius3
  }% ${radius3}%/ ${radius4}%  ${100 - radius4}% ${100 - radius2}% ${radius2}%`;

  let blob = document.querySelector("#blob");
  blob.style.cssText = `border-radius: ${blobRadius}; height: ${height}px; width: ${width}px`;

  cssCode.value = `border-radius: ${blobRadius};`;
}

createBlob();

function copy() {
  cssCode.select();
  document.execCommand("copy");
  alert("Code Copied\u{1F44C}");
}
