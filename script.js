document.getElementById('button1').addEventListener('click', getSuper)
document.getElementById('button2').addEventListener('click', getAdmin)
document.getElementById('button3').addEventListener('click', getStaff)
document.getElementById('button4').addEventListener('click', getCustomers)


// Get the super admin data
function getSuper(){
    fetch('superadmin.json')
        .then((res) => {
            return res.json()
        })
        .then(data =>{
            const output = 
            `<ul>
                <li>ID: ${data.id}</li>
                <li>NAME: ${data.name}</li>
                <li>ROLE: ${data.role}</li>
                <li>PHONE: ${data.phone}</li>
                <li>EMAIL: ${data.email}</li>
            </ul>`;
            document.getElementById('superBody').innerHTML= output;
        })
}

// Get the admin data
function getAdmin(){
    fetch('admin.json')
        .then((res) => {
            return res.json()
        })
        .then(datas => {
            let output = '';

            datas.forEach((data) => {
                output += 
                    `<ul>
                        <li>ID: ${data.id}</li>
                        <li>NAME: ${data.name}</li>
                        <li>ROLE: ${data.role}</li>
                        <li>PHONE: ${data.phone}</li>
                        <li>EMAIL: ${data.email}</li>
                    </ul>`;
            });
            
            document.getElementById('adminBody').innerHTML= output;
        })
}

// Get the staff data
function getStaff(){
    fetch('staffs.json')
        .then((res) => {
            return res.json()
        })
        .then(datas => {
            let output = '';
    
            datas.forEach((data) => {
                output += 
                    `<ul>
                        <li>ID: ${data.id}</li>
                        <li>NAME: ${data.name}</li>
                        <li>ROLE: ${data.role}</li>
                        <li>PHONE: ${data.phone}</li>
                        <li>EMAIL: ${data.email}</li>
                    </ul>`;
            });
            
            document.getElementById('staffBody').innerHTML= output;
        })
}

// Get the admin data
function getCustomers(){
    fetch('customers.json')
        .then((res) => {
            return res.json()
        })
        .then(datas => {
            let output = '';

            datas.forEach((data) => {
                output += 
                    `<ul>
                        <li>ID: ${data.id}</li>
                        <li>NAME: ${data.name}</li>
                        <li>ROLE: ${data.role}</li>
                        <li>PHONE: ${data.phone}</li>
                        <li>EMAIL: ${data.email}</li>
                    </ul>`;
            });
            
            document.getElementById('customerBody').innerHTML= output;
        })
}