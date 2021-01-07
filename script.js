const     btnFirst = document.querySelector("#firstButton"),
          btnSecond = document.querySelector("#secondButton"),
          divFirst = document.querySelector("#firstDiv"),
          divSecond = document.querySelector("#secondDiv"),
          btnClose1 = document.querySelector("#closeBtn1"),
          btnClose2 = document.querySelector("#closeBtn2");

          btnFirst.addEventListener("click", () => {
              divFirst.style.display = "block"; 
          });

          btnSecond.addEventListener("click", () => {
            divSecond.style.display = "block";
        });

        btnClose1.addEventListener("click", () => {
            divFirst.style.display = "none";
        });

        btnClose2.addEventListener("click", () => {
            divSecond.style.display = "none";  
        });