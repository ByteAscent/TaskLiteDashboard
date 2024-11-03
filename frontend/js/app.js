document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('task-modal');
    const header = document.getElementById('modal-header');

    let offsetX, offsetY, isDragging = false;

    //Show the modal when the "Create Task" button is clicked
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    //Hide the modal when the "close" button (×) is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //Start dragging when the header is clicked
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - modal.offsetLeft;
        offsetY = e.clientY - modal.offsetTop;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    //Function to handle mouse movement during dragging
    function onMouseMove(e) {
        if (isDragging) {
            // Get the window dimensions
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
    
            // Get the modal dimensions
            const modalWidth = modal.offsetWidth;
            const modalHeight = modal.offsetHeight;
    
            // Calculate the new position for the top-left corner of the modal
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;
    
            // Ensure the modal doesn't go off the left edge
            if (newLeft < modalWidth/2) {
                newLeft = modalWidth/2;
            }
    
            // Ensure the modal doesn't go off the right edge
            if (newLeft + modalWidth/2 > windowWidth) {
                newLeft = windowWidth - modalWidth/2;
            }
    
            // Ensure the modal doesn't go off the top edge
            if (newTop < modalHeight/2) {
                newTop = modalHeight/2;
            }
    
            // Ensure the modal doesn't go off the bottom edge
            if (newTop + modalHeight/2 > windowHeight) {
                newTop = windowHeight - modalHeight/2;
            }
    
            // Update the modal's position
            modal.style.left = `${newLeft}px`;
            modal.style.top = `${newTop}px`;
            modal.style.position = 'absolute'; // Ensure modal is positioned to move
        }
    }
    
    //Stop dragging when the mouse is released
    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});
