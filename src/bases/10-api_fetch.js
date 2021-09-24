const api_key = `xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK`;

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

// peticion.then( resp => {
//     resp.json()
//     .then( data => {
//         console.log(data)
//     })
// })

peticion
    .then( resp => resp.json()
    .then( ({data}) => {
        const {url} = data.images.original
        console.log(url)

        const img = document.createElement('img');
        img.src= url;

        document.body.append( img );
    })
)
.catch(console.warn)