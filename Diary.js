function _(id){
    return document.getElementById(id)
}

function getRs(){
    let txt = _('txt').value
    const d= new Date()

    _('rs').innerHTML += `<div class="card"><p>${txt}</p> 
    <small>${d.toLocaleDateString()},${d.toLocaleTimeString()}</small></div>`
}
