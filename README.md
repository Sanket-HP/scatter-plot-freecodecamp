# Scatterplot Graph

This project is a scatterplot visualization built using D3.js, designed to visualize data on doping in professional bicycle racing. The app meets all the user stories and passes the FreeCodeCamp tests for the D3 Scatterplot Graph project.

## Features

- **Title:** Displays a title with the id `title`.
- **Axes:** Shows x-axis and y-axis with ids `x-axis` and `y-axis`, respectively.
- **Data Points:** Renders dots for each data point with the class `dot`.
- **Data Attributes:** Each dot has `data-xvalue` and `data-yvalue` attributes corresponding to their values.
- **Axis Labels:** Provides multiple tick labels on both axes with appropriate formats.
- **Tooltip:** Shows a tooltip with more information about each data point when hovered over.

## User Stories

1. **Title Element:** I can see a title element that has a corresponding id `title`.
2. **X-Axis:** I can see an x-axis that has a corresponding id `x-axis`.
3. **Y-Axis:** I can see a y-axis that has a corresponding id `y-axis`.
4. **Data Points:** I can see dots, each with a class of `dot`, representing the data.
5. **Dot Attributes:** Each dot has `data-xvalue` and `data-yvalue` attributes with their respective values.
6. **Data Value Range:** The `data-xvalue` and `data-yvalue` of each dot are within the actual data range and in the correct format.
7. **X-Axis Alignment:** The `data-xvalue` of each dot aligns with the corresponding value on the x-axis.
8. **Y-Axis Alignment:** The `data-yvalue` of each dot aligns with the corresponding value on the y-axis.
9. **Y-Axis Tick Labels:** The y-axis displays tick labels in `%M:%S` time format.
10. **X-Axis Tick Labels:** The x-axis displays tick labels showing the year.
11. **X-Axis Range:** The range of x-axis labels is within the range of the actual x-axis data.
12. **Y-Axis Range:** The range of y-axis labels is within the range of the actual y-axis data.
13. **Legend:** Displays a legend with id `legend` containing descriptive text.
14. **Tooltip:** Provides a tooltip with id `tooltip` that displays more information on mouseover.
15. **Tooltip Data:** The tooltip has a `data-year` property corresponding to the `data-xvalue` of the active area.

## Files

- `index.html`: The main HTML file that structures the application.
- `styles.css`: CSS file for styling the scatterplot graph and its elements.
- `script.js`: JavaScript file that includes D3.js code to render the scatterplot and handle interactions.

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a web browser to view the scatterplot graph.

## Dependencies

- [D3.js](https://d3js.org/): For data visualization and rendering.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
