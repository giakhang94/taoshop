import HeroPage from '../components/HeroPage';

function About() {
    return (
        <div className="abount w-full">
            <HeroPage title="About" />
            <div className="flex  tablet:flex-row tablet:items-center laptop:flex-row laptop:items-center mobile:flex-col smallmobile:flex-col py-5">
                <div className="laptop:w-2/4 tablet:w-2/4 mobile:w-full smallmobile:w-full">
                    <div
                        className="w-[90%] h-[350px] rounded-md mx-5"
                        style={{
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            background: `url(https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/315530721_707265560825513_6995871161548759775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VyWYevVeS-AAX_0O_TR&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdQCITVa43b0RNQgQEDjd0QP5635YHUV731X1MhpXPi6Fw&oe=63A88C03)`,
                        }}
                    ></div>
                </div>
                <div className="laptop:w-2/4 tablet:w-2/4 mobile:w-full smallmobile:w-full laptop:mx-10 tablet:mx-10 mobile:mx-3 smallmobile:mx-3">
                    <h1 className="tracking-[2px] text-[#193753] mb-3 font-semibold laptop:text-4xl tablet:text-3xl mobile:text-xl smallmobile:text-xl">
                        Our Story
                    </h1>
                    <p className=" block w-[90%] text-justify text-[#2b5074] tablet:text-md laptop:text-lg mobile:text-sm smallmobile:text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
