import Cards from "../../compenents/Home/Cards/Cards";

const Home=()=>{
    return(
        <>
            <div className="container-fuild bg-secondary py-5" style={{height: 'max-content'}}>
                <div className="container">
                    <h1 className="text-center mb-5 text-light">Attractor School</h1>
                    <p className="text-light mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro eum quod eius ratione consequatur assumenda saepe, excepturi, corporis ducimus architecto. Fugiat ipsam harum quisquam praesentium ea explicabo amet ducimus assumenda eius quia corporis, alias veniam. Temporibus neque, est quidem perferendis minus pariatur sed corporis a reiciendis adipisci sint repellendus distinctio nihil eligendi officiis dolore nesciunt. Unde aliquid nesciunt voluptatem quos? Labore nisi praesentium corporis ex voluptas rem! Eum unde temporibus impedit eaque nisi neque autem nemo quis porro debitis dolor nihil enim cum, placeat accusamus dolores dicta eligendi repudiandae sunt aspernatur! Accusamus quidem hic nisi temporibus itaque vel, recusandae tenetur fugit excepturi non omnis provident cumque amet impedit beatae necessitatibus unde rerum. Asperiores eaque repellendus iusto a sit delectus recusandae magni consectetur totam vitae, dolore modi, dolor necessitatibus quae numquam nostrum voluptates sed veniam harum, minus repellat pariatur. Quos, vel ut! Et perferendis excepturi quaerat. Ex asperiores, sed magni voluptates at omnis cumque, fugit recusandae fugiat, beatae ut exercitationem nihil saepe iure odio quasi harum commodi. Natus, dignissimos officiis iste consequuntur quam nisi velit veritatis magnam ducimus cumque numquam, facilis minima. Temporibus et, libero vel reprehenderit ipsum autem eum iure quidem alias corrupti non, inventore ex? Vero natus eos delectus tempore porro. Error corporis sit a vero commodi culpa maxime magni nihil ducimus architecto optio, maiores tenetur ut odio fugit, vel facere dolores blanditiis. Vel nihil at sapiente unde incidunt ducimus est corrupti nisi sequi modi veniam veritatis cum error nobis asperiores, accusantium nemo, amet ipsam omnis ipsum porro suscipit. Hic repellendus, vero ipsam labore quas omnis nam earum animi blanditiis ut, harum nesciunt odio id illo dolor accusantium? Quibusdam dolore quo blanditiis deleniti eligendi ex corrupti natus! Nostrum reiciendis architecto labore repudiandae minus, autem laboriosam rem expedita. Aliquam fugiat suscipit minima tempora incidunt, labore quaerat, quasi sapiente, dolores ducimus cupiditate voluptatum ex nesciunt? Blanditiis ut illo ipsum quae sint laboriosam soluta alias. Vel, reprehenderit iusto. Soluta aut asperiores consequuntur perspiciatis cumque commodi, facere blanditiis similique sint voluptates animi deserunt? Sapiente numquam sed aspernatur commodi molestiae ad architecto, facere magni quae, excepturi reprehenderit. Voluptatibus fugit nesciunt ducimus error veniam laboriosam quidem pariatur? Iure expedita eaque minima eveniet optio beatae totam deleniti libero repudiandae in. Ratione sed at ex hic veniam voluptates nihil nostrum cum quam? Reprehenderit voluptatem quaerat impedit repellendus. Voluptate, iure sint explicabo facere quaerat exercitationem voluptatem tempore quasi quam itaque saepe accusamus ex quibusdam eius nam magni?
                    </p>
                    <div className="d-flex gap-5 justify-content-center flex-wrap mb-5">
                        <Cards title="JavaScript" text="Javascript course, lasts 15 months, cost 18,000 soms per month" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                        <Cards title="Python" text="Python course, lasts 12 months, cost 14,000 soms per month" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"/>
                        <Cards title="Java" text="Java course, lasts 18 months, cost 15,000 soms per month" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ063q3L3pHLpJD5vRD42-7uyZHaITTOTTVjA&s"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;