function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jTUsQy6g1g":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzBXv-Oor8bpuNfeDcJS-cpjDPn5ORd1JN-LxmmRe4qU4s4zCzCVa1-37Mz_BeR7i58Dw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

