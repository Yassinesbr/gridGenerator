document.addEventListener("DOMContentLoaded", function () {
    var columnsInput = document.getElementById("columns");
    var rowsInput = document.getElementById("rows");
    var rowGapInput = document.getElementById("row-gap");
    var columnGapInput = document.getElementById("column-gap");
    var gridContainer = document.querySelector(".gridContainer");
    var cssCode = document.getElementById("cssCode");
    function generateGrid() {
        var columns = parseInt(columnsInput.value);
        var rows = parseInt(rowsInput.value);
        var rowGap = parseInt(rowGapInput.value);
        var columnGap = parseInt(columnGapInput.value);
        var gridStyles = "\n        display: grid;\n        grid-template-columns: repeat(".concat(columns, ", 1fr);\n        grid-template-rows: repeat(").concat(rows, ", 1fr);\n        grid-row-gap: ").concat(rowGap, "px;\n        grid-column-gap: ").concat(columnGap, "px;\n        width: 100%;\n        height: 100%;\n      ");
        gridContainer.style.cssText = gridStyles;
        gridContainer.innerHTML = ""; // Clear existing grid
        for (var i = 0; i < rows * columns; i++) {
            var cell = document.createElement("div");
            cell.classList.add("gridCell");
            gridContainer.appendChild(cell);
        }
    }
    function handleChange() {
        generateGrid();
        getGridStyles();
    }
    function copyToClipboard(text) {
        var tempInput = document.createElement("textarea");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
    function handleCopyCode() {
        var generatedStyles = getGridStyles();
        copyToClipboard(generatedStyles);
        alert("CSS code copied to clipboard");
    }
    function getGridStyles() {
        var columns = parseInt(columnsInput.value);
        var rows = parseInt(rowsInput.value);
        var rowGap = parseInt(rowGapInput.value);
        var columnGap = parseInt(columnGapInput.value);
        var gridStyles = "display: grid;\ngrid-template-columns: repeat(".concat(columns, ", 1fr);\ngrid-template-rows: repeat(").concat(rows, ", 1fr);\ngrid-row-gap: ").concat(rowGap, "px;\ngrid-column-gap: ").concat(columnGap, "px;");
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
