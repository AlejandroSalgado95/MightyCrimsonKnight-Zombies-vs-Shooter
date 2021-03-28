#pragma strict
class ImpButtonSupervisor extends MonoBehaviour implements IPointerDownHandler, IPointerUpHandler
{	
	
	//private var superviseSound : ImpSoundYesNo;
	private var touched : boolean = false;
	private var pointerID : int;
	private var aud : AudioSource;

	
	function Start()
	{
		//superviseSound = GameObject.FindWithTag("SoundSupervisor").GetComponent.<ImpSoundYesNo>();
		aud = GetComponent.<AudioSource>();
	}
	
	public function OnPointerDown (data : PointerEventData) 
	{
       if (!touched) 
       {
            touched = true;
            pointerID = data.pointerId;
        }
    }
   

    public function OnPointerUp (data: PointerEventData) 
    {
    	if (data.pointerId == pointerID)
    	{
    			aud.Play();
    	}
    }


}