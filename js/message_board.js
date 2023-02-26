window.onload = function(){


    let write = document.querySelector("#write")

    write.onclick = function() {
        console.log("fwsf");
    }

    let table = document.querySelector(".table")

    document.querySelector("#write").onclick = () => {

        table.classList.toggle("active-table");
        console.log("click")

    }

    let content = document.querySelector('.home .box2');

    document.querySelector("#btn_1").onclick = () => {


        // .box2 .message{
        //     /* align-self: center; */
        //     width: 80%;
        //     background-color: rgb(187, 211, 203);
        //     padding: .5rem;
        //     border: .5rem rgb(166, 207, 194) solid;
        //     display: flex;
        //     flex-direction: column;
        // }
        let primary_node = document.createElement("div");

        primary_node.classList.add('message_2');
        primary_node.style.width = '80%';
        primary_node.style.backgroundColor = "rgb(187, 211, 203)";
        primary_node.style.padding = '.5rem';
        primary_node.style.border = '.5rem rgb(166, 207, 194) solid';
        primary_node.style.display = 'flex';
        primary_node.style.flexDirection = 'column';



        let secondary_node_1 = document.createElement("div");
        secondary_node_1.classList.add("part_1");

        let secondary_node_2 = document.createElement("div");
        secondary_node_2.classList.add ("part_2");
        secondary_node_2.style.backgroundColor = "#ddd";
        secondary_node_2.style.padding = "1rem";
        secondary_node_2.style.fontFamily = "font_5";
        let secondary_node_3 = document.createElement("div");

        let text = document.querySelector(".table .content .box2 textarea");
        // console.log(text, text.value);


        // let style1 = document.createElement("style");
        // style1.innerHTML = ''

        let tertiary_node_1_1 = document.createTextNode("name");
        let tertiary_node_1_2 = document.createElement("span");
        // tertiary_node_1_2.classList.add("fas fa-user-tie");
        
        // secondary_node_1.appendChild(link1);
        // tertiary_node_1.setAttribute("background-color", "#bfa");
        let tertiary_node_2 = document.createTextNode(text.value);
        let tertiary_node_3_1 = document.createTextNode("2022/8/2-15:33");
        let tertiary_node_3_2 = document.createTextNode("");
        

        // 添加三级节点
        secondary_node_1.appendChild(tertiary_node_1_1);
        secondary_node_1.appendChild(tertiary_node_1_2);
        secondary_node_2.appendChild(tertiary_node_2);
        secondary_node_3.appendChild(tertiary_node_3_1);
        secondary_node_3.appendChild(tertiary_node_3_2);

        // 添加二级节点
        primary_node.appendChild(secondary_node_1);
        primary_node.appendChild(secondary_node_2);
        primary_node.appendChild(secondary_node_3);
        

        // 添加一级节点
        content.appendChild(primary_node);

        console.log(primary_node);
        // .box2 .message .part_1 span::before{
        //     content: "\f508";
        //     font-family: 'Font Awesome 6 Free';
        //     font-weight: 900;
        // }
        // let user_head = document.querySelector(".message_2 .part_1:last-child");
        // console.log(user_head);

        // document.styleSheets[0].insertRule('.red::before { color: green }', 0);
        document.styleSheets[0].insertRule('.message_2 .part_1 span::before {content: \f508, font-family: Font Awesome 6 Free, font-weight: 900}', 0);
        // user_head.style.content = '\f508';
        // user_head.style.fontFamily = 'Font Awesome 6 Free';
        // user_head.style.fontWeight = '900';
        
        // console.log(content);
        // console.log(document.querySelectorAll(".home .box2 div"))

        // tertiary_node_1.style.fontSize = "20px";


        console.log("btn");
    }

}