#pragma strict
private var mySound: AudioSource;
private var SoundState: SoundState;

function Start () 
{

	SoundState = GameObject.FindWithTag("SoundState").GetComponent.<SoundState>();
	mySound = gameObject.GetComponent.<AudioSource>();

	if (SoundState.Activated)
		mySound.Play();
		
}

