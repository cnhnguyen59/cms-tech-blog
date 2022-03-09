const postArticle = async (event) => {
    event.preventDefault();

    const title = $('#title').val()
    const description = $('#description').val()
    const body = $('#body').val()

    if (title && description && body){
        const response =  await fetch('/api/article/new',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title, description, body})
        });

        if (response.ok){
            window.location.assign("/dashboard")
        }
       
    }
}

$('#create-article').click(function() {
    location.href = '/new-article';
})