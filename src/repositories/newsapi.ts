import axios from "axios";

class NewsApi {
    getByValueAndLanguage(value: string, language: string = "es") {
        return axios
            .get(`http://newsapi.org/v2/everything?q=${value}&from=2020-04-24&sortBy=publishedAt&language=${language}&apiKey=b0772f695303498181bd9d783aa12a15`)
            .then((response) => response.data);
    }
}

export default new NewsApi();
