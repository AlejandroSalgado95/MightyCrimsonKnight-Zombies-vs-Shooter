#pragma strict


function OnTriggerExit(other : Collider)
{
	if (other.CompareTag("Bullet"))
		Destroy(other.gameObject);
}