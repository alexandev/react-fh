// const getImagenPromesa = () => 
//     new Promise (resolve=> resolve('https://asdkfjd.com'))

// getImagenPromesa().then(console.log)

const getImagen = async() =>{

    try {
        const api_key = `xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK`;
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const {data} = await resp.json();
        const {url} = data.images.original
        console.log(url)

        const img = document.createElement('img');
        img.src= url;

        document.body.append( img );

    } catch (error) {
        console.error(error)
    }
    
    

}

getImagen();

