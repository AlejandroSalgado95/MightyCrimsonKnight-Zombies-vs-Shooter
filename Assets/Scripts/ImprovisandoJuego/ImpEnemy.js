#pragma strict

var playerPos: Transform;
var vel: Vector3;
private var speed: float;
var ActivateOneTime : boolean;
private var anim : Animator;
var Attacking : boolean;
var Defending : boolean;
public var Sounds: AudioClip[];


//var hurtingPlayer: GameController;

function Start () {

	playerPos = GameObject.FindWithTag("Player").GetComponent.<Transform>();
	anim = GetComponent.<Animator>();
	ActivateOneTime = true;
	Attacking = false;
	Defending = false;
	speed = Random.Range(1,7);
	//hurtingPlayer = GameObject.FindWithTag("GameController").GetComponent(GameController);
}

function Update () {
	
	var direction: Vector3 = playerPos.position - transform.position;
	direction.y = 0.0f;
	if (direction.magnitude > 5)
	{
		anim.SetBool("IsRunning",true);
		var rotation: Quaternion = Quaternion.LookRotation(direction);
		transform.rotation = rotation;

		vel = direction.normalized;
		
		transform.position += (vel * speed * Time.deltaTime);
	}
	
	else
	{
		anim.SetBool("IsRunning",false);
		
		if (ActivateOneTime)
		{
			ActivateOneTime = false;
			
			if (Random.Range(0,10) < 5 )
				StartCoroutine(LetsAttack());
			else
				StartCoroutine(LetsDefend());
		}
	}

	 
}

function LetsAttack()
{
	yield WaitForSeconds (1);
	Attacking = true;
	anim.SetBool("IsAttacking",true);
	yield WaitForSeconds (1);
	Attacking = false;
	anim.SetBool("IsAttacking",false);
	ActivateOneTime = true;
	
}

function LetsDefend()
{
	yield WaitForSeconds (1);
	Defending = true;
	anim.SetBool("IsDefending",true);
	yield WaitForSeconds (1);
	Defending = false;
	anim.SetBool("IsDefending",false);
	ActivateOneTime = true;
}
/*
function OnCollisionEnter (col : Collision)
{
	if (col.collider.tag == "Player")
		hurtingPlayer.touched();
		
}
*/
public function Connected()
{
	print("you are connected to Enemy Parent");
}