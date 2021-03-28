#pragma strict
import UnityEngine.UI;
import UnityEngine.EventSystems;

class MobileJoystick extends MonoBehaviour implements IPointerDownHandler, IPointerUpHandler, IDragHandler
{
	
    public var smoothing : float; 
	private var origin : Vector2;
	private var startPosition : Vector3;
	private var direction : Vector2;
	private var smoothDirection : Vector2;
	private var touched : boolean;
	private var pointerID: int;
    
    function Awake () {
        direction = Vector2.zero;
        touched = false;
        startPosition.x = transform.position.x;
        startPosition.y = transform.position.y;
        startPosition.z = transform.position.z;
    }
    
    public function OnPointerDown (data : PointerEventData) {
        if (!touched) {
            touched = true;
            pointerID = data.pointerId;
            origin = data.position;
        }
    }

    public function OnDrag (data : PointerEventData) {
        if (data.pointerId == pointerID) {
            var currentPosition : Vector2 = data.position;
            var directionRaw : Vector2 = currentPosition - origin;
            direction = directionRaw.normalized;
            transform.position.x = startPosition.x + (direction.x * 20);
            transform.position.y = startPosition.y + (direction.y * 20);
        }
    }

    public function OnPointerUp (data: PointerEventData) {
        if (data.pointerId == pointerID) 
        {
            direction = Vector3.zero;
            touched = false; 
            StartCoroutine(GoBackToStartPosition());
        }
        
    }
    
    function GoBackToStartPosition()
    {
	    while ((transform.position - startPosition).magnitude > 1)
	    {
	    	transform.position = Vector3.Lerp(transform.position,startPosition,0.1f);
	    	yield;
	    }
    }
    


    public function GetDirection () {
        //smoothDirection = Vector2.MoveTowards (smoothDirection, direction, smoothing);
        return direction;
    }
}