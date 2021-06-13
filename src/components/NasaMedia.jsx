import axios from 'axios';
import React, {useEffect, useState} from "react";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

const NasaMedia = () =>  {
    const [photoData, setPhotoData] = useState({
        copyright: '',
        date:'',
        explanation:'',
        title:'',
        media_type:'',
        url:''
    })

    useEffect(() => {
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
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
                        </>
                        :
                        <img src={photoData.url} alt={photoData.copyright}/>
                }

            </div>
    )
}

export default NasaMedia;