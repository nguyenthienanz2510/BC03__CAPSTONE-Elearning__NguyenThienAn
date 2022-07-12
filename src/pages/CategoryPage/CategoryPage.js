import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { courseService } from "../../services/courseService";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";
import CourseItem from "../HomePage/NewCourses/CourseItem";

export default function CategoryPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  console.log({ id, courses });
  useEffect(() => {
    dispatch(handleStartSpinner());

    courseService
      .getCourseByCategory(id)
      .then((res) => {
        console.log("getCourseDetail", res.data);
        setCourses(res.data);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-20 mx-auto container">
      <h2 className="font-bold text-xl mt-5">
        {courses.length ? courses[0].danhMucKhoaHoc.tenDanhMucKhoaHoc : <></>}
      </h2>
      <div className="flex flex-wrap py-6">
        {courses.map((course, index) => {
          return <CourseItem key={index} course={course} />;
        })}
      </div>
    </div>
  );
}
