export async function ValidateLogin(loginDes: string, lowAuthMode?: Boolean) {
  return new Promise((resolve) => {
    const MAX_SIGNIN_TIME = 172800;
    var d: any = localStorage.getItem("user");
    d = JSON.parse(d);
    if (d == null) {
      resolve(false);
    }

    let data = { token: d.token, Username: d.username };
    console.log(JSON.stringify(data));

    if (lowAuthMode === true) {
      fetch("https://api.quinnpatwardhan.com/can-user-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((r) => {
          console.log(r);
          if (!r.auth) {
            if (loginDes !== "dont-redirect") {
              window.location.pathname = loginDes.replaceAll("+", "/");
            }
            return resolve(false);
          }
          console.log(r);
          return resolve(r);
        })
        .catch((e) => {
          console.log(e);
          return resolve(false);
        });
    } else {
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
          console.log(r);
          if (r.auth && loginDes === "admin-page") {
            window.location.pathname = "/";
          }
          if (!r.auth) {
            if (loginDes !== "dont-redirect") {
              window.location.pathname = loginDes.replaceAll("+", "/");
            }
            return resolve(false);
          }
          console.log(r);
          return resolve(r);
        })
        .catch((e) => {
          console.log(e);
          return resolve(false);
        });
    }
  });
}
