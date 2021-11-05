let pages = localStorage.getItem('page');


    fetch(`https://jsonplaceholder.typicode.com/posts/${pages}`).then(response => response.json()).then((data) =>{ 
        
            let stories = document.querySelector('#story');
            html = ` 
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-5 body-bg rounded" id="title">
                    <div class="header-text">
                        <h1 class="titlte text-uppercase text-primary">${data.title}<p class="d-flex justify-content-end align-items-end">page <span class="text-danger">${data.id}</span></p>
                        </h1>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-7" id="body">
                    <div class="body">
                        <p class="body text-primary">${data.body}</p>
                    </div>
                </div>

            </div>
            `;
            stories.innerHTML = html;
           
    }).catch((e) =>{ 
       console.log(e);
    });
