player1name=localStorage.getItem("player_1name");
player2name=localStorage.getItem("player_2name");
document.getElementById("player_1_name").innerHTML=player1name;
document.getElementById("player_2_name").innerHTML=player2name;
player_1score=0;
player_2score=0;

function send(){
 Number1=document.getElementById("word").value;
 Number2=document.getElementById("word2").value;
 anser=parseInt(Number1)*parseInt(Number2);
 ques="<h4>"+Number1+"X"+Number2+"</h4>";
 input="<div> ans: <input type='text' id='ans'>";
btn="<button onclick='check()'> check</button>";
row=ques+input+btn;
document.getElementById("output").innerHTML=row;
} 
question_trun="player_1";
ans_trun="player_2";
function check(){
    get_answer=document.getElementById("ans").value;
    if(ans==anser){
        if(ans_turn=="player_1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
            console.log("player_1_score"+player_1_score);
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
            console.log("player_2_score"+player_2_score);
        }
    }
         if(question_turn=="player_1"){
             question_turn="player_2";
             document.getElementById("player_question").innerHTML="question_turn"+player_2_name;
         }
         else{
            question_turn="player_1";
            document.getElementById("player_question").innerHTML="question_turn"+player_1_name;
         }

         if(ans_turn=="player_1"){
            ans_turn="player_2";
            document.getElementById("player_Answer").innerHTML="Answer_turn "+player_2_name;
        }
        else{
           ans_turn="player_1";
           document.getElementById("player_Answer").innerHTML="Answer_turn "+player_1_name;
        }
        document.getElementById("output").innerHTML=" ";

}

