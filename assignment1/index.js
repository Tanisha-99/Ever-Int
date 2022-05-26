function checkValid(x)
{
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    let val = x.value;

    if(val.length < 5)
    {
        alert('Invalid input!!!');
        x.value = "Length should not be less than 5";
        x.style.color = "red";
        x.style.fontWeight = "bold";
        return false;
    }

    if(spChars.test(val))
    {
        alert('Invalid input!!!');
        x.value = "Input cannot contain special characters";
        x.style.color = "red";
        x.style.fontWeight = "bold";
        return false;
    }

    if(val[0] == '+' || val[0] == '-' || val[0] == '_')
    {
        alert('Invalid input');
        x.value = "Input cannot start with +,-,or_";
        x.style.color = "red";
        x.style.fontWeight = "bold";

        return false;
    }

    console.log(x);
    return true;
}


function validateForm()
{
    let elem = document.GCS.pipeline;
    if(!checkValid(elem))
    return false;
    
    elem = document.GCS.project;
    if(!checkValid(elem))
    return false;

    elem = document.GCS.bucket;
    if(!checkValid(elem))
    return false;

    elem = document.GCS.files;
    if(!checkValid(elem))
    return false;

    elem = document.GCS.credentials;
    if(!checkValid(elem))
    return false;

    elem = document.GCS.time;
    let value = elem.value;

    if(value.match(/^[0-9]+$/) == null)
    {
        elem.value = "Should not contain characters";
        elem.style.color = "red";
        elem.style.fontWeight = "bold";
        return false;
    }
    
    return true;
}


function resetcolor(ele)
{
    ele.style.color = "black";
    ele.style.fontWeight = "normal";
}

function resetForm()
{
    let form = document.GCS;
    let elem = form.pipeline;
    elem.value = "";
    elem.style.color = "black";
    elem.style.fontWeight = "normal";

    elem = form.project;
    elem.value = "";
    elem.style.color = "black";
    elem.style.fontWeight = "normal";

    elem = form.bucket;
    elem.value = "";
    elem.style.color = "black";
    elem.style.fontWeight = "normal";

    elem = form.files;
    elem.value = "";
    elem.style.color = "black";
    elem.style.fontWeight = "normal";

    elem = form.credentials;
    elem.value = "";
    elem.style.color = "black";
    elem.style.fontWeight = "normal";

    elem = form.time;
    elem.value = "";
    elem.style.color = "black";
    elem.style.fontWeight = "normal";
}