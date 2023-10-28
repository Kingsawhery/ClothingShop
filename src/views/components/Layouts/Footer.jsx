import "../../../../src/styles/scss/Footer/footer.css";
export function Footer() {
  return (
    <div className="main-footer" id="fter-content">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg">
            <div className="footer-col footer-content1">
              <h4 className="footer-title in">HỘ KINH DOANH TSUN</h4>
              <div className="footer-content">
                <p>
                  Giấy chứng nhận ĐKKD số 41O8035777 do UBND Bình Thạnh cấp lần
                  đầu ngày 28/02/2018 Địa chỉ:350 Điện Biên Phủ, phường 17, Hồ
                  Chí Minh Email: tsunsg@gmail.com Hotline: 093 407 6342
                </p>
                <div className="logo-footer">
                  <a
                    href="http://online.gov.vn/Home/WebDetails/109038?AspxAutoDetectCookieSupport=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://file.hstatic.net/1000321269/file/hexcmkulyhczmakrdo-i8c6l8vaiyqtm4w_003a610e882947d9a02d2766cc1ef8f5.png"
                      alt="Bộ Công Thương"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg">
            <div className="footer-col footer-block">
              <h4 className="footer-title in">Liên kết</h4>
              <div className="footer-content toggle-footer">
                <ul>
                  <li className="item">
                    <a
                      href="/pages/chinh-sach-bao-mat"
                      title="Chính sách bảo mật"
                    >
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="/pages/huong-dan-mua-hang-tai-web-tsun"
                      title="Hướng dẫn mua hàng"
                    >
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="/pages/chinh-sach-doi-tra-tai-tsun"
                      title="Chính sách đổi trả"
                    >
                      Chính sách đổi trả
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="/pages/huong-dan-thanh-toan"
                      title="Hướng dẫn thanh toán"
                    >
                      Hướng dẫn thanh toán
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="/pages/chinh-sach-van-chuyen"
                      title="Chính sách vận chuyển"
                    >
                      Chính sách vận chuyển
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="/pages/chinh-sach-kiem-hang"
                      title="Chính sách kiểm hàng"
                    >
                      Chính sách kiểm hàng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
            <div className="footer-col in">
              <h4 className="footer-title">Thông tin liên hệ</h4>
              <div className="footer-content footer-contact">
                <ul>
                  <li className="contact-1">
                    <span>
                      * FLAGSHIP STORE: 26 Trần Quang Diệu, phường 14, quận 3 *
                      G-TOWN: 350 Điện Biên Phủ, phường 17, quận Bình Thạnh *
                      G-TOWN 2: 136 Nguyễn Hồng Đào, phường 13, quận Tân Bình *
                      Đồng Nai: 47 Dương Tử Giang, phường Tân Tiến, TP. Biên Hoà
                    </span>
                  </li>
                  <li className="contact-2">
                    <span>093 407 6342</span>
                  </li>
                  <li className="contact-3">
                    <span></span>
                  </li>
                  <li className="contact-4">
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
            <div className="footer-col in">
              <h4 className="footer-title">Fanpage</h4>
              <div className="footer-content footer-contact">
                <div className="footer-static-content">
        
                    <span style={{ width: "268px", height: "130px" }}>
                      
                      
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61552540726424%26is_tour_dismissed%3Dtrue&amp;tabs=timeline&amp;width=340&amp;height=331&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                        width="340"
                        height="331px"
                        width="1000px"
                        height="300px"
                        style={{border: "none", visibility: "visible", width: "268px", height: "130px"}}
                        scrolling="no"
                        frameBorder="0"
                        allowtransparency="true"
                        allowFullScreen={true}
                        allow="encrypted-media"
                      ></iframe>
                    </span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
