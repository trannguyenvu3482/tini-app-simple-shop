Page({
  data: {
    items: [],
    loading: false,
  },
  onLoad(query) {
    this.setData({ loading: true });
    my.request({
      url: "https://tiki.vn/api/personalish/v1/blocks/listings?limit=48&include=advertisement&aggregations=2&trackity_id=c3057b26-99d3-7ccc-f644-bd698d1a6884&category=8322&page=1&urlKey=nha-sach-tiki",
      method: "GET",
      success: (res) => {
        this.setData({ items: res.data, loading: false });
      },
    });
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onTap() {
    console.log("Bấm ít thôi");
  },
});
