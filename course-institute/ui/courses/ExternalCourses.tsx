'use client'
import React, { useEffect, useMemo, useState } from 'react'
import CoursesList from './CoursesList'


function ExternalCourses({getData}: any) {
    const [courses, setCourses] = useState([])

    useEffect(()=> {
         getData()
         .then((courseList: any) => setCourses(courseList))
    }, [])

  const listofCourse = useMemo(() => {
    return courses.map((course: any) => {
        return {
            ...course,
            title: course.title
        }
    })
  }, [courses])

  return (
    <div>
        <h2>ExternalCourses</h2>
        <CoursesList list={listofCourse} />
        </div>
  )
}

export default ExternalCourses