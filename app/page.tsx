import InputComponents from "@/components/InputComponents";

async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}/api/post`, { cache: 'no-store' });
  if (!res.ok) console.log(res);
  return res.json();
}

type Posts = {
  data: { id: number; title: string; content: string; published: boolean }[];
  status: number;
};

export default async function Home() {
  const posts: Posts = await getPost();
  return (
    <main className="flex justify-center flex-col">
      <InputComponents />
      {posts.data.map((item) => (
        <p className="m-2" key={item.id}>
          {item.title}
        </p>
      ))}
    </main>
  );
}
