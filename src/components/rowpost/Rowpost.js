import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../../axios';
import { API_KEY,imageUrl } from '../../constants/constants';
import './Rowpost.css';

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
       axios.get(props.url).then((response)=>{
           console.log(response.data)
           setMovies(response.data.results)
       }).catch(error=>{
           alert('Network Error')
       })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.status)
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
            else {
                console.log('Array Empty')
            }
        }).catch(error=>{
            console.log('Empty')
        })
    }
    return (
        <div className="row">
            <h2 className="poster_title">{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
            { urlId && <YouTube videoId={urlId.key} opts={opts} /> }
        </div>
    )
}

export default Rowpost
