# Random image generator 

* When you open an index.html in a browser, you can see the button "Show pictures".
![image](https://user-images.githubusercontent.com/38878597/115174156-69e29c80-a0d1-11eb-8070-70010a6da340.png)

* If you press the button "Show pictures", six pictures are displayed.
![image](https://user-images.githubusercontent.com/38878597/115174187-749d3180-a0d1-11eb-84ba-6644b12ef45e.png)

* When you press the button "Mix pictures" pictures are mixed and displayed randomly. To achieve this pictures were stored in an array, then I loop through this array. A number with Math.random is generated and multiplied by the loop iterator added by one. Then Math.floor rounds the value to a round number. Image src in the HTML is changed when the button is clicked.
![image](https://user-images.githubusercontent.com/38878597/115174221-8979c500-a0d1-11eb-8aaf-e92433cf3910.png)

* If you press the button "Hide pictures" pictures are not displayed. You see the button "Show pictures".