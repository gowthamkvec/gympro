
function gym()
{
    a=document.getElementById("name");
    b=document.getElementById("na");
    exp1=/^[A-Za-z ]{3,20}$/;
    if(a.value=="")
    {
        b.innerHTML="please enter your name";
        b.style.color="red";
        a.focus();
        return false;
    }
    else if(exp1.test(a.value)==false)
    {
       b.innerHTML="invalid name";
       b.style.color="red";
       a.focus();
       return false;
    }
    else
    {
        b.innerHTML="";
        
    }
    c=document.getElementById("num");
    d=document.getElementById("mn");
    exp2=/^[6-9]{1}[0-9]{9}$/;
    if(c.value=="")
    {
        d.innerHTML="please enter your mobile number";
        d.style.color="red";
        c.focus();
        return false;
    }
    else if(exp2.test(c.value)==false)
    {
        d.innerHTML="invalid mobile number";
        d.style.color="red";
        c.focus();
        return false;
    }
    else
    {
        d.innerHTML="";
    }
    e=document.getElementById("em");
    f=document.getElementById("mail");
    exp3=/^[a-z]{1,20}[0-9]{2,5}@gmail\.com$/;
    
    if(e.value=="")
    {
            f.innerHTML="please enter your email";
            f.style.color="red";
            e.focus();
            return false;
    }
    
    else if(exp3.test(e.value)==false)
    {
        f.innerHTML="invalid email";
        f.style.color="red";
        e.focus();
        return false;
    }
    else
    {
        f.innerHTML="";
    }
    pass=document.getElementById("ps");
    p=document.getElementById("pd");
    exp4=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$&*]).{7,20}$/;
    
    if(pass.value=="")
    {
        p.innerHTML="plese enter your password"
        p.style.color="red";
        pass.focus();
        return false;
    }
    else if(exp4.test(pass.value)==false)
    {
        p.innerHTML="use cap,use small,use no,use special char";
        p.style.color="red";
        pass.focus();
        return false;
    }
    else
    {
        p.innerHTML="";
    }

    cpass=document.getElementById("cps");
    cp=document.getElementById("cpd");
    cexp4=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$&*]).{7,20}$/;
    
    if(cpass.value=="")
    {
        cp.innerHTML="plese enter your password"
        cp.style.color="red";
        cpass.focus();
        return false;
    }
    else if(cexp4.test(pass.value)==false)
    {
        cp.innerHTML="use cap,use small,use no,use special char";
        cp.style.color="red";
        cpass.focus();
        return false;
    }
    else if(pass.value!=cpass.value)
    {
        cp.innerHTML="password mismatch";
        cp.style.color="red";
        cpass.focus();
        return false;
    }
    else
    {
        cp.innerHTML="";
    }
    cd=document.getElementById("addre");
    adf=document.getElementById("adl");
    cnt=100;
        if(cd.value.trim()=="")
        {
            adf.innerHTML="please enter your Address";
            adf.style.color="red";
            cd.focus();
            return false;
        }
        else
        {
            adf.innerHTML="";
        }
		
    men=document.getElementsByName("gender");
    wn=document.getElementById("mf");
    if(!men[0].checked && !men[1].checked)
    {
        wn.innerHTML="please tick any one";
        wn.style.color="red";
        return false;
    }
    else
    {
        wn.innerHTML="";
    }
    co=document.getElementById("se");
    sp=document.getElementById("op");
    if(co.value=="")
    {
        sp.innerHTML="please choose any one";
        sp.style.color="red";
        return false;
    }
    else
    {
        sp.innerHTML="";
        
    }
    db=document.getElementById("da");
    bi=document.getElementById("bob");
    exp5=/^\d{2}-\d{2}-\d{4}$/;
    if(db.value=="")
    {
        bi.innerHTML="please chose dob";
        bi.style.color="red";
        db.focus();
        return false;
    }
    else
    {
        bi.innerHTML="";
    }
}