#pragma strict
import UnityEngine.UI;

//public var Sound : boolean;
public var Cont : int = 0;
public var Images : Sprite[];
public var SoundButton : UI.Image;
public var Customize : GameObject;
public var CustomizeA : GameObject;
public var Shop : GameObject;
public var ShopA : GameObject;
public var Play : GameObject;
public var PlayA : GameObject;
public var Multiplayer : GameObject;
public var MultiplayerA : GameObject;
public var Settings : GameObject;
public var SettingsA : GameObject;
public var SoundActive : SoundState;






function Start () {
	
	SoundActive = GameObject.FindWithTag("SoundState").GetComponent.<SoundState>();


	if (SoundActive.Activated == true)
	{
		//Sound = true;
		Cont = 0;
		SoundButton.sprite = Images[Cont];
		
		Customize.SetActive(true);
		CustomizeA.SetActive(false);
		Shop.SetActive(true); 
		ShopA.SetActive(false);
		Play.SetActive(true); 
		PlayA.SetActive(false); 
		Multiplayer.SetActive(true); 
		MultiplayerA.SetActive(false);
		Settings.SetActive(true);
		SettingsA.SetActive(false);
	}
	else if (SoundActive.Activated == false)
	{
		//Sound = false;
		Cont = 1;
		SoundButton.sprite = Images[Cont];
		
		Customize.SetActive(false);
		CustomizeA.SetActive(true);
		Shop.SetActive(false); 
		ShopA.SetActive(true);
		Play.SetActive(false); 
		PlayA.SetActive(true); 
		Multiplayer.SetActive(false); 
		MultiplayerA.SetActive(true);
		Settings.SetActive(false);
		SettingsA.SetActive(true);
	}
}

function SoundOnOff()
{
	if (Cont == 0)
	{
		//Sound = false;
		Cont += 1;
		SoundActive.Activated = false;
		SoundButton.sprite = Images[Cont];
		
		Customize.SetActive(false);
		CustomizeA.SetActive(true);
		Shop.SetActive(false); 
		ShopA.SetActive(true);
		Play.SetActive(false); 
		PlayA.SetActive(true); 
		Multiplayer.SetActive(false); 
		MultiplayerA.SetActive(true);
		Settings.SetActive(false);
		SettingsA.SetActive(true);
	}
	else
	{
		//Sound = true;
		Cont -= 1;
		SoundActive.Activated = true;
		SoundButton.sprite = Images[Cont];
		
		Customize.SetActive(true);
		CustomizeA.SetActive(false);
		Shop.SetActive(true); 
		ShopA.SetActive(false);
		Play.SetActive(true); 
		PlayA.SetActive(false); 
		Multiplayer.SetActive(true); 
		MultiplayerA.SetActive(false);
		Settings.SetActive(true);
		SettingsA.SetActive(false);
	}
	
}

function GoPlay()
{
	Application.LoadLevel(1);
}

function Exit()
{
	Application.Quit();
}

