import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className="head_text text-center">Descubre & Comporte
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Prompts</span>
      
        </h1>
        <p className="desc text-center">Utilizaremos ChatGPT meidante una API del mismo para crear y compartir prompts</p>
      <Feed />
    </section>
  )
}
 
export default Home