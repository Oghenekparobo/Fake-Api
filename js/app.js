let blogContent = document.querySelector('.blog-content');



// event - listeners



// functions
function  getBlogContent() {
    
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
        .then(data =>{ 

            let cardSection = document.querySelector('.card-section');
            let html = '';
            let content = data;
    
            content.forEach(card => {
                html += ` 
                <div class="col-sm-12 col-md-4 col-lg-4 mb-4">

                <div class="card blog-content" onclick="readPost(${card.id})" style="width:22rem;">
                    <img src="./img/lukas-blazek-GnvurwJsKaY-unsplash.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <div class="text-center">
                            <h2 class="post-title px-5 text-primary">${card.title}</h2>
                        </div>
                        
                        <p class="body-content">${card.body}</p>
                        <p class="d-flex justify-content-end align-items-end">page <span class="text-danger">${card.id}</span></p>
                    </div>
                  </div>
        
            </div> `;

            cardSection.innerHTML = html;

            localStorage.setItem('blogs' ,JSON.stringify(content));
         

            

                
            });


        
            
            
        }).catch((e) =>{ 
            console.log(e);
        });
        
}



getBlogContent();

function readPost(storyId) {
    localStorage.setItem('page' , JSON.stringify(storyId))
    window.location = 'content.html';
    }