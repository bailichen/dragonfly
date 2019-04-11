const userAgent = navigator.userAgent;

export default {
    ua: userAgent,
    isAndroidApp: /android_ck_app/.test(userAgent),
    isIosApp: window.webkit

}
