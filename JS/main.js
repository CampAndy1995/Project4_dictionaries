function my_Dictionary () {
    var Animal = {
        species:"Dog",
        color:"Black"
        breed:"Pembroke Welsh Corgi"
        age:1,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}