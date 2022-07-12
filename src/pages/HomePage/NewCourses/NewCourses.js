import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../../redux/action/spinnerComponentAction";
import { courseService } from "../../../services/courseService";
import CourseItem from "./CourseItem";

export default function NewCourses() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  // console.log(courses);
  useEffect(() => {
    dispatch(handleStartSpinner());
    let fetchCourses = async () => {
      try {
        let result = await courseService.getCourses();
        setCourses(result.data);
        // console.log(result.data);
        dispatch(handleEndSpinner());
      } catch (err) {
        console.error(err);
        dispatch(handleEndSpinner());
      }
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <h2 className="font-bold text-xl">Khóa học mới nhất</h2>
      <div className="flex flex-wrap py-6">
        {courses.map((course, index) => {
          if (index > 9 && index < 18) {
            return <CourseItem key={index} course={course} />;
          }
        })}
      </div>
    </div>
  );
}
