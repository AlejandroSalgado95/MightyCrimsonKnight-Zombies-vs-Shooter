#pragma strict

private var EnemyState : ImpEnemy;
private var enemyLifeBar : EnemyLife;
private var MyState: ImprovisandoMove;
public var Sounds: AudioClip[];
private var SoundState: SoundState;
private var mySound: AudioSource;

function Start () {

	//hurtingPlayer = GameObject.FindWithTag("GameController").GetComponent(GameController);
	MyState = this.transform.parent.gameObject.transform.parent.gameObject.GetComponent.<ImprovisandoMove>();
	SoundState = GameObject.FindWithTag("SoundState").GetComponent.<SoundState>();
	mySound = gameObject.GetComponent.<AudioSource>();
	/*
	GC.Connected();
	thisEnemyState.Connected();*/

}


function OnTriggerEnter (col : Collider)
{
	if (col.gameObject.CompareTag("Enemy"))
	{
		EnemyState = col.gameObject.GetComponent.<ImpEnemy>();
		enemyLifeBar = col.gameObject.GetComponent.<EnemyLife>();

		
		if (MyState.Attacking && !EnemyState.Defending)
		{
			enemyLifeBar.DamageEnemy();
			
			if (SoundState.Activated)
			{
				mySound.clip = Sounds[0];
				mySound.Play();
			}
			else if (!SoundState.Activated)
			{
			}
		}
		
		else if (MyState.Attacking && EnemyState.Defending)
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
	if (col.gameObject.CompareTag("Enemy"))
	{
		EnemyState = col.gameObject.GetComponent.<ImpEnemy>();
		enemyLifeBar = col.gameObject.GetComponent.<EnemyLife>();

		if (MyState.Attacking && !EnemyState.Defending)
		{
			enemyLifeBar.DamageEnemy();
			
			if (SoundState.Activated)
			{
				mySound.clip = Sounds[0];
				mySound.Play();
			}
			else if (!SoundState.Activated)
			{
			}
		}
		
		else if (MyState.Attacking && EnemyState.Defending)
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