import httpInstance from './config'


export default function Get(props){
    return httpInstance.get(props.url, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${props.access_token}`,
            "Accept": "application/json",
        }
    })

}