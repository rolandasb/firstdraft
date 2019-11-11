document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.querySelector("#editor .placeholder")

  pell.init({
    element: document.getElementById("editor"),
    onChange: ((html) => {
      placeholder.classList.toggle("show", html.length === 0)

      // For some reason css transitions wouldn't work on firefox (probably due
      // to optimizations), so this ugly solution seem to trigger repaint.
      const elements = document.querySelectorAll(".pell-content div");
      elements.forEach((el) => el.classList.remove("fade"))

      const count = elements.length;
      let a = 0;
      elements.forEach((el) => {
        if (a+1 < count) {
          el.classList.add('fade');
        }

        a++;
      })
    }),
    actions: []
  })

  const body = document.querySelector("body")
  const btn = document.getElementById("reveal")
  btn.addEventListener("click", () => {
    body.classList.toggle("reveal")

    if (body.classList.contains("reveal")) {
      btn.innerText = "Hide"
    } else {
      btn.innerText = "Show"
    }
  })

  document.querySelector(".pell-content").focus()
})
