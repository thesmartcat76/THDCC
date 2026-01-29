// Check if user is logged in as admin
function isAdmin() {
    return sessionStorage.getItem('adminLogged') === 'true';
}

// Load members from localStorage and add them to the members list
function loadMembers() {
    const membersList = document.querySelector('#members_section ul');
    const newMembers = JSON.parse(localStorage.getItem('newMembers')) || [];
    const adminMode = isAdmin();
    
    newMembers.forEach((member, index) => {
        const li = document.createElement('li');
        li.textContent = member.name;
        
        // Add delete button if admin is logged in
        if (adminMode) {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remove';
            deleteBtn.style.marginLeft = '10px';
            deleteBtn.style.backgroundColor = '#ff4444';
            deleteBtn.style.color = 'white';
            deleteBtn.style.border = 'none';
            deleteBtn.style.padding = '5px 10px';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.addEventListener('click', function() {
                newMembers.splice(index, 1);
                localStorage.setItem('newMembers', JSON.stringify(newMembers));
                li.remove();
            });
            li.appendChild(deleteBtn);
        }
        
        membersList.appendChild(li);
    });
}

// Admin login functionality
function setupAdminLogin() {
    const adminSection = document.getElementById('admin_login');
    if (!adminSection) return;
    
    const adminBtn = document.getElementById('admin_btn');
    const logoutBtn = document.getElementById('logout_btn');
    const passwordInput = document.getElementById('admin_password');
    const adminStatus = document.getElementById('admin_status');
    
    if (isAdmin()) {
        adminBtn.style.display = 'none';
        passwordInput.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        adminStatus.textContent = 'Admin Mode: ON';
        adminStatus.style.color = 'green';
    }
    
    adminBtn.addEventListener('click', function() {
        const password = passwordInput.value;
        if (password === 'THDCC2026') {
            sessionStorage.setItem('adminLogged', 'true');
            adminBtn.style.display = 'none';
            passwordInput.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
            adminStatus.textContent = 'Admin Mode: ON';
            adminStatus.style.color = 'green';
            location.reload();
        } else {
            alert('Incorrect password');
            passwordInput.value = '';
        }
    });
    
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('adminLogged');
        adminBtn.style.display = 'inline-block';
        passwordInput.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        adminStatus.textContent = 'Admin Mode: OFF';
        adminStatus.style.color = 'red';
        location.reload();
    });
}

// Load members and setup admin when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupAdminLogin();
    loadMembers();
});
