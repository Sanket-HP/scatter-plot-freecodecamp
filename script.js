const width = 800;
const height = 500;
const padding = 60;

const svg = d3.select("#scatterplot")
    .attr("width", width)
    .attr("height", height);

d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json').then(data => {
    data.forEach(d => {
        d.Place = +d.Place;
        d.Seconds = +d.Seconds;
        d.Year = +d.Year;
        const parsedTime = d.Time.split(':');
        d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
    });

    const xScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.Year) - 1, d3.max(data, d => d.Year) + 1])
        .range([padding, width - padding]);

    const yScale = d3.scaleTime()
        .domain([d3.min(data, d => d.Time), d3.max(data, d => d.Time)])
        .range([padding, height - padding]);

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

    svg.append("g")
        .attr("id", "x-axis")
        .attr("transform", `translate(0, ${height - padding})`)
        .call(xAxis);

    svg.append("g")
        .attr("id", "y-axis")
        .attr("transform", `translate(${padding}, 0)`)
        .call(yAxis);

    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.Year))
        .attr("cy", d => yScale(d.Time))
        .attr("r", 5)
        .attr("data-xvalue", d => d.Year)
        .attr("data-yvalue", d => d.Time)
        .style("fill", d => d.Doping ? "red" : "steelblue")
        .on("mouseover", (event, d) => {
            const tooltip = d3.select("#tooltip");
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(
                `${d.Name}: ${d.Nationality}<br/>
                Year: ${d.Year}, Time: ${d3.timeFormat("%M:%S")(d.Time)}<br/>
                ${d.Doping ? `Doping: ${d.Doping}` : "No Doping"}`
            )
            .attr("data-year", d.Year)
            .style("left", `${event.pageX + 5}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
            d3.select("#tooltip").transition().duration(500).style("opacity", 0);
        });

    // Axes Labels
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .text("Year");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .text("Time in Minutes");
});
