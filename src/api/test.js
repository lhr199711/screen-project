import service from "@/utils/request";

export function GetSms() {
  return service.request({
    url: "/horn/v1/modules/lx-web-config/prod?_lxsdk_rnd=1845b5dcf2b0",
    method: "get",
    data: {},
  });
}
