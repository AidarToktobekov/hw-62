interface Props{
    lessonNum: number;
    lessonTopic: string;
    grade: number;
}

const Lesson:React.FC<Props> = ({lessonNum, lessonTopic, grade})=>{
    return(
        <>
        <div className="mt-2 rounded-top p-2 bg-black">
            <div className="d-flex text-light gap-4 rounded-top p-2 border-1 border border-bottom-0 justify-content-between">
                <span>#{lessonNum}</span>
                <span>{lessonTopic}</span>
                <span>{grade}</span>
            </div>
        </div>
        </>
    )
}

export default Lesson