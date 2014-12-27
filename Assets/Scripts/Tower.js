#pragma strict

var hp_UI: GameObject;

function LostHP (amount : int){
//GameObject.Find("EnemyTowerHp").SendMessage("UI_LostHp",amount);
	hp_UI.SendMessage("UI_LostHp",amount);

}