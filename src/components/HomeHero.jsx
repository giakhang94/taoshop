function HomeHero() {
    return(
        <div className="flex items-center justify-evenly  px-20 py-5">
            <div className="home-content flex flex-col w-[50%] pr-20">
               <div className="text-[#102A42] text-5xl font-bold tracking-[1.5px] mb-6">
                    <h2>Desgin Your</h2>
                    <h2>Comfort Zone</h2>
               </div>
                <p className="text-justify text-slate-600 text-lg tracking-[2px] mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                <button className="text-white bg-[#AB7A5F] rounded-md py-2 tracking-[2px] w-40">SHOP NOW</button>
            </div>
            <div className="homehero-imgs w-[50%] relative ml-20 -mr-[13%] " >
                <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/315530721_707265560825513_6995871161548759775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Pwf6mhLtzPUAX-hwjlX&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdRlDooO-qqe6K24y9qQ7tWGW3ekfOUmz8RbmYvAgAT5oQ&oe=63A5E903" className="w-[70%] h-[100%] object-cover rounded-md" alt="" />
                <img 
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/315522414_5572353732863933_859207125840597748_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=30kGjgoC1OIAX_SEzjh&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdTJPDzmXS_3pRkaDRnwxbCjP6eR2oPtBd2xtsHsTK6aTQ&oe=63A5CA5A" 
                    className="w-[35%] h-[25%] rounded-md absolute bottom-0 -left-[12%]" alt="" 
                    />
            </div>
        </div>
    )
}   
export default HomeHero