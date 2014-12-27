#pragma strict

var enemySpawnPoint : GameObject;	
var prefab : GameObject[];

function Start () {
	for(var i=0;i<5;i++) {
		Instantiate(prefab[Random.Range(0,3)],enemySpawnPoint.transform.position,Quaternion.identity);
	}
}

function Update () {

}