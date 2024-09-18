document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
                fetchData(targetId);
            } else {
                section.classList.add('hidden');
            }
        });
    }

    function fetchData(sectionId) {
        switch(sectionId) {
            case 'personal-info':
                // Placeholder for personal info fetch
                // Uncomment and update when actual endpoint is available
                /*
                fetch('/api/student/1') // Replace with actual student ID
                    .then(response => response.json())
                    .then(data => {
                        document.querySelector('.profile-photo').src = data.photoUrl || "https://via.placeholder.com/150"; // Adjust if needed
                        document.querySelector('.details').innerHTML = `
                            <p><strong>Name:</strong> ${data.name}</p>
                            <p><strong>Student ID:</strong> ${data.studentId}</p>
                            <p><strong>Date of Birth:</strong> ${data.dob}</p>
                            <p><strong>Email:</strong> ${data.email}</p>
                        `;
                    });
                */
                break;
            case 'attendance':
                fetch('/attendance/all') // Updated endpoint
                    .then(response => response.json())
                    .then(data => {
                        let rows = data.map(entry => `
                            <tr>
                                <td>${entry.allClasses || 'N/A'}</td> <!-- Adjust according to actual response -->
                                <td>${entry.attendClasses || 'N/A'}</td> <!-- Adjust according to actual response -->
                            </tr>
                        `).join('');
                        document.querySelector('#attendance table tbody').innerHTML = rows;
                    });
                break;
            case 'marksheet':
                // Placeholder for marksheet fetch
                // Uncomment and update when actual endpoint is available
                /*
                fetch('/api/marksheet/1') // Replace with actual student ID
                    .then(response => response.json())
                    .then(data => {
                        let rows = data.map(entry => `
                            <tr>
                                <td>${entry.subject}</td>
                                <td>${entry.marksObtained}</td>
                                <td>${entry.totalMarks}</td>
                                <td>${entry.grade}</td>
                            </tr>
                        `).join('');
                        document.querySelector('#marksheet table tbody').innerHTML = rows;
                    });
                */
                break;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                showSection(targetId);
            }
        });
    });

    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});
