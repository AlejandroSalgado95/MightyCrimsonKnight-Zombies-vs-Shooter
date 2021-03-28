#pragma strict
import UnityEngine.UI;

public var EnemyCount : int;
public var Enemy : GameObject;
public var SpawnPosition : Transform[];
public var spawnWait : float;
public var waveWait :float;
public var playerHealth : UI.Slider;
public var HealthText : UI.Text;
public var ScoreText : UI.Text;
private var pointsCounter : int;
public var PauseImage : GameObject;
public var PauseButton : GameObject;
public var Panel : GameObject;



function Start () 
{
	yield SpawnWaves();
	HealthText.text = "100%";
	ScoreText.text = "0";
	pointsCounter = 0;
	PauseImage.SetActive(false);
	Panel.SetActive(false);
}

function Update()
{
	if (playerHealth.value <= 0)
	{
		YouLost();
	}
}

function  SpawnWaves()
{
		while (true) 
		{
			var Cont : int;
			for (Cont = 0; Cont < EnemyCount; Cont++) 
			{
				
				//spawnValues = new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
				//Vector3 spawnPosition = new Vector3 (Random.Range(-6.0f, 6.0f), 0.0f, 16.0f);
				var spawnRotation : Quaternion = Quaternion.identity; 
				Instantiate (Enemy, SpawnPosition[Random.Range(0,4)].position, spawnRotation);
				//Instantiate (hazard, spawnPosition, quaternion.identity);
				//Instantiate (hazard, spawnValues, quaternion.identity);
				yield WaitForSeconds (spawnWait); //To make this function pause without pausing the entire game, you need to make this function a coroutine, and coroutines have some very specific considerations: 
				//1) you can not return void, you must return IEnumerator
				//2) WaitForSeconds must be written: yield return new WaitForSeconds
				//3) you can not call a coroutine like you call a function. The call of a coroutine must be written: StartCoroutine (coroutine's signature)
			}
			yield  WaitForSeconds (waveWait);

			/*
			if (gameOver)
			{
				restartText.text = "Press 'R' for restart";
				restart = true;
				break;
			}
			*/
		 }
}

public function DamagePlayer( damage : int)
{
	//playerHealth.value -= damage;
	var newHealth: int = playerHealth.value - damage; 
	yield LerpDamage(newHealth);
}

function LerpDamage(newHealth : int)
{
	while (playerHealth.value > newHealth)
	{
		playerHealth.value -= 1f;
		HealthText.text = playerHealth.value.ToString() + "%";
		yield;
	}
	/*
	if (playerHealth.value == 0)
	{
		YouLost();
	}
	*/
}

public function Scored( points : int)
{
	yield LerpScore(points);	
}

function LerpScore( points : int)
{	
	var TempScore : int = pointsCounter;
	pointsCounter += points;
	while( TempScore < pointsCounter)
	{
		TempScore += 1;
		ScoreText.text = "Score: " + TempScore.ToString();
		yield;
	}
	if (TempScore >= 200)
		YouWon();
}

function YouWon()
{
	Application.LoadLevel(3);
}

function YouLost()
{
	Application.LoadLevel(2);
}

public function Pause()
{
	Time.timeScale = 0;
	Panel.SetActive(true);
	//PauseButton.SetActive(false);
	PauseImage.SetActive(true);
	
}

public function Unpause()
{
	Time.timeScale = 1;
	Panel.SetActive(false);
	//PauseButton.SetActive(true);
	PauseImage.SetActive(false);
}

public function BackToMenu()
{
	Time.timeScale = 1;
	Application.LoadLevel(0);
}