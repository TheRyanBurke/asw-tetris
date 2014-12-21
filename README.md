Tetris Co-op VR
==========

By [Ansible Games](https://twitter.com/AnsibleGames)

* Ryan Burke

### About

This is an experimental project to see how easy it is to build on top of the Leap Motion VR quickstart for JS.

The target game experience is to have one player playing traditional Tetris on a browser of his/her choice (desktop or mobile). The second player is managing the Tetromino queue using an Oculus Rift + Leap Motion VR setup. The two players must verbally communicate to keep the game going as long as possible.

HTML5 Tetris forked from: https://github.com/jbouny/asw-tetris

Leap Motion VR quickstart: https://github.com/leapmotion-examples/javascript/tree/master/v2/vr-quickstart

Trello project: https://trello.com/b/UO0IhQcy/tetris-co-op-vr

### Requirements

1. Oculus Rift DK2 with 0.4.4+ runtime
1. Leap Motion with 2.2.1+ runtime 
1. Leap Motion mounted to DK2 front https://www.leapmotion.com/product/vr
1. FireFox VR Beta for VR player http://vrhelloworld.com/builds/

### Running

1. Clone this project
1. Use a local web host like mongoose or tinyweb to serve files
1. Tetris player can use any browser to start playing
1. VR player must use Firefox VR Beta build: http://vrhelloworld.com/builds/


Jeremy's original readme to follow-

ASW-Tetris : A Scalable Web Tetris
==========

This project offer a way to explore possibilities of current web technology with the visualization of a simple Tetris game.

### Demo
http://www.jeremybouny.fr/tetris/

### Features

- Tetris game
- Full cross platform game (in browser)
- Use of specific inputs
  - Mouse / Keyboard and buttons on PC
  - Gestures and buttons on smartphone
- Different viewers for a unique game
- Dynamic selection of the viewer
- A single web page

### Web technologies

Some viewers allow to viualize the game :

- ASCII Viewer : A simple way to display information with characters.
- 2D canvas Viewer : The basic mode with simple blocks in 2D. Use of the canvas introduced with HTML5.
- 3D Viewer : Use of others stuff introduced with HTML5 : WebGL. The viewer is based on the library three.js in order to simplify it.
- Advanced 3D Viewer : This view extends the simple 3D viewer and add use of shaders and some other elements.

Other viewers will be surely developed as SVG Viewer, CSS Viewer, CSS3 Viewer and others.

### Cross platform / Compatibility

/!\ This part is to complete in order to check the compatibility

The application was tested on Windows, Mac, Linux, iOS and Android and seems to works fine on every browsers.
Some problems can been spotted like the imposssibility to use fullscreen or to use WebGL (but a 3D render in canvas instead of).

### Libraries

The application is based on :

- JQuery 1.10.2 : Provide simple dom selector, events and callbacks (https://github.com/jquery/jquery)
- Hammer.JS v1.0.6dev (11/05/13) : Provide complete gesture recognition and abstraction of input (touch, mouse) (https://github.com/EightMedia/hammer.js/tree/v1.0.5)
- jQuery plugin for Hammer.JS v1.0.0 : Use of Hammer events based on JQuery selector (https://github.com/EightMedia/jquery.hammer.js)
- three.js r62 : Complete 3D library based on WebGL (https://github.com/mrdoob/three.js/)

### Screenshots

![Alt text](/screenshots/asw-tetris1.jpg "Example of a view in ASCII")
![Alt text](/screenshots/asw-tetris2.jpg "Example of a view in 2D")
![Alt text](/screenshots/asw-tetris3.jpg "Example of a view in 3D")
![Alt text](/screenshots/asw-tetris4.jpg "Example of a view in extended 3D")
