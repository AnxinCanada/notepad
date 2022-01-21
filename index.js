        // Variables
        var CurrentData = "";
        var match = "";
        
        // Consts
        const NotePad = document.getElementById("notepad");
        
        // Functions
            // Check for Changes in Notepad
            function check_for_changes() {
                if (CurrentData != NotePad.value) {
                    CurrentData = NotePad.value;
                    alert(NotePad.value);
                }
            }

            // Search for Cookie Matches
            function check_cookie_matches() {
                var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match;
            }

            // Search for Cookies by Name
            function getCookieByName(name) {
                check_cookie_matches()
                if (match) {
                    return match[2];
                }
                else {
                    return "Doesn't Exist";
                }
            }
            
            // Check if Cookie Exists and has a Value
            function check_cookie_existance(name) {
                if (getCookieByName(name) != "") {
                    return "true";
                }
                else {
                    return "false";
                }
            }
        
        alert(getCookieByName("data"));
        
        // Document Setup
        setInterval(check_for_changes, 50)
