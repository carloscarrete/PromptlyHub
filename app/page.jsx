import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className="head_text text-center">Spark Your Imagination with
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">PromptlyHub</span>
      
        </h1>
        <p className="desc text-center">Explore, create, and share ingenious prompts on PromptlyHub, the open-source platform for inspiration.</p>
      <Feed />
    </section>
  )
}
 
export default Home