# 2D/3D Conway's Game of Life with Sound
A website made in p5.js that runs a 2D and 3D program of Conway's Game of Life. Additionally, it emits a frequency based on the locations of the live cells.

## Conway's Game of Life
Conway's Game of Life is cellular automation that visualizes the evolution of an environment that abides to the following rules:

1. Any live cell with fewer than two live neighbours dies
2. Any live cell with two or three live neighbours lives
3. Any live cell with more than three live neighbours dies
4. Any dead cell with exactly three live neighbours becomes a live cell

## Functionality

### 3D
Alongside the normal 2D program, there is an option to run Conway's Game of Life in 3D. This version practically utilizes all the same rules as above, while also considering a cell's neighbors in the z-plane.

![3D image](/images/3D.png)

### Sound
If the Sound button is turned on, then the program will emit a frequency for every generation. The algorithm loops through every live cell and pushes a frequency, based on the cell's location, to a list. Then, the average of that list is emitted to the user. This feature works for the program in both 2D and 3D.

## UI
![Ui image](/images/UI.png)
