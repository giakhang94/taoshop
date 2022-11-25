import HeroPage from '../components/HeroPage';

function About() {
    return (
        <div className="abount">
            <HeroPage title="About" />
            <div className="container flex laptop:flex-row laptop:items-center tablet:flex-row tablet:items-center mobile:flex-col smallmobile:flex-col p-5">
                <div className="left tablet:w-2/4 laptop:w-2/4 mobile:w-full smallmobile:w-full">
                    <div className="left-img  w-[450px] object-cover h-[450px] rounded-md ml-10 mt-10">
                        <img
                            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/315530721_707265560825513_6995871161548759775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VyWYevVeS-AAX_0O_TR&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdQCITVa43b0RNQgQEDjd0QP5635YHUV731X1MhpXPi6Fw&oe=63A88C03"
                            alt=""
                            className="h-full w-full object-cover rounded-md"
                        />
                    </div>
                </div>
                <div className="right tablet:w-2/4 laptop:w-2/4 mobile:w-full smallmobile:w-full">
                    <h1 className="text-5xl text-[#0F2A4F] tracking-[1.5px] font-semibold mb-6">Our Story</h1>
                    <p className="text-[#617D97] leading-8 tracking-[1.5px] text-justify">
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
