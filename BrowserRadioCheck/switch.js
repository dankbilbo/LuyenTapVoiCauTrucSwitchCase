function browsercheck()
{
    let browser = document.getElementsByName("browser");
    for (let i = 0, length = browser.length; i < length; i++) {
        if (browser[i].checked) {
            switch (browser[i].value)
            {
                case "edge" :
                    alert("its 2020 dude pls.Stop!!!");
                    break;
                case "chrome" :
                    alert("good one");
                    break;
                case "firefox" :
                    alert("the second good one");
                    break;
                case "opera" :
                    alert("okay edgy boi")
                    break;
                case "safari" :
                    alert("k");
                    break;

            }

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

}