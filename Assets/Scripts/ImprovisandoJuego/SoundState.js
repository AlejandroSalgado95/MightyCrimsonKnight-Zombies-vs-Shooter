#pragma strict

static var KeepAliveFirst : SoundState;
public var Activated : boolean;

function Start () {

	DontDestroyOnLoad(gameObject);
	Activated = true;
	
	if (KeepAliveFirst == null)
		KeepAliveFirst = this;
	else
		Destroy(gameObject);

}
