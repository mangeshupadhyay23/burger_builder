import axios from 'axios';
    const instance=axios.create({
        baseURL:'https://burger-builder-b3dc6.firebaseio.com/'
    });

    export default instance;