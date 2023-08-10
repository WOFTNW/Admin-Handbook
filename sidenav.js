const delay = ms => new Promise(res => setTimeout(res, ms));

    function toggleNav() {
        if (document.getElementById("sidenav").style.width == "250px" || document.getElementById("sidenav").style.width == "100%") {
            closeNav();
        } else {
            openNav();
        }
    }

    const closeNav = async () => {
        const sidenav = document.getElementById("sidenav")
        for (const child of sidenav.children) {
            child.style.marginLeft = "0";
        }
        for (const child of sidenav.children) {
            child.style.opacity = "0";
        }

        await delay(200);

        document.getElementById("sidenav").style.width = "0px";
        document.getElementById("body").style.marginLeft = "0px";
        document.getElementById("footer").style.marginLeft = "0px";
    }

    const openNav = async () => {

        if (document.documentElement.clientWidth > 1100) {
            document.getElementById("sidenav").style.width = "250px";
            document.getElementById("body").style.marginLeft = "250px";
            document.getElementById("footer").style.marginLeft = "250px";
        } else {
            document.getElementById("sidenav").style.width = "100%";
            const sidenav = document.getElementById("sidenav")
            for (const child of sidenav.children) {
                child.style.marginLeft = "66px";
            }
        }
        

        await delay(500);

        const sidenav = document.getElementById("sidenav")
        for (const child of sidenav.children) {
            child.style.opacity = "100";
        }
    }