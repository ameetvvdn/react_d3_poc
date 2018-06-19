D3 React Demo
==============

Exploring D3.js (v4): ES2015/ES6, webpack, D3 and React.js


# Architechture
React frontend component

- `./src/` 	folder for code 
- `./build/` 	for compiled version
- `./config/` for configuration

# Requirements
- Yarn/npm

## Development

Install dependencies with yarn

```
$ yarn
```
Install dependencies with npm

```
$ npm install
```

To run in development mode use 
```
$ yarn start
```

To run in development mode use (npm)
```
$ npm run start
```

## Config
Configurable environment variables can be found in the folders `./config`.

## Style
The project contains a .eslintrc file that defines the style rules for the project.

## About D3
D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
D3.js is a data visualization tool, you need to code and develop your own library.

1. Data Driven: D3 is data driven. It can use static data or fetch it from the remote server in different formats such as Arrays, Objects, CSV, JSON, XML etc. to create different types of charts.
2. DOM Manipulation: D3 allows you to manipulate the Document Object Model (DOM) based on your data.
3. Data Driven Elements: It empowers your data to dynamically generate elements and apply styles to the elements, be it a table, a graph or any other HTML element and/or group of elements.
4. Dynamic Properties: D3 gives the flexibility to provide dynamic properties to most of its functions. Properties can be specified as functions of data. That means your data can drive your styles and attributes.
5. Types of visualization: With D3, there are no standard visualization formats. But it enables you to create anything from an HTML table to a Pie chart, from graphs and bar charts to geospatial maps.
6. Custom Visualizations: Since D3 works with web standards, it gives you complete control over your visualization features.
7. Transitions: D3 provides the transition() function. This is quite powerful because internally, D3 works out the logic to interpolate between your values and find the intermittent states.
8. Interaction and animation: D3 provides great support for animation with functions like duration(), delay() and ease(). Animations from one state to another are fast and responsive to user interactions.

## Advantages of D3:
- D3.js is a Javascript library. So, it can be used with any JS framework of your choice like React.js, Angular.js or Ember.js.
- D3 focuses on data, so it is the most appropriate and specialized tool for data visualizations.
- D3 is open-source. So you can work with the source code and add your own features.
- It works with web standards so you don't need any other technology or plugin other than a browser to make use of D3.
- D3 works with web standards like HTML, CSS and SVG, there is no new learning or debugging tool required to work on D3.
- D3 does not provide any specific feature, so it gives you complete control over your visualization to customize it the way you want. This gives it an edge over other popular tools like Tableau or QlikView.
- Since D3 is lightweight, and works directly with web standards, it is extremely fast and works well with large datasets.
- It is based on open standards, not a proprietary framework. Since at its core D3 is a library for manipulating DOM objects, it gives you immediate access to things you already know and use every day in your browser. This also makes it work well with existing code.
- It is modular. You can use just a small piece of D3 if you don't want to load the whole library each time.
- It focuses on objects and concepts, not pre-built graphs. You can create TONS of things with curves, arcs, rectangles, points, etc.
- Easy to plot non-standard visualization: It is not specific to Graphs or Charting and can be used for any type of visualization. As the name itself suggests, it is more of “data driven documents” 
- Highly customizable because of it’s low-level API.

## D3 in Current Project
- ###### Type of Charts
    1. Bar Chart
    2. Line Chart

   **1. Bar Chart**
    ![Alt text](https://raw.githubusercontent.com/ameetvvdn/react_demo/master/screenshots/BarChart.JPG?raw=true "Optional Title")

    sample.json: [
        { title: 'A', value: 21, year: 1984 },
        { title: 'B', value: 81, year: 1985 },
        { title: 'C', value: 25, year: 1987 }
    ];
    
    Files: 
     - Axes.js: Main responsibility of the Axes component is to prepare correct props for each Axis.
     - Axis.js: Component contains a new group element within the SVG element where we will draw the x and y axis;
     - Bars.js: Bars are rendered completely by React and d3 is used for math. Besides calculating bar dimensions, we can use    d3  to calculate color based on value. 
     - BarCharts: Component contains SVG element where we will draw the bar chart.

    **2. Line Chart**
    ![Alt text](https://raw.githubusercontent.com/ameetvvdn/react_demo/master/screenshots/LineChart.JPG?raw=true "Optional Title")
    sample.json: [
        { day: '02-11-2016', count: 180 },
        { day: '02-12-2016', count: 250 },
        { day: '02-13-2016', count: 150 },
        { day: '02-14-2016', count: 496 },
    ];

    Files: 
     - Axis.js: Component contains a new group element within the SVG element where we will draw the x and y axis;
     - Grid.js: Main responsibility of the Grid component is to prepare grids on Axis based on props. 
     - Dots.js: Component shows value plot in line charts.
     - LineCharts: Component contains SVG element where we will draw the line chart.
     - ToolTip.js: ToolTip component show data related to value in line chart 

## Future Improvements/Scope
 D3 focuses on data, so we can create realtime charts or other visualization tool depending upon data. It is not specific to Graphs or Charting and can be used for any type of visualization.

Note: This is just a POC, so basic charts have been created. It doesn't contain any complex or real time chart.