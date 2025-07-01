const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

upload.addEventListener("change", function (e) {
  const file = e.target.files[0];
  const img = new Image();

  img.onload = function () {
    const originalWidth = img.width;
    const originalHeight = img.height;

    const blockSize = 6; // Bigger block = more pixelated, clearer face
    const scaledWidth = Math.floor(originalWidth / blockSize);
    const scaledHeight = Math.floor(originalHeight / blockSize);

    canvas.width = originalWidth;
    canvas.height = originalHeight;

    // STEP 1: Draw small-scaled image to temp canvas
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = scaledWidth;
    tempCanvas.height = scaledHeight;
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

    // STEP 2: Get pixel data from scaled image
    const smallImageData = tempCtx.getImageData(
      0,
      0,
      scaledWidth,
      scaledHeight
    ).data;

    // STEP 3: Clear main canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // STEP 4: Rebuild image block by block with delay
    let i = 0;
    const totalBlocks = scaledWidth * scaledHeight;

    function drawBlock() {
      if (i < totalBlocks) {
        const x = (i % scaledWidth) * blockSize;
        const y = Math.floor(i / scaledWidth) * blockSize;
        const index = i * 4;

        const r = smallImageData[index];
        const g = smallImageData[index + 1];
        const b = smallImageData[index + 2];
        const a = smallImageData[index + 3];

        ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
        ctx.fillRect(x, y, blockSize, blockSize);

        i++;
        setTimeout(drawBlock, 2); // control speed: lower = faster
      }
    }

    drawBlock();
  };

  img.src = URL.createObjectURL(file);
});
