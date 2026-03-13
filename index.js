const colorPicker = document.getElementById("color-picker")
const colorBtn = document.getElementById("get-color-btn")
const form = document.querySelector("form")
const colorScheme = document.querySelector("select")                      

form.addEventListener("submit", e => {
    e.preventDefault()
    const selectedColor = (colorPicker.value).slice(1)
    const selectorScheme = colorScheme.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectorScheme}`)
    .then(res => res.json())
    .then(data => {        
        data.colors.forEach((item, i) => {
                document.getElementsByClassName(`color-${i+1}`)[0].style.backgroundColor = item.hex.value
        })                            
    })
    
})




