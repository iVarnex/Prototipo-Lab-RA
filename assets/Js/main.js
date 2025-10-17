
import 'aframe';

document.addEventListener('DOMContentLoaded', () => {
    const apple = document.querySelector('#apple');

    if (apple) {
        const fallAnimation = apple.querySelector('a-animation');

        apple.addEventListener('click', () => {
            // Reset position and restart animation
            apple.setAttribute('position', '0 2.5 0');
            if (fallAnimation) {
                fallAnimation.emit('start-fall');
            }
        });
    }
});
