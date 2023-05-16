function GiveMeRules() {
    const sectionUl = document.querySelector("#check");
    fetch("./list_rules.json")
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                sectionUl.innerHTML += `<li>${json[i].name} : ${json[i].rule} </li>`;
            }
        })
        .catch((error) => {
            console.log("There is an error!", error);
        });
}
const button = document.querySelector("button");
button.addEventListener("click", GiveMeRules);
