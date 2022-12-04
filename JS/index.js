let sponsers = [{
        src: `../imgs/Sponsers/Walk-Ons Bistreaux and Bar.jpg`,
        name: `Walk-On's Bistreaux and Bar`,
        addres: `1009 Poydras St, New Orleans, LA 70112`,
        phone: `+1 504-309-6530`,
        description: `There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life in every restaurant. Whether you’re here for dinner with the family, date night, cocktails with the girls, or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.`,
        link: `https://go.walk-ons.com/location/new-orleans-la/`
    },
    {
        src: `../imgs/Sponsers/Sheraton New Orleans Hotel.jpg`,
        name: `Sheraton New Orleans Hotel`,
        addres: `500 Canal St, New Orleans, LA 70130`,
        phone: `+1 504-525-2500`,
        description: `Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center. Relax in our refined guest rooms and suites, which boast plush bedding, spacious work areas, modern technology and floor-to-ceiling windows overlooking the French Quarter and the Mississippi River. Upgrade your stay with premium Sheraton Club Lounge access or reboot in our fully-equipped Sheraton Fitness Center. Kick start your day in New Orleans at Starbucks® in our atrium lobby or wind down with refreshing cocktails and local cuisine at Pelican Bar. A leading meeting and events destination in downtown New Orleans, our hotel features 105,000 square feet of flexible venue space, including several expansive ballrooms.`,
        link: `https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/`
    }, {
        src: `../imgs/Sponsers/Ace Hotel New Orleans.jpeg`,
        name: ` Ace Hotel New Orleans`,
        addres: `600 Carondelet St, New Orleans, LA 70130`,
        phone: `+1 504-900-1180`,
        description: `A stone’s throw from the French Quarter, in the soul of the Deep South.`,
        link: `https://acehotel.com/new-orleans/`
    }, {
        src: `../imgs/Sponsers/The Ritz-Carlton, New Orleans.jpg`,
        name: `The Ritz-Carlton, New Orleans`,
        addres: `921 Canal St, New Orleans, LA 70112`,
        phone: `+1 504-524-1331`,
        description: `Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.`,
        link: `https://www.ritzcarlton.com/en/hotels/new-orleans`
    }, {
        src: `../imgs/Sponsers/Premium Parking - P402.jpg`,
        name: ` Premium Parking - P402`,
        addres: `300 N Peters St, New Orleans, LA 70130`,
        phone: `+1 844-236-2011`,
        description: `Convenient parking at 300 N Peters St, New Orleans, LA 70130`,
        link: `https://www.premiumparking.com/P402`
    }, {
        src: `../imgs/Sponsers/Louisiana Childrens Museum.png`,
        name: `Louisiana Children's Museum`,
        addres: `15 Henry Thomas Dr, New Orleans, LA 70124`,
        phone: `+1 504-523-1357`,
        description: `The holidays means family! Let us help you create some amazing family memories by exploring LCM with them. Check out our Visit page for tips on making your visit the best day ever!`,
        link: `https://lcm.org/`
    }, {
        src: `../imgs/Sponsers/Museum of Death.jpeg`,
        name: `Museum of Death`,
        addres: `227 Dauphine St, New Orleans, LA 70112`,
        phone: `+1 504-593-3968`,
        description: `The museum displays a wide variety of art and artifacts surrounding the subject of death. Baby coffins are in one section, letters and artwork from various serial killers in another. There are films regarding autopsies as well as explicit photographs of crime victims.`,
        link: `http://www.museumofdeath.net/`
    }, {
        src: `../imgs/Sponsers/Haunted Museum.jpg`,
        name: `Haunted Museum`,
        addres: `826 & 828 N Rampart St, New Orleans, LA 70116`,
        phone: `+1 504-915-7774`,
        description: `Tours every day, ghost hunts every night. Explore our 200-year-old historic haunted house and Voodoo spirit shop and haunted collections, occult items, dolls, altars, ghost tours, seance, psychics, parties, rituals, Voodoo weddings, paranormal, city and cemetery adventures. 12pm daily.`,
        link: `https://www.bloodymarystours.com/hauntedmuseum.html`
    }

]

for (let i = 0; i < sponsers.length; i++) {
    document.querySelector('.sponsers-container').innerHTML += ` 
    <button type="button" class="btn col-lg-3 col-md-4 col-6 mb-5 sponsers-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="sponser_show('${i}')">
        <img class="img-fluid sponsers-img" src="${sponsers[i].src}" alt=""> <div class="sponser-name">${sponsers[i].name}</div>
    </button>`
}

function sponser_show(i) {
    document.querySelector(".modal-body").innerHTML = "";
    document.getElementById("exampleModalLabel").innerText = sponsers[i].name;
    document.querySelector(".modal-body").innerHTML += `
    <p><b>Addres: </b>${sponsers[i].addres}</p>
    <p><b>Phone: </b><a href='tel:${sponsers[i].phone}'>${sponsers[i].phone}</a></p>
    <p><b>Description: </b>${sponsers[i].description}</p>`
    document.getElementById('site-button').href = sponsers[i].link;

}