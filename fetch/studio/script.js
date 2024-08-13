//TODO: Add Your Code Below

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        const responsePromise = response.json()
        responsePromise.then(function (astronautData) {
            const astro = document.getElementById("container")
            console.log(astro.innerHTML);
            
            for (let i = 0; i < astronautData.length; i++) {
                astro.innerHTML += `
                <div class="astronaut">
                 <div class="bio">
                    <h3>${astronautData[i].firstName} ${astronautData[i].lastName}</h3>
                 <ul>
        <li>Hours in space: ${astronautData[i].hoursInSpace}</li>
        <li>Active: ${astronautData[i].active}</li>
        <li>Skills: ${astronautData[i].skills}</li>
        </ul>
    </div>
    <img class="avatar" src="${astronautData[i].picture}">
</div>`;


            }
            if (astronautData[i].active = true){
                document.getElementById("active").style.color = "green";
                //astronautData[i].active.style.color = green;
            }
            astro.innerHTML += `Astronauts total: ${astronautData.length}`;

            //console.log(astronautsData[i]);
        });

        console.log(response)

    })

});