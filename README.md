#Workshop 3: Images

Collect a series of images. Make a p5.js sketch that generates a new collage each time the sketch is run.
Include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions.
Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.


https://92386682.github.io/Workshop_Task_3/


Workshop task

Collage creator

Initial plan/first attempt

Collage/multiexposure creator using alpha channels, tint and randomisation of layering styles to create outcomes from an array of 16 images combined 4 times. 
Basing this project off my photography practice, I was interested in utilising variable alpha levels t create a multilayered photograph creator in response to the collage task this week.
Beginning with a basic image load, as demonstrated in the workshop, I then expanded my array to 7 images, utilizing a for() loop to manipulate the alpha channel, also demonstrated in the workshop. After this, two images were randomly selected from the array and layered.
![24](https://github.com/user-attachments/assets/73da1c9e-5f01-475b-a1a5-958437b2e968)
![25](https://github.com/user-attachments/assets/9412fca0-c563-4c0c-9070-d9d972c2f6b3)

 
At this point, everything started going wrong. Between the code not running and running but not layering, I then started troubleshooting by isolating portions of code, and in the research for fixes, discovered the blendMode() parameter of p5. This effectively meant that p5 had a built in capacity to achieve the results I was after.
![26](https://github.com/user-attachments/assets/b17deafd-2f53-4410-a46e-7f07d0ee0d2b)
![27](https://github.com/user-attachments/assets/21e777eb-c0fa-4616-b16d-517eba4fce27)

 
Building on this, I started to see successful results. Broadening diversity with an if/else variable to choose between two separate blend modes, I expanded the array to 17 images.
This again broke the code, and after troubleshooting for several hours, isolating the code, manually resizing every image, streamlining the code and every other possible fix I could find information on, it turned out that I had deleted the 1st linked image in the folder without removing the references to said image in the code. Removing this from the array, I was able to get the generator running again.
 ![28](https://github.com/user-attachments/assets/a145d765-482e-4da5-9c3a-5b807e048cb3)

Expanding the range of results, I added rotation to each layer of image generation, random RGB tints, and added a limiter variable to stop the layering at 4 “exposures”. Additionally, I found out that instead of 
``
'let falseswitch = random(1, 10)
If (falseswitch <5)'
Could be streamlines into 
' let falseswitch = random(1);
    if (falseswitch < 0.25) 
    if else' ``
via MDN web_docs documentation on if statements.
Results
 ![Uploading Capture1.PNG…]()
![Uploading Capture2.PNG…]()


