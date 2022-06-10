if (!document.cookie) {
    console.log(document.cookie);
    $(document).ready(function () {
        $("#myModal").modal("show");
    });
} else {
    $(document).ready(function () {
        $("#myModal").css("z-index", "-1");
    });
}

$(".close-modal").on("click", () => {
    $("#myModal").modal("toggle");
    $("#myModal").css("z-index", "-1");
});

$(".subscribe-modal").on("click", () => {
    let date = new Date();
    date.setTime(date.getTime() + 5 * 24 * 60 * 60 * 1000);

    document.cookie = `cookieConsent=true; expires=${date.toGMTString()}`;

    $("#myModal").modal("toggle");
    $("#myModal").css("z-index", "-1");
});

const changeTheme = (element, level) => {
    if (localStorage.getItem("theme") == "dark") {
        $("#body").css("color", "white");
        $(".navbar-brand").css("color", "white");
        $(".nav-link").css("color", "white");

        $(element).removeClass(`light-${level}`);
        $(element).addClass(`dark-${level}`);
    } else {
        $("#body").css("color", "black");
        $(".navbar-brand").css("color", "black");
        $(".nav-link").css("color", "black");

        $(element).addClass(`light-${level}`);
        $(element).removeClass(`dark-${level}`);
    }
};

$("#check").on("change", (e) => {
    if (e.target.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    changeTheme("#body", 3);
    changeTheme(".navbar", 1);
    changeTheme(".card", 2);
});

const allCards = new Array(10).fill(0);
$("#row").html(
    `${allCards
        .map((song) => {
            return `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <div class="card" style="width: 18rem;">
                <img src="img/keep_going.jpg" class="card-img-top" alt="music-song">
                <div class="card-body">
                    <h5 class="card-title">Music title</h5>
                    <p class="card-text">Author</p>
                    <a href="index.html" class="btn btn-primary">Listen</a>
                </div>
            </div>
        </div>
    `;
        })
        .join("")}`
);
