function hamadaShadow(options) {
  let element = document.querySelectorAll(".hamadaShadow");

  if (options.shadow_type === "hard") options.shadow_type = "0px";
  else options.shadow_type = "15px";

  element.forEach((e) => {
    e.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgb(0,0,0,0.12)`;
    if (options.padding) {
      e.style.padding = "1rem";
    }
  });
}

module.exports.hamadaShadow = hamadaShadow;
