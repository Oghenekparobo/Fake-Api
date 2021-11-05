
// functions
function  getBlogContent() {
    
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
        .then(data =>{ 
        
            let cardSection = document.querySelector('.card-section');
            let html = '';
            ;
    
            data.forEach(data => {
                html += ` 
                <div class="col-sm-12 col-6 col-lg-3 mb-4">
                <div>
                <a href="content.html" onClick="readPost(${data.id})" class="text-black text-decoration-none">

                <div class="card blog-content" style="width:22rem;">
                    <img src="./img/lukas-blazek-GnvurwJsKaY-unsplash.jpg" class="card-img-top img-fluid">
                    <div class="card-body">
                        <div class="text-center">
                            <h2 class="post-title px-5 text-primary">${data.title}</h2>
                        </div>
                        
                        <p class="body-content">${data.body}</p>
                        <p class="d-flex justify-content-end align-items-end">page <span class="text-danger">${data.id}</span></p>
                    </div>
                  </div>
        
            </div> 
            </div>`;

            cardSection.innerHTML = html;

           
         

                
            });

            
        }).catch((e) =>{ 
            console.log(e);
        });
        
};



getBlogContent();
let content = localStorage.setItem('blogs' ,JSON.stringify(data));

function readPost(storyId) {
 localStorage.setItem('page' , JSON.stringify(storyId));
 
    };


