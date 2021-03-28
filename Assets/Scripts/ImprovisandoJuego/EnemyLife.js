#pragma strict
import UnityEngine.UI;

private var EnemyHealth : UI.Slider;
public var Score : int;
private var aud : AudioSource;
public var gameController : ImpGC;


function Start()
{
	//aud = GetComponent.<AudioSource>();
	gameController = GameObject.FindWithTag("GC").GetComponent.<ImpGC>();
	EnemyHealth = this.gameObject.transform.GetChild(6).GetChild(0).gameObject.GetComponent.<Slider>();

	//newEnemyHealth = EnemyHealth.maxValue;
	//Lag = 0.0f;
	//explosion = GameObject.FindWithTag("Explosion");
	//steam = GameObject.FindWithTag("Steam");
}

public function DamageEnemy()
{
	EnemyHealth.value -= 5;
	//aud.Play();
		
	if (EnemyHealth.value <= 0)
	{
		gameController.Scored(Score);
		gameController.ActualEnemies-=1;
		//Instantiate(explosion, gameObject.transform.position, Quaternion.identity);
			//Instantiate(steam, gameObject.position, Quaternion.identity);
		Destroy(gameObject);
	}
}