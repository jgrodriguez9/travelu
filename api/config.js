import axios from 'axios';

const httpInstance = axios.create( {
    baseURL: 'http://104.131.92.59:8090/sun-api' 
});

httpInstance.interceptors.response.use((response)=>{
    if(response.data.apiCode==='E_EXPIRED_TOKEN'){
        const originalRequest = response.config
        originalRequest._retry = true
        const urlLogin = `http://104.131.92.59:8090/sun-api/auth/login`;
        const d = {
            username: "boun_viaje",
            password: "boun_viaje/*2020*/"
        }
        return axios.post(urlLogin, d)
                    .then(response=>{
                        //console.log(response)
                        let storage = JSON.parse(localStorage.getItem("authTravelU"));
                        storage.access_token = response.data.Bearer
                        localStorage.setItem("authTravelU", JSON.stringify(storage));
                        originalRequest.headers['Authorization'] = 'Bearer ' + response.data.Bearer;
                        return axios(originalRequest);
                    })           
    }else if(response.data.apiCode==='E_SIGNATURE_INVALID'){
        const originalRequest = response.config
        originalRequest._retry = true
        const urlLogin = `http://104.131.92.59:8090/sun-api/auth/login`;
        const d = {
            username: "boun_viaje",
            password: "boun_viaje/*2020*/"
        }
        const h = { headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        }}
        return axios.post(urlLogin, d, h)
                    .then(response=>{
                        console.log(response)
                        let storage = JSON.parse(localStorage.getItem("authTravelU"));
                        storage.access_token = response.data.Bearer
                        localStorage.setItem("authTravelU", JSON.stringify(storage));
                        originalRequest.headers['Authorization'] = 'Bearer ' + response.data.Bearer;
                        return axios(originalRequest);
                    })           
    }
    return response
}, (error) => { 
    
    



    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;    
    if(error.response.status===403){
        window.localStorage.setItem('authTravelU', null);
        //window.location.href="https://chetumal.commune.com.mx/sign-in"
    }
    if (expectedError) {
        //console.log(error.response.status)
        // Loggear mensaje de error a un servicio como Sentry
        // Mostrar error genérico al usuario
        return Promise.reject(error);
    }
});

export default httpInstance;