
/*if (window.innerWidth > (0.6*window.innerHeight)){
    var width = 0.6*window.innerHeight;
    var height = 0.6*window.innerHeight;
}else{
    var width = window.innerWidth;
    var height = window.innerHeight;

}*/

//Variables to help check for zoom.
var windowSize = {
        window_width: window.outerWidth,
        h: window.outerHeight,
        iw: window.innerWidth,
        ih: window.innerHeight
    };

if (window.innerWidth >= window.innerHeight){
    if (window.innerHeight > window.innerWidth - 200){
        width = window.innerWidth - 200;
        height = window.innerHeight;
    }else{
        var width = 1*window.innerHeight;
        var height = 1*window.innerHeight;
    }
}else{
    if (window.innerWidth > window.innerHeight - 200){
        width = window.innerWidth;
        height = window.innerHeight - 200;
    }else{
        var width = window.innerWidth;
        var height = window.innerWidth;
    }
}
function drawTheBoard(width, height){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("version", "1.1");
    svg.setAttribute("viewBox","0 0 " + width + " " + height);
    svg.setAttribute("preserveAspectRatio","xMidYMid meet");
    svg.setAttribute("id", "the_board")

    dartsnumbers=[10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 1, 18, 4, 13, 6];
    identifyer = "abcdefghijklmnopqrstuvwxyz";

    //Inner singles

    SDorT = 1;
    layers = 10;
    partitions = 3;
    change_partitions_to = 5;
    change_partitions_at_layer = 2;
    for (j = 0; j < layers; j ++) {
        if (j == change_partitions_at_layer){
            partitions = change_partitions_to;
        }
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (99/451)*width;
            min_radius = (16/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            if (Math.trunc(i/partitions)%2 == 0){
                section.setAttribute("fill", "#140B0D");
                section.classList.add("button", "Black_Section", "hit");
            }else{
                section.setAttribute("fill", "#F9DEBB");
                section.classList.add("button", "White_Section", "hit");
            }
            section.setAttribute("id","Inner_Single" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + dartsnumbers[Math.trunc(i/partitions)]*SDorT, "this_section_is__IS" + dartsnumbers[Math.trunc(i/partitions)]);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    // Triple Ring

    SDorT = 3;
    layers = 3;
    partitions = 5;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (107/451)*width;
            min_radius = (99/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            if (Math.trunc(i/partitions)%2 == 0){
                section.setAttribute("fill", "#FF1600");
                section.classList.add("button", "Red_Section", "hit");
            }else{
                section.setAttribute("fill", "#05AE2D");
                section.classList.add("button", "Green_Section", "hit");
            }
            section.setAttribute("id","Triple" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + dartsnumbers[Math.trunc(i/partitions)]*SDorT, "this_section_is__T" + dartsnumbers[Math.trunc(i/partitions)]);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Outer Singles
    SDorT = 1;
    layers = 8;
    partitions = 5;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (162/451)*width;
            min_radius = (107/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            if (Math.trunc(i/partitions)%2 == 0){
                section.setAttribute("fill", "#140B0D");
                section.classList.add("button", "Black_Section", "hit");
            }else{
                section.setAttribute("fill", "#F9DEBB");
                section.classList.add("button", "White_Section", "hit");
            }
            section.setAttribute("id","Outer_Single" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + dartsnumbers[Math.trunc(i/partitions)]*SDorT, "this_section_is__OS" + dartsnumbers[Math.trunc(i/partitions)]);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Double Ring
    SDorT = 2;
    layers = 3;
    partitions = 5;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (170/451)*width;
            min_radius = (162/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            if (Math.trunc(i/partitions)%2 == 0){
                section.setAttribute("fill", "#FF1600");
                section.classList.add("button", "Red_Section", "hit");
            }else{
                section.setAttribute("fill", "#05AE2D");
                section.classList.add("button", "Green_Section", "hit");
            }
            section.setAttribute("id","Double" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + dartsnumbers[Math.trunc(i/partitions)]*SDorT, "this_section_is__D" + dartsnumbers[Math.trunc(i/partitions)]);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Outerbull
    layers = 2;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (16/451)*width;
            min_radius = (6.35/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            section.setAttribute("fill", "#05AE2D");
            section.classList.add("button", "Green_Section", "hit");
            section.setAttribute("id","Outer_Bull" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + 25,"this_section_is__B25");
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Innerbull - centre circle
    for (i = 0; i < 1; i++){
        radius = (3.175/451)*width;
        centrex = width/2;
        centrey = height/2;

        var section = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        section.setAttribute("cx", centrex);
        section.setAttribute("cy", centrey);
        section.setAttribute("r", radius);
        section.setAttribute("fill", "#FF1600");
        //section.setAttribute("stroke", "#FF1600");
        section.classList.add("button", "Red_Section", "hit");
        section.setAttribute("id","Inner_Bull_Centre");
        section.classList.add("score_" + 50,"this_section_is__B50");
        svg.appendChild(section);
        document.getElementById("container").appendChild(svg);
    }

    //Inner bull - 20 sections
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (6.35/451)*width;
            min_radius = (3.175/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");

            section.setAttribute("fill", "#FF1600");
            //section.setAttribute("stroke", "#FF1600");
            section.classList.add("button", "Red_Section", "hit");
            section.setAttribute("id","Inner_Bull" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + 50, "this_section_is__B50");
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Miss layer 1
    layers = 2;
    partitions = 5;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (186/451)*width;
            min_radius = (170/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            section.setAttribute("fill", "#140B0D");
            section.classList.add("button", "Black_Section", "hit");

            section.setAttribute("id","Inner_Miss" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }
    //Miss layer 2
    layers = 3;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (225.5/451)*width;
            min_radius = (186/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            inner_radius = min_radius + j*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));
            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " A " + inner_radius + " " + inner_radius + ", 0, 0, 1, " + new_inner_xcoordinate + ", " + new_inner_ycoordinate +
            " L " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate + " Z");
            section.setAttribute("fill", "#140B0D");
            section.classList.add("button", "Black_Section", "hit");

            section.setAttribute("id","Outer_Miss" + dartsnumbers[Math.trunc(i/partitions)] + "_" + identifyer[i%partitions] + "_" + (j+1));
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    ///////Wires///////

    //Bullseye
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (6.35/451)*width;
            min_radius = (0)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate);
            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");

            section.setAttribute("id","Inner_Bull_Wire" + dartsnumbers[Math.trunc(i/partitions)]);
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Outer Bull
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (16/451)*width;
            min_radius = (0)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate);
            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");

            section.setAttribute("id","Outer_Bull_Wire" + dartsnumbers[Math.trunc(i/partitions)]);
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Inner triple
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (99/451)*width;
            min_radius = (0)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate);
            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");

            section.setAttribute("id","Inner_Triple_Wire" + dartsnumbers[Math.trunc(i/partitions)]);
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Outer Triple
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (107/451)*width;
            min_radius = (0)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate);
            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");

            section.setAttribute("id","Outer_Triple_Wire" + dartsnumbers[Math.trunc(i/partitions)]);
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Inner Double
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (162/451)*width;
            min_radius = (0)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate);
            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");

            section.setAttribute("id","Inner_Double_Wire" + dartsnumbers[Math.trunc(i/partitions)]);
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Outer Double
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
    //for (j = 0; j < 1; j ++) {
      //  for (i = 0; i < 1; i++)
        {
            max_radius = (170/451)*width;
            min_radius = (0)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + new_outer_xcoordinate + " " + new_outer_ycoordinate + " A " + outer_radius + " " + outer_radius + ", 0, 0, 0, " + outer_xcoordinate + ", " + outer_ycoordinate);
            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");

            section.setAttribute("id","Outer_Double_Wire" + dartsnumbers[Math.trunc(i/partitions)]);
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Inner Single Straight Wires
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (99/451)*width;
            min_radius = (16/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length;
            inner_radius = min_radius + j*layer_length;
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " L " + outer_xcoordinate + " " + outer_ycoordinate);


            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");
            if (i == 0){
                section.setAttribute("id","Wire_Between_Inner_Single_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[19]);
            }else{
                section.setAttribute("id","Wire_Between_Inner_Single_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[(Math.trunc((i/partitions))) - 1]);
            }
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Triple Ring Straight Wires
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (107/451)*width;
            min_radius = (99/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length;
            inner_radius = min_radius + j*layer_length;
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " L " + outer_xcoordinate + " " + outer_ycoordinate);


            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");
            if (i == 0){
                section.setAttribute("id","Wire_Between_Triple_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[19]);
            }else{
                section.setAttribute("id","Wire_Between_Triple_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[(Math.trunc((i/partitions))) - 1]);
            }
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    // Outer Single Straight Wires
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (162/451)*width;
            min_radius = (107/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length;
            inner_radius = min_radius + j*layer_length;
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " L " + outer_xcoordinate + " " + outer_ycoordinate);


            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");
            if (i == 0){
                section.setAttribute("id","Wire_Between_Outer_Single_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[19]);
            }else{
                section.setAttribute("id","Wire_Between_Outer_Single_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[(Math.trunc((i/partitions))) - 1]);
            }
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Doubles Straight Wires
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (170/451)*width;
            min_radius = (162/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length;
            inner_radius = min_radius + j*layer_length;
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " L " + outer_xcoordinate + " " + outer_ycoordinate);


            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");
            if (i == 0){
                section.setAttribute("id","Wire_Between_Double_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[19]);
            }else{
                section.setAttribute("id","Wire_Between_Double_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[(Math.trunc((i/partitions))) - 1]);
            }
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);
        }
    }

    //Miss wires
    layers = 1;
    partitions = 1;
    for (j = 0; j < layers; j ++) {
        for (i = 0; i < partitions*20; i++)
        {
            max_radius = (186/451)*width;
            min_radius = (170/451)*width;
            layer_length = (max_radius - min_radius)/layers;
            outer_radius = min_radius + (j+1)*layer_length;
            inner_radius = min_radius + j*layer_length;
            centrex = width/2;
            centrey = height/2;
            angle = i*(Math.PI/(10*partitions));

            inner_xcoordinate = centrex + inner_radius*Math.cos((Math.PI/20+angle));
            inner_ycoordinate = centrey + inner_radius*Math.sin((Math.PI/20+angle));
            new_inner_xcoordinate = centrex + inner_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_inner_ycoordinate = centrey + inner_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            outer_xcoordinate = centrex + outer_radius*Math.cos((Math.PI/20+angle));
            outer_ycoordinate = centrey + outer_radius*Math.sin((Math.PI/20+angle));
            new_outer_xcoordinate = centrex + outer_radius*Math.cos(((((2+partitions)*Math.PI/20)/partitions)+angle));
            new_outer_ycoordinate = centrey + outer_radius*Math.sin(((((2+partitions)*Math.PI/20)/partitions)+angle));

            var section = document.createElementNS("http://www.w3.org/2000/svg", "path");
            section.setAttribute("d","M " + inner_xcoordinate + " " + inner_ycoordinate + " L " + outer_xcoordinate + " " + outer_ycoordinate);


            section.setAttribute("stroke", "#8D918D");
            section.setAttribute("fill", "none");
            section.classList.add("wire", "button");
            if (i == 0){
                section.setAttribute("id","Wire_Between_Miss_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[19]);
            }else{
                section.setAttribute("id","Wire_Between_Miss_" + dartsnumbers[Math.trunc(i/partitions)] + "_and_" + dartsnumbers[(Math.trunc((i/partitions))) - 1]);
            }
            section.classList.add("score_" + 0);
            svg.appendChild(section);
            document.getElementById("container").appendChild(svg);

        }
    }

    //Numbers on outside of board
    dartsnumbersfrom20=[20, 1, 18, 4, 13, 6,10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    for (i=0; i<20; i++){
        var section = document.createElementNS("http://www.w3.org/2000/svg", "text");
        if (dartsnumbersfrom20[i] > 9){
            section.setAttribute("x", width/2 - 0.03*width);
        }else{
            section.setAttribute("x", width/2 - 0.02*width);
        }
        section.setAttribute("y", (23/451)*width);
        section.setAttribute("fill", "white");
        section.setAttribute("font-size", "250%");
        section.setAttribute("transform", "rotate(" + 18*i + " " + width/2 + "," + width/2 + ")");
        section.setAttribute("id", "number_on_outside_" + dartsnumbersfrom20[i]);
        section.classList.add("number_on_outside_of_board");
        section.classList.add("score_" + 0);
        section.innerHTML = dartsnumbersfrom20[i];
        section.style.pointerEvents = "none"
        svg.appendChild(section);
        document.getElementById("container").appendChild(svg);
    }

}


//CANVAS
function drawTheCanvasLandscape(width,height){

    var canvas = document.createElement("CANVAS");
    canvas.setAttribute("width", window.innerWidth - (width - 50));
    canvas.setAttribute("height", height);
    canvas.setAttribute("id", "canvas");
    canvas.style.zIndex = "-1";

    var canvas_width = window.innerWidth - (width - 50);
    var entire_width = window.innerWidth;

    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.lineTo(canvas_width, height);
    ctx.arc(entire_width,height/2,1.1*width,0.7*Math.PI,1.3*Math.PI);
    ctx.lineTo(0,0);
    ctx.fillStyle = "#006496";
    ctx.fill();

    document.body.appendChild(canvas);
    //Positioning the canvas element
    document.getElementById("canvas").style.top = 0;
    document.getElementById("canvas").style.left = 0;
    document.getElementById("canvas").style.position = "absolute";
    document.getElementById("canvas").style.width = "auto";

    //Positioning the stats to sit on top of the canvas
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById("stats_container").style.position = "absolute";
        document.getElementById("stats_container").style.left = 0;
        document.getElementById("stats_container").style.top = "auto";
        document.getElementById("stats_container").style.maxWidth = canvas_width;
    });

}

function drawTheCanvasPortrait(width,height){

    var canvas = document.createElement("CANVAS");
    canvas.setAttribute("width", window.innerWidth);
    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("id", "canvas");
    canvas.style.zIndex = "-1";

    var canvas_height = window.innerHeight - (height - 50);
    var entire_height = window.innerHeight;
    var entire_width = window.innerWidth;

    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(entire_width, entire_height);
    ctx.lineTo(0, entire_height);
    ctx.lineTo(0, entire_height - canvas_height);
    ctx.arc(entire_width/2,0,1.1*height,0.7*Math.PI,0.2*Math.PI,true);
    ctx.lineTo(entire_width, entire_height);
    ctx.fillStyle = "#006496";
    ctx.fill();


    document.body.appendChild(canvas)
    //Positioning the canvas element
    document.getElementById("canvas").style.top = "0px";
    document.getElementById("canvas").style.left = "0px";
    document.getElementById("canvas").style.position = "absolute";
    document.getElementById("canvas").style.height = "auto";

    //Positioning the stats to sit on top of the canvas
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById("stats_container").style.position = "absolute";
        document.getElementById("stats_container").style.bottom = 0;
        document.getElementById("stats_container").style.maxHeight = canvas_height;
    });
}
//

drawTheBoard(width,height);
if (window.innerWidth >= window.innerHeight){
    drawTheCanvasLandscape(width,height);
    document.getElementById("container").style.top = 0;
    document.getElementById("container").style.right = 10;
    document.getElementById("container").style.position = "absolute";
}else{
    drawTheCanvasPortrait(width,height);
    document.getElementById("container").style.top = 10;
    document.getElementById("container").style.right = 0;
    document.getElementById("container").style.position = "absolute";
}
















//Attempts to make it dynamic using event listener...
function resizingWindow(){
    /*//check for zoom and return if so.
    if (window.innerWidth * 1.05 < windowSize.iw || window.innerWidth * 0.95 > windowSize.iw) {
        return;
    }*/

    //handle resizing
    if (window.innerWidth >= window.innerHeight){
        if (window.innerHeight > window.innerWidth - 200){
            width = window.innerWidth - 200;
            height = window.innerHeight;
        }else{
            var width = 1*window.innerHeight;
            var height = 1*window.innerHeight;
        }
    }else{
        if (window.innerWidth > window.innerHeight - 200){
            width = window.innerWidth;
            height = window.innerHeight - 200;
        }else{
            var width = window.innerWidth;
            var height = window.innerWidth;
        }
    }

    document.getElementById("the_board").remove();
    document.getElementById("canvas").remove();
    drawTheBoard(width,height);
    if (window.innerWidth >= window.innerHeight){
        drawTheCanvasLandscape(width,height);
        document.getElementById("container").style.top = 0;
        document.getElementById("container").style.right = 10;
        document.getElementById("container").style.position = "absolute";
    }else{
        drawTheCanvasPortrait(width,height);
        document.getElementById("container").style.top = 10;
        document.getElementById("container").style.right = 0;
        document.getElementById("container").style.position = "absolute";
    }
}
var doit;
window.onresize = function(){
    //Detecting pinch zoom.
    /*document.addEventListener('gestureend', function(e) {
        if (e.scale < 1.0) {
            return;
        } else if (e.scale > 1.0) {
            return;
        }
    }, false);*/

    //Trigger resize if no zooming.
    clearTimeout(doit);
    doit = setTimeout(resizingWindow, 150);
};
//The old function
/*window.addEventListener("resize", function(){

    if (window.innerWidth >= window.innerHeight){
        if (window.innerHeight > window.innerWidth - 200){
            width = window.innerWidth - 200;
            height = window.innerHeight;
        }else{
            var width = 1*window.innerHeight;
            var height = 1*window.innerHeight;
        }
    }else{
        if (window.innerWidth > window.innerHeight - 200){
            width = window.innerWidth;
            height = window.innerHeight - 200;
        }else{
            var width = window.innerWidth;
            var height = window.innerWidth;
        }
    }

    document.getElementById("the_board").remove();
    document.getElementById("canvas").remove();
    drawTheBoard(width,height);
    if (window.innerWidth >= window.innerHeight){
        drawTheCanvasLandscape(width,height);
        document.getElementById("container").style.top = 0;
        document.getElementById("container").style.right = 10;
        document.getElementById("container").style.position = "absolute";
    }else{
        drawTheCanvasPortrait(width,height);
        document.getElementById("container").style.top = 10;
        document.getElementById("container").style.right = 0;
        document.getElementById("container").style.position = "absolute";
    }
});*/