$(window).oncontextmenu = function (e) {
  "use strict";
};

var body = $("body"),
  loading = $(".loading");

loading.height($(window).height());

$(".loading img").css({
  paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
  paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2,
});

$(window).resize(function () {
  "use strict";

  loading.height($(window).height());
  loading.width($(window).width());

  $(".loading img").css({
    paddingTop: (loading.height() - $(".loading img").height()) / 2,
    paddingLeft: (loading.width() - $(".loading img").width()) / 2,
  });

  $(".msg").each(function () {
    $(this).css({
      top: $(window).height() / 2 - 130,
    });
  });

  if ($(window).height() < 500) {
    $(".loading .result").css({ bottom: "10px", left: "10px" });
    $(".loading .poke").css({ bottom: "10px", right: "10px" });
  } else {
    $(".loading .result").css({ bottom: "30px", left: "30px" });
    $(".loading .poke").css({ bottom: "30px", right: "30px" });
  }

  if ($(window).width() < 400) {
    $(".loading .poke").fadeOut();
  } else {
    $(".loading .poke").fadeIn();
  }
});

if ($(window).height() < 500) {
  $(".loading .result").css({ bottom: "10px", left: "10px" });
  $(".loading .poke").css({ bottom: "10px", right: "10px" });
}

if ($(window).width() < 400) {
  $(".loading .poke").fadeOut();
} else {
  $(".loading .poke").fadeIn();
}

$(window).mousemove(function (e) {
  "use strict";

  $(".original").css({
    left: e.pageX - 23,
    top: e.pageY - 23,
  });
});

var pics = [
    "//a.top4top.net/p_2004y0f6",
    "//b.top4top.net/p_2009bxt7",
    "//d.top4top.net/p_20022tb1",
    "//e.top4top.net/p_200ss4q1",
    "//a.top4top.net/p_200vy5r2",
    "//b.top4top.net/p_200to353",
    "//a.top4top.net/p_200jto85",
    "//b.top4top.net/p_200nk0m6",
    "//c.top4top.net/p_200rsex7",
    "//c.top4top.net/p_200j8sw8",
    "//c.top4top.net/p_200qrei10",
    "//b.top4top.net/p_2013uj61",
    "//e.top4top.net/p_201uemk4",
    "//a.top4top.net/p_2017jkm5",
    "//b.top4top.net/p_2017iz86",
    "//e.top4top.net/p_201o7nf9",
    "//a.top4top.net/p_201ctnm10",
    "//a.top4top.net/p_201unvn1",
    "//b.top4top.net/p_2015fx12",
    "//a.top4top.net/p_201vh7t6",
    "//a.top4top.net/p_2013s1d4",
    "//e.top4top.net/p_2016hia3",
    "//b.top4top.net/p_201tn435",
    "//b.top4top.net/p_201cinc1",
    "//b.top4top.net/p_201uk0q1",
  ],
  p,
  score = 0;

$(".msg").each(function () {
  "use strict";

  $(this).css({
    top: $(window).height() / 2 - 140,
  });
});

body.on("click", function (e) {
  "use strict";

  $(".msg").fadeOut(1000);

  var randomNumber = Math.floor(Math.random() * pics.length),
    img = "http:" + pics[randomNumber] + ".png",
    pok,
    pokHeight = "-=140px";

  if ($(window).height() < 500) {
    pokHeight = "-=100px";
  }

  $(".original")
    .clone(true)
    .appendTo("body")
    .css({
      left: e.pageX - 23,
      top: e.pageY - 23,
    })
    .removeClass("original")
    .animate(
      {
        top: pokHeight,
        left: "-=60px",
      },
      500,
      function () {
        $(this).attr("src", img);
        $(this).removeClass("mouse").addClass("pok");
        $(this).css({
          left: "-=50px",
          top: "-=50px",
        });

        if ($(this).offset().top <= 0 || $(this).offset().left <= 0) {
          $(this).remove();
        }
      }
    );

  pok = document.getElementsByClassName("pok");

  if (pok.length >= 1) {
    $(".pok").animate(
      {
        left: body.width() / 2,
        top: body.height() / 2,
        width: 0,
      },
      700,
      function () {
        $(this).remove();
      }
    );

    $(".loading img").animate({
      top: "+=10px",
    });

    $(".loading img").animate({
      top: "-=10px",
    });

    score += pok.length;

    $(".loading .result span").text(score);
  }
});

function msgAnimation() {
  "use strict";

  $(this).animate(
    {
      top: "+=10px",
    },
    400
  );

  $(this).animate({
    top: "-=10px",
  });

  $(this).animate(
    {
      top: "+=10px",
    },
    400
  );

  $(this).animate({
    top: "-=10px",
  });

  $(this).animate(
    {
      top: "+=10px",
    },
    400
  );

  $(this).animate({
    top: "-=10px",
  });
}

$(".loading .msg").each(msgAnimation);
