const postComment = async (event) =>{
    event.preventDefault()

    const comment = $('#comment').val()
    const article_id = $('#article').data("article-id")

    console.log(comment)
    console.log(article_id)

    const response = await fetch('/api/comments/new',{
        method:'POST',
        body:JSON.stringify({comment, article_id}),
        headers:{ 'Content-Type': 'application/json'}
    })

    if(response.ok){
        location.reload()
    } else{
        alert('Failed to post comment')
    }
}
