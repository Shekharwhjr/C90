function addUser(){
player_name_1 = document.getElementById("player1_name_input").value;
player_name_2 = document.getElementById("player2_name_input").value;
localStorage.setItem("player_name_1",player_name_1);
localStorage.setItem("player_name_2",player_name_2);
window.location = "game_page.html"
}