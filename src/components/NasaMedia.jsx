import axios from 'axios';
import React, {useEffect, useState} from "react";

const NasaMedia = () => {
    const [photoData, setPhotoData] = useState({
        copyright: '',
        date: '',
        explanation: '',
        title: '',
        media_type: '',
        url: ''
    })

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => {
                setPhotoData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }, [])

    console.log(photoData)
    return (
        <div>
            {
                photoData.media_type === 'video' ?
                    <>
                        <embed src={photoData.url} width="600" height="300"
                               title={photoData.title} frameBorder='0'/>
                        <h3>{photoData.copyright}</h3>
                        <p>{photoData.explanation}</p>
                    </>
                    :
                    <div>
                        <img src={photoData.url} alt={photoData.copyright}/>
                        <h3>{photoData.copyright}</h3>
                        <p>{photoData.explanation}</p>
                    </div>
            }
        </div>
    )
}
;

export default NasaMedia;