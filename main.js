const API = 'https://quotes15.p.rapidapi.com/quotes/random/';
const content = null || document.getElementById("content")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a8ab5d207msh6bdfd8d41deec1fp1f62f6jsn3936af5516b0',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
	const response = await fetch(urlAPI, options);
	const data = await response.json();
	return data;
}

(async () => {
	try {
        const quotes = await fetchData(API);
        let view =`
		 
			<p class="quote">"${quotes.content}"</p>
			<p class="author">${quotes.originator.name}</p>
			`; 
					
			content.innerHTML = view;	

    } catch (error) {
        console.log(error);
    }
})();