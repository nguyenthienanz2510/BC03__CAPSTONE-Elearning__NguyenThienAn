import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";
import { courseService } from "../../services/courseService";
import CourseItem from "../HomePage/NewCourses/CourseItem";

export default function SearchPage() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  console.log(courses);

  useEffect(() => {
    dispatch(handleStartSpinner());
    const fetchCourses = async () => {
      try {
        let result = await courseService.getSearchListCourses(params.input);
        setCourses(result.data);
        console.log(result.data);
        dispatch(handleEndSpinner());
      } catch (err) {
        console.log(err);
        dispatch(handleEndSpinner());
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className="min-h-screen container mx-auto pt-20">
      <h2 className="font-bold text-xl mt-5">Kết quả tìm kiếm:</h2>
      <div className="flex flex-wrap py-6">
        {courses.map((course, index) => {
          return <CourseItem key={index} course={course} />;
        })}
      </div>
    </div>
  );
}
