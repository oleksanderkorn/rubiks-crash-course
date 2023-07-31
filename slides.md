---
theme: ./slidev-theme-xebia
---

# Getting started with Rubik's Cube

A Beginner's Crash Course

<!--

-->

---
transition: fade-out
---

# What is Rubik's Cube?

Brief history and background of the Rubik's Cube

- 🛠 **The Rubik's Cube** -  was invented by Hungarian sculptor and professor Ernő Rubik in 1974
- 🪄 Originally called the **Magic Cube**, became worldwide popular after licensing by the Rubik's brand in 1980 
- 💰 It has become one of the most iconic and best-selling puzzles of all time
- The cube consists of **54 colorful stickers** on its six faces, with each face having nine smaller squares (3x3 grid)
- The objective is to twist and turn the cube's layers until each face displays a single color
- There are over **43 quintillion possible** combinations, making it a complex and challenging puzzle to solve
- **6 center pieces** are fixed and not moving at all, everything is moving around them

<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--

-->

---
transition: fade-out
---

# Terminology

The terminology used in Rubik's Cube solving

- Faces: The six sides of the cube (front, back, left, right, top, and bottom).
- Edges: The pieces with two visible stickers, **12 edge** pieces in total
- Corners: The pieces with three visible stickers, **8 corner** pieces in total
- Rotations: The 90-degree turns of a single face (clockwise or counterclockwise).
- Scramble: The initial randomized state of the cube.

<br>
<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--

-->

---
transition: fade-out
---

# Notation

The standard notation of rubik's cube

- **R** (Right): Turn the right face clockwise.
- **L** (Left): Turn the left face clockwise.
- **U** (Up): Turn the top face clockwise.
- **D** (Down): Turn the bottom face clockwise.
- **F** (Front): Turn the front face clockwise.
- **B** (Back): Turn the back face clockwise.
- Adding an apostrophe (e.g., R') denotes a counterclockwise turn.
- Adding a 2 (e.g., R2) denotes a 180-degree (half) turn.

<br>
<br>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--

-->

---
transition: fade-out
---

# Visual Notation

<img src="/notation1.png">
<hr>
<img src="/notation2.png">
<hr>
<img src="/notation3.png">

<br>
<br>

<style>
h1 {
  text-align: center;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
img {
  height: 25%;
  margin: auto;
}
</style>

<!--

-->


---
transition: fade-out
---

# Beginners Method Steps

|                             |                                                   |
| --:                         | ---                                               |
| <kbd>WHITE CROSS</kbd>      | solve the white cross                             |
| <kbd>WHITE CORNERS</kbd>    | solve the first layer corners                     |
| <kbd>SECOND LAYER</kbd>     | solve the edges of second layer                   |
| <kbd>TOP CROSS</kbd>        | solve the yellow cross on top                     |
| <kbd>MATCH CROSS</kbd>      | match the yellow cross with center pieces         |
| <kbd>MATCH CORNERS</kbd>    | put all 4 top corners into the correct spot       |
| <kbd>SOLVE THE CUBE</kbd>   | rotate the cube upside down and solve the corners |

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
/* remove table lines */
th {

}
</style>

---
transition: fade-out
---

# White Cross 

Solve the white cross preserving the order of faces. The order is fixed: Green <mdi-arrow-right-bold/> Orange <mdi-arrow-right-bold/> Blue <mdi-arrow-right-bold/> Red

* Find any white edge piece on the bottom layer
* Move it along the bottom layer to align it with the center piece of the same color
* Move it to the top layer, turning the current face 180 degrees
* Once the cross is done turn the cube upside down and proceed to the next step

<div class="images">
  <img src="/white_cross_before.png">
  <mdi-arrow-right-bold/>
  <img src="/white_cross_after.png">
</div>

<style>
h1 {
  /* text-align: center; */
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
p {
  /* text-align: center; */
}

div.images {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}
img {
  height: 240px;
}
</style>

 <!-- Identify the white center: 
 Start by finding the center square with the white color. 
 This center will act as your reference point throughout the solving process.
 Find the white edge pieces: Look for the four edge pieces with white stickers. These edges will form the white cross.
 Position the white edge pieces correctly: Rotate the cube so that the white edge pieces are aligned with their respective centers. For example, the white-red edge should be positioned next to the red center, and so on.
 Align the edges with the center: Use the standard notation (R, L, U, D, F, B) to rotate the layers and align the white edges with the white center. Remember that clockwise rotations (e.g., R) will bring the white sticker closer to the white center. -->
---
transition: fade-out
---

# White Cross Exceptions

Solve the Flipped white edge piece or move the edge from middle layer to the bottom layer

* Anytime an edge piece is flipped (example above), fix it by doing the following moves:

<img src="/white_edge_flipped.png">

* Anytime you find a white edge piece that is not in the bottom layer, you can move it into the bottom by doing the following moves:

<img src="/white_edge_middle.png">

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
img {
  height: 110px;
}
</style>

<!-- 
Anytime an edge piece is flipped (example above), fix it by doing the following moves.

Anytime you find a white edge piece that is not in the bottom layer, you can move it into the bottom by doing the following moves:

And then solve it like you would for any white edge in the bottom layer.

Solve all 4 of the white edge pieces to make a cross. Make sure you always look at both colors on each piece so that you end up with the side colors matching as well.

Once the cross is complete, you can move on to solving the white corners.
-->

---
transition: fade-out
---

# The most Important Algorithm: Sexy Move

Consists of 4 moves. Right side: R U R' U' or Left side: L' U' L U

<img src="/4moves.gif">

<!-- <video autoplay loop muted>
  <source src="/4moves.MOV" type="video/mp4">
</video> -->


<br>

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  p {
    text-align: center;
  }
  video, img {
    border-radius: 2rem;
    margin: auto;
    height: 70%;
  }
</style>

---
transition: fade-out
---

# White Corners

Solving 4 corners of the first layers

* After flipping the cube so that the yellow face is on top, look for a top corner piece with white color
* Place it above the correct spot on the bottom layer it should go to

<img src="/white_corners.png">

* Perform the **Sexy Move [R U R' U']** n-times (1-4) until the corner piece is in the correct spot on the bottom layer
* Repeat the process for all 4 corners
* If you find a white corner incorrectly stuck in the bottom layer, you can bring it into the top layer by holding it on the front/right and doing the same right 4-moves **[R U R' U']**

<img src="/white_corners_4_moves.png">

<br>

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    height: 80px;
    margin: auto;
  }
</style>

<!-- 

With the cross on the bottom, find a corner piece in the top layer with white on it. Turn the top layer so the surrounding centers match the colors on the corner.

Hold the cube so the corner piece is on the front/right, and repeat the right handed 4-moves until this corner is solved.

You can also use the left 4-moves if you hold the piece on the front/left to start.

Repeat until all of the first layer corners are solved. If find a white corner incorrectly stuck in the bottom layer, you can bring it into the top layer by holding it on the front/right and doing the right 4-moves. The tutorial video above shows an example of this.

-->
---
transition: fade-out
---

# White Corners Solved

After all 4 white corners are solved, the first layer is complete, check that all 4 side colors match the center pieces.

<div class="images">
  <img src="/white_corners_before.png">
  <mdi-arrow-right-bold/>
  <img src="/white_corners_after.png">
</div>


<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  div.images {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
</style>

---
transition: fade-out
---

# Second layer 

Solve the 4 edges of the second layer

* Find an edge piece in the top layer that do not have yellow color on it
* Move it around so that it matches with the center piece of the same color
* Case 1: If the edge should go to the right side, move it away to the left side
  * Using 4-moves we learned earlier **[R U R' U']** move the corner piece out to the top layer
  * Now reinsert the corner using left hand 4-moves **[L' U' L U]**
* Case 2: If the edge should go to the left side, move it away to the right side.
  * Using 4-moves we learned earlier **[L' U' L U]** move the corner piece out to the top layer
  * Now reinsert the corner using right hand 4-moves **[R U R' U']**
* If an edge you are looking for is stuck somewhere in the 2nd layer, move any edge into its spot using one of the 2 algorithms above. This will cause the edge to come out into the top layer.
* Repeat the process for all 4 edges until all of the 2nd layer edges are solved.

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    height: 80px;
    margin: auto;
  }
</style>

<!-- Find an edge piece in the top layer without yellow as either of its 2 colors.
Turn the top so that it matches a center.
Face the piece and check if the top color matches the right center or left center.
If it matches the right side, do the following moves:
- Turn the top with your right hand
- Do the right 4-moves
- Rotate the cube to face the right side
- Do the left 4-moves

- If it matches the left side, do the following moves:
- Turn the top with your left hand
- Do the left 4-moves
- Rotate the cube to face the left side
- Do the right 4-moves
 -->

---
transition: fade-out
layout: center
---

# Second layer visualization

* Find an edge piece in the top layer that do not have yellow color on it and move so that it matches with the center piece of the same color:
<img src="/second_layer_match_edge.png">
* Case 1: If the edge should go to the right side, move it away to the left side, take out the corner and then reiunsert using left hand 4-moves **[L' U' L U]**
<img src="/second_layer_case1.png">

* Case 2: If the edge should go to the left side, move it away to the right side, take out the corner and then reiunsert using right hand 4-moves **[R U R' U']**
<img src="/second_layer_case2.png">

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    height: 80px;
    margin: auto;
  }
</style>

<!-- Find an edge piece in the top layer without yellow as either of its 2 colors.
Turn the top so that it matches a center.
Face the piece and check if the top color matches the right center or left center.
If it matches the right side, do the following moves:
- Turn the top with your right hand
- Do the right 4-moves
- Rotate the cube to face the right side
- Do the left 4-moves

- If it matches the left side, do the following moves:
- Turn the top with your left hand
- Do the left 4-moves
- Rotate the cube to face the left side
- Do the right 4-moves
 -->


---
transition: fade-out
---

# Top Yellow Cross

Solving the top yellow cross - 4 yellow edge pieces should for a yellow cross on the top

* Hold the cube to match one of the following cases (ignore the corner pieces)

<img src="/yellow_cross_cases.png">

* Case 1 **Dot**: no edge pieces are solved, do the following moves **[F R U R' U' F']**
  * This is the same as the sexy move, but with a front face turn at the beginning and end
* Case 2 **L-shape**: 2 edge pieces are solved as L, put 5them on top left and do same moves **[F R U R' U' F']**
* Case 2 **Line shape** 2 edge piece are solved as a line, make the line horizontal and do same moves **[F R U R' U' F']**

<img src="/yellow_cross_example.png">

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    height: 80px;
    margin: 0 auto;
    border-radius: 1rem;
  }
</style>

<!-- How to memorize this algorithm:
- Turn the front clockwise
- Do the 4-move sequence
- Turn the front counterclockwise

If the cross is not solved yet, hold the cube to match the new case and repeat. 
-->

---
transition: fade-out
---

# Match Yellow Cross

Match Yellow cros edge pieces with the center pieces

* Align as many yellow edges as possible with their respective centers - you can line up either none or 2 or 4 edges. If all 4 match, you have finished this step.
<img src="/match_yellow_cross_2_pairs.png">

* If 2 or none aligned, do the folowing moves from anywhere:
<img src="/match_yellow_cross_steps.png">
* Then turn the top to match all 4 colors. If you can only match 2 colors, then repeat this step once again.

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    height: 80px;
    margin: 0 auto;
    border-radius: 1rem;
  }
</style>

<!-- 
  How to memorize this algorithm:
  The first 3 moves of the 4-move sequence.
  Look at the pair of pieces from the bottom.
  Watch how they move away, and then back into the bottom.
  Turn the top to match all 4 colors. 
  If you can only match 2 colors, then repeat this step.
-->

---
transition: fade-out
---

# Match Yellow Cross Example

How to memorize this algorithm:

* Do The first 3 moves of the 4-move sequence: move the right side up, move the pair to the left, move the right side back down.
* Keep moving pair away once more to the left, right side up again, and then put the pair all the way back to the bottom.

<img src="/Ycross.gif">

<!-- <video autoplay loop muted>
  <source src="/Ycross.MOV" type="video/mp4">
</video> -->

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    border-radius: 2rem;
    margin: auto;
    height: 55%;
  }
</style>

<!-- 

Do The first 3 moves of the 4-move sequence: 
move the right side up, move the pair to the left, move the right side back down. 

Keep moving pair away once more to the left, right side up again, and then put the pair all the way back to the bottom.
 -->


---
transition: fade-out
---

# Match Top Yellow Corners

Put all 4 top yellow corners into the correct spots

* Find the corner piece that is in the correct spot and hold it in the front right position. Either 4, 1 or 0 corners will be in the correct spot. If 4 are correct, you are done with this step as well and can skip.
* If only 1 is correct, hold it on the front/right side. If none are correct, do it from anywhere. Example of the correct corner in the front/right position:
<img src="/yellow_corner_correct_position.png">
* Do the following algorhitm until all 4 corners are in the correct spot, you may need to do it once or twice, if the corners are flipped that's fine for this step: 
<img src="/right_up_left_up_right_down_left_down.png">

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  img {
    height: 80px;
    margin: 0 auto;
    border-radius: 1rem;
  }
</style>

---
transition: fade-out
---

# Match Yellow Corners Example

How to memorize this algorithm:

* Turn the top with your right hand, then turn the right side up
* Turn the top with your left hand, then turn the left side up
* Repeat, but go down instead of up.
* If the corners are still not matched, repeat the algorithm again.

<img src="/Ycorners.gif">

<!-- <video autoplay loop muted>
  <source src="/Ycorners.MOV" type="video/mp4">
</video> -->

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  video, img {
    border-radius: 2rem;
    margin: auto;
    height: 55%;
  }
</style>

---
transition: fade-out
---

# Solve the whole cube

Rotate the cube white side up and solve 4 corners using (slightly adjusted) 4-moves

<div class="images">
  <img src="/solve_corners_before.png">
  <mdi-arrow-right-bold/>
  <img src="/solve_corners_after.png">
</div>

* You may have 2, 3, or 4 unsolved corner pieces.

<img src="/unsolved_yellow_corners.png">

* Repeatedly do the 4-move sequence until the front/right corner is solved (has yellow on the bottom).
* When the front/right corner is solved, rotate only the bottom layer so the next unsolved corner will be front/right and repeat the 4-move sequence until it is solved, do it for all unsolved corners.

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  div.images {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100px;
  }
</style>

<!-- 
Common mistakes:
Turning the whole cube to get the next corner to the bottom/right. Make sure you turn only the bottom layer.
Not finishing the 4-moves because the corner is solved after 3 moves. Make sure you always finish the 4-moves.
Note: If you only have 1 corner unsolved while the rest of the cube is solved, or if you followed step 7 correctly but it does not work, then your cube is unsolvable, and needs to be taken apart and reassembled.
 -->

---
transition: fade-out
---

# Final Solve Example

How to memorize this algorithm:

### Common mistakes:
  * Turning the whole cube to get the next corner to the bottom/right. Make sure you turn only the bottom layer.
  * Not finishing the 4-moves because the corner is solved after 3 moves. Make sure you always finish the 4-moves.

<img src="/final.gif">

<!-- <video autoplay loop muted>
  <source src="/final.MOV" type="video/mp4">
</video> -->

<style>
  h1 {
    text-align: center;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  video, img {
    border-radius: 2rem;
    margin: auto;
    height: 55%;
  }
</style>

---
transition: fade-out
---

# Base Moves Cheatsheet

<img src="https://jperm.net/images/notation.png">

<br>

<style>
h1 {
  text-align: center;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
img {
  height: 80%;
  margin: auto;
}
</style>

<!--

-->

---
layout: center
class: text-center
---

# Learn More

[jPerm.net 3x3 website](https://jperm.net/3x3) · [TPS Cube Timer ](https://tpscube.xyz/) · [jPerm YT Tutorial](https://youtu.be/7Ron6MN45LY)
