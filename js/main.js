document.querySelector('input.our-pricing-input').addEventListener('click',()=>{
  const elSiteThemeTogglers = document.querySelectorAll('.about-item .about-value');
  elSiteThemeTogglers.forEach(item => {
    item.textContent = Number(item.textContent)+1
  });
});

document.querySelector('input.our-pricing-input').addEventListener('click',()=>{
  const elSiteThemeTogglers = document.querySelectorAll('.about-item .about-value');
  elSiteThemeTogglers.forEach(item => {
    item.textContent = Number(item.textContent)+1
  });
})
