<script>
const graphicsBox = document.querySelector('.graphics');
const container = document.querySelector('.container');

// Add event listeners to the graphics box
graphicsBox.addEventListener('mouseenter', function() {
    container.classList.add('hovered')
});

graphicsBox.addEventListener('mouseleave', function() {
    container.classList.remove('hovered')
});

</script>