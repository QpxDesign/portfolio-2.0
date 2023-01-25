export function ValidateLogin(loginDes : string) {
    const MAX_SIGNIN_TIME = 172800
    var d: any = localStorage.getItem("user");
    d = JSON.parse(d);
    if (d == null) {
        return false;
    }
    let data = { token: d.token, Username: d.username };
    if (d.timestamp+MAX_SIGNIN_TIME < (Date.now()/1000)) return false
    fetch("https://api.quinnpatwardhan.com/validate-token", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((r) => {

        if (!r.auth ) {
            window.location.pathname = loginDes;
        }
        return r.auth;
        });
    return true;
      
}

export class bar { }