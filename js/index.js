const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeactiveClasses();
        panel.classList.add('active');
    }
    )
})

function removeactiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}