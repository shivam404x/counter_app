// API Base URL
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Get DOM elements
const loadingDiv = document.getElementById('loading');
const dataContainer = document.getElementById('data-container');

// Function to show loading spinner
function showLoading() {
    loadingDiv.style.display = 'block';
    dataContainer.innerHTML = '';
}

// Function to hide loading spinner
function hideLoading() {
    loadingDiv.style.display = 'none';
}

// Function to display error message
function showError(message) {
    hideLoading();
    dataContainer.innerHTML = `<div class="error"><strong>Error:</strong> ${message}</div>`;
}

// Function to fetch and display Users
async function fetchUsers() {
    showLoading();
    try {
        const response = await fetch(`${API_BASE_URL}/users?_limit=10`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        showError(error.message);
    }
}

// Function to display Users in UI
function displayUsers(users) {
    hideLoading();
    dataContainer.innerHTML = '';
    
    if (users.length === 0) {
        dataContainer.innerHTML = '<p>No users found.</p>';
        return;
    }
    
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'data-item';
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <small>ID: ${user.id}</small>
        `;
        dataContainer.appendChild(userDiv);
    });
}

// Function to fetch and display Posts
async function fetchPosts() {
    showLoading();
    try {
        const response = await fetch(`${API_BASE_URL}/posts?_limit=10`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        showError(error.message);
    }
}

// Function to display Posts in UI
function displayPosts(posts) {
    hideLoading();
    dataContainer.innerHTML = '';
    
    if (posts.length === 0) {
        dataContainer.innerHTML = '<p>No posts found.</p>';
        return;
    }
    
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'data-item';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <small>Post ID: ${post.id} | User ID: ${post.userId}</small>
        `;
        dataContainer.appendChild(postDiv);
    });
}

// Function to fetch and display Comments
async function fetchComments() {
    showLoading();
    try {
        const response = await fetch(`${API_BASE_URL}/comments?_limit=10`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const comments = await response.json();
        displayComments(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        showError(error.message);
    }
}

// Function to display Comments in UI
function displayComments(comments) {
    hideLoading();
    dataContainer.innerHTML = '';
    
    if (comments.length === 0) {
        dataContainer.innerHTML = '<p>No comments found.</p>';
        return;
    }
    
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'data-item';
        commentDiv.innerHTML = `
            <h3>${comment.name}</h3>
            <p>${comment.body}</p>
            <p><strong>Email:</strong> ${comment.email}</p>
            <small>Comment ID: ${comment.id} | Post ID: ${comment.postId}</small>
        `;
        dataContainer.appendChild(commentDiv);
    });
}

// Load users by default when page loads
window.addEventListener('load', function() {
    fetchUsers();
});
