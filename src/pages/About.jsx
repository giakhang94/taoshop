import HeroPage from '../components/HeroPage';

function About() {
    return (
        <div className="abount">
            <HeroPage title="About" />
            <div className="container mx-auto px-20 grid laptop:grid-cols-2 tablet:gird-cols-2 mobile:grid-cols-1 smallmobile:grid-cols-1">
                <div className="left w-full mb-6">
                    <div className="left-img  w-auto min-w-[350px] object-cover h-[450px] rounded-md ml-10 mt-10">
                        <img
                            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/315530721_707265560825513_6995871161548759775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VyWYevVeS-AAX_0O_TR&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdQCITVa43b0RNQgQEDjd0QP5635YHUV731X1MhpXPi6Fw&oe=63A88C03"
                            alt=""
                            className="h-full w-full object-cover rounded-md"
                        />
                    </div>
                </div>
                <div className="right w-full mx-10">
                    <h1 className="text-5xl text-[#0F2A4F] tracking-[1.5px] font-semibold mb-3">Our Story</h1>
                    <p className="text-[#617D97] leading-8 tracking-[1.5px] block w-full text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora
                        sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae.
                        Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi
                        blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero
                        minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi,
                        eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                        iste.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
