const login = async (event) => {
    event.preventDefault()

    const email = $('email').val()
    const password = $('password').val()

    if(email && password){
        const response = await fetch ('/', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content Type': 'application/json'}
        })

        if(response.ok){
            document.location('/homepage')
        } else{
            alert(response.statusText)
        }
    }
}

