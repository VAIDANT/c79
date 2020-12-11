var student_name = [];
function submit() {
    student_name1=document.getElementById("s1").value;
    student_name2=document.getElementById("s2").value;
    student_name3=document.getElementById("s3").value;
    student_name4=document.getElementById("s4").value;
    student_name.push(student_name1);
    student_name.push(student_name2);
    student_name.push(student_name3);
    student_name.push(student_name4);
    document.getElementById("aray_items").innerHTML=student_name;
    document.getElementById("buton").style.display="none";
    document.getElementById("buton2").style.display="inline";
};

function sort() {
    document.getElementById("aray_items").innerHTML=student_name.sort();
};