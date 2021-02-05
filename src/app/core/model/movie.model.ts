export interface Movie {
  // id: number;
  // name: string;
  // price: number;

  biDanh: string;
  danhGia: number;
  hinhAnh: string;
  maNhom: string;
  maPhim: number;
  moTa: string;
  ngayKhoiChieu: Date;
  tenPhim: string;
  trailer: string;
}

export interface MovieDetail {
  lichChieu: LichChieu[];
}

export interface LichChieu {
  thongTinRap:       ThongTinRap;
  maLichChieu:       number;
  maRap:             number;
  maPhim:            number;
  tenPhim:           string;
  ngayChieuGioChieu: Date;
  giaVe:             number;
  thoiLuong:         number;
}

export interface ThongTinRap {
  maRap:         number;
  tenRap:        string;
  maCumRap:      string;
  tenCumRap:     string;
  maHeThongRap:  string;
  tenHeThongRap: string;
}
  