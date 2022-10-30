
function search(ele) {
    if(event.key === 'Enter') {
        let data = document.getElementById("textAreaExample3").value.trim()
        let element = document.getElementById("user")
        element.innerText = data
        print(data)
        document.getElementById("textAreaExample3").value = "".trim()
    }
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
function butt()
{
    let data = document.getElementById("textAreaExample3").value.trim()
    let element = document.getElementById("user")
    element.innerText = data
    print(data)
    document.getElementById("textAreaExample3").value = "".trim()
}

function print(text){
    let ans = ''
    query({"inputs": {

		"text": text
	}}).then((response) => {
        let element = document.getElementById("homer")
        if (typeof(response.generated_text)===typeof("string")){
            element.innerText = response.generated_text 
        }
        else{
            console.log("Wait")
            element.innerText = "Model is loading..."
            sleep(60000)
            print(text)
        }
        
});




  }
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Alt41r/gpt-simpson",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}