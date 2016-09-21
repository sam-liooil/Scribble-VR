using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class sceneChange : MonoBehaviour {

	public string levelToLoad;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter(Collider other)
	{
		if (other.tag == "Player") 
		{
			SceneManager.LoadScene(levelToLoad);
		}	
	}
}
