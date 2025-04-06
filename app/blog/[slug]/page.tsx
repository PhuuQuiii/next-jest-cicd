type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: `Post: ${params.slug}` };
}

// export default function Page({ params }: { params: { slug: string } })  {
//   return <><h1>Slug: {params.slug}</h1><p>HoleTex</p><p>Welcom to HCM</p></>
// }


export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Slug: {params.slug}</h1>;
}