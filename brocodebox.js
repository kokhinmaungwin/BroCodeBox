(function(){

/* =====================
   Inject CSS
===================== */
const css = `
.bro-box{
  background:#1e1e1e;
  border-radius:8px;
  overflow:hidden;
  margin:20px 0;
  font-family:Consolas,Monaco,monospace;
}
.bro-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:8px 12px;
  background:#2d2d2d;
}
.bro-left{display:flex;align-items:center;gap:6px}
.dot{width:12px;height:12px;border-radius:50%}
.red{background:#ff5f56}
.yellow{background:#ffbd2e}
.green{background:#27c93f}
.bro-file{margin-left:8px;color:#ccc;font-size:13px}
.bro-copy{
  background:none;
  border:1px solid #444;
  color:#ccc;
  padding:4px 8px;
  border-radius:4px;
  cursor:pointer;
  font-size:12px;
}
.bro-body{display:flex}
.bro-lines{
  padding:12px 8px;
  color:#555;
  user-select:none;
  text-align:right;
}
.bro-pre{
  margin:0;
  padding:12px 16px;
  overflow:auto;
  font-size:14px;
  color:#d4d4d4;
}

/* highlight colors */
.kw{color:#569cd6}
.str{color:#ce9178}
.num{color:#b5cea8}
.cm{color:#6a9955}
.func{color:#dcdcaa}
`;
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

/* =====================
   broHighlight (simple & safe)
===================== */
function broHighlight(code){
  code = code.replace(/&/g,"&amp;")
             .replace(/</g,"&lt;")
             .replace(/>/g,"&gt;");

  code = code.replace(/("(?:\\.|[^"])*")/g,"<span class='str'>$1</span>");
  code = code.replace(/\b(const|let|var|function|return|if|else|for|while)\b/g,"<span class='kw'>$1</span>");
  code = code.replace(/\b(\d+)\b/g,"<span class='num'>$1</span>");
  code = code.replace(/(\/\/.*)/g,"<span class='cm'>$1</span>");
  code = code.replace(/\b([a-zA-Z_]\w*)(?=\()/g,"<span class='func'>$1</span>");

  return code;
}

/* =====================
   Init
===================== */
document.querySelectorAll(".bro-box").forEach(box=>{
  const codeEl = box.querySelector("code");
  const raw = codeEl.innerText.replace(/^\n/, "");
  const file = box.dataset.file || "code.js";

  box.innerHTML = `
    <div class="bro-header">
      <div class="bro-left">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="bro-file">${file}</span>
      </div>
      <button class="bro-copy">Copy</button>
    </div>
    <div class="bro-body">
      <div class="bro-lines"></div>
      <pre class="bro-pre">${broHighlight(raw)}</pre>
    </div>
  `;

  // line numbers
  const lines = raw.split("\n").length;
  box.querySelector(".bro-lines").innerHTML =
    Array.from({length:lines},(_,i)=>i+1).join("<br>");

  // copy
  box.querySelector(".bro-copy").onclick = function(){
    navigator.clipboard.writeText(raw);
    this.innerText = "Copied!";
    setTimeout(()=>this.innerText="Copy",1000);
  };
});

})();
