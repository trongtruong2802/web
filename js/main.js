function dangky(){
    let ho = document.getElementById("ho").value
    let tbho = document.getElementById("tbho")
    if (ho.trim() == ""){
        tbho.innerHTML = "Bắt buộc nhập"
        return false;
    } 

    let ten = document.getElementById("ten").value
    let tbten = document.getElementById("tbten")
    if (ten.trim() == ""){
        tbten.innerHTML = "Bắt buộc nhập"
        return false;
    }

    let tenDn = document.getElementById("nameDn").value
    let tbtenDn = document.getElementById("tbnameDn")
    if (tenDn.trim() == ""){
        tbtenDn.innerHTML = "Bắt buộc nhập"
        return false;
    }

    let mk = document.getElementById("pwn").value
    let tbmk = document.getElementById("tbpwn")
    if (mk.trim() == ""){
        tbmk.innerHTML = "Bắt buộc nhập"
        return false;
    }

    let nlmk = document.getElementById("pwa").value
    let tbnlmk = document.getElementById("tbpwa")
    if(nlmk.trim() == ""){
        tbnlmk.innerHTML == "Bắt buộc nhập"
        return false;
    }

    if (nlmk != mk){
        tbnlmk.innerHTML = "Nhập lại mật khẩu không trùng khớp"
        return false;
    }

    tbho.innerHTML = "*"
    tbten.innerHTML = "*"
    tbtenDn.innerHTML = "*"
    tbmk.innerHTML = "*"
    tbnlmk.innerHTML = "*"
    return true;
}