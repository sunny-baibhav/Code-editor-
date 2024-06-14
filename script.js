let output = document.querySelector("#output");
let allInput = document.querySelectorAll(".left-part textarea");

let htmlCode = '', cssCode = '', jsCode = '';

allInput.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        if (index === 0) {
            htmlCode = el.value;
        }

        if (index === 1) {
            cssCode = el.value;
        }

        if (index === 2) {
            jsCode = el.value;
        }

        let combinedCode = `
            <style>${cssCode}</style>
            ${htmlCode}
            <script>${jsCode}<\/script>
        `;
        output.contentDocument.body.innerHTML = combinedCode;
    });
});
