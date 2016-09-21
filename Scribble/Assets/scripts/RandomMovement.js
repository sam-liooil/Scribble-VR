 var target:Vector3;
 var timer:float;
 var sec:int;
 function Start () {
  target = ResetTarget();
  sec=ResetSec();
 }
 
 function Update () {
 timer+=Time.deltaTime;
 if(timer>sec){
 target=ResetTarget();
 sec=ResetSec();
 }
 transform.Translate(target*10*Time.deltaTime);
 }
 function ResetTarget():Vector3{
     return Vector3(Random.Range(-2.0,2.0),Random.Range(-2.0,2.0),Random.Range(-2.0,2.0));
 }
 function ResetSec():int{
     timer =0;
     return Random.Range(1,3);
 }
