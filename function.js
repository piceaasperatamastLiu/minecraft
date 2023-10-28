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
    // var svg = d3.select("#quad");
    // for (var i = 0; i < array.length; i++) {
    //     var type = array[i].type;
    //     var x = array[i].x;
    //     var y = array[i].y;
    //     var z = array[i].z;
    //     if (type == "square") {
    //         svg.append("rect")
    //             .attr("x", x).attr("y", z).attr("width", 5).attr("height", 5).style("fill", "red");
    //     }
    //     else if (type == "circle") {
    //         svg.append("circle")
    //             .attr("cx", x).attr("cy", z).attr("r", 5).style("fill", "blue");
    //     }
    //     else if (type == "triangle") {
    //         svg.append("polygon")
    //             .attr("points", x + "," + z + " " + (x + 5) + "," + z + " " + (x + 5) + "," + (z + 5))
    //             .style("fill", "green");
    //     }
    // }

    // const svgWidth = 750;
    // const svgHeight = 500;
    // const padding = 0;

    // const svg = d3.select("#quad")
    //     .attr("height", svgHeight)
    //     .attr("width", svgWidth);

    // const mapContainer = svg.append("g"); //添加mapContainer装载地图绘制内容

    // /** 
    //  * 获取投影，并配置
    //  */
    // const x0 = padding;
    // const y0 = padding;
    // const x1 = svgWidth - padding * 2;
    // const y1 = svgHeight - padding * 2;
    // const projection = d3.geoMercator().fitExtent(
    //     [
    //         [x0, y0], //左上角坐标
    //         [x1, y1], //右下角坐标
    //     ], BeijingGeoJson);

    // /**
    //  * 获取geographic path generator，并配置
    //  */
    // const pathGenerator = d3.geoPath().projection(projection);

    // /** 
    //  * 利用pathGenerator与features生成path路径，绘制地图
    //  */
    // const mapPath = mapContainer.selectAll("path")
    //     .data(BeijingGeoJson.features) //数据绑定
    //     .join("path")
    //     .attr("d", pathGenerator) //绘制path
    //     .attr("stroke-width", 0.5)
    //     .attr("stroke", "#000000")
    //     .attr("fill", "#ffffff");

    var map = new ol.map({
        target: "map",
        layers: [
            new ol.layer.Tile
        ]
    })
}
