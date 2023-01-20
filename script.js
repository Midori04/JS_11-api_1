var divContainer = document.querySelector(".container");


// oppgave 1
// Hva er adressen til Clementine Bauch? Skriv ut hele adressen

// fetch('textFile.txt')
//     .then(response => response.json())
//     .then(data => data.forEach(list => {
//         if (list.name == "Clementine Bauch") {
//             console.log(list.address.street, list.address.suite, list.address.city, list.address.zipcode);
//         }
//     }))

// oppgave 2
// Kan du endre telefonnummeret til Leanne Graham? Skriv ut både det gamle og nye telefonnummeret.

// fetch('textFile.txt')
//     .then(response => response.json())
//     .then(data => data.forEach(list => {
//         if (list.name == "Leanne Graham") {
//             console.log(list.phone);
//             list.phone = "1122312414"
//             console.log(list.phone);
//         }
//     }))

// oppgave 3
// Hvem eier den eposten Sherwood@rosamond.me? Skriv ut både «name» og «username».

// fetch('textFile.txt')
//     .then(response => response.json())
//     .then(data => data.forEach(list => {
//         if (list.email == "Sherwood@rosamond.me") {
//             console.log(list.name, list.username );
//         }
//     }))

// oppgave 4
// Hvor mange bilder har du i fotograf.json?

// fetch('fotograf.json')
//       .then(response => response.json())
//       .then(json => console.log(json.length))



// oppgave 5
// Hvor mange albumer har du i fotograf.json?

// fetch('fotograf.json')
//     .then(response => response.json())
//     .then(data => {
//         count = 0;
//         sjekkeId = 0;
//         data.forEach(list => {
//             if (sjekkeId != list.albumId) {
//                 count++;
//                 sjekkeId++;
//             }
//         })
//         console.log(count);
//     })



// oppgave 6
// Hva er tittelen til bildet 238?

// fetch('fotograf.json')
//     .then(response => response.json())
//     .then(data => data.forEach(list => {
//         if (list.thumbnailUrl == "https://via.placeholder.com/150/80e9fe") {
//             console.log(list.title);
//         }
//     }))

// oppgave 7
// Skriv ut bildet 555 på skjermen.

// fetch('fotograf.json')
//     .then(response => response.json())
//     .then(data => data.forEach(list => {
//         if (list.id == 555) {
//             var para = document.createElement('img');
//             para.src = list.url;
//             divContainer.appendChild(para);
//         }

//     }))

// oppgave 8
// Hva er tittelen til post 95?

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => data.forEach(list => {
//         if (list.id == 95) {
//             console.log(list.title);
//         }
//     }))

// oppgave 9
// Kan du skifte «body» til «userId 5»?

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => data.forEach(list => {
        
        if (list.body == "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe") {

            console.log(list.body);
            list.body = "«userId 5»"
            console.log(list.body);
        }
    }))


