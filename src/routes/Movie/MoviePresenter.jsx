import React from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer, SubContainer} from '../../components/Container';
import styled from 'styled-components';

export const VideoWtap = styled.div`
    height:550px;
    overflow:hidden;
    position:relative;
    iframe{position:absolute; top:-200px;}
`; 
function MoviePresenter({movieData}){
    console.log(movieData.latest)
    return(
        <>
            <SubContainer>
                {
                    movieData.videosKey ? (
                        <VideoWtap>
                            <iframe 
                                width="100%" height="1000px" 
                                src={`https://www.youtube.com/embed/${movieData.videosKey}?mute=1&control=0&autoplay=1&amp;loop=1`} 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </VideoWtap>
                    ) : null
                }
            </SubContainer>
            <PaddingContainer>
                {
                    movieData.nowPlayingMovie ? movieData.nowPlayingMovie.map(item=> {
                        return (
                            <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                        )
                        
                    }) : null
                }   
                {
                    movieData.latestMovie ? (<Poster url={`movie/${movieData.latestMovie.id}`} title={movieData.latestMovie.original_title} poster_path={movieData.latestMovie.poster_path} overview={movieData.latestMovie.overview}/>): null
                }
                {
                    movieData.popularMovie ? movieData.popularMovie.map(item=>{
                        return (
                            <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                        )
                    }) : null
                }
                {
                    movieData.upcomingMovie ? movieData.upcomingMovie.map(item=>{
                        return (
                            <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                        )
                    }) : null
                }
                
            </PaddingContainer>
        </>
    );
}

export default MoviePresenter;



