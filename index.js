const height = document.getElementById("height");
const width = document.getElementById("width");
const boxWidth = document.getElementById("box");
const track = document.getElementById("track");
const result_holder = document.getElementById("result");

function answer() {
  let height_inFT = (Number(height.value) / 12).toFixed(2);
  let width_inFT = (Number(width.value) / 12).toFixed(2);
  let box_inFT = (Number(box.value) / 12).toFixed(2);
  if (track.checked) {
    let plainArea = (height_inFT * width_inFT).toFixed(2);
    let boxHArea = (box_inFT * (2 * height_inFT)).toFixed(2);
    let boxWArea = (box_inFT * (2 * width_inFT)).toFixed(2);
    let TrackArea = (box_inFT * width_inFT).toFixed(2);

    result =
      Number(plainArea) +
      Number(boxHArea) +
      Number(boxWArea) +
      Number(TrackArea);
    result_holder.innerHTML = Number(result.toFixed(2)) + " Sqft";
  } else {
    let plainArea = height_inFT * width_inFT;
    let boxHArea = box_inFT * (2 * height_inFT);
    let boxWArea = box_inFT * (2 * width_inFT);
    result = Number(plainArea) + Number(boxHArea) + Number(boxWArea);
    result_holder.innerHTML = Number(result.toFixed(2)) + " Sqft";
  }
}
