import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

import React from "react";

export default function FooterLayout() {
  return (
    <div className=" w-full border-t py-10">
      <div className="container mx-auto h-full">
        <div>
          <span className="mr-2">GET SOCIAL</span>
          <a
            className="text-xl ml-2 hover:text-color-primary"
            href="https://www.facebook.com/lophocviet/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="text-xl ml-2 hover:text-color-primary"
            href="https://www.youtube.com/channel/UCWc3ASTJcb0FeO2oFfX8IDQ"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <h2 className="mt-5 mb-3 text-xl font-bold text-color-primary">
          TP. Hồ Chí Minh
        </h2>
        <div class=" grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-col-1 ml-2 md:ml-0 ">
          <div>
            <h4 className="text-lg font-bold">Trụ sở: 112 Cao Thắng, Quận 3</h4>
            <p>Hotline: 096.105.1014</p>
            <p>Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">459 Sư Vạn Hạnh, Quận 10</h4>
            <p>Hotline: 096.105.1014</p>
            <p>
              Địa chỉ: Tầng 2, toà nhà WinHome, 459 Sư Vạn hạnh, Quận 10, TPHCM
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">117 Tân Cảng, Bình Thạnh</h4>
            <p>Hotline: 096.105.1014</p>
            <p>Địa chỉ: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">
              110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp
            </h4>
            <p>Hotline: 096.105.1014</p>
            <p>
              Địa chỉ: 110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò
              Vấp, TPHCM
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">56 Lê Cảnh Tuân, Tân Phú</h4>
            <p>Hotline: 096.105.1014</p>
            <p>Địa chỉ: 56 Lê Cảnh Tuân, Tân Phú, TPHCM</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">
              6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)
            </h4>
            <p>Hotline: 096.105.1014</p>
            <p>Địa chỉ: 6C Đường số 8, Linh Tây, Thủ Đức, TPHCM</p>
          </div>
        </div>
        <h2 className="mb-3 mt-5 text-xl font-bold text-color-primary">
          Đà Nẵng
        </h2>
        <div class=" grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-col-1 ml-2 md:ml-0 ">
          <div>
            <h4 className="text-lg font-bold">103 Nguyễn Hữu Dật, Hải Châu</h4>
            <p>Hotline: 096.105.1014</p>
            <p>Địa chỉ: 103 Nguyễn Hữu Dật, Hải Châu, ĐN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
