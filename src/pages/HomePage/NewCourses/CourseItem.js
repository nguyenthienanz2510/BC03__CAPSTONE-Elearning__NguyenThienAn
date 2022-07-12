import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

const CourseItem = ({ course }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-5">
      <Card
        className="max-w-[360px] mx-auto"
        hoverable
        cover={
          <img
            alt="course img"
            className="h-52 lg:h-40 xl:h-52"
            src={course.hinhAnh}
          />
        }
      >
        <Meta title={course.tenKhoaHoc} />
        <NavLink to={`/detail/${course.maKhoaHoc}`}>
          <button className="px-5 py-2 rounded bg-color-primary text-white hover:shadow-xl font-bold mx-auto block mt-5">
            Xem chi tiết
          </button>
        </NavLink>
      </Card>
    </div>
  );
};

export default CourseItem;

// {
//     "maKhoaHoc": "TTT777",
//     "biDanh": "javascript",
//     "tenKhoaHoc": "JavaScript",
//     "moTa": "chua mo ta",
//     "luotXem": 100,
//     "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/javascript_gp01.jpg",
//     "maNhom": "GP01",
//     "ngayTao": "10/10/2020",
//     "soLuongHocVien": 0,
//     "nguoiTao": {
//         "taiKhoan": "LongDangDn05",
//         "hoTen": "Dang Tien Long",
//         "maLoaiNguoiDung": "GV",
//         "tenLoaiNguoiDung": "Giáo vụ"
//     },
//     "danhMucKhoaHoc": {
//         "maDanhMucKhoahoc": "FrontEnd",
//         "tenDanhMucKhoaHoc": "Lập trình Front end"
//     }
// }
