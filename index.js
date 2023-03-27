/*-------------------------Change Background Of NavBar When Scroll-----------*/
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
});

// fetch data
const response = await fetch("data.json");
const data = await response.json();

const rowFeatured = document.querySelector("#features .row");
rowFeatured.innerHTML = data.featured
  .map((item, index) => {
    return `
    <div class='col-xl-4 col-lg-6 col-md-6'>
            <div class="features-item mt-3" data-aos=${
              index % 2 == 0 ? "zoom-in-up" : "fade-right"
            } data-aos-delay="100">
                    <div class="feat-icon">
                        <i class=${
                          index % 2 == 0
                            ? `"uil uil-${item.icon}"`
                            : `"uil uil-${item.icon} icon-bg2 "`
                        }></i>
                    </div>
                    <div class="content mt-4">
                        <h5>${item.title}</h5>
                        <p class='mb-0'>
                            ${item.desc}
                        </p>
                    </div>
            </div>
    </div> 
  `;
  })
  .join("");
const rowPricing = document.querySelector("#pricing .row");
rowPricing.innerHTML = data.pricing
  .map((item, index) => {
    return `
    <div class='col-xl-4 col-lg-6 col-md-6'>
            <div class="price-card mt-3" data-aos=${
              index % 2 == 0 ? "zoom-in-up" : "fade-right"
            } data-aos-delay="100">
                    <div class="content">
                        <h5>${item.title}</h5>
                        <p>
                            ${item.desc}
                        </p>
                        <span>${item.price}</span>
                        <a href="#">Purchase Plan</a>
                    </div>

                    <ul class="list-pricing">
                      ${item.feat
                        .map((list) => {
                          return ` <li>
                           <i class="uil uil-check"></i>
                            <span>${list}</span>
                          </li> `;
                        })
                        .join("")}
                    </ul>
            </div>
    </div> 
  `;
  })
  .join("");

const rowBlogs = document.querySelector("#blogs .row");
rowBlogs.innerHTML = data.blogs
  .map((item, index) => {
    return `
    <div class='col-lg-4 col-md-6'>
      <a class="card" href="#" data-aos=${
        index % 2 == 0 ? "zoom-in-up" : "fade-right"
      } data-aos-delay="100">
          <img src="${item.image}"  class="card-img-top" alt="${item.title}" />
          <div class="content">
            <div class="meta">
                <i class="uil uil-calendar-alt"></i>
                <span>${item.time}</span>
            </div>
            <h5>${item.title}</h5>
          </div>
      </a>
    </div> 
  `;
  })
  .join("");

try {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} catch (error) {
  console.log(error);
}

AOS.init({
  duration: 1000,
});
