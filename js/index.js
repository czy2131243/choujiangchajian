$(function (event) {
    var stopStep = 1;
    var runT = null;
    var step = -1;
    var during = 2;
    $("#choujiang").click(function (event) {
        stopStep = Math.floor(Math.random() * 8 + 1);
        runT = setTimeout(runF, 100);
    });

    function choice(number) {
        if (number == 1) {
            alert("香水");
        }
        if (number == 2) {
            alert("帽子");
        }
        if (number == 3) {
            alert("再接再厉哟");
        }
        if (number == 4) {
            alert("华为p20");
        }
        if (number == 5) {
            alert("5元话费");
        }
        if (number == 6) {
            alert("剃须刀");
        }
        if (number == 7) {
            alert("明日再战");
        }
        if (number == 8) {
            alert("短柄伞");
        }
    }

    function runF() {
        if (step >= (32 + stopStep)) {
            $(".gift" + (step % 8)).css("background-color", "#F00");
            step = stopStep;
            choice(step);
            clearTimeout(runT);
            return;
        }
        if (step >= (24 + stopStep)) {
            during += 1;
        } else {
            if (during <= 2) {
                during = 2;
            }
            during--;
        }
        step++;
        $(".gift").each(function (index, element) {
            $(this).css("background-color", "#FFF");
        });
        $(".gift" + (step % 8)).css("background-color", "#F00");
        runT = setTimeout(runF, during * 50);
    }
});