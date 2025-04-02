import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
  const { shorturl } = await params;
  const client = await clientPromise;
  const db = client.db("MyLinks");
  const collection = db.collection("URLs");
  const doc = await collection.findOne({ shorturl: shorturl });
  if (doc) {
    redirect(`${doc.url}`);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  return <div>My Post: {shorturl}</div>;
}
