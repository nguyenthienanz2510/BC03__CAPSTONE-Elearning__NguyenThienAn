import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseService } from "../../services/courseService";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";

export default function DetailPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  const [course, setCourse] = useState({});
  // console.log({ id, course });
  useEffect(() => {
    dispatch(handleStartSpinner());

    courseService
      .getCourseDetail(id)
      .then((res) => {
        console.log("getCourseDetail", res.data);
        setCourse(res.data);
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
  const user = useSelector((state) => state.userReducer.userInfo);
  console.log(user);
  const onSubmitRegisterCourse = (idCourse) => {
    if (user == null) {
      alert(
        "Bạn chưa đăng nhập! Vui lòng đăng nhập trước khi đăng ký khóa học!"
      );
    } else {
      let data = {
        maKhoaHoc: idCourse,
        taiKhoan: user.taiKhoan,
      };
      console.log(data);
      dispatch(handleStartSpinner());
      courseService
        .postRegisterCourse(data)
        .then((res) => {
          console.log(res);
          dispatch(handleEndSpinner());
          alert(res.data + " vui lòng kiểm tra khóa học tại trang User.");
        })
        .catch((err) => {
          console.log(err);
          dispatch(handleEndSpinner());
          alert(err.response.data);
        });
    }
  };
  return (
    <div className="pt-24 pb-10 space-y-10 min-h-screen container mx-auto">
      <h2 className="font-bold text-2xl">{course.tenKhoaHoc}</h2>
      <div className="sm:flex">
        <div className="w-full sm:w-1/2">
          <img
            src={course.hinhAnh}
            alt="img"
            width={"100%"}
            className="rounded"
          />
        </div>
        <div className="w-full sm:w-1/2 sm:pl-5 pt-5 sm:pt-0">
          <p className="text-justify">{course.moTa}</p>
          <p className="mt-2 font-semibold">
            (Số lượng học viên: {course.soLuongHocVien})
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          onSubmitRegisterCourse(course.maKhoaHoc);
        }}
        className="px-5 py-2 rounded bg-color-primary text-white hover:shadow-xl font-bold mx-auto block mt-5"
      >
        Đăng ký
      </button>
    </div>
  );
}

// {
//   "maKhoaHoc": "ITEC2110",
//   "biDanh": "cong-nghe-phan-mem",
//   "tenKhoaHoc": "Công Nghệ Phần Mềm",
//   "moTa": "Chuyên ngành công nghệ phần mềm là gì (Công nghệ thông tin phần mềm là gì)? Công nghệ thông tin (Ứng dụng phần mềm) còn được biết đến với tên gọi là kỹ thuật phần mềm. Công nghệ thông tin (Ứng dụng phần mềm) chính là những quy tắc trong công nghệ có sự liên quan mật thiết đến mọi khía cạnh của quá trình sản xuất phần mềm. Công nghệ thông tin (Ứng dụng phần mềm) được áp dụng một cách tiếp cận có hệ thống, định lượng và kỹ thuật cho sự phát triển, sử dụng cũng như bảo trì của các phần mềm hệ thống \nCông nghệ thông tin (Ứng dụng phần mềm) được xem là một bộ phận của quy trình công nghệ hệ thống. Công nghệ thông tin (Ứng dụng phần mềm) có sự liên quan đến sự phát triển của các ứng dụng, hạ tầng phần mềm, cơ sở dữ liệu và sự điều khiển hệ thống. Những kỹ sư phần mềm không chỉ tuân thủ phương pháp luận có tổ chức và hệ thống trong công việc mà còn phải sử dụng kỹ thuật, công cụ phù hợp với các vấn đề, tài nguyên sẵn có. \nCông nghệ thông tin (Ứng dụng phần mềm) có sự khác biệt với khoa học máy tính. Khoa học máy tính chỉ đề cập tới lý thuyết và vấn đề cơ bản. Ngược lại công nghệ phần mềm tập trung vào hoạt động xây dựng để chế tạo ra các phần mềm hữu ích cho con người. Sự phát triển mạnh mẽ của công nghệ phần mềm vượt trội hơn hẳn các lý thuyết của khoa học máy tính. Khoa học máy tính góp phần nhỏ, có vai trò giúp hoàn thiện công nghệ phần mềm. ",
//   "luotXem": 100,
//   "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/cong-nghe-phan-mem_gp01.png",
//   "maNhom": "GP01",
//   "ngayTao": "09/08/2021",
//   "soLuongHocVien": 0,
//   "nguoiTao": {
//       "taiKhoan": "dpnguyen",
//       "hoTen": "le quang anh ",
//       "maLoaiNguoiDung": "GV",
//       "tenLoaiNguoiDung": "Giáo vụ"
//   },
//   "danhMucKhoaHoc": {
//       "maDanhMucKhoahoc": "BackEnd",
//       "tenDanhMucKhoaHoc": "Lập trình Backend"
//   }
// }
