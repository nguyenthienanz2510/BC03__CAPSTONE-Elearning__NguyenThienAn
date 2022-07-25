import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";
import { userService } from "../../services/userService";
import MyCourseItem from "./MyCourseItem";
import { message } from "antd";
import { useHistory } from "react-router-dom";

export default function UserPage() {
  const [userDetail, setUserDetail] = useState({});
  const [userEdit, setUserEdit] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(handleStartSpinner());
    userService
      .postUserInfo()
      .then((res) => {
        // console.log(res);
        setUserDetail(res.data);
        setUserEdit(res.data);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  }, []);

  const handleChangeForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    console.log(name, value);
    setUserEdit({
      ...userEdit,
      [name]: value,
    });
  };

  const submitSaveChange = () => {
    dispatch(handleStartSpinner());
    userService
      .putEditUserInfo(userEdit)
      .then((res) => {
        console.log(res);
        message.success("Cập nhật thông tin tài khoản thành công");
        dispatch(handleEndSpinner());
        hideUserEditInfo();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
        hideUserEditInfo();
        window.location.reload();
      });
  };

  const hideUserInfo = () => {
    let userInfoEditElement = document.getElementsByClassName("user-info-edit");
    let userInfoElement = document.getElementsByClassName("user-info");
    console.log(userInfoEditElement);
    for (let i = 0; i < userInfoEditElement.length; i++) {
      console.log(userInfoEditElement[i]);
      userInfoEditElement[i].style.display = "inline-block";
    }
    for (let i = 0; i < userInfoElement.length; i++) {
      console.log(userInfoElement[i]);
      userInfoElement[i].style.display = "none";
    }
  };
  const hideUserEditInfo = () => {
    let userInfoEditElement = document.getElementsByClassName("user-info-edit");
    let userInfoElement = document.getElementsByClassName("user-info");
    console.log(userInfoEditElement);
    for (let i = 0; i < userInfoEditElement.length; i++) {
      console.log(userInfoEditElement[i]);
      userInfoEditElement[i].style.display = "none";
    }
    for (let i = 0; i < userInfoElement.length; i++) {
      console.log(userInfoElement[i]);
      userInfoElement[i].style.display = "inline-block";
    }
  };

  const renderPassword = () => {
    let password = "";
    for (let i = 0; i < userDetail.matKhau.length; i++) {
      password += "*";
    }
    return password;
  };

  return (
    <div className="min-h-screen pt-20 container mx-auto">
      <div className="border-b py-5 mb-5">
        <h2 className="text-xl font-bold">Thông tin cá nhân</h2>
        <ul className="my-5 text-base font-base">
          <li className="leading-8">
            <span className="w-32 inline-block">Họ tên: </span>
            <span className="user-info">{userDetail.hoTen}</span>
            <input
              value={userEdit.hoTen}
              type="text"
              name="hoTen"
              className="user-info-edit hidden my-1 border border-gray-500 rounded"
              onChange={(event) => {
                handleChangeForm(event);
              }}
            />
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Số điện thoại: </span>
            <span className="user-info">{userDetail.soDT}</span>
            <input
              value={userEdit.soDT}
              type="number"
              name="soDT"
              className="user-info-edit hidden my-1 border border-gray-500 rounded"
              onChange={(event) => {
                handleChangeForm(event);
              }}
            />
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Email: </span>
            <span className="user-info">{userDetail.email}</span>
            <input
              value={userEdit.email}
              type="email"
              name="email"
              className="user-info-edit hidden my-1 border border-gray-500 rounded"
              onChange={(event) => {
                handleChangeForm(event);
              }}
            />
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Tài khoản: </span>
            <span className="user-info">{userDetail.taiKhoan}</span>
            {/* <input
              value={userEdit.taiKhoan}
              type="text"
              name="taiKhoan"
              className="user-info-edit hidden my-1 border border-gray-500 rounded"
              onChange={(event) => {
                handleChangeForm(event);
              }}
            /> */}
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Mật khẩu: </span>
            <span className="user-info text-xl">
              {userDetail.matKhau ? renderPassword() : <></>}
            </span>
            <input
              value={userEdit.matKhau}
              type="text"
              name="matKhau"
              className="user-info-edit hidden my-1 border border-gray-500 rounded"
              onChange={(event) => {
                handleChangeForm(event);
              }}
            />
          </li>
        </ul>
        <span
          className="user-info text-base text-blue-500 cursor-pointer underline"
          onClick={hideUserInfo}
        >
          Cập nhật thông tin tài khoản
        </span>
        <button
          onClick={() => submitSaveChange()}
          className="user-info-edit hidden hover:text-white hover:bg-color-primary rounded text-color-primary bg-white px-5 py-2 hover:border-color-primary border-color-primary border"
        >
          Lưu thay đổi
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold">Khóa học của tôi</h2>
        <div className="flex flex-wrap py-6">
          {userDetail.chiTietKhoaHocGhiDanh ? (
            userDetail.chiTietKhoaHocGhiDanh.map((course, index) => {
              return <MyCourseItem key={index} course={course} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

// {
//   "taiKhoan": "string",
//   "matKhau": "string",
//   "hoTen": "string",
//   "soDT": "string",
//   "maLoaiNguoiDung": "string",
//   "maNhom": "string",
//   "email": "string"
// }
