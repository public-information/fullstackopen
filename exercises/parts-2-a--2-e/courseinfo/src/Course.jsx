const Header = ({name}) => {
    return (
        <>
            <h2>{name}</h2>
        </>
    )
}

const Total = ({parts}) => {
    return (
        <>
            <p>
                <b>Total of {parts.reduce((accum, curr) => accum + curr.exercises, 0)} exercises</b>
            </p>
        </>
    )
}

const Part = ({part}) => {
    return (
        <>
            <p>{part.name} {part.exercises}</p>
        </>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </>
    )
}

export default Course