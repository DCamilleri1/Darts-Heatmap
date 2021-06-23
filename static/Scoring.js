var score = 501;
dartsnumbers = [10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 1, 18, 4, 13, 6];
var three_dart_score = 0;
var dart1 = 0;
var dart2 = 0;
var dart3 = 0;
var darts_thrown_in_leg = 0;
var darts_thrown_in_session = 0;
var darts_thrown_total = 0;
var visits = 0;
var points_in_leg = 0;
var points_in_session = 0;
var points_in_total = 0;
var first_nine_darts_score = 0;
var first_nine_darts_thrown = 0;
var score_types = ["scoring", "checkout", "bust", "waste"];
var score_type;
var checkout = false;
var legs_won_in_session = 0;
var legs_in_session;
var time;
var time_overall;
var id;
var classes;
var highest_score;
var highest_checkout;
var three_dart_average = 0;
var first_nine_dart_average = 0;
var first_dart_average = 0;
var second_dart_average = 0;
var third_dart_average = 0;
var misses = 0;
var bounce_outs = 0;
var darts_thrown_at_double = 0;
var doubles_hit = 0;
var bust_darts = 0;
var number_of_60s = 0;
var number_of_100s = 0;
var number_of_140s = 0;
var number_of_180s = 0;
var most_hit_double;
var best_checkout_percentage_double;
var first_darts_thrown = 0;
var second_darts_thrown = 0;
var third_darts_thrown = 0;
var first_dart_total = 0;
var second_dart_total = 0;
var third_dart_total = 0;
var wasted_darts = 0;

//variables for undo/edit functions
var editing_dart = 0;
var can_edit_dart = 0;
var editing_aim = 0;

//Aim variables
var aim_prediction;
var aim_preferred_target;
var aim_dart1;
var aim_dart2;
var aim_dart3;

//Stats buttons
var stats_on = false;
var all_time_heatmap_stats_on = false;
var individual_darts_stats_on = 0;
var individual_darts_stats_1 = false;
var individual_darts_stats_2 = false;
var individual_darts_stats_3 = false;
var first_nine_darts_heatmap_on = false;
var calendar_filter_on = false;
var calendar_options_on = false;

//Date
var date = new Date();

//Settings:
var current_settings;

//More buttons:
//Log out box on or off?
var log_out_box_open = false;
//More stats on or off
var more_stats_box_open = false;
//Settings box on or off
var settings_box_open = false;

//dictionary for saving all stats
var dart1_dict = {
    score : "dart1",
    hit_location : "id",
    hit_location_bed : "null",
    dart_number : "1",
    score_at_time_of_throwing : "null",
    score_type: "score_type",
    aim_location_bed : "dart1",
    aim_location_score : "dart1",
    darts_in_leg : "darts_thrown_in_leg",
    darts_in_session : "darts_thrown_in_session",
    legs_in_session : "legs_in_session",
    legs_won_in_session : "legs_won_in_session",
    legs_lost_in_session : "legs_in_session - legs_won_in_session",
    time_between_throws : "time",
    session_duration : "overall_time",
    session_date : "session date",
    session_time : "session time"
};

function Dart(score, hit_location, hit_location_bed, dart_number_in_throw, score_at_time_of_throwing, score_type, aim_location_bed,
              aim_location_score, darts_in_leg, darts_in_session, legs_in_session, legs_won_in_session, legs_lost_in_session,
              time_between_throws, session_duration_so_far, session_date, session_time) {
    score = score;
    hit_location = hit_location;
    hit_location_bed = hit_location_bed;
    dart_number_in_throw = dart_number_in_throw;
    score_at_time_of_throwing = score_at_time_of_throwing;
    score_type = score_type;
    aim_location_bed = aim_location_bed;
    aim_location_score = aim_location_score;
    darts_in_leg = darts_in_leg;
    darts_in_session = darts_in_session;
    legs_in_session = legs_in_session;
    legs_won_in_session = legs_won_in_session;
    legs_lost_in_session = legs_lost_in_session;
    time_between_throws = time_between_throws;
    session_duration_so_far = session_duration_so_far;
    session_date = session_date;
    session_time = session_time;
}

//Darts checkouts with 3 darts
var three_darts_checkouts = {
    170 : "T20, T20, Bull",
    167 : "T20, T19, Bull",
    164 : "T20, T18, Bull",
    161 : "T20, T17, Bull",
    160 : "T20, T20, D20",
    158 : "T20, T20, D19",
    157 : "T20, T19, D20",
    156 : "T20, T20, D18",
    155 : "T20, T19, D19",
    154 : "T20, T18, D20",
    153 : "T20, T19, D18",
    152 : "T20, T20, D16",
    151 : "T20, T17, D20",
    150 : "T20, T18, D18",
    149 : "T20, T19, D16",
    148 : "T20, T16, D20",
    147 : "T20, T17, D18",
    146 : "T20, T18, D16",
    145 : "T20, T15, D20",
    144 : "T20, T20, D12",
    143 : "T20, T17, D16",
    142 : "T20, T14, D20",
    141 : "T20, T19, D12",
    140 : "T20, T16, D16",
    139 : "T19, T14, D20",
    138 : "T20, T18, D12",
    137 : "T19, T16, D16",
    136 : "T20, T20, D8",
    135 : "T20, T17, D12",
    134 : "T20, T14, D16",
    133 : "T20, T19, D8",
    132 : "T20, T16, D12",
    131 : "T20, T13, D16",
    130 : "T20, T20, D5",
    129 : "T19, T16, D12",
    128 : "T18, T14, D16",
    127 : "T20, T17, D8",
    126 : "T19, T19, D6",
    125 : "T18, T13, D16",
    124 : "T20, T16, D8",
    123 : "T19, T16, D9",
    122 : "T18, T20, D4",
    121 : "T17, T10, D20",
    120 : "T20, S20, D20",
    119 : "T19, T10, D16",
    118 : "T20, S18, D20",
    117 : "T20, S17, D20",
    116 : "T20, S16, D20",
    115 : "T20, S15, D20",
    114 : "T20, S14, D20",
    113 : "T20, S13, D20",
    112 : "T20, S12, D20",
    111 : "T20, S19, D16",
    110 : "T20, S18, D16",
    109 : "T19, S20, D16",
    108 : "T20, S16, D16",
    107 : "T19, S18, D16",
    106 : "T20, S14, D16",
    105 : "T19, S16, D16",
    104 : "T18, S18, D16",
    103 : "T20, S3, D20",
    102 : "T20, S10, D16",
    101 : "T20, S1, D20",
    99 : "T19, S10, D16",
};

//Darts checkouts with 2 darts
var two_darts_checkouts = {
    110 : "T20, Bull",
    107 : "T19, Bull",
    104 : "T18, Bull",
    101 : "T17, Bull",
    100 : "T20, D20",
    98 : "T20, D19",
    97 : "T19, D20",
    96 : "T20, D18",
    95 : "T19, D19",
    94 : "T18, D20",
    93 : "T19, D18",
    92 : "T20, D16",
    91 : "T17, D20",
    90 : "T20, D15",
    89 : "T19, D16",
    88 : "T16, D20",
    87 : "T17, D18",
    86 : "T18, D16",
    85 : "T15, D20",
    84 : "T20, D12",
    83 : "T17, D16",
    82 : "T14, D20",
    81 : "T19, D12",
    80 : "T20, D10",
    79 : "T13, D20",
    78 : "T18, D12",
    77 : "T19, D10",
    76 : "T20, D8",
    75 : "T17, D12",
    74 : "T14, D16",
    73 : "T19, D8",
    72 : "T16, D12",
    71 : "T13, D16",
    70 : "T10, D20",
    69 : "T15, D12",
    68 : "T20, D4",
    67 : "T17, D8",
    66 : "T10, D18",
    65 : "T19, D4",
    64 : "T16, D8",
    63 : "T13, D12",
    62 : "T10, D16",
    61 : "T15, D8",
    60 : "S20, D20",
    59 : "S19, D20",
    58 : "S18, D20",
    57 : "S17, D20",
    56 : "S16, D20",
    55 : "S15, D20",
    54 : "S14, D20",
    53 : "S13, D20",
    52 : "S20, D16",
    51 : "S19, D16",
    50 : "S18, D16",
    49 : "S17, D16",
    48 : "S16, D16",
    47 : "S15, D16",
    46 : "S6, D20",
    45 : "S13, D16",
    44 : "S12, D16",
    43 : "S11, D16",
    42 : "S10, D16",
    41 : "S9, D16",
    39 : "S7, D16",
    37 : "S5, D16",
    35 : "S3, D16",
    33 : "S1, D16",
    31 : "S15, D8",
    29 : "S13, D8",
    27 : "S11, D8",
    25 : "S9, D8",
    23 : "S7, D8",
    21 : "S5, D8",
    19 : "S3, D8",
    17 : "S1, D8",
    15 : "S7, D4",
    13 : "S5, D4",
    11 : "S3, D4",
    9 : "S1, D4",
    7 : "S3, D2",
    5 : "S1, D2",
    3 : "S1, D1",
};

//Darts checkouts with 1 dart
var one_dart_checkouts = {
    50 : "Bull",
    40 : "D20",
    38 : "D19",
    36 : "D18",
    34 : "D17",
    32 : "D16",
    30 : "D15",
    28 : "D14",
    26 : "D13",
    24 : "D12",
    22 : "D11",
    20 : "D10",
    18 : "D9",
    16 : "D8",
    14 : "D7",
    12 : "D6",
    10 : "D5",
    8 : "D4",
    6 : "D3",
    4 : "D2",
    2 : "D1",
};

//Stats object
var all_time_heatmap_stats = [];

//Function for clearing dart board of colour
function clearTheBoard(){
    let buttons = document.querySelectorAll('path.hit');
    buttons.forEach(node => node.style.fill = "#F0F3FE");
    buttons.forEach(node => node.style.stroke = "#F0F3FE");
    let centre = document.querySelector("#Inner_Bull_Centre");
    centre.style.fill = "#F0F3FE";
    centre.style.stroke = "#F0F3FE";
    let wires = document.querySelectorAll('path.wire');
    wires.forEach(node => node.style.stroke = null);
    wires.forEach(node => node.setAttribute("stroke","#8D918D"));
    //Change numbers to another colour //Not working
    let outside_numbers = document.querySelectorAll('text.number_on_outside_of_board');
    outside_numbers.forEach(node => node.style.fill = "#000000");
}

//Function for colouring the board with a heatmap = requires array input:
function heatMap(darts_hit){

    //Counting hit locations
    var count_hit_locations = {};
    darts_hit.forEach(function(i) { count_hit_locations[i] = (count_hit_locations[i]||0) + 1;});

    //Find highest frequency
    var hit_count_array = Object.keys(count_hit_locations).map(function(key) {return count_hit_locations[key];});
    var highest_frequency = Math.max(...hit_count_array);

    //Finding unique location ids
    unique_hit_locations = Array.from(new Set(darts_hit));
    number_of_hit_locations = unique_hit_locations.length;

    //Assigning colours based on those numbers as a proprotion of the highest value.
    for (i = 0; i < number_of_hit_locations; i++)
    {
        if (count_hit_locations[unique_hit_locations[i]] == highest_frequency){
            if (document.getElementById([unique_hit_locations[i]]).getAttribute("id").includes("Wire")){
                document.getElementById(unique_hit_locations[i]).style.stroke = "#1E448E";
            }else{
                document.getElementById(unique_hit_locations[i]).style.fill = "#1E448E";
            }
        }
        if (count_hit_locations[unique_hit_locations[i]] >= (4/5)*highest_frequency && count_hit_locations[unique_hit_locations[i]] < highest_frequency){
            if (document.getElementById([unique_hit_locations[i]]).getAttribute("id").includes("Wire")){
                document.getElementById(unique_hit_locations[i]).style.stroke = "#3A6FB0";
            }else{
                document.getElementById(unique_hit_locations[i]).style.fill = "#3A6FB0";
            }
        }
        if (count_hit_locations[unique_hit_locations[i]] >= (3/5)*highest_frequency && count_hit_locations[unique_hit_locations[i]] < (4/5)*highest_frequency){
            if (document.getElementById([unique_hit_locations[i]]).getAttribute("id").includes("Wire")){
                document.getElementById(unique_hit_locations[i]).style.stroke = "#5790C1";
            }else{
                document.getElementById(unique_hit_locations[i]).style.fill = "#5790C1";
            }
        }
        if (count_hit_locations[unique_hit_locations[i]] >= (2/5)*highest_frequency && count_hit_locations[unique_hit_locations[i]] < (3/5)*highest_frequency){
            if (document.getElementById([unique_hit_locations[i]]).getAttribute("id").includes("Wire")){
                document.getElementById(unique_hit_locations[i]).style.stroke = "#7BADD2";
            }else{
                document.getElementById(unique_hit_locations[i]).style.fill = "#7BADD2";
            }
        }
        if (count_hit_locations[unique_hit_locations[i]] >= (1/5)*highest_frequency && count_hit_locations[unique_hit_locations[i]] < (2/5)*highest_frequency){
            if (document.getElementById([unique_hit_locations[i]]).getAttribute("id").includes("Wire")){
                document.getElementById(unique_hit_locations[i]).style.stroke = "#A7C9DF";
            }else{
                document.getElementById(unique_hit_locations[i]).style.fill = "#A7C9DF";
            }
        }
        if (count_hit_locations[unique_hit_locations[i]] > 0 && count_hit_locations[unique_hit_locations[i]] < (1/5)*highest_frequency){
            if (document.getElementById([unique_hit_locations[i]]).getAttribute("id").includes("Wire")){
                document.getElementById(unique_hit_locations[i]).style.stroke = "#CADAED";
            }else{
                document.getElementById(unique_hit_locations[i]).style.fill = "#CADAED";
            }
        }
    }
}

//Get the board back to the original darts board colours.
function restoreTheBoard(){
    let red_buttons = document.querySelectorAll('path.Red_Section');
    red_buttons.forEach(node => node.style.fill = null);
    red_buttons.forEach(node => node.setAttribute("fill","#FF1600"));
    red_buttons.forEach(node => node.style.stroke = null);

    let green_buttons = document.querySelectorAll('path.Green_Section');
    green_buttons.forEach(node => node.style.fill = null);
    green_buttons.forEach(node => node.setAttribute("fill","#05AE2D"));
    green_buttons.forEach(node => node.style.stroke = null);

    let black_buttons = document.querySelectorAll('path.Black_Section');
    black_buttons.forEach(node => node.style.fill = null);
    black_buttons.forEach(node => node.setAttribute("fill","#140B0D"));
    black_buttons.forEach(node => node.style.stroke = null);

    let white_buttons = document.querySelectorAll('path.White_Section');
    white_buttons.forEach(node => node.style.fill = null);
    white_buttons.forEach(node => node.setAttribute("fill","#F9DEBB"));
    white_buttons.forEach(node => node.style.stroke = null);

    let centre = document.querySelector("#Inner_Bull_Centre");
    centre.style.fill = null;
    centre.setAttribute("fill","#FF1600");
    centre.style.stroke = null;

    let wires = document.querySelectorAll('path.wire');
    wires.forEach(node => node.style.stroke = null);
    wires.forEach(node => node.setAttribute("stroke","#8D918D"));

    let outside_numbers = document.querySelectorAll('text.number_on_outside_of_board');
    outside_numbers.forEach(node => node.style.fill = "#FFFFFF");
}

// Function for colouring dartsboard after pressing individual dart buttons (also includes case of turning off all individual dart buttons)
// Input required: Are these on or off? (boolean values): dart1, dart2, dart3. If all false, returns all darts.
function individualDartsArraySession(dart1, dart2, dart3){
    var darts_hit = [];
    if (dart1 == false && dart2 == false && dart3 == false){
        for (i = 1; i <= darts_thrown_in_session; i++)
        {
            darts_hit.push(window['dart_throw' + i].hit_location);
        }
    }
    if (dart1 == true){
        for (i = 1; i <= darts_thrown_in_session; i++)
        {
            if (window['dart_throw' + i].dart_number_in_throw == "1"){
                darts_hit.push(window['dart_throw' + i].hit_location);
            }
        }
    }
    if (dart2 == true){
        for (i = 1; i <= darts_thrown_in_session; i++)
        {
            if (window['dart_throw' + i].dart_number_in_throw == "2"){
                darts_hit.push(window['dart_throw' + i].hit_location);
            }
        }
    }
    if (dart3 == true){
        for (i = 1; i <= darts_thrown_in_session; i++)
        {
            if (window['dart_throw' + i].dart_number_in_throw == "3"){
                darts_hit.push(window['dart_throw' + i].hit_location);
            }
        }
    }
    return darts_hit;
}

function allDartsArraySession(){
    var darts_hit = [];
    for (i = 1; i <= darts_thrown_in_session; i++)
    {
        darts_hit.push(window['dart_throw' + i].hit_location);
    }
    return darts_hit;
}

//AJAX request for historical data, returns object containing all single dart data.
function myAJAX(){
    fetch('/hello')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        all_time_heatmap_stats = json;
    });
    return all_time_heatmap_stats;
}

//AJAX request for settings data.
function settingsAJAX(){
    fetch('/settings')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        current_settings = json;
    });
    return current_settings;
}
//Function to get all hit locations from an array of objects sent from the database.
function allDartsArrayAllTime(all_time_heatmap_stats){
    all_time_darts_hit = [];
    for (i = 0; i < all_time_heatmap_stats.length; i++) {
        all_time_darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
    }
    return all_time_darts_hit;
}


//Function to get hit locations from an array of objects sent fromt he database with option to select individual darts
// Input required: Are darts 1 - 3 on or off? (boolean values): dart1, dart2, dart3, and array of objects. If all false, then all returned.
function individualDartsArrayAllTime(dart1, dart2, dart3){
    all_time_heatmap_stats = myAJAX();
    var darts_hit = [];
    if (dart1 == false && dart2 == false && dart3 == false){
        for (i = 0; i < all_time_heatmap_stats.length; i++)
        {
            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
        }
    }
    if (dart1 == true){
        for (i = 0; i < all_time_heatmap_stats.length; i++)
        {
            if (all_time_heatmap_stats[i]['dart_number'] == "1")
            {
                darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
            }
        }
    }
    if (dart2 == true){
        for (i = 0; i < all_time_heatmap_stats.length; i++)
        {
            if (all_time_heatmap_stats[i]['dart_number'] == "2")
            {
                darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
            }
        }
    }
    if (dart3 == true){
        for (i = 0; i < all_time_heatmap_stats.length; i++)
        {
            if (all_time_heatmap_stats[i]['dart_number'] == "3")
            {
                darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
            }
        }
    }
    return darts_hit;
}

//Calculate averages of dart 1:
function dart1_average(){
    for (i = 1; i <= darts_thrown_in_session; i++)
    {
        if (window['dart_throw' + i].dart_number_in_throw == "1"){
            first_dart_total += window['dart_throw' + i].score;
            first_darts_thrown++;
        }
    }
    first_dart_average = Math.round(((first_dart_total/first_darts_thrown) + Number.EPSILON) * 100) / 100;
    return first_dart_average;
}
//Calculate averages of dart 2:
function dart2_average(){
    for (i = 1; i <= darts_thrown_in_session; i++)
    {
        if (window['dart_throw' + i].dart_number_in_throw == "2"){
            second_dart_total += window['dart_throw' + i].score;
            second_darts_thrown++;
        }
    }
    second_dart_average = Math.round(( ( second_dart_total/second_darts_thrown) + Number.EPSILON ) * 100 ) / 100;

    return second_dart_average;
}
//Calculate averages of dart 3:
function dart3_average(){
    for (i = 1; i <= darts_thrown_in_session; i++)
    {
        if (window['dart_throw' + i].dart_number_in_throw == "3"){
            third_dart_total += window['dart_throw' + i].score;
            third_darts_thrown++;
        }
    }
    third_dart_average = Math.round(((third_dart_total/third_darts_thrown) + Number.EPSILON) * 100) / 100;
    return third_dart_average;
}
//Gives only the first 9 darts in each leg for the current session. Can pick out individual darts, if all true, or all false, it gives all darts.
function first9DartsArraySesssion(dart1, dart2, dart3){
    var darts_hit = [];
    if ((dart1 == true && dart2 == true && dart3 == true) || (dart1 == false && dart2 == false && dart3 == false)){
        for (i = 1; i <= darts_thrown_in_session; i++)
        {
            if (window['dart_throw' + i].darts_in_leg < 9){
                darts_hit.push(window['dart_throw' + i].hit_location);
            }
        }
    }else{
        if (dart1 == true){
            for (i = 1; i <= darts_thrown_in_session; i++)
            {
                if (window['dart_throw' + i].dart_number_in_throw == "1" && window['dart_throw' + i].darts_in_leg < 9){
                    darts_hit.push(window['dart_throw' + i].hit_location);
                }
            }
        }
        if (dart2 == true){
            for (i = 1; i <= darts_thrown_in_session; i++)
            {
                if (window['dart_throw' + i].dart_number_in_throw == "2" && window['dart_throw' + i].darts_in_leg < 9){
                    darts_hit.push(window['dart_throw' + i].hit_location);
                }
            }
        }
        if (dart3 == true){
            for (i = 1; i <= darts_thrown_in_session; i++)
            {
                if (window['dart_throw' + i].dart_number_in_throw == "3" && window['dart_throw' + i].darts_in_leg < 9){
                    darts_hit.push(window['dart_throw' + i].hit_location);
                }
            }
        }
    }
    return darts_hit;
}

//Gives only the first 9 darts in each leg for all time data. Can pick out individual darts, if all true, or all false, it gives all darts.
function first9DartsArrayAllTime(dart1, dart2, dart3){
    all_time_heatmap_stats = myAJAX();
    var darts_hit = [];
    if ((dart1 == true && dart2 == true && dart3 == true) || (dart1 == false && dart2 == false && dart3 == false)){
        for (i = 0; i < all_time_heatmap_stats.length; i++)
        {
            if (all_time_heatmap_stats[i]['darts_in_leg'] < 9){
                darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
            }
        }
    }else{
        if (dart1 == true){
            for (i = 0; i < all_time_heatmap_stats.length; i++)
            {
                if (all_time_heatmap_stats[i]['dart_number'] == "1" && all_time_heatmap_stats[i]['darts_in_leg'] < 9)
                {
                    darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                }
            }
        }
        if (dart2 == true){
            for (i = 0; i < all_time_heatmap_stats.length; i++)
            {
                if (all_time_heatmap_stats[i]['dart_number'] == "2" && all_time_heatmap_stats[i]['darts_in_leg'] < 9)
                {
                    darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                }
            }
        }
        if (dart3 == true){
            for (i = 0; i < all_time_heatmap_stats.length; i++)
            {
                if (all_time_heatmap_stats[i]['dart_number'] == "3" && all_time_heatmap_stats[i]['darts_in_leg'] < 9)
                {
                    darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                }
            }
        }
    }
    return darts_hit;
}

//Aim predictor
function aimPrediction(){
    aim_preferred_target = settingsAJAX()
    if (darts_thrown_in_leg%3 == 1){
        scores_on_the_doors = score
    }if (darts_thrown_in_leg%3 == 2){
        scores_on_the_doors = score - dart1
    }if (darts_thrown_in_leg%3 == 0){
        scores_on_the_doors = score - (dart1 + dart2)
    }
    if (scores_on_the_doors > 170 || scores_on_the_doors == 169 || scores_on_the_doors == 168 || scores_on_the_doors == 166 || scores_on_the_doors == 165 || scores_on_the_doors == 163 || scores_on_the_doors == 162){
        aim_prediction = aim_preferred_target[0]["aim_preferred_target"];
        if (darts_thrown_in_leg%3 == 1){
            document.getElementById("aim_at_dart1").innerHTML = aim_prediction;
        }
        if (darts_thrown_in_leg%3 == 2){
            document.getElementById("aim_at_dart2").innerHTML = aim_prediction;
        }
        if (darts_thrown_in_leg%3 == 0){
            document.getElementById("aim_at_dart3").innerHTML = aim_prediction;
        }
        return aim_prediction;
    }else if (scores_on_the_doors >= 99 && scores_on_the_doors != 110 && scores_on_the_doors != 107 && scores_on_the_doors != 104 && scores_on_the_doors != 101 & scores_on_the_doors !=100){
        if (darts_thrown_in_leg%3 == 1){
            aim_prediction = three_darts_checkouts[scores_on_the_doors][0] + three_darts_checkouts[scores_on_the_doors][1] + three_darts_checkouts[scores_on_the_doors][2];
            document.getElementById("aim_at_dart1").innerHTML = aim_prediction;
        }else if (darts_thrown_in_leg%3 == 2){
            aim_prediction = three_darts_checkouts[scores_on_the_doors][0] + three_darts_checkouts[scores_on_the_doors][1] + three_darts_checkouts[scores_on_the_doors][2];
            document.getElementById("aim_at_dart2").innerHTML = aim_prediction;
        }else{
            aim_prediction = three_darts_checkouts[scores_on_the_doors][0] + three_darts_checkouts[scores_on_the_doors][1] + three_darts_checkouts[scores_on_the_doors][2];
            document.getElementById("aim_at_dart3").innerHTML = aim_prediction;
        }
        //document.getElementById("checkout_route").innerHTML = three_darts_checkouts[scores_on_the_doors] + " (" + scores_on_the_doors + ")";
        return aim_prediction;
    }else if (scores_on_the_doors == 50 && darts_thrown_in_leg%3!= 0){
        aim_prediction = "";
        for (i = 0; i < 3; i++){
            if (two_darts_checkouts[scores_on_the_doors][i] == ","){
                i += 200;
            }else{
                aim_prediction = aim_prediction + two_darts_checkouts[scores_on_the_doors][i];
            }
        }
        if (darts_thrown_in_leg%3 == 1){
            document.getElementById("aim_at_dart1").innerHTML = aim_prediction;
        }else{
            document.getElementById("aim_at_dart2").innerHTML = aim_prediction;
        }
        //document.getElementById("checkout_route").innerHTML = two_darts_checkouts[scores_on_the_doors] + " (" + scores_on_the_doors + ")";
        return aim_prediction;
    }else if (scores_on_the_doors > 40 || scores_on_the_doors%2 == 1){
        if (darts_thrown_in_leg%3 == 2 || darts_thrown_in_leg%3 == 1 || darts_thrown_in_leg%3 == 0){
            aim_prediction = "";
            for (i = 0; i < 3; i++){
                if (two_darts_checkouts[scores_on_the_doors][i] == ","){
                    i += 200;
                }else{
                    aim_prediction = aim_prediction + two_darts_checkouts[scores_on_the_doors][i];
                }
            }
            if (darts_thrown_in_leg%3 == 1){
                document.getElementById("aim_at_dart1").innerHTML = aim_prediction;
            }else if(darts_thrown_in_leg%3 == 2){
                document.getElementById("aim_at_dart2").innerHTML = aim_prediction;
            }else{
                document.getElementById("aim_at_dart3").innerHTML = aim_prediction;
            }
        //document.getElementById("checkout_route").innerHTML = two_darts_checkouts[scores_on_the_doors] + " (" + scores_on_the_doors + ")";
        return aim_prediction;
        }
    }else{
        aim_prediction = "";
        for (i = 0; i < 3; i++){
            if (one_dart_checkouts[scores_on_the_doors][i] == ","){
                i += 200;
            }else{
                aim_prediction = aim_prediction + one_dart_checkouts[scores_on_the_doors][i];
            }
        }
        if (darts_thrown_in_leg%3 == 1){
            document.getElementById("aim_at_dart1").innerHTML = aim_prediction;
        }else if (darts_thrown_in_leg%3 == 2){
            document.getElementById("aim_at_dart2").innerHTML = aim_prediction;
        }else{
            document.getElementById("aim_at_dart3").innerHTML = aim_prediction;
        }
    //document.getElementById("checkout_route").innerHTML = one_dart_checkouts[scores_on_the_doors] + " (" + scores_on_the_doors + ")";
    }
    return aim_prediction;
}

function clearAimPredictions(){
    document.getElementById("aim_at_dart1").innerHTML = "";
    document.getElementById("aim_at_dart2").innerHTML = "";
    document.getElementById("aim_at_dart3").innerHTML = "";
}

//Checkout Route Suggestor
function checkoutRoutes(){
    var score_for_checkout = score - three_dart_score;
    if (score_for_checkout > 170 || score_for_checkout == 169 || score_for_checkout == 168 || score_for_checkout == 166 || score_for_checkout == 165 || score_for_checkout == 163 || score_for_checkout == 162){
        document.getElementById("checkout_route").innerHTML = "";
        return;
    }else if (score_for_checkout >= 99 && score_for_checkout != 110 && score_for_checkout != 107 && score_for_checkout != 104 && score_for_checkout != 101 & score_for_checkout !=100){
        if (darts_thrown_in_leg%3 == 0){
            document.getElementById("checkout_route").innerHTML = three_darts_checkouts[score_for_checkout] + " (" + score_for_checkout + ")";
            return;
        }
    }else if (score_for_checkout == 50 && darts_thrown_in_leg%3!= 2){
        document.getElementById("checkout_route").innerHTML = two_darts_checkouts[score_for_checkout] + " (" + score_for_checkout + ")";
        return;
    }else if (score_for_checkout > 40 || score_for_checkout%2 == 1){
        document.getElementById("checkout_route").innerHTML = two_darts_checkouts[score_for_checkout] + " (" + score_for_checkout + ")";
        return;
    }else{
        document.getElementById("checkout_route").innerHTML = one_dart_checkouts[score_for_checkout] + " (" + score_for_checkout + ")";
    }
    return;

}

//Function for editing darts
function editDartsData(id, classes){
    editing_dart_number = ((darts_thrown_in_session - darts_thrown_in_leg) + 3*visits + editing_dart);
    if (darts_thrown_in_leg < 10){
        first_nine_darts_score -= window['dart_throw' + editing_dart_number].score;
    }
    if (editing_dart == 1){
        window['dart_throw' + editing_dart_number].score = dart1;
        window['dart_throw' + editing_dart_number].dart_number_in_throw = 1;
        can_add_data = true;
    }if (editing_dart == 2){
        window['dart_throw' + editing_dart_number].score = dart2;
        window['dart_throw' + editing_dart_number].dart_number_in_throw = 2;
        can_add_data = true;
    }if (editing_dart == 3){
        window['dart_throw' + editing_dart_number].score = dart3;
        window['dart_throw' + editing_dart_number].dart_number_in_throw = 3;
        can_add_data = true;
    }
    //Data that is not dependent on the dart number

    //Working out the bed the dart landed in using the ID
    if (id.includes("Inner_Single") || id.includes("Outer_Single")){
        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
        window['dart_throw' + editing_dart_number].hit_location_bed = "S" + current_hit_score;
        current_hit_score = 0;
    }
    if (id.includes("Double")){
        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
        window['dart_throw' + editing_dart_number].hit_location_bed = "D" + (current_hit_score/2);
        current_hit_score = 0;
    }
    if (id.includes("Triple")){
        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
        window['dart_throw' + editing_dart_number].hit_location_bed = "T" + (current_hit_score/3);
        current_hit_score = 0;
    }
    if (id.includes("Inner_Bull")){
        window['dart_throw' + editing_dart_number].hit_location_bed = "Bullseye";
    }
    if (id.includes("Outer_Bull")){
        window['dart_throw' + editing_dart_number].hit_location_bed = "Outer Bull";
    }
    if (id.includes("Wire")){
        window['dart_throw' + editing_dart_number].hit_location_bed = "Wire";
    }
    if (id.includes("Inner_Miss") || id.includes("Outer_Miss")){
        window['dart_throw' + editing_dart_number].hit_location_bed = "Miss";
    }
    //Other data not dependent on dart number
    window['dart_throw' + editing_dart_number].hit_location = id;
    window['dart_throw' + editing_dart_number].score_type = score_types[0];
    //Data for first 9 average:
    if (darts_thrown_in_leg < 10){
        first_nine_darts_score += window['dart_throw' + editing_dart_number].score;
        first_nine_darts_thrown += 1;
    }
}

//Function for editing aim data
function editAimData(id, classes){
    editing_dart_number = ((darts_thrown_in_session - darts_thrown_in_leg) + 3*visits + editing_aim);

    //Working out the aim of the dart by using the ID
    if (id.includes("Inner_Single") || id.includes("Outer_Single")){
        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
        window['dart_throw' + editing_dart_number].aim_location_bed = "S" + current_hit_score;
        current_hit_score = 0;
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    if (id.includes("Double")){
        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
        window['dart_throw' + editing_dart_number].aim_location_bed = "D" + (current_hit_score/2);
        current_hit_score = 0;
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    if (id.includes("Triple")){
        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
        window['dart_throw' + editing_dart_number].aim_location_bed = "T" + (current_hit_score/3);
        current_hit_score = 0;
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    if (id.includes("Inner_Bull")){
        window['dart_throw' + editing_dart_number].aim_location_bed = "Bullseye";
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    if (id.includes("Outer_Bull")){
        window['dart_throw' + editing_dart_number].aim_location_bed = "Outer Bull";
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    if (id.includes("Wire")){
        window['dart_throw' + editing_dart_number].aim_location_bed = "Wire";
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    if (id.includes("Inner_Miss") || id.includes("Outer_Miss")){
        window['dart_throw' + editing_dart_number].aim_location_bed = "Miss";
        output = window['dart_throw' + editing_dart_number].aim_location_bed;
    }
    return output;
}


//Function for getting array for heatmap of the date range, including individual darts and first 9 darts.
function dateRangeHeatmapArray(start_date, end_date, dart1, dart2, dart3, first_nine_darts_heatmap_on){
    all_time_heatmap_stats = myAJAX();
    var darts_hit = [];
    //convert dates into numbers:
    start_date_number = parseInt(start_date.substr(6,4).concat(start_date.substr(3,2)).concat(start_date.substr(0,2)));
    end_date_number = parseInt(end_date.substr(6,4).concat(end_date.substr(3,2)).concat(end_date.substr(0,2)));
    if ((dart1 == true && dart2 == true && dart3 == true) || (dart1 == false && dart2 == false && dart3 == false)){
        if (first_nine_darts_heatmap_on == true){
            for (i = 0; i < all_time_heatmap_stats.length; i++)
            {
                if (all_time_heatmap_stats[i]['darts_in_leg'] < 9){
                    date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                    if (date_number >= start_date_number && date_number <= end_date_number){
                        darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                    }
                }
            }
        }else{
           for (i = 0; i < all_time_heatmap_stats.length; i++)
            {
                date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                if (date_number >= start_date_number && date_number <= end_date_number){
                    darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                }
            }
        }

    }else{
        if (first_nine_darts_heatmap_on == true){
           if (dart1 == true){
                for (i = 0; i < all_time_heatmap_stats.length; i++)
                {
                    if (all_time_heatmap_stats[i]['dart_number'] == "1" && all_time_heatmap_stats[i]['darts_in_leg'] < 9)
                    {
                        date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                        if (date_number >= start_date_number && date_number <= end_date_number){
                            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                        }
                    }
                }
            }
            if (dart2 == true){
                for (i = 0; i < all_time_heatmap_stats.length; i++)
                {
                    if (all_time_heatmap_stats[i]['dart_number'] == "2" && all_time_heatmap_stats[i]['darts_in_leg'] < 9)
                    {
                        date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                        if (date_number >= start_date_number && date_number <= end_date_number){
                            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                        }
                    }
                }
            }
            if (dart3 == true){
                for (i = 0; i < all_time_heatmap_stats.length; i++)
                {
                    if (all_time_heatmap_stats[i]['dart_number'] == "3" && all_time_heatmap_stats[i]['darts_in_leg'] < 9)
                    {
                        date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                        if (date_number >= start_date_number && date_number <= end_date_number){
                            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                        }
                    }
                }
            }
        }else{
            if (dart1 == true){
                for (i = 0; i < all_time_heatmap_stats.length; i++)
                {
                    if (all_time_heatmap_stats[i]['dart_number'] == "1")
                    {
                        date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                        if (date_number >= start_date_number && date_number <= end_date_number){
                            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                        }
                    }
                }
            }
            if (dart2 == true){
                for (i = 0; i < all_time_heatmap_stats.length; i++)
                {
                    if (all_time_heatmap_stats[i]['dart_number'] == "2")
                    {
                        date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                        if (date_number >= start_date_number && date_number <= end_date_number){
                            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                        }
                    }
                }
            }
            if (dart3 == true){
                for (i = 0; i < all_time_heatmap_stats.length; i++)
                {
                    if (all_time_heatmap_stats[i]['dart_number'] == "3")
                    {
                        date_number = parseInt(all_time_heatmap_stats[i]['date'].substr(6,4).concat(all_time_heatmap_stats[i]['date'].substr(3,2)).concat(all_time_heatmap_stats[i]['date'].substr(0,2)));
                        if (date_number >= start_date_number && date_number <= end_date_number){
                            darts_hit.push(all_time_heatmap_stats[i]['hit_location']);
                        }
                    }
                }
            }
        }

    }
    return darts_hit;
}


//Function that hides the number from next to the dropdown if bull or inner bull is selected:
function settingsDropDownHide() {
    if (document.getElementById("aim_settings_dropdown").value == "OB" || document.getElementById("aim_settings_dropdown").value == "IB"){
        document.getElementById("aim_settings_number").style.visibility = "hidden";
        document.getElementById("aim_settings_number").value = "";
    }else{
        document.getElementById("aim_settings_number").style.visibility = "visible";
    }
}










document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("score").innerHTML = score;
    //AJAX call on loading so that array loads first time of asking
    myAJAX();
    //AJAX call on loading so the aim predictor loads first time of asking
    settingsAJAX();
});

//Apply dates:
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#apply_dates').addEventListener('click', function(){
        start_date = document.getElementById("button_for_start_date").valueAsDate.toLocaleDateString();
        end_date = document.getElementById("button_for_end_date").valueAsDate.toLocaleDateString();

        //document.getElementById("check1").innerHTML = start_date;
        //document.getElementById("check2").innerHTML = end_date;
        if (start_date == null || end_date == null){
            return;
        }else{
            clearTheBoard();
            heatMap(dateRangeHeatmapArray(start_date, end_date, individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3,first_nine_darts_heatmap_on));
        }
    });
});

//Settings box open/close
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button_for_settings').addEventListener('click', function(){
        if (settings_box_open == false){
            document.getElementById("settings_box").style.visibility = "visible";
            settings_box_open = true;
            aim_preferred_target = settingsAJAX();
            document.getElementById("default_aim_target_setting").innerHTML = aim_preferred_target[0]["aim_preferred_target"] + "   ";
            document.getElementById("colour_theme_setting").innerHTML = "default";
            document.getElementById("dartboard_division_setting").innerHTML = "default";
            document.getElementById("aim_settings_dropdown").style.visibility = "hidden";
            document.getElementById("aim_settings_number").style.visibility = "hidden";
            document.getElementById("aim_settings_dropdown").value = "";
            document.getElementById("aim_settings_number").value = "";
            document.querySelector('#change_aim_setting').addEventListener('click', function(){
                if (document.getElementById("aim_settings_dropdown").value == "IB" || document.getElementById("aim_settings_dropdown").value == "OB"){
                    document.getElementById("aim_settings_dropdown").style.visibility = "visible";
                    document.getElementById("aim_settings_number").style.visibility = "hidden";
                }else{
                    document.getElementById("aim_settings_dropdown").style.visibility = "visible";
                    document.getElementById("aim_settings_number").style.visibility = "visible";
                }
                aim_settings_on = true;
            });
            document.querySelector('#apply_settings').addEventListener('click', function(){
                if (aim_settings_on == true){
                    aim_section = document.getElementById("aim_settings_dropdown").value;
                    aim_number = document.getElementById("aim_settings_number").value;
                    document.getElementById("aim_settings_dropdown").style.visibility = "hidden";
                    document.getElementById("aim_settings_number").style.visibility = "hidden";
                    if (aim_section != null && aim_number >= 1 && aim_number <= 20 && aim_number%1 == 0){
                        new_settings = new Map();
                        new_settings.aim_preferred_target = aim_section+aim_number;
                        //alert(new_settings.aim_preferred_target);
                        //sending new aim preference to settings database
                        fetch('/settings', {
                            // Declare what type of data we're sending
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            // Specify the method
                            method: 'POST',
                            // A JSON payload
                            body: JSON.stringify({
                                new_settings
                            })
                        }).then(function (response) { // At this point, Flask has printed our JSON
                            return response.text();
                        }).then(function (text) {

                            console.log('POST response: ');

                            // Should be 'OK' if everything was successful
                            console.log(text);
                        });
                    }
                }
            });
            aim_settings_on = false;
            return;
        }else{
            document.getElementById("settings_box").style.visibility = "hidden";
            settings_box_open = false;
            return;
        }
    });
});

//Turn off settings box
document.addEventListener('click',(event)=>{
    id = (event.target.getAttribute('id'));
    if (id != "settings_box" && id != "button_for_settings" && settings_box_open == true){
        var classes = (event.target.getAttribute('class'));
        if (classes == null){
            document.getElementById("settings_box").style.visibility = "hidden";
            document.getElementById("aim_settings_dropdown").style.visibility = "hidden";
            document.getElementById("aim_settings_number").style.visibility = "hidden";
            settings_box_open = false;
            return;
        }
        if (classes.includes("inside_settings_box") == true){
            return;
        }else{
            document.getElementById("settings_box").style.visibility = "hidden";
            document.getElementById("aim_settings_dropdown").style.visibility = "hidden";
            document.getElementById("aim_settings_number").style.visibility = "hidden";
            settings_box_open = false;
        }
    }
});

//More stats box open/close
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button_for_more_stats').addEventListener('click', function(){
        if (more_stats_box_open == false){
            document.getElementById("more_statistics_box").style.visibility = "visible";
            more_stats_box_open = true;
            document.getElementById("3dart_average_more_box").innerHTML = three_dart_average;
            document.getElementById("first_9_dart_average_more_box").innerHTML = first_nine_dart_average;
            document.getElementById("highest_score_more_box").innerHTML = highest_score;
            document.getElementById("highest_checkout_more_box").innerHTML = highest_checkout;
            document.getElementById("first_dart_average").innerHTML = dart1_average();
            document.getElementById("second_dart_average").innerHTML = dart2_average();
            document.getElementById("third_dart_average").innerHTML = dart3_average();
            document.getElementById("misses_bounce_outs").innerHTML = "Not coded yet";
            document.getElementById("checkout_percentage").innerHTML = "Not coded yet";
            document.getElementById("darts_lost_to_bust").innerHTML = "Not coded yet";
            document.getElementById("most_hit_double").innerHTML = "Not coded yet";
            document.getElementById("best_checkout_percentage_double").innerHTML = "Not coded yet";
            document.getElementById("number_of_60s").innerHTML = number_of_60s;
            document.getElementById("number_of_100s").innerHTML = number_of_100s;
            document.getElementById("number_of_140s").innerHTML = number_of_140s;
            document.getElementById("number_of_180s").innerHTML = number_of_180s;
            return;
        }else{
            document.getElementById("more_statistics_box").style.visibility = "hidden";
            more_stats_box_open = false;
            return;
        }
    });
});
//Turn off more stats box
document.addEventListener('click',(event)=>{
    id = (event.target.getAttribute('id'));
    if (id != "more_statistics_box" && id != "button_for_more_stats" && more_stats_box_open == true){
        var classes = (event.target.getAttribute('class'));
        if (classes == null){
            document.getElementById("more_statistics_box").style.visibility = "hidden";
            more_stats_box_open = false;
            return;
        }
        if (classes.includes("inside_more_statistics_box") == true){
            return;
        }else{
            document.getElementById("more_statistics_box").style.visibility = "hidden";
            more_stats_box_open = false;
        }

    }
});

//Logout
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button_for_log_out').addEventListener('click', function(){
        if (log_out_box_open == false){
            document.getElementById("log_out_box").style.visibility = "visible";
            log_out_box_open = true;
            return;
        }
        if (log_out_box_open == true){
            document.getElementById("log_out_box").style.visibility = "hidden";
            log_out_box_open = false;
            return;
        }
    });
});
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#log_out_reject').addEventListener('click', function(){
        document.getElementById("log_out_box").style.visibility = "hidden";
        log_out_box_open = false;
        return;
    });
});



//Event listener to get rid of warning message by clicking anywhere again.
document.addEventListener("click", function(){
    if (document.getElementById("warning").innerHTML == "" || document.getElementById("warning").innerHTML.includes("Choose a score to replace Dart") == true){
        return;
    }else{
        document.getElementById("warning").innerHTML = "";
        return;
    }
})


//Scoring logic
document.addEventListener('click',(event)=>{
    id = (event.target.getAttribute('id'));
    var classes = (event.target.getAttribute('class'));

    //Scoring logic not whilst editing scores
    if (editing_dart == 0 && editing_aim == 0){
        if (classes != null){
            if (classes.includes("score_") == true){
                current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);

                if (darts_thrown_in_leg-(3*visits) == 0){
                    dart1 = current_hit_score;
                    document.getElementById("dart1").innerHTML = dart1;
                    can_edit_dart += 1;
                }if (darts_thrown_in_leg-(3*visits) == 1){
                    dart2 = current_hit_score;
                    document.getElementById("dart2").innerHTML = dart2;
                    can_edit_dart += 1;
                }if (darts_thrown_in_leg-(3*visits) == 2){
                    dart3 = current_hit_score;
                    document.getElementById("dart3").innerHTML = dart3;
                    can_edit_dart +=1;

                }if (darts_thrown_in_leg-(3*visits) > 2){
                        document.getElementById("warning").innerHTML = "You can't throw more than 3 darts!";
                        return;
                }
            }
        }
        if (classes != null){
            if (classes.includes("button") == true && classes.includes("_button") == false){
                current_hit_score = 0;
                darts_thrown_in_leg++;
                darts_thrown_in_session++;
                darts_thrown_total++;
                document.getElementById("current_visit_score").innerHTML = dart1 + dart2 + dart3;
                three_dart_score = dart1 + dart2 + dart3;
                score_type = score_types[0];
                aimPrediction();
                checkoutRoutes();

                //Adding data to maps (score, hit_location, hit_location_bed, dart_number_in_throw, score_type, darts_in_leg, darts_in_session)
                window['dart_throw' + darts_thrown_in_session] = new Map();
                //Data that is dependent on the dart number
                if (darts_thrown_in_leg-(3*visits) - 1 == 0 && classes.includes("button") == true){
                    window['dart_throw' + darts_thrown_in_session].score = dart1;
                    window['dart_throw' + darts_thrown_in_session].dart_number_in_throw = 1;
                    window['dart_throw' + darts_thrown_in_session].aim_location_bed = aim_prediction;
                    can_add_data = true;
                }if (darts_thrown_in_leg-(3*visits) - 1 == 1 && classes.includes("button") == true){
                    window['dart_throw' + darts_thrown_in_session].score = dart2;
                    window['dart_throw' + darts_thrown_in_session].dart_number_in_throw = 2;
                    window['dart_throw' + darts_thrown_in_session].aim_location_bed = aim_prediction;
                    can_add_data = true;
                }if (darts_thrown_in_leg-(3*visits) - 1 == 2 && classes.includes("button") == true){
                    window['dart_throw' + darts_thrown_in_session].score = dart3;
                    window['dart_throw' + darts_thrown_in_session].dart_number_in_throw = 3;
                    window['dart_throw' + darts_thrown_in_session].aim_location_bed = aim_prediction;
                    can_add_data = true;
                }
                //Data that is not dependent on the dart number
                if(can_add_data == true){
                    //Working out the bed the dart landed in using the ID
                    if (id.includes("Inner_Single") || id.includes("Outer_Single")){
                        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "S" + current_hit_score;
                        current_hit_score = 0;
                    }
                    if (id.includes("Double")){
                        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "D" + (current_hit_score/2);
                        current_hit_score = 0;
                    }
                    if (id.includes("Triple")){
                        current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "T" + (current_hit_score/3);
                        current_hit_score = 0;
                    }
                    if (id.includes("Inner_Bull")){
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "Bullseye";
                    }
                    if (id.includes("Outer_Bull")){
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "Outer Bull";
                    }
                    if (id.includes("Wire")){
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "Wire";
                    }
                    if (id.includes("Inner_Miss") || id.includes("Outer_Miss")){
                        window['dart_throw' + darts_thrown_in_session].hit_location_bed = "Miss";
                    }
                    //Other data not dependent on dart number
                    window['dart_throw' + darts_thrown_in_session].hit_location = id;
                    window['dart_throw' + darts_thrown_in_session].score_type = score_types[0];
                    window['dart_throw' + darts_thrown_in_session].darts_in_leg = darts_thrown_in_leg;
                    window['dart_throw' + darts_thrown_in_session].darts_in_session = darts_thrown_in_session;
                    window['dart_throw' + darts_thrown_in_session].session_date = date.toLocaleDateString();
                    window['dart_throw' + darts_thrown_in_session].session_time = date.toLocaleTimeString();
                    //Data for first 9 average:
                    if (darts_thrown_in_leg < 10){
                        first_nine_darts_score += window['dart_throw' + darts_thrown_in_session].score;
                        first_nine_darts_thrown += 1;
                    }
                }

                can_add_data = false;
            }
        }

        //Checkout and Bust logic
        if (points_in_leg + three_dart_score >= 500){

            //Checkout
            if ((points_in_leg + three_dart_score == 501) && ((id.includes("Double") == true) || (id.includes("Inner_Bull")))){
                if (darts_thrown_in_leg-(3*(visits)) == 1){
                    dart2 = "-";
                    dart3 = "-";
                    three_dart_score = dart1;
                    document.getElementById("dart2").innerHTML = dart2;
                    document.getElementById("dart3").innerHTML = dart3;
                    document.getElementById("current_visit_score").innerHTML = three_dart_score;

                }if (darts_thrown_in_leg-(3*(visits)) == 2){
                    dart3 = "-";
                    three_dart_score = dart1 + dart2;
                    document.getElementById("dart3").innerHTML = dart3;
                    document.getElementById("current_visit_score").innerHTML = three_dart_score;

                }if (darts_thrown_in_leg-(3*(visits)) == 3){
                    three_dart_score = dart1 + dart2 + dart3;
                    document.getElementById("current_visit_score").innerHTML = three_dart_score;

                }
                document.getElementById("warning").innerHTML = "Checkout!";
                document.getElementById("submit_score").innerHTML = "New Game";
                document.getElementById("checkout_route").innerHTML = "Checkout!";
                score_type = score_types[1];
                checkout = true;

            // Bust
            }else{
                if (darts_thrown_in_leg-(3*(visits)) == 1){
                    dart2 = 0;
                    dart3 = 0;
                    wasted_darts = 2;
                    bust_darts += 2;
                    three_dart_score = dart1;
                    document.getElementById("dart2").innerHTML = dart2;
                    document.getElementById("dart3").innerHTML = dart3;
                    document.getElementById("current_visit_score").innerHTML = 0;
                    //Second dart wasted:
                    window['dart_throw' + (darts_thrown_in_session + 1)] = new Map();
                    window['dart_throw' + darts_thrown_in_session].score = 0;
                    window['dart_throw' + darts_thrown_in_session].dart_number_in_throw = 2;
                    window['dart_throw' + darts_thrown_in_session].aim_location_bed = "waste";
                    window['dart_throw' + darts_thrown_in_session].hit_location_bed = "waste";
                    window['dart_throw' + darts_thrown_in_session].hit_location = "waste";
                    window['dart_throw' + darts_thrown_in_session].score_type = score_types[3];
                    window['dart_throw' + darts_thrown_in_session].darts_in_leg = darts_thrown_in_leg;
                    window['dart_throw' + darts_thrown_in_session].darts_in_session = darts_thrown_in_session;
                    window['dart_throw' + darts_thrown_in_session].session_date = date.toLocaleDateString();
                    window['dart_throw' + darts_thrown_in_session].session_time = date.toLocaleTimeString();
                    //Third dart wasted:
                    window['dart_throw' + (darts_thrown_in_session + 2)] = new Map();
                    window['dart_throw' + darts_thrown_in_session].score = 0;
                    window['dart_throw' + darts_thrown_in_session].dart_number_in_throw = 3;
                    window['dart_throw' + darts_thrown_in_session].aim_location_bed = "waste";
                    window['dart_throw' + darts_thrown_in_session].hit_location_bed = "waste";
                    window['dart_throw' + darts_thrown_in_session].hit_location = "waste";
                    window['dart_throw' + darts_thrown_in_session].score_type = score_types[3];
                    window['dart_throw' + darts_thrown_in_session].darts_in_leg = darts_thrown_in_leg;
                    window['dart_throw' + darts_thrown_in_session].darts_in_session = darts_thrown_in_session;
                    window['dart_throw' + darts_thrown_in_session].session_date = date.toLocaleDateString();
                    window['dart_throw' + darts_thrown_in_session].session_time = date.toLocaleTimeString();
                    darts_thrown_in_leg += 2;
                    darts_thrown_in_session += 2;
                    score_type = score_types[2];

                }if (darts_thrown_in_leg-(3*(visits)) == 2){
                    dart3 = 0;
                    three_dart_score = 0;
                    wasted_darts = 1;
                    bust_darts += 1;
                    document.getElementById("dart3").innerHTML = dart3;
                    document.getElementById("current_visit_score").innerHTML = 0;
                    //Third dart wasted:
                    window['dart_throw' + (darts_thrown_in_session + 1)] = new Map();
                    window['dart_throw' + darts_thrown_in_session].score = 0;
                    window['dart_throw' + darts_thrown_in_session].dart_number_in_throw = 3;
                    window['dart_throw' + darts_thrown_in_session].aim_location_bed = "waste";
                    window['dart_throw' + darts_thrown_in_session].hit_location_bed = "waste";
                    window['dart_throw' + darts_thrown_in_session].hit_location = "waste";
                    window['dart_throw' + darts_thrown_in_session].score_type = score_types[3];
                    window['dart_throw' + darts_thrown_in_session].darts_in_leg = darts_thrown_in_leg;
                    window['dart_throw' + darts_thrown_in_session].darts_in_session = darts_thrown_in_session;
                    window['dart_throw' + darts_thrown_in_session].session_date = date.toLocaleDateString();
                    window['dart_throw' + darts_thrown_in_session].session_time = date.toLocaleTimeString();
                    darts_thrown_in_leg += 1;
                    darts_thrown_in_session += 1;
                    score_type = score_types[2];

                }if (darts_thrown_in_leg-(3*(visits)) == 3){
                    three_dart_score = 0;
                    document.getElementById("current_visit_score").innerHTML = 0;
                    score_type = score_types[2];
                }
                document.getElementById("warning").innerHTML = "Bust!";
                checkoutRoutes();
            }
        }

    }
      //Logic dealing with darts being edited
      if (editing_dart > 0){
          if (classes.includes("score_") == true){
                  current_hit_score = parseInt(classes[classes.search("score_") + 5 + 1] + classes[classes.search("score_") + 5 + 2]);

                    if (editing_dart == 1){
                            dart1 = current_hit_score;
                            document.getElementById("dart1").innerHTML = dart1;
                            document.getElementById("dart1").style.borderStyle = "none";
                            document.getElementById("dart1").style.backgroundColor = "grey";
                            editDartsData(id, classes);
                            editing_dart = 0;
                    }if (editing_dart == 2){
                            dart2 = current_hit_score;
                            document.getElementById("dart2").innerHTML = dart2;
                            document.getElementById("dart2").style.borderStyle = "none";
                            document.getElementById("dart2").style.backgroundColor = "grey";
                            editDartsData(id, classes);
                            editing_dart = 0;
                    }if (editing_dart == 3){
                            dart3 = current_hit_score;
                            document.getElementById("dart3").innerHTML = dart3;
                            document.getElementById("dart3").style.borderStyle = "none";
                            document.getElementById("dart3").style.backgroundColor = "grey";
                            editDartsData(id, classes);
                            editing_dart = 0;
                    }
                    three_dart_score = dart1 + dart2 + dart3;
                    document.getElementById("current_visit_score").innerHTML = dart1 + dart2 + dart3;
          }
          //Cancelling editing by clicking away.
          if (classes.includes("score_") != true && classes.includes("current_darts") != true){
              editing_dart = 0;
              document.getElementById("dart1").style.borderStyle = "none";
              document.getElementById("dart1").style.backgroundColor = "grey";
              document.getElementById("dart2").style.borderStyle = "none";
              document.getElementById("dart2").style.backgroundColor = "grey";
              document.getElementById("dart3").style.borderStyle = "none";
              document.getElementById("dart3").style.backgroundColor = "grey";
              document.getElementById("warning").innerHTML = "";
          }
          //Cancelling editing by clicking the same button again (not working).
          if (id == "dart1" && editing_dart == 1){
                document.getElementById("dart1").style.borderStyle = "none";
                document.getElementById("dart1").style.backgroundColor = "grey";
                editing_dart = 0;
                document.getElementById("warning").innerHTML = "";
          }if ((id == "dart2") && (editing_dart == 2)){
                document.getElementById("dart2").style.borderStyle = "none";
                document.getElementById("dart2").style.backgroundColor = "grey";
                editing_dart = 0;
                document.getElementById("warning").innerHTML = "";
          }if ((id == "dart3") && (editing_dart == 3)){
                document.getElementById("dart3").style.borderStyle = "none";
                document.getElementById("dart3").style.backgroundColor = "grey";
                editing_dart = 0;
                document.getElementById("warning").innerHTML = "";
          }
      }

        //Undo/editing - establishing if a dart needs editing.
        if (id == "dart1" && editing_dart != 1){
            if (can_edit_dart < 1){
                document.getElementById("warning").innerHTML = "You can only edit darts after you've thrown them";
            }else{
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "2px";
                document.getElementById(id).style.borderColor = "red";
                document.getElementById(id).style.backgroundColor = "#B49BF0";
                editing_dart = 1;
                document.getElementById("warning").innerHTML = "Choose a score to replace Dart 1";
                //Allows user to switch between darts they want to edit
                document.getElementById("dart2").style.borderStyle = "none";
                document.getElementById("dart2").style.backgroundColor = "grey";
                document.getElementById("dart3").style.borderStyle = "none";
                document.getElementById("dart3").style.backgroundColor = "grey";
            }
        }
        if (id == "dart2" && editing_dart != 2){
            if (can_edit_dart < 2){
                document.getElementById("warning").innerHTML = "You can only edit darts after you've thrown them";
            }else{
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "2px";
                document.getElementById(id).style.borderColor = "red";
                document.getElementById(id).style.backgroundColor = "#B49BF0";
                editing_dart = 2;
                document.getElementById("warning").innerHTML = "Choose a score to replace Dart 2";
                //Allows user to switch between darts they want to edit
                document.getElementById("dart1").style.borderStyle = "none";
                document.getElementById("dart1").style.backgroundColor = "grey";
                document.getElementById("dart3").style.borderStyle = "none";
                document.getElementById("dart3").style.backgroundColor = "grey";
            }
        }
        if (id == "dart3" && editing_dart != 3){
            if (can_edit_dart < 3){
                document.getElementById("warning").innerHTML = "You can only edit darts after you've thrown them";
            }else{
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "2px";
                document.getElementById(id).style.borderColor = "red";
                document.getElementById(id).style.backgroundColor = "#B49BF0";
                editing_dart = 3;
                document.getElementById("warning").innerHTML = "Choose a score to replace Dart 3";
                //Allows user to switch between darts they want to edit
                document.getElementById("dart1").style.borderStyle = "none";
                document.getElementById("dart1").style.backgroundColor = "grey";
                document.getElementById("dart2").style.borderStyle = "none";
                document.getElementById("dart2").style.backgroundColor = "grey";
            }
        }


        //Logic dealing with aim locations being edited
        if (editing_aim > 0){
            if (classes.includes("score_") == true){
                target = editAimData(id,classes);
                if (editing_aim == 1){
                        document.getElementById("aim_at_dart1").innerHTML = target;
                        document.getElementById("aim_at_dart1").style.borderStyle = "none";
                        document.getElementById("aim_at_dart1").style.backgroundColor = "#009051";
                        editing_aim = 0;
                }if (editing_aim == 2){
                        document.getElementById("aim_at_dart2").innerHTML = target;
                        document.getElementById("aim_at_dart2").style.borderStyle = "none";
                        document.getElementById("aim_at_dart2").style.backgroundColor = "#009051";
                        editing_aim = 0;
                }if (editing_aim == 3){
                        document.getElementById("aim_at_dart3").innerHTML = target;
                        document.getElementById("aim_at_dart3").style.borderStyle = "none";
                        document.getElementById("aim_at_dart3").style.backgroundColor = "#009051";
                        editing_aim = 0;
                }
            }

            //Cancelling editing by clicking away.
            if (classes.includes("score_") != true && classes.includes("current_darts") != true){
                editing_aim = 0;
                document.getElementById("aim_at_dart1").style.borderStyle = "none";
                document.getElementById("aim_at_dart1").style.backgroundColor = "#009051";
                document.getElementById("aim_at_dart2").style.borderStyle = "none";
                document.getElementById("aim_at_dart2").style.backgroundColor = "#009051";
                document.getElementById("aim_at_dart3").style.borderStyle = "none";
                document.getElementById("aim_at_dart3").style.backgroundColor = "#009051";
                document.getElementById("warning").innerHTML = "";
            }
            //Cancelling editing by clicking the same button again (not working).
            if (id == "aim_at_dart1" && editing_aim == 1){
                document.getElementById("aim_at_dart1").style.borderStyle = "none";
                document.getElementById("aim_at_dart1").style.backgroundColor = "#009051";
                editing_aim = 0;
                document.getElementById("warning").innerHTML = "";
            }if ((id == "aim_at_dart2") && (editing_aim == 2)){
                document.getElementById("aim_at_dart2").style.borderStyle = "none";
                document.getElementById("aim_at_dart2").style.backgroundColor = "#009051";
                editing_aim = 0;
                document.getElementById("warning").innerHTML = "";
            }if ((id == "aim_at_dart3") && (editing_aim == 3)){
                document.getElementById("aim_at_dart3").style.borderStyle = "none";
                document.getElementById("aim_at_dart3").style.backgroundColor = "#009051";
                editing_aim = 0;
                document.getElementById("warning").innerHTML = "";
            }
        }

        //Undo/editing - establishing if a dart needs editing.
        if (id == "aim_at_dart1" && editing_aim != 1){
            if (can_edit_dart < 1){
                document.getElementById("warning").innerHTML = "You can only edit darts after you've thrown them";
            }else{
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "2px";
                document.getElementById(id).style.borderColor = "red";
                document.getElementById(id).style.backgroundColor = "#B49BF0";
                editing_aim = 1;
                document.getElementById("warning").innerHTML = "Where did you aim for Dart 1?";
                //Allows user to switch between darts they want to edit
                document.getElementById("aim_at_dart2").style.borderStyle = "none";
                document.getElementById("aim_at_dart2").style.backgroundColor = "#009051";
                document.getElementById("aim_at_dart3").style.borderStyle = "none";
                document.getElementById("aim_at_dart3").style.backgroundColor = "#009051";
            }
        }
        if (id == "aim_at_dart2" && editing_aim != 2){
            if (can_edit_dart < 2){
                document.getElementById("warning").innerHTML = "You can only edit darts after you've thrown them";
            }else{
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "2px";
                document.getElementById(id).style.borderColor = "red";
                document.getElementById(id).style.backgroundColor = "#B49BF0";
                editing_aim = 2;
                document.getElementById("warning").innerHTML = "Where did you aim for Dart 2?";
                //Allows user to switch between darts they want to edit
                document.getElementById("aim_at_dart1").style.borderStyle = "none";
                document.getElementById("aim_at_dart1").style.backgroundColor = "#009051";
                document.getElementById("aim_at_dart3").style.borderStyle = "none";
                document.getElementById("aim_at_dart3").style.backgroundColor = "#009051";
            }
        }
        if (id == "aim_at_dart3" && editing_aim != 3){
            if (can_edit_dart < 3){
                document.getElementById("warning").innerHTML = "You can only edit darts after you've thrown them";
            }else{
                document.getElementById(id).style.borderStyle = "solid";
                document.getElementById(id).style.borderWidth = "2px";
                document.getElementById(id).style.borderColor = "red";
                document.getElementById(id).style.backgroundColor = "#B49BF0";
                editing_aim = 3;
                document.getElementById("warning").innerHTML = "Where did you aim for Dart 3?";
                //Allows user to switch between darts they want to edit
                document.getElementById("aim_at_dart1").style.borderStyle = "none";
                document.getElementById("aim_at_dart1").style.backgroundColor = "#009051";
                document.getElementById("aim_at_dart2").style.borderStyle = "none";
                document.getElementById("aim_at_dart2").style.backgroundColor = "#009051";
            }
        }



        //Checks
        //checker = settingsAJAX();
        //aim_prediction = checker["aim_preferred_target"];
        //document.getElementById("check1").innerHTML = "check = " + parseInt(all_time_heatmap_stats[50]['date'].substr(6,4).concat(all_time_heatmap_stats[50]['date'].substr(3,2)).concat(all_time_heatmap_stats[50]['date'].substr(0,2)))
        //document.getElementById("check2").innerHTML = aim_number;

        document.getElementById("check3").innerHTML = "id = " + id;
        //
        //document.getElementById("darts_thrown").innerHTML = darts_thrown_in_leg;


});



document.addEventListener('DOMContentLoaded', function(){
        document.querySelector("#submit_score").addEventListener("click", function(){
                if (checkout == false){
                    if (visits == 0){
                         if (darts_thrown_in_leg != 3){
                            document.getElementById("warning").innerHTML = "Throw all 3 darts!";
                            return;
                    }
                    }
                    else{
                         if (darts_thrown_in_leg%(3*(visits+1)) != 0){
                            document.getElementById("warning").innerHTML = "Throw all 3 darts!";
                            return;
                    }
                    }
                }
                // Undo editor when pressing submit.
                editing_dart = 0;
                document.getElementById("dart1").style.borderStyle = "none";
                document.getElementById("dart1").style.backgroundColor = "grey";
                document.getElementById("dart2").style.borderStyle = "none";
                document.getElementById("dart2").style.backgroundColor = "grey";
                document.getElementById("dart3").style.borderStyle = "none";
                document.getElementById("dart3").style.backgroundColor = "grey";
                document.getElementById("warning").innerHTML = "";
                //Add data:
                if (wasted_darts == 0){
                    window['dart_throw' + (darts_thrown_in_session - 2)].score_at_time_of_throwing = score;
                    window['dart_throw' + (darts_thrown_in_session - 1)].score_at_time_of_throwing = score - dart1;
                    window['dart_throw' + (darts_thrown_in_session)].score_at_time_of_throwing = score - dart1 - dart2;
                }if (wasted_darts == 1){
                    window['dart_throw' + (darts_thrown_in_session - 2)].score_at_time_of_throwing = score;
                    window['dart_throw' + (darts_thrown_in_session - 1)].score_at_time_of_throwing = score - dart1;
                }if (wasted_darts == 2){
                    window['dart_throw' + (darts_thrown_in_session - 2)].score_at_time_of_throwing = score;
                }
                wasted_darts = 0;
                score = score - three_dart_score;
                visits++;
                points_in_leg += three_dart_score;
                points_in_session += three_dart_score;
                document.getElementById("score").innerHTML = score;
                document.getElementById("darts_thrown").innerHTML = darts_thrown_in_leg;
                document.getElementById("previous_visit_score").innerHTML = three_dart_score;
                document.getElementById("dart1").innerHTML = "";
                document.getElementById("dart2").innerHTML = "";
                document.getElementById("dart3").innerHTML = "";
                document.getElementById("current_visit_score").innerHTML = "";
                document.getElementById("old_dart1").innerHTML = dart1;
                document.getElementById("old_dart2").innerHTML = dart2;
                document.getElementById("old_dart3").innerHTML = dart3;
                document.getElementById("warning").innerHTML = "";
                three_dart_average = Math.round( ( (3*(points_in_session/darts_thrown_in_session)) + Number.EPSILON ) * 100 ) / 100;
                document.getElementById("3dart_average").innerHTML = three_dart_average;
                first_nine_dart_average = Math.round(((first_nine_darts_score/first_nine_darts_thrown)*3 + Number.EPSILON)*100)/100;
                document.getElementById("first_9_dart_average").innerHTML = first_nine_dart_average;
                if (darts_thrown_in_session == 3){
                    highest_score = three_dart_score;
                }
                if (three_dart_score > highest_score){
                    highest_score = three_dart_score;
                }
                document.getElementById("highest_score").innerHTML = highest_score;
                if (checkout == true){
                    if (legs_won_in_session == 0){
                        highest_checkout = three_dart_score;
                    }
                    if (three_dart_score > highest_checkout){
                        highest_checkout = three_dart_score;
                    }
                    document.getElementById("highest_checkout").innerHTML = highest_checkout;
                    visits = 0;
                    score = 501;
                    legs_won_in_session += 1;
                    points_in_leg = 0;
                    darts_thrown_in_leg = 0;
                    document.getElementById("score").innerHTML = score;
                    document.getElementById("checkout_route").innerHTML = "";
                }
                //Counting 60s, 100s, 140s and 180s
                if (three_dart_score >= 60 && three_dart_score < 100){
                    number_of_60s++;
                }
                if (three_dart_score >= 100 && three_dart_score < 140){
                    number_of_100s++;
                }
                if (three_dart_score >= 140 && three_dart_score < 180){
                    number_of_140s++;
                }
                if (three_dart_score == 180){
                    number_of_180s++;
                }
                //Clearing Aim Predictions
                clearAimPredictions();
                //document.getElementById("check1").innerHTML = "points in session = " + points_in_session;
                //document.getElementById("check2").innerHTML = "darts = " + darts_thrown_in_session;
                //
                three_dart_score = 0;
                dart1 = 0;
                dart2 = 0;
                dart3 = 0;
                can_edit_dart = 0;
                checkout = false;
                dart_database_1 = window['dart_throw' + (darts_thrown_in_session - 2)];
                dart_database_2 = window['dart_throw' + (darts_thrown_in_session - 1)];
                dart_database_3 = window['dart_throw' + (darts_thrown_in_session - 0)];


                //Sending information to the database POST method

                fetch('/hello', {

                    // Declare what type of data we're sending
                    headers: {
                      'Content-Type': 'application/json'
                    },

                    // Specify the method
                    method: 'POST',

                    // A JSON payload
                    body: JSON.stringify({
                        dart_database_1, dart_database_2, dart_database_3
                    })
                }).then(function (response) { // At this point, Flask has printed our JSON
                    return response.text();
                }).then(function (text) {

                    console.log('POST response: ');

                    // Should be 'OK' if everything was successful
                    console.log(text);
                });
                if (document.getElementById("submit_score").innerHTML == "New Game"){
                    document.getElementById("submit_score").innerHTML = "Submit!";
                }
        });
});

// Heatmap
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button_for_heatmap').addEventListener('click', function(){

        //Creating Heatmap
        if (stats_on == false){
            let buttons = document.querySelectorAll('path.hit');
            buttons.forEach(node => node.style.fill = "#F0F3FE");
            buttons.forEach(node => node.style.stroke = "#F0F3FE");
            let centre = document.querySelector("#Inner_Bull_Centre");
            centre.style.fill = "#F0F3FE";
            centre.style.stroke = "#F0F3FE";
            let outside_numbers = document.querySelectorAll('text.number_on_outside_of_board');
            outside_numbers.forEach(node => node.style.fill = "#000000");

            //Adding colours into Heatmap
            heatMap(allDartsArraySession());

            //Add alltime stats button
            document.getElementById("all_time_heatmap_button").style.visibility = "visible";

            //Add 1st, 2nd, 3rd dart buttons and first nine button
            document.getElementById("first_dart_button").style.visibility = "visible";
            document.getElementById("second_dart_button").style.visibility = "visible";
            document.getElementById("third_dart_button").style.visibility = "visible";
            document.getElementById("first_nine_darts_button").style.visibility = "visible";

            //Add date options button:
            document.getElementById("turn_on_calendar_button").style.visibility = "visible";


            //Changing button image:
            document.getElementById("button_for_heatmap").src="/static/Dartboard.png";
            //Essential changing "stats_on" and return.
            stats_on = true;
            return;
        }

        //reversing Heatmap to Dartboard view
        if (stats_on == true){
            restoreTheBoard();

            stats_on = false;
            all_time_heatmap_stats_on = false;

            //Hide all time stats toggle
            document.getElementById("all_time_heatmap_button").style.visibility = "hidden";
            document.getElementById("all_time_heatmap_button").style.backgroundColor = "grey";
            document.getElementById("all_time_heatmap_button").setAttribute("value", "OFF"); //this ain't working...

            //Hide First, Second, Third Dart buttons and first nine button.
            document.getElementById("first_dart_button").style.visibility = "hidden";
            document.getElementById("second_dart_button").style.visibility = "hidden";
            document.getElementById("third_dart_button").style.visibility = "hidden";
            document.getElementById("first_nine_darts_button").style.visibility = "hidden";

            //Hide date button:
            document.getElementById("turn_on_calendar_button").style.visibility = "hidden";


            //Hide date options:
            document.getElementById("calendar_options").style.visibility = "hidden";
            calendar_options_on = false;
            calendar_filter_on = false;

            //Changing button image:
            document.getElementById("button_for_heatmap").src="/static/Heatmap_Image.png";
            return;
        }
    });

    //All time heatmap data:
    document.querySelector('#all_time_heatmap_button').addEventListener('click', function(){
        if (all_time_heatmap_stats_on == false){
            document.getElementById("all_time_heatmap_button").style.backgroundColor = "green";
            document.getElementById("all_time_heatmap_button").setAttribute("value", "ON");
            clearTheBoard();
            //Add heatmap, accounting for individual darts buttons and first 9 darts button.
            if (first_nine_darts_heatmap_on == false){
                heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
            }else{
                heatMap(first9DartsArrayAllTime(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }


            //Essential changing "all_time_heatmap_stats_on" status and return
            all_time_heatmap_stats_on = true;
            return;

        }

        //reversing all time stats to session stats
        if (all_time_heatmap_stats_on == true){
            document.getElementById("all_time_heatmap_button").style.backgroundColor = "grey";
            document.getElementById("all_time_heatmap_button").setAttribute("value", "OFF");

            // Remove existing heatmap
            clearTheBoard();

            // Add session heatmap accounting for individual darts buttons and first 9 darts button.
            if (first_nine_darts_heatmap_on == false){
                heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }else{
                heatMap(first9DartsArraySesssion(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }

            //Essential changing "all_time_heatmap_stats_on" status and return
            all_time_heatmap_stats_on = false;
            return;
        }

    });

    //Individual darts button 1 pressed
    document.querySelector('#first_dart_button').addEventListener('click', function(){
        //Turn on
        if (individual_darts_stats_1 == false){
            individual_darts_stats_on += 1;
            document.getElementById("first_dart_button").style.backgroundColor = "green";
            individual_darts_stats_1 = true;
            clearTheBoard();
            if (all_time_heatmap_stats_on == true){
                heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
            }else{
                heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }
            return;
        }
        //Turn off
        if (individual_darts_stats_1 == true){
            individual_darts_stats_on -= 1;
            document.getElementById("first_dart_button").style.backgroundColor = "grey";
            individual_darts_stats_1 = false;
            if (individual_darts_stats_on > 0){
                clearTheBoard();
                if (all_time_heatmap_stats_on == true){
                    heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
                }else{
                    heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
                }
            }else{
                if (all_time_heatmap_stats_on == true){
                    all_time_heatmap_stats = myAJAX();
                    heatMap(allDartsArrayAllTime(all_time_heatmap_stats));
                }else{
                    heatMap(allDartsArraySession());
                }
            }
            return;
        }
    });

    //Individual darts button 2 pressed
    document.querySelector('#second_dart_button').addEventListener('click', function(){
        //Turn on
        if (individual_darts_stats_2 == false){
            individual_darts_stats_on += 1;
            document.getElementById("second_dart_button").style.backgroundColor = "green";
            individual_darts_stats_2 = true;
            clearTheBoard();
            if (all_time_heatmap_stats_on == true){
                all_time_heatmap_stats = myAJAX();
                heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
            }else{
                heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }
            return;
        }
        //Turn off
        if (individual_darts_stats_2 == true){
            individual_darts_stats_on -= 1;
            document.getElementById("second_dart_button").style.backgroundColor = "grey";
            individual_darts_stats_2 = false;
            if (individual_darts_stats_on > 0){
                clearTheBoard();
                if (all_time_heatmap_stats_on == true){
                    all_time_heatmap_stats = myAJAX();
                    heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
                }else{
                    heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
                }
            }else{
                if (all_time_heatmap_stats_on == true){
                    all_time_heatmap_stats = myAJAX();
                    heatMap(allDartsArrayAllTime(all_time_heatmap_stats));
                }else{
                    heatMap(allDartsArraySession());
                }
            }
            return;
        }
    });

    //Individual darts button 3 pressed
    document.querySelector('#third_dart_button').addEventListener('click', function(){
        //Turn on
        if (individual_darts_stats_3 == false){
            individual_darts_stats_on += 1;
            document.getElementById("third_dart_button").style.backgroundColor = "green";
            individual_darts_stats_3 = true;
            clearTheBoard();
            if (all_time_heatmap_stats_on == true){
                all_time_heatmap_stats = myAJAX();
                heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
            }else{
                heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }
            return;
        }
        //Turn off
        if (individual_darts_stats_3 == true){
            individual_darts_stats_on -= 1;
            document.getElementById("third_dart_button").style.backgroundColor = "grey";
            individual_darts_stats_3 = false;
            if (individual_darts_stats_on > 0){
                clearTheBoard();
                if (all_time_heatmap_stats_on == true){
                    all_time_heatmap_stats = myAJAX(); //Does this need to be here?
                    heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
                }else{
                    heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
                }
            }else{
                if (all_time_heatmap_stats_on == true){
                    all_time_heatmap_stats = myAJAX();
                    heatMap(allDartsArrayAllTime(all_time_heatmap_stats));
                }else{
                    heatMap(allDartsArraySession());
                }
            }
            return;
        }
    });
    //First Nine Darts Button - able to be used in combination with all other heatmap buttons
    document.querySelector('#first_nine_darts_button').addEventListener('click', function(){
        //Turning on
        if (first_nine_darts_heatmap_on == false){
            clearTheBoard();
            document.getElementById("first_nine_darts_button").style.backgroundColor = "green";
            first_nine_darts_heatmap_on = true;
            if (all_time_heatmap_stats_on == true){
                heatMap(first9DartsArrayAllTime(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }else{
                heatMap(first9DartsArraySesssion(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }


        //Turning off
        }else{
            document.getElementById("first_nine_darts_button").style.backgroundColor = "grey";
            first_nine_darts_heatmap_on = false;
            if (all_time_heatmap_stats_on == true){
                heatMap(individualDartsArrayAllTime(individual_darts_stats_1, individual_darts_stats_2, individual_darts_stats_3));
            }else{
                heatMap(individualDartsArraySession(individual_darts_stats_1,individual_darts_stats_2,individual_darts_stats_3));
            }
        }
    });
    //Calendar Option button pressed - to be used in combination with all other buttons.
    document.querySelector('#turn_on_calendar_button').addEventListener('click', function(){
        if (calendar_options_on == false){
            document.getElementById("calendar_options").style.visibility = "visible";
            calendar_options_on = true;
        }else{
            document.getElementById("calendar_options").style.visibility = "hidden";
            calendar_options_on = false;
        }
    });
});