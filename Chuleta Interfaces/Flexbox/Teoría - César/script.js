window.onload = function () {
    // flex-direction
    let select_fd = document.getElementById("select_fd");
    let div_fd = document.getElementById("div_fd");

    select_fd.addEventListener("change", function () {
        div_fd.style.flexDirection = select_fd.value;
    });

    // flex-wrap
    let select_fw = document.getElementById("select_fw");
    let div_fw = document.getElementById("div_fw");

    select_fw.addEventListener("change", function () {
        div_fw.style.flexWrap = select_fw.value;
    });

    // column-gap
    let input_cg = document.getElementById("input_cg");
    let div_cg = document.getElementById("div_cg");

    input_cg.addEventListener("change", function () {
        div_cg.style.columnGap = input_cg.value + "px";
    });

    // row-gap
    let input_rg = document.getElementById("input_rg");
    let div_rg = document.getElementById("div_rg");

    input_rg.addEventListener("change", function () {
        div_rg.style.rowGap = input_rg.value + "px";
    });

    // justify-content
    let select_jc = document.getElementById("select_jc");
    let div_jc = document.getElementById("div_jc");

    select_jc.addEventListener("change", function () {
        div_jc.style.justifyContent = select_jc.value;
    });

    // align-items
    let select_ai = document.getElementById("select_ai");
    let div_ai = document.getElementById("div_ai");

    select_ai.addEventListener("change", function () {
        div_ai.style.alignItems = select_ai.value;
    });

    // align-content
    let select_ac = document.getElementById("select_ac");
    let div_ac = document.getElementById("div_ac");

    select_ac.addEventListener("change", function () {
        div_ac.style.alignContent = select_ac.value;
    });

    // align-self
    let select_as = document.getElementById("select_as");
    let div_as = document.getElementById("div_as");

    select_as.addEventListener("change", function () {
        div_as.style.alignSelf = select_as.value;
    });

    // flex-basis
    let select_fb = document.getElementById("select_fb");
    let div_fb = document.getElementById("div_fb");

    select_fb.addEventListener("change", function () {
        div_fb.style.flexBasis = select_fb.value;
    });

    // flex-grow
    let input01_fg = document.getElementById("input01_fg");
    let div01_fg = document.getElementById("div01_fg");

    input01_fg.addEventListener("change", function () {
        div01_fg.style.flexGrow = input01_fg.value;
    });
    
    let input02_fg = document.getElementById("input02_fg");
    let div02_fg = document.getElementById("div02_fg");

    input02_fg.addEventListener("change", function () {
        div02_fg.style.flexGrow = input02_fg.value;
    });
    
    let input03_fg = document.getElementById("input03_fg");
    let div03_fg = document.getElementById("div03_fg");

    input03_fg.addEventListener("change", function () {
        div03_fg.style.flexGrow = input03_fg.value;
    });

    // flex-shrink
    let input01_fs = document.getElementById("input01_fs");
    let div01_fs = document.getElementById("div01_fs");

    input01_fs.addEventListener("change", function () {
        div01_fs.style.flexShrink = input01_fs.value;
    });
    
    let input02_fs = document.getElementById("input02_fs");
    let div02_fs = document.getElementById("div02_fs");

    input02_fs.addEventListener("change", function () {
        div02_fs.style.flexShrink = input02_fs.value;
    });
    
    let input03_fs = document.getElementById("input03_fs");
    let div03_fs = document.getElementById("div03_fs");

    input03_fs.addEventListener("change", function () {
        div03_fs.style.flexShrink = input03_fs.value;
    });
    
    let input04_fs = document.getElementById("input04_fs");
    let div04_fs = document.getElementById("div04_fs");

    input04_fs.addEventListener("change", function () {
        div04_fs.style.flexShrink = input04_fs.value;
    });
    
    let input05_fs = document.getElementById("input05_fs");
    let div05_fs = document.getElementById("div05_fs");

    input05_fs.addEventListener("change", function () {
        div05_fs.style.flexShrink = input05_fs.value;
    });
    
    let input06_fs = document.getElementById("input06_fs");
    let div06_fs = document.getElementById("div06_fs");

    input06_fs.addEventListener("change", function () {
        div06_fs.style.flexShrink = input06_fs.value;
    });

    // order
    let input01_o = document.getElementById("input01_o");
    let div01_o = document.getElementById("div01_o");

    input01_o.addEventListener("change", function () {
        div01_o.style.order = input01_o.value;
    });
    
    let input02_o = document.getElementById("input02_o");
    let div02_o = document.getElementById("div02_o");

    input02_o.addEventListener("change", function () {
        div02_o.style.order = input02_o.value;
    });
    
    let input03_o = document.getElementById("input03_o");
    let div03_o = document.getElementById("div03_o");

    input03_o.addEventListener("change", function () {
        div03_o.style.order = input03_o.value;
    });
};
