import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function DeletePost(event){
    // const navigate = useNavigate();

    const target  = event.target.parentElement;

    axios.post('/api/delete',target.className)
    .then(response => {
        console.log(response.data.delSuccess);
        if(response.data.delSuccess){
            // navigate('/home');
        }
            
        else{
            alert('cannot delete');
        }
    }); 
}