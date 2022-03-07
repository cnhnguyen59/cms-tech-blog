const postArticle = async (event) => {
    event.preventDefault();

    const title = $('#title').val()
    const description = $('#description').val()
    const body = $('#body').val()

    if (title && description && body){
        fetch('/api/article/new',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title, description, body})
        })
        .then(response => response.json())
        .then(data => (location.href = `/article/${data.id}`))
        .catch(err => console.log(err))
    }
}

$('#create-article').click(function() {
    location.href = '/new-article';
})