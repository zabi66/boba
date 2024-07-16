const colors = [
    '#b0e0e6', /* Powder Blue */
    '#f0e68c', /* Khaki */
    '#ffdab9', /* Peach Puff */
    '#d8bfd8', /* Thistle */
    '#b0e0e6', /* Powder Blue */
    '#e6e6fa', /* Lavender */
];
let currentColorIndex = 0;

function changeBackgroundColor() {
    // Change the body's background color
    document.body.style.backgroundColor = colors[currentColorIndex];

    // Move to the next color
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // Set a timeout to change the color again in 4 seconds
    setTimeout(changeBackgroundColor, 4000); 
}
document.getElementById('heart').onclick = function() {
    document.getElementById('message').style.display = 'block'; // Show the text by setting its display to block
};
// Start the color change loop
changeBackgroundColor();

$( document ).ready(function() {
    var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
       var el = document.querySelector('.button'),
        // mo.js timeline obj
        timeline = new mojs.Timeline(),
    
        // tweens for the animation:
    
        // burst animation
        tween1 = new mojs.Burst({
            parent: el,
      radius:   { 0: 100 },
      angle:    { 0: 45 },
      y: -10,
      count:    10,
       radius:       100,
      children: {
        shape:        'circle',
        radius:       30,
        fill:         [ 'red', 'white' ],
        strokeWidth:  15,
        duration:     500,
      }
        });
    
    
        tween2 = new mojs.Tween({
            duration : 900,
            onUpdate: function(progress) {
                var scaleProgress = scaleCurve(progress);
                el.style.WebkitTransform = el.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        });
              tween3 = new mojs.Burst({
            parent: el,
      radius:   { 0: 100 },
      angle:    { 0: -45 },
      y: -10,
      count:    10,
       radius:       125,
      children: {
        shape:        'circle',
        radius:       30,
        fill:         [ 'white', 'red' ],
        strokeWidth:  15,
        duration:     400,
      }
        });
    
    // add tweens to timeline:
    timeline.add(tween1, tween2, tween3);
    
    
    // when clicking the button start the timeline/animation:
    $( ".button" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
      timeline.play();
      $(this).addClass('active');
        }
    });
    
    
    });

