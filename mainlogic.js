
    // const baseUrl = "https://tarmeezacademy.com/api/v1"
    // let currentPage = 1
    // const maxPages = 8;
    // //======= Infinite Scrolling======//
    // window.addEventListener("scroll", function() {
    // const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    // if (endOfPage && currentPage <= maxPages) {
    //     allContent(currentPage);
    // }
    // });
    // //======= Infinite Scrolling======//
    // UISetUp()
    

    // function btnLogin(){
    //     const password = document.getElementById("recipient-password").value
    //     const username = document.getElementById("recipient-name").value
    //     const params = {
    //     "username" : username,
    //     "password" : password
    //     }
    //     axios.post("https://tarmeezacademy.com/api/v1/login",params)
    //     .then((response) => {
    //         localStorage.setItem("token", response.data.token )
    //         localStorage.setItem("user",JSON.stringify(response.data.user.username))
    //         const modal = document.getElementById("login_modal")
    //         const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
            
    //         modalInstance.hide()
    //         showAllAlerts("Login successfully completed","success")
    //         UISetUp()
    //     }).catch((error) => {
    //         const message = error.response.data.message
    //         //console.log(error.response.data.message)
    //         showAllAlerts(message,"danger")
    //     })

        
    // }

    // function registerBtn(){
    //     const name = document.getElementById("register-recipient-n").value
    //     const image = document.getElementById("recipient-image-for-reg").files[0]
    //     const password = document.getElementById("register-recipient-password").value
    //     const username = document.getElementById("register-recipient-name").value
    //     console.log(name,username ,password)
    //     // const params = {
    //     // "username" : username,
    //     // "password" : password,
    //     // "name" : name
    //     // }
    //     const formData = new FormData()
    //     formData.append("username", username) 
    //     formData.append("password", password) 
    //     formData.append("name", name) 
    //     formData.append("image", image) 
    //     const headers = {
    //       "Content-Type":"multipart/form-data",
    //     }

    //     axios.post("https://tarmeezacademy.com/api/v1/register",formData,{
    //       headers: headers
    //     })
    //     .then((response) => {
    //         console.log(response.data)
    //         localStorage.setItem("token", response.data.token )
    //         localStorage.setItem("user",JSON.stringify(response.data.user.username))
    //         const modal = document.getElementById("register_modal")
    //         const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
            
    //         modalInstance.hide()
    //         showAllAlerts("Register successfully completed","success")
    //         UISetUp()
    //     }).catch((error) => {
    //       const message = error.response.data.message
    //         //console.log(error.response.data.message)
    //         showAllAlerts(message,"danger")
    //     })
    // }
    // function UISetUp(){
    //     const checkToken = localStorage.getItem("token")
    //     const loginBtn = document.getElementById("log-btn")
    //     const regBtn = document.getElementById("reg-btn")
    //     const logoutBtn = document.getElementById("div-logout")
    //     const loginDiv = document.getElementById("div-log")
    //     const postbtnDisplay = document.getElementById("addPost");


        
    //     if(checkToken == null){
    //         logoutBtn.style.setProperty("display","none","important")
            
    //         loginDiv.style.setProperty("display","flex","important")
    //         if(postbtnDisplay != null){
    //             postbtnDisplay.style.setProperty("display", "none", "important");

    //         }
    //         // loginBtn.style.setProperty("display","block","important") 
    //         // regBtn.style.setProperty("display","block","important")
    //     }else{
    //         if(postbtnDisplay != null){
    //             postbtnDisplay.style.setProperty("display", "block", "important");

    //         }
    //         loginDiv.style.setProperty("display","none","important")
            
    //         // loginBtn.style.setProperty("display","none","important") 
    //         // regBtn.style.setProperty("display","none","important")
    //         logoutBtn.style.setProperty("display","flex","important")
    //         //
    //         const user = getCurrentUser()
    //         document.getElementById("user-UI-name").innerHTML = user.username
    //         document.getElementById("user-UI-img").src = user.profile_image

            


    //     }   
    // }

    // function logOut(){
    //     localStorage.removeItem("token")
    //     localStorage.removeItem("user")
    //     UISetUp()
    //     showAllAlerts("Logout successfully completed","success")

    // }
    // function showAllAlerts(message,type){
    //     const alertPlaceholder = document.getElementById('success-alert')
    //     const alert = (message, type) => {
    //     const wrapper = document.createElement('div')
    //     wrapper.innerHTML = [
    //         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    //         `   <div>${message}</div>`,
    //         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    //         '</div>'
    //     ].join('')

    //     alertPlaceholder.append(wrapper)
    //     }


    //         alert(message, type)
    //         setTimeout(() => {
    //             const alertClose = bootstrap.Alert.getOrCreateInstance('#success-alert')
    //             alertClose.dispose()
    //         }, 2000)

        
        
    // }
  
    // function addNewPost(){

    //     const title = document.getElementById("recipient-title").value
    //     const image = document.getElementById("recipient-image").files[0]

    //     const body = document.getElementById("recipient-des").value
    //     const token = localStorage.getItem("token")
    //     const headers = {
    //       "authorization" : `Bearer ${token}`
    //     }
    //     const formData = new FormData()
    //     formData.append("title",title)
    //     formData.append('image',image)
    //     formData.append('body',body)


    //     // const params = {
    //     //  "image" : image, 
    //     // "title" : title,
    //     // "body" : body
    //     // }
    //     axios.post("https://tarmeezacademy.com/api/v1/posts",formData, {
    //       headers : headers
    //     })
    //     .then((response) => {
    //       console.log(response) 
    //       const modal = document.getElementById("addBtn_modal")
    //       const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
            
    //       modalInstance.hide()
    //       showAllAlerts("Add post successfully","success")
    //       allContent()
          
    //     }).catch((error) => {
    //         const message = error.response.data.message
    //         //console.log(error.response.data.message)
    //         showAllAlerts(message,"danger")
    //     })      
    // }
    
    // function getCurrentUser(){
    //   let user = null
    //   const storageUser = localStorage.getItem("user")
    //   if(storageUser != null)
    //   {
    //     user = JSON.parse(storageUser)
    //   }
    // return user

    // }
    
    // btnLogin()

    function UISetUp(){
            const checkToken = localStorage.getItem("token")
            const loginBtn = document.getElementById("log-btn")
            const regBtn = document.getElementById("reg-btn")
            const logoutBtn = document.getElementById("div-logout")
            const loginDiv = document.getElementById("div-log")
            const postbtnDisplay = document.getElementById("addPost");
    
    
            
            if(checkToken == null){
                logoutBtn.style.setProperty("display","none","important")
                
                loginDiv.style.setProperty("display","flex","important")
                if(postbtnDisplay != null){
                    postbtnDisplay.style.setProperty("display", "none", "important");
    
                }
                // loginBtn.style.setProperty("display","block","important") 
                // regBtn.style.setProperty("display","block","important")
            }else{
                if(postbtnDisplay != null){
                    postbtnDisplay.style.setProperty("display", "block", "important");
    
                }
                loginDiv.style.setProperty("display","none","important")
                
                // loginBtn.style.setProperty("display","none","important") 
                // regBtn.style.setProperty("display","none","important")
                logoutBtn.style.setProperty("display","flex","important")
                //
                const user = getCurrentUser()
                document.getElementById("user-UI-name").innerHTML = user.username
                document.getElementById("user-UI-img").src = user.profile_image
    
                
    
    
            }   
        }
        function btnLogin(){
                const password = document.getElementById("recipient-password").value
                const username = document.getElementById("recipient-name").value
                const params = {
                "username" : username,
                "password" : password
                }
                axios.post("https://tarmeezacademy.com/api/v1/login",params)
                .then((response) => {
                    localStorage.setItem("token", response.data.token )
                    localStorage.setItem("user",JSON.stringify(response.data.user.username))
                    const modal = document.getElementById("login_modal")
                    const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
                    
                    modalInstance.hide()
                    showAllAlerts("Login successfully completed","success")
                    UISetUp()
                }).catch((error) => {
                    const message = error.response.data.message
                    //console.log(error.response.data.message)
                    showAllAlerts(message,"danger")
                })
        
                
            }


    function registerBtn(){
        const name = document.getElementById("register-recipient-n").value
        const image = document.getElementById("recipient-image-for-reg").files[0]
        const password = document.getElementById("register-recipient-password").value
        const username = document.getElementById("register-recipient-name").value
        console.log(name,username ,password)
        // const params = {
        // "username" : username,
        // "password" : password,
        // "name" : name
        // }
        const formData = new FormData()
        formData.append("username", username) 
        formData.append("password", password) 
        formData.append("name", name) 
        formData.append("image", image) 
        const headers = {
          "Content-Type":"multipart/form-data",
        }

        axios.post("https://tarmeezacademy.com/api/v1/register",formData,{
          headers: headers
        })
        .then((response) => {
            console.log(response.data)
            localStorage.setItem("token", response.data.token )
            localStorage.setItem("user",JSON.stringify(response.data.user.username))
            const modal = document.getElementById("register_modal")
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
            
            modalInstance.hide()
            showAllAlerts("Register successfully completed","success")
            UISetUp()
        }).catch((error) => {
          const message = error.response.data.message
            //console.log(error.response.data.message)
            showAllAlerts(message,"danger")
        })
    }


    function logOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        UISetUp()
        showAllAlerts("Logout successfully completed","success")

    }
    function showAllAlerts(message,type){
        const alertPlaceholder = document.getElementById('success-alert')
        const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
        }


            alert(message, type)
            setTimeout(() => {
                const alertClose = bootstrap.Alert.getOrCreateInstance('#success-alert')
                alertClose.dispose()
            }, 2000)

        
        
    }


    function getCurrentUser(){
      let user = null
      const storageUser = localStorage.getItem("user")
      if(storageUser != null)
      {
        user = JSON.parse(storageUser)
      }
    return user

    }
    
