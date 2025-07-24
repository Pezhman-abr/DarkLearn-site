        // Dark Mode 

        window.addEventListener("DOMContentLoaded", () => {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark") {
              document.body.classList.add("dark");
            }
          });
        let DarkModBtn = document.getElementById('toggle-theme')
        let flag = true;
          DarkModBtn.addEventListener("click", () => {
            if(flag === true){
        
                DarkModBtn.classList.remove('fa-moon');
                document.body.classList.add("dark");
                DarkModBtn.classList.add('fa-sun');
                flag = false;
            }else{
                DarkModBtn.classList.add('fa-moon');
                document.body.classList.remove('dark');
                DarkModBtn.classList.remove('fa-sun');
                flag = true
            }
        
        
          
            // ذخیره وضعیت جدید
            const isDark = document.body.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
          });