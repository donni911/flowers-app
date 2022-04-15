Before I was started ,I used to write all task on white paper and draw component-structure, to see all objectively.
Some things I do first time such as ,round numbers, use collapse for Vue.
I paid attention to the little things, because the implementation of the product must match the design , 
so i spent for this task +- 7 hours(now i become stronger)

##### I use Vue because:
1) I learn this framework;
2)it have a good documentation ,it adaptive; 
3)it more leightweight than React (only 20kb)

Before starting develop app ,normally it`s to create folder-structure like vue recommends , because, if you work with team its important follow the recommendations, and if app become larger you can easily lost.

##### img
I add to each flower info new key-value -- img, each flower has their own img.

##### collapse
I can use ready solution bootstrap-vue ,but it`s not finished for vue3, 
so I decide to find a custom solution(@dafcoe/vue-collapsible-panel) and install it with npm.

##### svg-icon
I decide to create component, this component accept props 'name', in this way we can easily use component with props(that name of our svg)

##### sort
For this task I use sort method that vue propose, so i sort it by name, and if word higher in alphabet it become higher in array.

##### visible only 3 elem
For this I use default js method - slice.

##### showing 3 elem of X
With method 'arr.length' , I can eassily know how many objects in array.

##### Interpolation
I use it because in design we can see the name of flower is italic (v-html)

##### Round values
For this i decide to connect vue-numerals.

##### custom.css
I create this file because, I need to style a collapse, add variants of cards.
also I create css-variable for colors, in this way it will be easy to change it .

#### Question to designer
1)what will be next colors for cards, if it be not 3 , but 5,for example?
2)at breakpoint 360, if we have a long word of flower, flower cover the title ,is it ok?  how it should be? beacuse in design only short words.maybe we should reduce the font for title?
