import Lesson from "../../compenents/HomeWork/HomeWork";

const HomeWork=()=>{
    
    return(
        <>
            <div className="container py-5">
                <div className="d-flex gap-4 justify-content-between p-3 rounded-top border-3 border border-bottom-0">
                    <span>Lesson</span>
                    <span>Topic</span>
                    <span>Grade</span>
                </div>
                <Lesson lessonNum={1} lessonTopic="React Router" grade={10}></Lesson>
                <Lesson lessonNum={2} lessonTopic="Use State" grade={9.9}></Lesson>
                <Lesson lessonNum={3} lessonTopic="Use Effect" grade={8.9}></Lesson>
                <Lesson lessonNum={5} lessonTopic="Axios" grade={9.4}></Lesson>
                <Lesson lessonNum={6} lessonTopic="Linux, Git" grade={10.9}></Lesson>
            </div>
        </>
    )
}

export default HomeWork;