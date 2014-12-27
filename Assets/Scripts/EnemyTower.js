#pragma strict

function Start () {

}

function LostHP (amount : int){
GameObject.Find("EnemyTowerHp").SendMessage("UI_LostHp",amount);

}