array = [];

class CMyPoint {
    constructor(type, x, y, z) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function WriteData() {
    var type = document.getElementById("select").value;
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var z = Number(document.getElementById("z").value);

    var tmp = new CMyPoint(type, x, y, z);
    array.push(tmp);
    paint();
}

paint = function () {
    var svg = d3.select("#quad");
    for (var i = 0; i < array.length; i++) {
        var type = array[i].type;
        var x = array[i].x;
        var y = array[i].y;
        var z = array[i].z;
        if (type == "square") {
            svg.append("rect")
                .attr("x", x).attr("y", z).attr("width", 5).attr("height", 5).style("fill", "red");
        }
        else if (type == "circle") {
            svg.append("circle")
                .attr("cx", x).attr("cy", z).attr("r", 5).style("fill", "blue");
        }
        else if (type == "triangle") {
            svg.append("polygon")
                .attr("points", x + "," + z + " " + (x + 5) + "," + z + " " + (x + 5) + "," + (z + 5))
                .style("fill", "green");
        }
    }
}
