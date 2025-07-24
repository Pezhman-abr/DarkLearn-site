const courseBuyBtn = document.getElementById('addToCartBtn')
const prudactUlList = document.getElementById('prudact-ul-list')
const basketIcon = document.getElementById("backetIcon");
const basketBox = document.getElementById("basketBox");
const bast_icone_btn = document.getElementById('icone-shope');
const priceBox = document.querySelector('.prudact-ent-Box');
const overlay = document.getElementById("overlay")
const basketItemCount = document.getElementById("basketItemCount");

// باز و بسته شدن با کلیک روی آیکون
basketIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  bast_icone_btn.style.display = bast_icone_btn.style.display === "block" ? "none" : "block";

  // اگه باز شد، اوورلی هم بیاد
  if (bast_icone_btn.style.display === "block") {
    overlay.classList.add("show-overlay");
  } else {
    overlay.classList.remove("show-overlay");
  }
});
  
  // بستن باکس وقتی بیرون کلیک شد
  document.addEventListener("click", function (e) {
    if (!bast_icone_btn.contains(e.target) && !basketIcon.contains(e.target)) {
      // alert('bay world!')
      bast_icone_btn.style.display = "none";
      overlay.classList.remove("show-overlay");
    }
  });        
// basket.js






// دریافت آیتم‌ها از localStorage
function loadBasket() {
    const stored = localStorage.getItem('basketItems');
    return stored ? JSON.parse(stored) : [];
  }
  // به‌روزرسانی تعداد آیتم‌های سبد خرید
function updateBasketItemCount() {
  const items = loadBasket();
  basketItemCount.textContent = items.length;
}


// محاسبه قیمت کل
function calculateTotalPrice() {
  const items = loadBasket();
  
  const totalPrice = items.reduce((sum, item) => {
    // حذف ویرگول و تومان از قیمت
    const persianToEnglish = str => str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const priceClean = persianToEnglish(item.price.replace(/,/g, '').replace(' تومان', ''));
    const price = parseInt(priceClean, 10);
    
    // const price = parseInt(priceWithoutCommaAndToman, 10);
    // console.log("Items:", JSON.stringify(items, null, 2));
    // console.table(items);

    
    if (isNaN(price)) {
      return sum;  // اگر قیمت معتبر نیست، آن را نادیده بگیر
    }

    return sum + price;
  }, 0);

  // نمایش قیمت کل با فرمت هزارگان و تومان
  const formattedTotalPrice = totalPrice.toLocaleString('fa-IR') + ' تومان';  // فرمت هزارگان فارسی

  document.getElementById("totalPrice").textContent = formattedTotalPrice;
}
  
  // ذخیره آیتم‌ها در localStorage
  function saveBasket(items) {
    localStorage.setItem('basketItems', JSON.stringify(items));
  }
  // حذف آیتم با ID خاص
  function removeFromBasket(id, containerId = 'basketBox') {
    let currentItems = loadBasket();
    currentItems = currentItems.filter(item => item.id !== id);
    saveBasket(currentItems);
    renderBasket(currentItems, containerId);
    updateBasketItemCount();
    calculateTotalPrice();  // محاسبه قیمت کل
  }
  
  // رندر لیست در یک کانتینر خاص
  function renderBasket(items, containerId = 'basketBox') {
    const basketBox = document.getElementById(containerId);
    
    if (!basketBox) return;
  
    if (items.length === 0) {
      basketBox.innerHTML = '<p class="empaty-basket">سبد خرید خالیه 🛒</p>';
      bast_icone_btn.style.height = ' 200px'
      if (priceBox) priceBox.style.visibility = 'hidden';
      return;
    } else {
      if (priceBox) priceBox.style.visibility = 'visible';
      bast_icone_btn.style.height = '530px'
    }



    
    basketBox.innerHTML = `
      <ul class="pro-list-basket">

      ${items.map(item => `
        
        <li>
          <div class="prudact-img"
           style="background-image: url('${item.image}');">
          </div>
            <div class="name-price">
              <span>${item.title}</span>
              <span class="show-price">${item.price}</span>
            </div>
            <div>
              <i data-id="${item.id}" class="fa-solid fa-trash-can remove-btn"></i>
            </div>
          </li>
        


      `).join('') }
      </ul>`
      
    // اتصال حذف
    basketBox.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // console.log("clicked!");

        
        const idToRemove = this.getAttribute('data-id');
        if (!idToRemove) return;
        removeFromBasket(idToRemove, containerId);
      });
    });
  }
  
  // افزودن آیتم به سبد خرید
  function addToBasket(item, containerId = 'basketBox') {
    let currentItems = loadBasket();
    const exists = currentItems.some(i => i.id === item.id);
  
    if (!exists) {
      currentItems.push(item);
      saveBasket(currentItems);
      renderBasket(currentItems, containerId);
      updateBasketItemCount();  // تعداد را بروزرسانی کن
      calculateTotalPrice();  // محاسبه قیمت کل
    } else {
      alert("این دوره قبلاً به سبد اضافه شده 😅");
    }
  }
  
  // نمایش سبد هنگام لود صفحه
  function initBasket(containerId = 'basketBox') {
    document.addEventListener('DOMContentLoaded', () => {
      const items = loadBasket();
      renderBasket(items, containerId);
    });
    
  }
  // هنگام بارگذاری صفحه، تعداد آیتم‌ها را نمایش بده
document.addEventListener("DOMContentLoaded", function() {
  const items = loadBasket();
  renderBasket(items);
  calculateTotalPrice();  // محاسبه قیمت کل
  updateBasketItemCount();
});


  
  // خروجی ماژول
  window.Basket = {
    init: initBasket,
    add: addToBasket,
    load: loadBasket,
    render: renderBasket,
    remove: removeFromBasket
  };




