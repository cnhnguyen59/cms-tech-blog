const login = async (event) => {
    event.preventDefault()

    const email = $('#email').val()
    const password = $('#password').val()

    if(email && password){
        const response = await fetch ('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content Type': 'application/json'}
        })

        if(response.ok){
            console.log('logged in')
            document.location('/homepage')
        } else{
            alert(response.statusText)
        }
    }
}

const createAccount = async (event) => {
    event.preventDefault()

    const firstName = $('#firstName')
    const lastName = $('#lastName')
    const email = $('#email')
    const username = $('#username')
    const password = $('#password')

    if (firstName && lastName && email && username && password){
        const response = await fetch('/api/user/new-user', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                email,
                password

            }),
            headers: {'Content-Type': 'appliction/json'}
        })

        if (response.ok){
            console.log('new user created')
            document.location.replace('/dashboard')
        }
    }

}
