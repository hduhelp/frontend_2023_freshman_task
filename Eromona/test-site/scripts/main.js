     let num;
     let nums;

     function numSetting(){
      nums=document.querySelectorAll("#num");
      num=nums.length;
     }

     document.getElementById("add").onclick=function(){
        numSetting();
        num=num+1; 
        let id=prompt("学号");
        let name=prompt("姓名");
        let academy=prompt("学院");
        let major=prompt("专业");
        let year=prompt("年级");
        let cla=prompt("班级");
        let age=prompt("年龄");
        let operation="查看 修改";
        
        let td_checkBox=document.createElement("td");
        let td_num=document.createElement("td");
        let td_id=document.createElement("td");
        let td_name=document.createElement("td");
        let td_academy=document.createElement("td");
        let td_major=document.createElement("td");
        let td_year=document.createElement("td");
        let td_cla=document.createElement("td");
        let td_age=document.createElement("td");
        let td_operation=document.createElement("td");
    
        let text_num=document.createTextNode(num);
        let text_id=document.createTextNode(id);
        let text_name=document.createTextNode(name);
        let text_academy=document.createTextNode(academy);
        let text_major=document.createTextNode(major);
        let text_year=document.createTextNode(year);
        let text_cla=document.createTextNode(cla);
        let text_age=document.createTextNode(age);
        let text_operation=document.createTextNode(operation);
    
        td_num.appendChild(text_num);
        td_id.appendChild(text_id);
        td_name.appendChild(text_name);
        td_academy.appendChild(text_academy);
        td_major.appendChild(text_major);
        td_year.appendChild(text_year);
        td_cla.appendChild(text_cla);
        td_age.appendChild(text_age);
        td_operation.appendChild(text_operation);

        td_num.setAttribute("id","num");

        let checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("name","item");
        td_checkBox.appendChild(checkBox);
    
        let tr=document.createElement("tr");
        tr.appendChild(td_checkBox);
        tr.appendChild(td_num);
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_academy);
        tr.appendChild(td_major);
        tr.appendChild(td_year);
        tr.appendChild(td_cla);
        tr.appendChild(td_age);
        tr.appendChild(td_operation);
        let tbody=document.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);
     }
     
     let checkAll=document.getElementById("checkAll");
     let checks=document.querySelectorAll("table>tbody>tr>td>input");
     let deletedTable;
     let deletedTr;
     let m;

   checkAll.onclick=function(){
      checks=document.querySelectorAll("table>tbody>tr>td>input");
      for(m=0;m<checks.length;m++){
         checks[m].checked=checkAll.checked;
      }
   }

   document.getElementById("delete").onclick=function(){
      for(m=0;m<checks.length;m++){
         if(checks[m].checked){
            deletedTable=checks[m].parentNode.parentNode.parentNode;
            deletedTr=checks[m].parentNode.parentNode;
            deletedTable.removeChild(deletedTr);
         }
      }
   }
   