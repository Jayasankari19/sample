const blogPostsContainer = document.getElementById('blogPosts');
let blog=[];
const titleInput = document.getElementById("title");
const postInput = document.getElementById("post");

function displayPosts()
{
    blogPostsContainer.innerHTML = ""; 
    blog.forEach((post, index) =>{
        
        const postDiv=document.createElement('div');
        postDiv.innerHTML = `
        <h3 class="text-2xl font-semibold">${post.title}</h3>
         <p class="text-gray-700 mb-4">${post.content.slice(0,10)}...</p>
         <div>
        <button class="bg-yellow-500 text-white px-4 py-2 rounded" onclick="deletePost(${index})">delete</button>
        <button class="bg-yellow-500 text-white px-4 py-2 rounded" onclick="editPost(${index})">Edit</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded" onclick="viewPost(${index})">View Full</button>
        <label for="viewCount${index}" class="mr-2 text-sm">Views:</label>
        </div>`;
        blogPostsContainer.appendChild(postDiv);
    });
}

const button=document.getElementById('btn')
button.addEventListener('click',(e)=>{
    e.preventDefault()

      // Get input values
      const title = titleInput.value.trim();
      const post = postInput.value.trim();

    const newblog = { title: title, content: post, views: 0 };
    blog.push(newblog);


    displayPosts();

  titleInput.value = "";
  postInput.value = "";

})



