import Image from "next/image";
// import Link from "next/link";

async function fetchSpeakers() {
  const response = await fetch("https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  )
  const data = response.json();
  console.log("data::: :: ", data)
  return data;
}

export default async function Home() {

  const data = await fetchSpeakers();
  return (
    <span>
      <div className="grid grid-cols-3 gap-4 p-8 min-h-screen">

        {/* // first column */}
        <div className="grid grid-rows-2 gap-2">
          <div className="bg-blue-200 p-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={28}
              priority
            />
          </div>
          <div className="makeList p-4">
            <h1 className="text-2xl">Lets make a list</h1>
            {data.speakers.map(({ id }) => (
              <div key={id}>
                {/* <h3>{name} </h3>
                <h5>{bio} </h5> */}
              </div>
            ))}
          </div>
        </div >

        {/* // second column */}

        <div className="squeeze grid-rows-2 p-4 items-center justify-center">
          <div>
            <Image
              src="/oranges.png"
              alt="oranges"
              width={716}
              height={38}
              priority
            />
            <h1>Squeeze the day! </h1>
          </div>
          <div>
            <form>
              <textarea>

              </textarea>
            </form>
          </div>

        </div>
        <div className="grid grid-rows-3 gap-2">
          <div className="bg-red-200 p-4"> notes</div>
          <div className="bg-red-400 p-4">
            <h1>carry over to tomorrow</h1>
          </div>
          <div className="bg-red-600 p4"> goals</div>
        </div>
      </div>
    </span>
  );
}
