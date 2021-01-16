/**
 */
window.onload = function () {
    // Add your website URl
    var site_url = 'https://app-builder.spoonity.com/storage/microsite/prod/madegg/#/start';
    //Button Fix At Bootom
    var ButtonfixAtBottom = true;
    // Width Of Site
    var width = '766px'; // Default Width is 75%
    // Height Of Site
    var height = '900px'; // Default Width is 500pxs
    // Button Background Color
    var button_background_color = '#ac9456';
    // Button Background Color On Mouse Hover
    var button_background_hover_color = '#ac9456';
    // Button Text Color
    var button_text_color = '#ffffff';
    // Button Padding
    var button_padding = '20px';
    // Button Font Size
    var button_font_size = '14px';
    // Button Border Radius
    var button_border_radius = '0px';
    var css = document.createElement('style');
    css.type = 'text/css';
    var styles = '#c-order-button,#c-order-button:active,#c-order-button:hover{color:' + button_text_color + '!important;text-decoration:none!important}#c-order-button{display:inline-block;padding:' + button_padding + ';margin:2px;box-sizing:border-box;cursor:pointer;text-align:center;vertical-align:middle;font-family:Arial,sans-serif;font-size:' + button_font_size + ';font-weight:700;text-shadow:0 1px 0 rgba(0,0,0,.1);border-radius:' + button_border_radius + ';background-clip:padding-box;background-color:' + button_background_color + ';box-shadow:0 1px 0 rgba(0,0,0,.15);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0iaGF0MCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTEuNDIxMDg1NDcxNTIwMmUtMTQlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMCIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAuMSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjaGF0MCkiIC8+Cjwvc3ZnPg==);background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.1) 0,rgba(255,255,255,.1) 100%);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.1) 0,rgba(255,255,255,.1) 100%);background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.1) 0,rgba(255,255,255,.1) 100%);background-image:linear-gradient(bottom,rgba(0,0,0,.1) 0,rgba(255,255,255,.1) 100%);transition:background-color .4s ease-out}#c-order-button:hover{background-color:' + button_background_hover_color + '}';
    styles += '#c-order-modal{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}#c-order-modal-content{background-color:#fefefe;margin:100px auto;width:'+width+';position:relative}.c-order-modal-close>i{font-size:18px;}.c-order-modal-close{position:absolute;font-family:Arial,sans-serif;right:-88px;top:0;display:none;text-transform:uppercase;padding:5px 10px;border-radius:3px;background-clip:padding-box;background-color:rgba(0,0,0,.6);z-index:1051;color:#fff;font-size:14px;box-shadow:0 2px 10px rgba(0,0,0,.5);cursor:pointer;transition:background-color .3s ease-out}.c-order-modal-close:focus,.c-order-modal-close:hover{text-decoration:none;background-color:rgba(0,0,0,.9);cursor:pointer}#c-order-iframe{border:0;min-height:'+height+';width:100%;display:none}#c-order-loading-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}.c-order-loading{width:100px;height:100px;border-radius:50%;box-sizing:border-box;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:c-order-loading-spin 1s infinite linear;animation:c-order-loading-spin 1s infinite linear;transform-origin:50%}@keyframes c-order-loading-spin{100%{transform:rotate(360deg)}}@-webkit-keyframes c-order-loading-spin{100%{-webkit-transform:rotate(360deg)}}@media screen and (max-width:767px){#c-order-modal-content{width:100%;margin-top: 47px;margin-bottom-20px}.c-order-modal-close{right:0;top:-38px}#c-order-modal{background:none !important}.c-order-loading {border: 10px solid rgba(0,0,0,.2);border-top-color: #635d5d;}}';
    if(ButtonfixAtBottom){
        styles += '#c-order-button{position: fixed;bottom: 0;left: 15px;}';
    }
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css);
    var modalDiv = document.createElement('div');
    var modalContent = document.createElement('div');
    modalContent.id = "c-order-modal-content";
    modalDiv.id = "c-order-modal";
    document.body.appendChild(modalDiv);
    var modal = document.getElementById('c-order-modal');
    modal.appendChild(modalContent);
    modalContent = document.getElementById('c-order-modal-content');
    var closeButton = document.createElement('span');
    closeButton.className = 'c-order-modal-close';
    closeButton.innerHTML = 'CLOSE <i>&times;</i>';
    var cOrderLoadingWrapper = document.createElement('div');
    cOrderLoadingWrapper.id = 'c-order-loading-wrapper';
    var cOrderLoading = document.createElement('div');
    cOrderLoading.className = 'c-order-loading';
    modalContent.appendChild(closeButton);
    modal.appendChild(cOrderLoadingWrapper).appendChild(cOrderLoading);
    var btn = document.getElementById("c-order-button");
    var span = document.getElementsByClassName("c-order-modal-close")[0];
    var loadingWrapper = document.getElementById('c-order-loading-wrapper');
    btn.onclick = function () {
        if(screen.width < 768){
         window.location.href = site_url;
        }else {
            modal.style.display = "block";
            loadingWrapper.style.display = "block";
            var iframe = document.createElement('iframe');
            iframe.id = 'c-order-iframe';
            iframe.src = site_url;
            modalContent.appendChild(iframe);
            var iframeElement = document.getElementById('c-order-iframe');
            iframeElement.onload = function () {
                loadingWrapper.style.display = "none";
                iframeElement.style.display = "block";
                span.style.display = "block";
            }
        }
    };
    span.onclick = function () {
        var iframeElement = document.getElementById('c-order-iframe');
        iframeElement.remove();
        modal.style.display = "none";
        span.style.display = "none";
    };
};