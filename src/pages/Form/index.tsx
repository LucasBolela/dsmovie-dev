
import FormCard from 'components/FormCard'
import {useParams} from 'react-router-dom'

function Form(){
    // recupera movie id da rota
    const params = useParams()
    return (
        <FormCard movieId={`${params.movieId}`}/>
    )
}

export default Form