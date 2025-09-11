/**
 * CART 253
 * JJ Gagnon
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let window_h;
let window_w;
let circle_count;
let circle_count_delayed;

function setup() {
    window_h = windowHeight;
    window_w = windowWidth;
    circle_count = 0;
    circle_count_delayed = 0;
    noFill()
    createCanvas(window_w, window_h)
    // stroke(0,0,0,10)
    // frameRate(2)
    // noSmooth()
    // smooth()
    // frameRate(2)
    // noLoop()
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function not_draw() {
    strokeWeight(10)
    stroke(0,0,0, 10)
    // let x = sin(frameCount * 0.01) * 100 + width/2
    let x = height/2
    circle(width/2, x, 100 )

    strokeWeight(10)
    stroke(255,255,255, 0.1)
    circle(width/2, x, 100)

}
function draw() {
    if (circle_count > 2000){
        // return
    }

    
    let num_iter = 10
    let noise_speed = 0.001
    let delay = 1500;
    let stroke_weight = 1
    let circle_size = 50
    
    let amp_mult = 1

    // stroke(0,0,0,10)
    strokeWeight(stroke_weight)
    stroke(0,0,0, 10)
    stroke(0,0,0, 10)
    for (let i = 0; i < num_iter; i++){
        

        noiseSeed(1)
        let x = noise(circle_count * noise_speed) * window_w * amp_mult - ((window_w * amp_mult) - window_w) / 2
        // let x = sin(circle_count * noise_speed) * window_w


        noiseSeed(2)
        let y = noise(circle_count * noise_speed)  * window_h * amp_mult - ((window_h * amp_mult) - window_h) / 2
        // let y = sin(circle_count * noise_speed)  * window_h
        
        
        circle(x, y, circle_size)
        circle_count++;

        // if (circle_count == delay){
            // circle_count_delayed++
// 
        // }


    }
    if (circle_count > delay){
        strokeWeight(stroke_weight + 2) 
        strokeWeight(stroke_weight + 1) 

        stroke(255,255,55, 20)
        stroke(255,255,255, 10)
        
        // stroke(255,0,255)
        for (let i = 0; i < num_iter; i++){

            noiseSeed(1)
            // let x = noise((circle_count - delay)  * noise_speed) * window_w
            let x = noise(circle_count_delayed  * noise_speed) * window_w * amp_mult - ((window_w * amp_mult) - window_w) / 2
            
    
    
            noiseSeed(2)
            // let y = noise((circle_count - delay) * noise_speed)  * window_h
            let y = noise(circle_count_delayed * noise_speed)  * window_h * amp_mult - ((window_h * amp_mult) - window_h) / 2
            
            
            
            circle(x, y, circle_size)
            circle_count_delayed++;
    
    
        }
    }
    

}