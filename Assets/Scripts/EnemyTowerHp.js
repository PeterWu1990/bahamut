#pragma strict

import UnityEngine.UI;

var hp:int=100;

function Update () {
	GetComponent(Text).text = hp.ToString();
}

function UI_LostHp (amount :int){
	if(hp - amount >=0) {
		hp -= amount;
	}
	else{
		hp = 0;
	}
}