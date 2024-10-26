import AmeliaPhoto from '../image.png';
import './About.css'

function About() {
    return (
        <div className="container">
            <div className='text-section'>
                <h2>Welcome to Tissot Fitness</h2>
                <p>Amelia Tissot, a former professional soccer player, brings her passion for athleticism and fitness into her work as a personal trainer.
                    After years of experience on the field, Amelia has shifted her focus to helping clients reach their own fitness goals.
                    (Could you add a bit about where you played soccer, and any highlights from your career?)
                </p>
                <p>With a background in high-intensity training, Amelia understands the commitment and dedication it takes to excel.
                    She uses this experience to design workouts tailored to each client’s needs, focusing on strength, endurance, and overall wellness.
                    (Could you describe your approach to personal training? For example, do you emphasize specific types of workouts, like functional training or cardio?)</p>

                <p>Now, as a personal trainer, Amelia is motivated by her clients’ progress and the changes they see in their lives.
                    She believes that fitness isn’t just about physical appearance but also about building confidence, mental resilience, and self-discipline.
                    (What are some of your personal values or philosophies when it comes to fitness?)</p>

                <p>In her sessions, Amelia strives to create a supportive, motivating environment, whether she’s working with athletes, beginners, or anyone in between.
                    (Are there particular types of clients or goals you enjoy working with most?)</p>
            </div>
            <div className='image-section'>
                <img src={AmeliaPhoto} alt="Amelia Tissot" />
            </div>
        </div>
    )
}

export default About;