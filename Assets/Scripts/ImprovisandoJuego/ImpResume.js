#pragma strict
import UnityEngine.EventSystems;

class ImpResume extends MonoBehaviour implements IPointerDownHandler, IPointerUpHandler
{

	public var aClip : AudioClip[];
	private var aSource : AudioSource;
	private var touched : boolean;
	private var pointerID : int;
	public var GC : ImpGC;
	
	function Start()
	{
		aSource = GetComponent.<AudioSource>();
		touched = false;
	}


	
	public function OnPointerDown(data: PointerEventData)
	{
        if (!touched)
        {
            pointerID = data.pointerId;
        }		/*
		aSource.clip = aClip[2];
		aSource.Play();*/
	}
	
	
	public function OnPointerUp(data: PointerEventData)
	{
		if (data.pointerId == pointerID)
			GC.Unpause();
		/*
		aSource.clip = aClip[2];
		aSource.Play();*/
	}
	
	
}