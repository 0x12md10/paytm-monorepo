import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button className="bg-blue-600" appName="paytm">Signin</Button>
    </h1>
  )
}