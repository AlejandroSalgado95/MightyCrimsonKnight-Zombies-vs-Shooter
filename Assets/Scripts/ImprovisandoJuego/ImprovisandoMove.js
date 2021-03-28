#pragma strict

public var Speed : float;
private var anim : Animator;
private var aud : AudioSource;
public var attackButton : AttackButton;
public var defendButton : DefendButton;

public var Attacking : boolean;
public var Defending : boolean;

public var mobileJoystick : MobileJoystick;

function Start () {
	anim = GetComponent.<Animator>();
	aud = GetComponent.<AudioSource>();
	Attacking = false;
	Defending = false;
}

function FixedUpdate ()
{
	var HMove : float;
	var VMove : float;
	var MovePerSecond : Vector3;
	
	if (!attackButton.active && !defendButton.active)
	{
		HMove = mobileJoystick.GetDirection().x;
		VMove = mobileJoystick.GetDirection().y;
	}
	else
	{
		HMove = 0;
		VMove = 0;
	}
		
		MovePerSecond = new Vector3(HMove,0.0f,VMove) * Speed * Time.deltaTime; // Esto hace que se mueva Speed unidades por segundo
		transform.position += MovePerSecond;
	
	
	if (HMove != 0 || VMove != 0)
		anim.SetBool("IsRunning",true);
	else
		anim.SetBool("IsRunning",false);
		
	if (attackButton.active)
	{
		anim.SetBool("IsAttacking",true);
		Attacking = true;
	}
	else
	{
		anim.SetBool("IsAttacking",false);
		Attacking = false;
	}
	if (defendButton.active)
	{
		anim.SetBool("IsDefending",true);
		Defending = true;
	}
	else
	{
		anim.SetBool("IsDefending",false);
		Defending = false;
	}	
	
	if (mobileJoystick.GetDirection().magnitude != 0)
	{
		var LookDirection : Vector3;
		var RotationDirection: Quaternion;
			
		LookDirection = new Vector3(mobileJoystick.GetDirection().x, 0.0f, mobileJoystick.GetDirection().y);
			
		RotationDirection = Quaternion.LookRotation (LookDirection);
		transform.rotation = RotationDirection;
	}

	
}

/*
function OnCollisionEnter(col : Collision)
{
	if (col.collider.gameObject.CompareTag("Enemy"))
		aud.Play();
}*/

