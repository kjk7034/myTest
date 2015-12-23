console.log("Test" );

var jqDeferred = $.ajax('../lib/js/sample.json'),
    jqDeferred2 = $.ajax('../lib/js/sample2.json'),
    data1, data2, result2 = "";

Promise.all([jqDeferred, jqDeferred2]).then(function (values) {
    data1 = values[0].glossary11.title1;
    data2 = values[1].topping;

    for(var j= 0, len2 = data2.length; j<len2;j++){
        result2 += data2[j].type + " , ";

    }
    console.log("Test In Promise" );

    $("#result1").html(data1);
    $("#result2").html(result2);
});