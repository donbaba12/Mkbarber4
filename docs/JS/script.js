document.addEventListener("DOMContentLoaded", function() {
    var bookButton = document.getElementById("book");
    var book2Button = document.getElementById("book2");
    var confirm=document.getElementById("confirm");
    

    if (bookButton) {
        bookButton.addEventListener("click", function() {
            window.location.href = "html/services.html"; 
        });
    } else {
        console.error("Element with ID 'book' not found");
    }
    if (confirm) {
        confirm.addEventListener("click", function() {
            window.location.href = "confirmation.html"; 
        });
    } else {
        console.error("Element with ID 'book' not found");
    }

    if (book2Button) {
        book2Button.addEventListener("click", function() {
            window.location.href = "date.html"; 
        });
    } else {
        console.error("Element with ID 'book2' not found");
    }
    document.getElementById("add2").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("add1").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("add2").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("add3").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("add4").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("add5").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("add6").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    
    });
    document.getElementById("add7").addEventListener("click", function() {
        // Show the modal
        $('#successModal').modal('show');
    });
    document.getElementById("confirm").addEventListener("click", function() {
        // Redirect to another page when the button is clicked
        window.location.href = "confirmation.html"; // Replace "another-page.html" with the URL of your desired page
    });
});

