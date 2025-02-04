import {ReactComponent as StarFull} from '../../assets/img/star-full.svg'
import {ReactComponent as StarHalf} from '../../assets/img/star-half.svg'
import {ReactComponent as StarEmpty} from '../../assets/img/star-empty.svg'

import './styles.css'

type Props ={
    score: number
}

type StarProps = {
    fill: number
}

function getFills (score: number){

    const fills = [0, 0, 0, 0, 0] // inicialmente, nenhuma estrela será preenchida

    const integerPart = Math.floor(score)
    for(let i=0; i < integerPart; i++){
        fills[i] = 1 // preenche inteiramente a estrela - StarFull
    }

    const diff = score - integerPart

    if (diff > 0){
        fills[integerPart] = 0.5 // preenche a estrela pela metada- StarHalf
    }

    return fills // vetor com informação do que será preenchido    
}

function Star({fill}: StarProps){
    switch(fill){
        case 0: return <StarEmpty/>
        case 1: return <StarFull/>
        default: return <StarHalf/> // neste caso valor é 0.5
    }
}

function MovieStars( {score}: Props) {
 
    const fills = getFills(score)
    return (
        <div className='dsmovie-stars-container'> 
            <Star fill={fills[0]}/>
            <Star fill={fills[1]}/>
            <Star fill={fills[2]}/>
            <Star fill={fills[3]}/>
            <Star fill={fills[4]}/>

        </div>
    )
    
}

export default MovieStars
