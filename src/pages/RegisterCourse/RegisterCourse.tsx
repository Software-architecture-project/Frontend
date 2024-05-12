import React, { Component } from "react";
import "./index.css";
import { printericon } from "assets/icon";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  PrinterOutlined,
} from "@ant-design/icons";

const RegisterCourse: React.FC = () => (
  <div className="box-df snipcss-5HOye">
    <div className="portlet">
      <div className="portlet-title">
        <div className="caption">
          <span className="caption-subject bold" lang="dangkyhocphan-pagetitle">
            Đăng ký học phần
          </span>
        </div>
        <div></div>
        <div
          hidden={true}
          id="warningChonDot"
          data-name="warningChonDot"
          lang="dangkyhocphan-warningChonDot"
        >
          Chọn đợt đăng ký học phần
        </div>
        <div
          hidden={true}
          id="warningChonHPDangKy"
          data-name="warningChonHPDangKy"
          lang="dangkyhocphan-warningChonHPDangKy"
        >
          Chọn chi tiết học phần cần đăng ký
        </div>
        <div
          hidden={true}
          id="warningChonLichCoNhom"
          data-name="warningChonLichCoNhom"
          lang="dangkyhocphan-warningChonLichCoNhom"
        >
          học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.
        </div>
        <div
          hidden={true}
          id="warningHuyDKFail"
          data-name="warningHuyDKFail"
          lang="dangkyhocphan-warningHuyDKFail"
        >
          Hủy đăng ký không thành công
        </div>
        <div
          hidden={true}
          id="warningMHDKNotFound"
          data-name="warningMHDKNotFound"
          lang="dangkyhocphan-warningMHDKNotFound"
        >
          Không tìm thấy dữ liệu chi tiết môn học đăng ký
        </div>
      </div>
      <div className="portlet-body">
        <div className="">
          <div className="form-body">
            <div className="col-md-2" />
            <div className="form-group  col-md-4">
              <div>
                <select
                  className="form-control"
                  id="cboIDDotDangKy"
                  name="cboIDDotDangKy"
                  aria-placeholderr="Chọn đợt đăng ký"
                >
                  <option value="">Chọn đợt đăng ký</option>
                  <option value={60}>HK3 (2024-2025)</option>
                  <option value={59}>HK2 (2024-2025)</option>
                  <option value={58}>HK1 (2024-2025)</option>
                  <option value={57}>HK3 (2023-2024)</option>
                  <option selected value={56}>
                    HK2 (2023-2024)
                  </option>
                  <option value={46}>HK1 (2023-2024)</option>
                  <option value={45}>HK3 (2022-2023)</option>
                  <option value={44}>HK2 (2022-2023)</option>
                  <option value={43}>HK1 (2022-2023)</option>
                  <option value={42}>HK3 (2021-2022)</option>
                  <option value={41}>HK2 (2021-2022)</option>
                  <option value={40}>HK1 (2021-2022)</option>
                  <option value={39}>HK3 (2020-2021)</option>
                  <option value={38}>HK2 (2020-2021)</option>
                  <option value={37}>HK1 (2020-2021)</option>
                </select>
              </div> 
            </div>

            <div className="form-group col-md-6">
              <div>
                <div className="mt-radio-inline">
                  <label className="mt-radio">
                    <input
                      defaultChecked={true}
                      id="rdoLoaiDangKyHocPhan"
                      name="rdoLoaiDangKyHocPhan"
                      type="radio"
                      defaultValue={1}
                    />{" "}
                    Học mới <span />
                  </label>
                  <label className="mt-radio">
                    <input
                      id="rdoLoaiDangKyHocPhan"
                      name="rdoLoaiDangKyHocPhan"
                      type="radio"
                      defaultValue={2}
                    />{" "}
                    Học lại <span />
                  </label>
                  <label className="mt-radio">
                    <input
                      id="rdoLoaiDangKyHocPhan"
                      name="rdoLoaiDangKyHocPhan"
                      type="radio"
                      defaultValue={3}
                    />{" "}
                    Học cải thiện <span />
                  </label>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="gr-table" id="monHPChoDangKy">
          <div
            className="border-scroll style-G78RR"
            tabIndex={0}
            id="style-G78RR"
          >
            <div id="box_monhocphan_chodangky">
              <h3 className="title-table" lang="mhpchodangky-tabletitle">
                Môn học/học phần đang chờ đăng ký
              </h3>
              <div className="table-responsive">
                <table
                  className="table-pointer table-custom table table-bordered text-center"
                  width="100%"
                  role="grid"
                  id="dkHocPhan"
                >
                  <thead>
                    <tr role="row">
                      <td style={{ width: 40 }} />
                      <th lang="dkhp-stt">STT</th>
                      <th lang="dkhp-malhp">Mã học phần</th>
                      <th lang="dkhp-tenmh">Tên môn học/học phần</th>
                      <th lang="dkhp-tc">TC</th>
                      <th lang="dkhp-batbuoc">Bắt buộc</th>
                      <th lang="dkhp-hoctruoctienquyetsonghanh">
                        học phần: học trước (a),
                        <br />
                        tiên quyết (b),
                        <br />
                        song hành (c)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      // onClick={SelectMonHocChoDangKy(this)}
                      data-id={3193}
                      data-mamh={"003193"}
                      data-mahpduochoc={4203003193}
                    >
                      <td className="text-center">
                        <div>
                          <label
                            className="mt-radio style-Boplz"
                            id="style-Boplz"
                          >
                            <input
                              id="rdoMonHocChoDangKy"
                              name="rdoMonHocChoDangKy"
                              type="radio"
                              defaultValue={3193}
                            />
                            <span />
                          </label>
                        </div>
                      </td>
                      <td>1</td>
                      <td>4203003193</td>
                      <td className="text-left">Toán ứng dụng</td>
                      <td> 3 </td>
                      <td>
                        <div>
                          <div className="no-check" />
                        </div>
                      </td>
                      <td></td>
                    </tr>

                    <tr
                      // onclick="SelectMonHocChoDangKy(this);"
                      data-id={3240}
                      data-mamh={"003240"}
                      data-mahpduochoc={4203003240}
                    >
                      <td className="text-center">
                        <div>
                          <label
                            className="mt-radio style-eiYjK"
                            id="style-eiYjK"
                          >
                            <input
                              id="rdoMonHocChoDangKy"
                              name="rdoMonHocChoDangKy"
                              type="radio"
                              defaultValue={3240}
                            />
                            <span />
                          </label>
                        </div>
                      </td>
                      <td>2</td>
                      <td>4203003240</td>
                      <td className="text-left">
                        Hàm phức và phép biến đổi Laplace
                      </td>
                      <td> 3 </td>
                      <td>
                        <div>
                          <div className="no-check" />
                        </div>
                      </td>
                      <td></td>
                    </tr>

                    <tr
                      // onclick="SelectMonHocChoDangKy(this);"
                      data-id={3320}
                      data-mamh={"003320"}
                      data-mahpduochoc={4203003320}
                    >
                      <td className="text-center">
                        <div>
                          <label
                            className="mt-radio style-Lptlb"
                            id="style-Lptlb"
                          >
                            <input
                              id="rdoMonHocChoDangKy"
                              name="rdoMonHocChoDangKy"
                              type="radio"
                              defaultValue={3320}
                            />
                            <span />
                          </label>
                        </div>
                      </td>
                      <td>3</td>
                      <td>4203003320</td>
                      <td className="text-left">Phương pháp tính</td>
                      <td> 3 </td>
                      <td>
                        <div>
                          <div className="no-check" />
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="row snipcss-QvYdq" id="lopHPChoDangKy">
          <div className="col-md-6">
            <div className="gr-table">
              <div
                className="border-scroll style-M3mRn"
                tabIndex={1}
                id="style-M3mRn"
              >
                <div id="box_lophocphan_chodangky">
                  <h3 className="title-table" lang="lhpchodangky-tabletitle">
                    Lớp học phần chờ đăng ký
                  </h3>
                  <div className="text-right style-8KMSB" id="style-8KMSB">
                    <label>
                      <input
                        id="checkLichTrung"
                        name="checkLichTrung"
                        type="checkbox"
                        defaultValue="true"
                      />
                      <input
                        name="checkLichTrung"
                        type="hidden"
                        defaultValue="false"
                      />
                      <b>
                        <span
                          className="text-uppercase style-Jg35F"
                          lang="lhpchodangky-lhpkhongtrunglich"
                          id="style-Jg35F"
                        >
                          HIỂN THỊ LỚP học phần KHÔNG TRÙNG LỊCH
                        </span>
                      </b>
                    </label>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="table_lhpchodangky"
                      className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline"
                      width="100%"
                      role="grid"
                    >
                      <thead>
                        <tr role="row">
                          <th lang="sv-stt">STT</th>
                          <th lang="dkhp-thongtinlhp">
                            Thông tin lớp học phần
                          </th>
                          <th lang="dkhp-dadangky">Đã đăng ký</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="tr-active"
                          // onclick="SelectLopHocPhanChoDangKy(this)"
                          data-guidlhp="v_rTcNgU0HveH-bJJffznQ"
                        >
                          <td style={{ width: 40 }}>1</td>
                          <td className="text-left">
                            <div className="name">
                              Lập trình hướng sự kiện với công nghệ .NET
                            </div>
                            <div>
                              <span lang="dkhp-trangthai">Trạng thái</span>:{" "}
                              <span className="cl-red">Đang lên kế hoạch </span>
                              <br />
                              <span lang="dkhp-malhp">Mã lớp học phần</span>:
                              420300204401 - DHKTPM18B
                            </div>
                          </td>
                          <td> 0 / 80 </td>
                        </tr>
                        <tr
                          className=""
                          // onclick="SelectLopHocPhanChoDangKy(this)"
                          data-guidlhp="ezfngd328R_35XGIA959vg"
                        >
                          <td style={{ width: 40 }}>2</td>
                          <td className="text-left">
                            <div className="name">
                              Lập trình hướng sự kiện với công nghệ .NET
                            </div>
                            <div>
                              <span lang="dkhp-trangthai">Trạng thái</span>:{" "}
                              <span className="cl-red">Đang lên kế hoạch </span>
                              <br />
                              <span lang="dkhp-malhp">Mã lớp học phần</span>:
                              420300204402 - DHKTPM18A
                            </div>
                          </td>
                          <td> 0 / 80 </td>
                        </tr>
                        <tr
                          className=""
                          // onclick="SelectLopHocPhanChoDangKy(this)"
                          data-guidlhp="AkqCmcKdIPer2YNXs52ZgQ"
                        >
                          <td style={{ width: 40 }}>3</td>
                          <td className="text-left">
                            <div className="name">
                              Lập trình hướng sự kiện với công nghệ .NET
                            </div>
                            <div>
                              <span lang="dkhp-trangthai">Trạng thái</span>:{" "}
                              <span className="cl-red">Đang lên kế hoạch </span>
                              <br />
                              <span lang="dkhp-malhp">Mã lớp học phần</span>:
                              420300204403 - DHKTPM18C
                            </div>
                          </td>
                          <td> 0 / 80 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gr-table">
              <div
                className="border-scroll style-1YEOP"
                tabIndex={2}
                id="style-1YEOP"
              >
                <div id="box_chitietlophocphan_chodangky">
                  <h3 className="title-table" lang="ctlhpchodangky-tabletitle">
                    Chi tiết lớp học phần
                  </h3>
                  <div className="text-right" style={{ marginBottom: 5 }}>
                    <button
                      // onclick="XemLichTrung(this)"
                      className="btn btn--m block first style-4kJ3X"
                      lang="dkhp-xemlichtrungButton"
                      id="style-4kJ3X"
                    >
                      Xem lịch trùng
                    </button>
                  </div>
                  <table
                    id="tbChiTietDKHP"
                    className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline"
                    width="100%"
                    role="grid"
                  >
                    <thead>
                      <tr role="row">
                        <th>
                          <p>
                            <span lang="dkhp-trangthai">Trạng thái</span>:{" "}
                            <span id="style-FHZ69" className="style-FHZ69">
                              Đang lên kế hoạch
                            </span>
                          </p>
                        </th>
                        <th>
                          <div>
                            <span>
                              <span lang="dkhp-sisomax">Sĩ số tối đa</span>: 80
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="bold" lang="dkhp-chuacolichhoc">
                            Chưa có lịch học
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div id="EndLopHPChoDangKy" />
        </div>

        <div className="gr-table" id="box_monHocPhan_DaDangKy">
          <h3
            className="title-table"
            lang="dangkyhocphan-lhpdadangkytabletitle"
          >
            {" "}
            Lớp HP đã đăng ký trong học kỳ này{" "}
            <a
              href="javascript:;"
              className="btn btn-action"
              id="btn_InDDK"
              // onclick="PrintElem($('#id-hoc-phan-da-dk'))"
              style={{ right: 0 }}
            >
              <PrinterOutlined />
            </a>
          </h3>
          <div className="table-responsive">
            <table
              className="table-pointer table-custom table table-bordered text-center"
              width="100%"
              role="grid"
              id="dkHocPhan"
            >
              <thead>
                <tr role="row">
                  <th lang="dangkyhocphan-thaotac">Thao tác</th>
                  <th lang="dangkyhocphan-stt">STT</th>
                  <th lang="dangkyhocphan-dadangkymalhp">Mã lớp HP</th>
                  <th lang="dangkyhocphan-tenmh">Tên môn học/HP</th>
                  <th lang="dangkyhocphan-dadangkylopdukien">
                    Lớp học dự kiến
                  </th>
                  <th lang="dangkyhocphan-tc">TC</th>
                  <th lang="dangkyhocphan-nhomth">Nhóm TH</th>
                  <th lang="dangkyhocphan-hocphi">Học phí</th>
                  <th lang="dangkyhocphan-hannop">Hạn nộp</th>
                  <th lang="dangkyhocphan-thu">Thu</th>
                  <th lang="dangkyhocphan-trangthaidangky">Trạng thái ĐK</th>
                  <th lang="dangkyhocphan-ngaydangky">Ngày ĐK</th>
                  <th lang="dangkyhocphan-trangthailhp">TT lớp HP </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={6}
                    className="text-center bold"
                    style={{ fontSize: 16 }}
                  >
                    Tổng
                  </td>
                  <td className="text-center bold" style={{ fontSize: 16 }}>
                    9
                  </td>
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                  <td className="text-center bold" style={{ fontSize: 16 }} />
                </tr>
                <tr
                // onclick="SelectHocPhanDaDangKy(this);"
                >
                  <td>
                    <div
                      className="dropdown-thaotac"
                      // onclick="toggleDropdown(this)"
                    >
                      <i className="fa fa-bars dropbtn-thaotac" />
                      <div
                        className="dropdown-content-thaotac  style-3fPUk"
                        id="style-3fPUk"
                      >
                        <button
                          // onclick="XemChiTietLichHoc(this,'EHbuRMwZbLq-wqeg2E8Akg', 1);"
                          data-idlhpdk={8310760}
                          data-guid="6JkPUUEO3muNvIFDcg3NCw"
                          lang="dangkyhocphan-xem-button"
                        >
                          Xem lịch
                        </button>
                        <button
                          // onclick="HuyLopHocPhanDangKy(this,'6JkPUUEO3muNvIFDcg3NCw', '420300154901');"
                          data-idlhpdk={8310760}
                          data-guid="6JkPUUEO3muNvIFDcg3NCw"
                          lang="dangkyhocphan-huy-button"
                        >
                          Hủy đăng ký
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>420300154901</td>
                  <td className="text-left">Kiến trúc và Thiết kế phần mềm</td>
                  <td>DHKTPM16A</td>
                  <td>4</td>
                  <td>1</td>
                  <td className="text-right">
                    <span>3.010.000</span>
                  </td>
                  <td>15/12/2023</td>
                  <td>
                    <div>
                      <div className="check" />
                    </div>
                  </td>
                  <td>Đăng ký mới</td>
                  <td>27/10/2023</td>
                  <td>Đã khóa</td>
                </tr>
                <tr
                // onclick="SelectHocPhanDaDangKy(this);"
                >
                  <td>
                    <div
                      className="dropdown-thaotac"
                      // onclick="toggleDropdown(this)"
                    >
                      <i className="fa fa-bars dropbtn-thaotac" />
                      <div
                        className="dropdown-content-thaotac  style-GIDCe"
                        id="style-GIDCe"
                      >
                        <button
                          // onclick="XemChiTietLichHoc(this,'6AVsA6fLSVaZ5NofnHg-hw',);"
                          data-idlhpdk={8716393}
                          data-guid="B6SOzbOiXlXya2SaPZYBAw"
                          lang="dangkyhocphan-xem-button"
                        >
                          Xem lịch
                        </button>
                        <button
                          // onclick="HuyLopHocPhanDangKy(this,'B6SOzbOiXlXya2SaPZYBAw', '420300309801');"
                          data-idlhpdk={8716393}
                          data-guid="B6SOzbOiXlXya2SaPZYBAw"
                          lang="dangkyhocphan-huy-button"
                        >
                          Hủy đăng ký
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>420300309801</td>
                  <td className="text-left">Thực tập doanh nghiệp</td>
                  <td>DHCNTT15A HL</td>
                  <td>5</td>
                  <td />
                  <td className="text-right">
                    <span>3.300.000</span>
                  </td>
                  <td>15/12/2023</td>
                  <td>
                    <div>
                      <div className="check" />
                    </div>
                  </td>
                  <td>Đăng ký mới</td>
                  <td>30/11/2023</td>
                  <td>Đã khóa</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
          </div>

          {/* Đã đăng ký */}
          <div id="id-hoc-phan-da-dk" className="table-responsive style-BaPji">
            <table id="style-GNUgU" className="style-GNUgU">
              <tbody>
                <tr>
                  <td id="style-JQzta" className="style-JQzta">
                    <table id="style-VDjg8" className="style-VDjg8">
                      <tbody>
                        <tr>
                          <td id="style-fCIo3" className="style-fCIo3">
                            <img src={printericon} />
                          </td>
                          <td id="style-NQwvV" className="style-NQwvV">
                            <p id="style-wzcXi" className="style-wzcXi">
                              <span style={{ fontLanguageOverride: "en-US" }}>
                                <span style={{ unicodeBidi: "embed" }}>
                                  <span style={{ fontSize: "11.0pt" }}>
                                    <span>
                                      <span style={{ color: "black" }}>
                                        <span
                                          style={{
                                            fontLanguageOverride: "en-US",
                                          }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            <span
                                              style={{ fontStyle: "normal" }}
                                            >
                                              <span
                                                style={{
                                                  verticalAlign: "baseline",
                                                }}
                                              >
                                                BỘ CÔNG THƯƠNG
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                            <p id="style-Fdc24" className="style-Fdc24">
                              <span style={{ fontLanguageOverride: "en-US" }}>
                                <span style={{ unicodeBidi: "embed" }}>
                                  <span style={{ fontSize: "11.0pt" }}>
                                    <span>
                                      <span style={{ color: "black" }}>
                                        <span
                                          style={{
                                            fontLanguageOverride: "en-US",
                                          }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            <span
                                              style={{ fontStyle: "normal" }}
                                            >
                                              <span
                                                style={{
                                                  verticalAlign: "baseline",
                                                }}
                                              >
                                                TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP
                                                TP.HCM
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>{" "}
                            --------------------------
                          </td>
                          <td id="style-aKNP1" className="style-aKNP1" />
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-uppercase style-4o33B"
                    lang="dangkyhocphan-lhpdadangky"
                    id="style-4o33B"
                  >
                    {" "}
                    HP ĐÃ ĐĂNG KÝ{" "}
                  </td>
                </tr>
                <tr>
                  <td id="style-DJ9oD" className="style-DJ9oD">
                    {" "}
                    HK2 (2023-2024){" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: 10 }}>
                    <table id="style-P2MEe" className="style-P2MEe">
                      <tbody>
                        <tr>
                          <td id="style-lUPSq" className="style-lUPSq">
                            <span lang="dangkyhocphan-hovaten">Họ tên</span>:
                            Bùi Gia Đại
                          </td>
                          <td id="style-Y9aNc" className="style-Y9aNc">
                            <span lang="dangkyhocphan-masinhvien">
                              Mã sinh viên
                            </span>
                            : 20102181
                          </td>
                          <td id="style-itZU6" className="style-itZU6">
                            <span lang="dangkyhocphan-lophoc">Lớp học</span>:
                            DHKTPM16A{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: 10 }}>
                    <table
                      className="table-pointer table-custom table table-bordered text-center"
                      width="100%"
                      role="grid"
                      id="dkHocPhan"
                    >
                      <thead>
                        <tr role="row">
                          <th lang="dangkyhocphan-stt">STT</th>
                          <th lang="dangkyhocphan-dadangkymalhp">Mã lớp HP</th>
                          <th lang="dangkyhocphan-tenmh">Tên môn học/HP</th>
                          <th lang="dangkyhocphan-dadangkylopdukien">
                            Lớp học dự kiến
                          </th>
                          <th lang="dangkyhocphan-tc">TC</th>
                          <th lang="dangkyhocphan-nhomth">Nhóm TH</th>
                          <th lang="dangkyhocphan-hocphi">Học phí</th>
                          <th lang="dangkyhocphan-hannop">Hạn nộp</th>
                          <th lang="dangkyhocphan-thu">Thu</th>
                          <th lang="dangkyhocphan-trangthaidangky">
                            Trạng thái ĐK
                          </th>
                          <th lang="dangkyhocphan-ngaydangky">Ngày ĐK</th>
                          <th lang="dangkyhocphan-trangthailhp">
                            Trạng thái Lớp HP{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            colSpan={4}
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          >
                            Tổng
                          </td>
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          >
                            9
                          </td>
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                          <td
                            className="text-center bold"
                            style={{ fontSize: 16 }}
                          />
                        </tr>
                        <tr
                        // onclick="SelectHocPhanDaDangKy(this);"
                        >
                          <td>1</td>
                          <td>420300154901</td>
                          <td className="text-left">
                            Kiến trúc và Thiết kế phần mềm
                          </td>
                          <td>DHKTPM16A</td>
                          <td>4</td>
                          <td>1</td>
                          <td className="text-right">
                            <span>3.010.000</span>
                          </td>
                          <td>15/12/2023</td>
                          <td>
                            <div>
                              <div className="check" />
                            </div>
                          </td>
                          <td>Đăng ký mới</td>
                          <td>27/10/2023</td>
                          <td>Đã khóa</td>
                        </tr>
                        <tr
                        // onclick="SelectHocPhanDaDangKy(this);"
                        >
                          <td>2</td>
                          <td>420300309801</td>
                          <td className="text-left">Thực tập doanh nghiệp</td>
                          <td>DHCNTT15A HL</td>
                          <td>5</td>
                          <td />
                          <td className="text-right">
                            <span>3.300.000</span>
                          </td>
                          <td>15/12/2023</td>
                          <td>
                            <div>
                              <div className="check" />
                            </div>
                          </td>
                          <td>Đăng ký mới</td>
                          <td>30/11/2023</td>
                          <td>Đã khóa</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td id="style-XwUbx" className="style-XwUbx">
                    <table id="style-22zPW" className="style-22zPW">
                      <tbody>
                        <tr role="row">
                          <td
                            lang="dangkyhocphan-chukycovanht"
                            id="style-7JRCL"
                            className="style-7JRCL"
                          >
                            {" "}
                            CỐ VẤN HỌC TẬP
                            <br /> (Ký và ghi rõ họ tên)
                          </td>
                          <td
                            lang="dangkyhocphan-chukysinhvien"
                            id="style-7wlDK"
                            className="style-7wlDK"
                          >
                            {" "}
                            SINH VIÊN
                            <br /> (Ký và ghi rõ họ tên){" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterCourse;
