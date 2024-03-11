document.addEventListener("DOMContentLoaded", function () {
  const columnsInput = document.getElementById("columns") as HTMLInputElement;
  const rowsInput = document.getElementById("rows") as HTMLInputElement;
  const rowGapInput = document.getElementById("row-gap") as HTMLInputElement;
  const columnGapInput = document.getElementById(
    "column-gap"
  ) as HTMLInputElement;
  const gridContainer = document.querySelector(".gridContainer") as HTMLElement;
  const cssCode = document.getElementById("cssCode") as HTMLElement;

  function generateGrid(): void {
    const columns: number = parseInt(columnsInput.value);
    const rows: number = parseInt(rowsInput.value);
    const rowGap: number = parseInt(rowGapInput.value);
    const columnGap: number = parseInt(columnGapInput.value);

    const gridStyles: string = `
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        grid-row-gap: ${rowGap}px;
        grid-column-gap: ${columnGap}px;
        width: 100%;
        height: 100%;
      `;

    gridContainer.style.cssText = gridStyles;
    gridContainer.innerHTML = ""; // Clear existing grid

    for (let i = 0; i < rows * columns; i++) {
      const cell = document.createElement("div");
      cell.classList.add("gridCell");
      gridContainer.appendChild(cell);
    }
  }

  function handleChange(): void {
    generateGrid();
    getGridStyles();
  }

  function handleCopyCode(): void {
    const code = cssCode.textContent;
    if (code !== null) {
      navigator.clipboard.writeText(code);
      alert("CSS code copied to clipboard!");
    }
  }

  function getGridStyles(): string {
    const columns: number = parseInt(columnsInput.value);
    const rows: number = parseInt(rowsInput.value);
    const rowGap: number = parseInt(rowGapInput.value);
    const columnGap: number = parseInt(columnGapInput.value);

    const gridStyles: string = `display: grid;
grid-template-columns: repeat(${columns}, 1fr);
grid-template-rows: repeat(${rows}, 1fr);
grid-row-gap: ${rowGap}px;
grid-column-gap: ${columnGap}px;`;

    cssCode.textContent = gridStyles;

    return gridStyles;
  }

  // Event listeners
  columnsInput.addEventListener("input", handleChange);
  rowsInput.addEventListener("input", handleChange);
  rowGapInput.addEventListener("input", handleChange);
  columnGapInput.addEventListener("input", handleChange);
  cssCode.addEventListener("click", handleCopyCode);

  // Initial setup
  generateGrid();
  getGridStyles();
});
