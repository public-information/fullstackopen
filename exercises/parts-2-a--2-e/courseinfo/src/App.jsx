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

const App = () => {
    const courses = [
        {
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1,
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2,
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3,
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ]


    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course=> <Course key={course.id} course={course} />)}
        </div>
    )
}

export default App