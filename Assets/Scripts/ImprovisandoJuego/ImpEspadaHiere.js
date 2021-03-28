#pragma strict
import UnityEngine.UI;

private var defendButton : DefendButton;
private var thisEnemyState : ImpEnemy;
private var GC : ImpGC;
public var Sounds: AudioClip[];
private var SoundState: SoundState;
private var mySound: AudioSource;
private var hurtColor: Color32 = new Color32(214,0,0,100);
private var targetColor: Color32 = new Color32(0,0,0,0);
private var hurtPanel : UI.Image;

function Start () {
	
	hurtPanel = GameObject.FindWithTag("hurtPanel").GetComponent.<Image>();
	defendButton = GameObject.FindWithTag("Defend").GetComponent.<DefendButton>();
	//hurtingPlayer = GameObject.FindWithTag("GameController").GetComponent(GameController);
	thisEnemyState = this.transform.parent.gameObject.transform.parent.gameObject.GetComponent.<ImpEnemy>();
	GC = GameObject.FindWithTag("GC").GetComponent.<ImpGC>();
	
	SoundState = GameObject.FindWithTag("SoundState").GetComponent.<SoundState>();
	mySound = gameObject.GetComponent.<AudioSource>();
	/*
	GC.Connected();
	thisEnemyState.Connected();*/

}

//Solo falta hacer que aunque ocurran al mismo tiempo, solo te haga daño una; si no, tanto ontriggerenter como
//ontriggerexit me haran un daño de 10, en total 20

function OnTriggerEnter (col : Collider)
{
	if (col.gameObject.CompareTag("Player"))
	{
		if (!defendButton.active && thisEnemyState.Attacking)
		{
			GC.DamagePlayer(10);
			
			if (SoundState.Activated)
			{
				mySound.clip = Sounds[0];
				mySound.Play();
			}
			
			else if (!SoundState.Activated)
			{
				StartCoroutine(LerpColor());
			}
			
			
		}
		else if (defendButton.active && thisEnemyState.Attacking)
		{
			if (SoundState.Activated)
			{
				mySound.clip = Sounds[1];
				mySound.Play();
			}
			
			else if (!SoundState.Activated)
			{
			}
		}
	}
		
}

function OnTriggerExit (col : Collider)
{
	if (col.gameObject.CompareTag("Player"))
	{
		if (!defendButton.active && thisEnemyState.Attacking)
		{
			GC.DamagePlayer(10);
			
			if (SoundState.Activated)
			{
				mySound.clip = Sounds[0];
				mySound.Play();
			}
			
			else if (!SoundState.Activated)
			{
				StartCoroutine(LerpColor());
			}
			
			
		}
		else if (defendButton.active && thisEnemyState.Attacking)
		{
			if (SoundState.Activated)
			{
				mySound.clip = Sounds[1];
				mySound.Play();
			}
			
			else if (!SoundState.Activated)
			{
			}
		}
	}
}

function LerpColor()
{
	hurtPanel.color = hurtColor;
	while (hurtPanel.color != targetColor)
	{
		hurtPanel.color = Color32.Lerp(hurtPanel.color, targetColor, 0.01f);
		yield;
	}
	
}