/** @build 202501240853 copyright (C) 2025 sebastien.mamy@gmail.com
 *  @license GNU General Public Licence v2 @disclaimer in no event shall the author be liable for any claim or damages. */



/** @const :string COLOR_BOTTOM @description default top color of pad and dock icons */
const COLOR_BOTTOM = "#B0B0B0"

/** @const :string COLOR_TOP @description default top color of pad and dock icons */
const COLOR_TOP = "#F0F0F0"

/* @const :array MONTH_NAME @description list of month name abbreviations */
const MONTH_NAME = ["janv.","febr.","mars","avri.","mai","juin","juil.","aout","sept.","octo.","nove.","dece."]

/** @const :string ICON_DEFAULT @description the base64 encoding of the default app icon */
const ICON_DEFAULT = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAM1BMVEUAAAD////KLDE/VF+Nr79DdodolqWz4e778LT3103YPyLtamWgJCKgJSTh4eGFhYX///94DJ2IAAAAEXRSTlP/////////////////////ACWtmWIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAaSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMiA3OS5iN2M2NGNjZjksIDIwMjQvMDcvMTYtMTI6Mzk6MDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlYmFhMjQ0LTI1NmEtNDMzOS04NmIwLTc5ZGNmZTdmMDM2MCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmOWIwMzUzLWQ4NjktNDdhZS1hNjA1LTUyODEwMTgxZjg5YiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowODowOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS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"

/** @const :string ICON_PAD @description the base64 encoding of the pad icon */
const ICON_PAD = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAM1BMVEUAAAD////KLDE/VF+Nr79DdodolqWz4e778LT3103YPyLtamWgJCKgJSTh4eGFhYX///94DJ2IAAAAEXRSTlP/////////////////////ACWtmWIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAaSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMiA3OS5iN2M2NGNjZjksIDIwMjQvMDcvMTYtMTI6Mzk6MDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlYmFhMjQ0LTI1NmEtNDMzOS04NmIwLTc5ZGNmZTdmMDM2MCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmOWIwMzUzLWQ4NjktNDdhZS1hNjA1LTUyODEwMTgxZjg5YiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowODowOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++lYhYgAABnxJREFUeNrt3dG2qiAQBuC9DC09uOP9n/ZUu1JxBgZEYHT+y1ZefA2pDFg/5rT5EbrQhS50oQtd6EIXutCFLnShC13oQhe60IUudKELXehCF7rQhS50oQtd6EIXutCFLnShC13ofDJMOQ99AHIC+oBEH5w+oNFaH5k+DOekD+7oEPsPU/i/V85Ct91ruj4kfQDgp6CD7jPQMTgoPxQdg4MnuQD7D1v4v+HY9AD4R34M+kAe60ejh5R8kh+BHgQPL3q9dKUCxnpM0WulK/WmE0t+HLr60Knww9CVetvJ8EnOmq4+oZf8IPSv/EqHz+R86RP8eqXLY4peG30uX9iH5EWvjL6UX4nwI9At+TVCzpNuw7/2YZeiV0QH5FcSPLLo9dAh+dM+HJ4Oy6/XQDk/Ogb/Tt92kNdBx+VHpzvkfnu0vAY6Ilff+dth6R65CpAzo/vkHnu8vDjd9TUn2DVbur/kbrtmSyfK1S5FL0qnylG75kqnyxH7NnlBeogctnOlu+S/z3jtG+XF6LD8w/7EaWdKx+S/dnD8VnkhOlm+xDvkXOiI/BcObN8sL0L3yC+fuAa9Zkl3yy/zoPYE8gJ09/f8YmVtV2zpYfK33b7Gp5Bnp7uv55cLza4Y0sPlIL1t283yzHRU7qBD9vaVbfK8dFyucDlAb7/hQu/ccjK9XcbUT+9AuvLSLxY9kTwvvcPkB6d3EF2F01PJ89E7iK7C6cnk2egdRFfh9HTyXPSum9mBNtxx6R1EV0T6/OKWUJ6F3jQQfXl/RqOnlO9Mb/6i1IKugKYz6Ua25UFvpqiJ3iFtdtr0Jal8D3pjRVHolElrWnlaegNmQXeX/TejPBm9QfMnI5bd0aBqK6Q3zigqHbTvKE9AJ8kJI16te7Lzhmxy+XY6rn61EZSil105liDSyzfTcfRSTiq7osproDvUMXRsuXEP+Ua6A23JqfalXu0o30Z3snG6x/7mo82JRPJN9CA5veyr7CPfQvfK9XKu0kXa2+roNPl8bh5H30seT/fLHfSuAnk0PUx+VbH2/eSxdILcTe+KyyPpFLkGGpCh9D3lcXSq3EXvSsuj6BQ4TA+zt9XRaXINN9wD7DvLI+hEOYHeFZWH06lyDa81kO27y4PpIXJwrYFo318eSifLNbbWQLNnkAfS6XKNlfN1vM+eQx5GD5Br3G3Zu0LyKLqOpX/lo3PQ55HH0HUkfepljUt6V0QeTtc6kj6XW/QFPpc8+DRHlRsU/pSPCrVnk4fSqXBzd8pHtbJ3ueW70B9vvN89cgXjM8pDb2lo8Id8bm9s+ahg+yWnPPwengB/ye8O+ahA+3OFMZ88ZtLqg//J7365hX8vr+aSx3VpnPC3/I7LR/CGflpbziOPbUvi8C/9TpF/8dZmigzyDUsQ2NMn9zndL/+zr/fQ7C7ftOa2hveP3Gd2SD4CN/fAxilTNf2Dn8Pn9DtV3rb54dt3VdjwGb0hyv/Oadnl6fbN9b1lh+UjPjnPLE9G7206Ub68hckpT0Tve5seJf/DG070hby/bZA/n1zjRF+4H6HKW1DOiW7BH4mWb3lYsSzdLR8pJWdFj5LjcEZ0tvLNdBtOkbvgR6HP5HcinA+dLP/M3z1uhnSC/JHWD2dDD5Ov8drV7WFF98pfMYSebvV0mnykyd+LWoYVPUxuMDkn+rLom+TT6jUrulv+nMjN5QaDN5oPHS36Un6b4UH5cpsKJ7pffvs0rQxAt58b4kBfFN0pv73fCcjXj0wxojvkt6V8RQcfkTsE/XZzFR15JtIwoNPla7rjGVi+dIe898i50a3TOyQPKjoHOnhlc8knenNAulNOG+986It5OgSnF50NHWhREOVuumFHv/nk/qIzo8+MVDl7er+iv/E3XO4pOmf6E4/ICcOdGf3mTh9e9IPQLbmhyOunA+PdfqW35cZ/jssrT0JfLbZC8qe9KnkUfQ61ttGs4JPc+G7kMstj6L0jqw9jdlxl8tT0HoUb/Je6ysgj6NFyU5c8nB4NN+6fKWNLNwQ4TC8mTzHgoReRY2uSb7q49djngR5ZkzzVzmiKG7CXlKfdFO5/W0Xy3P/7UsdlrQjd1CMvSS8sz//3VtXIy9H1+eimFnkpegXyEn9gWIm8KN2cjm7ejWlzSnoVEbrQhS50oQtd6EIXutCFLnShC13oQhe60IUudKELXehCF7rQhS50oQtd6EIXutCFLnShC13op8h/LneGBF7RYQEAAAAASUVORK5CYII="

/** @const :object PAD @description the json describing the behaviour of the pad */
const PAD = {
    id: "pad", 
    onclick: (event, app) => app?.webos?.openPad() || console.error("cannot call closePad of " + app.id,app),
    icon_src: ICON_PAD
}

/** @class WebOS @description WebOS class to manage the viewport with a window manager */
class WebOS {


    /** @property :object apps @description list of available apps */
    apps = {}

    /** @property :object dock @description the dock of the OS */
    dock = null

    /** @property :object options @description options of the OS {menu: booelan, dock: boolean, pad: boolean} */
    options = {menu: false, dock: false, pad: false, background: null}

    /** @property :array single_windows @description list of opened single windows */
    single_windows = []


    /** @return :WebOS created instance @param :string title the title of the window @param :object options {dock: boolean, pad: boolean, menu: boolean, background: string} the options of WebOS */
    constructor(options = {}) {
        this.options = {...this.options, ...options} 
        this.dock = document.getElementById("dock")?.children[0]
        if(this.options.background) document.body.style.backgroundImage = "url('"+ this.options.background + "')"
        const that = this
        if(this.options.pad) this.apps["pad"] = new App(PAD, this)
    }


    /** @return :WebOS current instance @description add apps to the OS @param :array apps [{id,root,url}] the apps to add to the OS */
    add(app) {
        this.apps[app.id] = new App(app)
        return this
    }

    /** @return :WebOS current instance @description close the pad */
    closePad() {
        if(this.pad) this.pad.classList.add("zoomOut")
        return this
    }

    /** @return :Element @description create and return a DOM element for the icon of the app @param :App app the app @param :number delay delay in ms of the onclick(event, webos) trigger (by default 0ms) */
    createAppIcon(app, delay = 0) {
        const that = this
        const icon = app.getIcon()
        icon.addEventListener("click", event => {
            that.closePad()
            setTimeout(() => app.onclick ? app.onclick(event, app) : that.open(app), delay)
        })
        return icon
    }

    /** @return :string the browser name @description return the name of the browser running the app */
    getBrowserName() {
        const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        const isFirefox = typeof InstallTrigger !== 'undefined';
        const isSafari = i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        const isIE = false || !!document.documentMode;
        const isEdge = !isIE && !!window.StyleMedia;
        const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
        const isBlink = (isChrome || isOpera) && !!window.CSS;
        return isOpera ? "opera" : isFirefox ? "firefox" : isSafari ? "safari" : isIE ? "ie" : isEdge ? "edge" : isChrome ? "chrome" : isEdgeChromium ? "edgechromium" : isBlink ? "blink" : "unknown"
    }

    /** @return :WebOS current instance @description open a window to run the app @param :object app the app to open */
    open(app) {
        if(!app) return this
        if(app.single) for(const window of this.single_windows) if(window.id === app.id) {
            window.winbox.show()
            window.winbox.focus()
            return this
        }

        let window = {
            winbox: WinBox({
                x: app.winbox.x || "center",
                y: app.winbox.y || "5%",
                width: app.winbox.width || "90%",
                height: app.winbox.height || "85%",
                title: app.title || app.id,
                background: "#00000000",
                url: app.url || app.getUrl(),
                overflow: true,
                maxwidth: app.winbox.maxwidth || "100%",
                maxheight: app.winbox.maxheight || "100%"
            }),
            id: app.id            
        }
        if(app.single) window.winbox.onclose = () => {
            window.winbox.hide()
            return true
        }
        if(app.single) this.single_windows.push(window)
        return this
    }

    /** @return :WebOS current instance @description render the Pad  */
    openPad() {
        if(this.pad) return this.pad.classList.remove("zoomOut") || this
        this.pad = document.createElement("div")
        const that = this
        this.pad.addEventListener("click", event => that.closePad())
        this.pad.classList.add("zoomOut")
        this.pad.classList.add("pad")
        for(const app_id in this.apps) if(app_id !== "pad") {
            const icon = this.createAppIcon(this.apps[app_id])
            icon.classList.add("pad_item")
            this.pad.appendChild(icon)
        }
        document.body.appendChild(this.pad)
        setTimeout(() => that.pad.classList.remove("zoomOut") , 5)
        return this
    }

    /** @return :WebOS current instance @description render the os */
    render() {
        if(this.options.menu) this.renderMenuBar()
        if(this.options.dock) this.renderDock()
        return this
    }

    /** @return :WebOS current instance @description render the dock */
    renderDock() {
        if(!this.apps || Object.values(this.apps).length === 0) return console.warn("cannot render dock, call WebOS.add to add apps to your WebOS.") || this
        if(!this.dock) {
            const dock_container = document.createElement("div")
            dock_container.classList.add("dock")
            document.body.appendChild(dock_container)
            this.dock = document.createElement("div")
            dock_container.appendChild(this.dock)
        }
        for(const app_id in this.apps) {
            const icon = this.createAppIcon(this.apps[app_id])
            icon.classList.add("dock_item")
            icon.id = app_id + "__dock" 
            this.dock.appendChild(icon)
        }
        return this
    }

    /** @return :WebOS current instance @description render the menubar, equivalent to the menu bar of a famous OS */
    renderMenuBar () {
        if(!this.menu) this.menu = document.createElement("div")
        document.body.appendChild(this.menu)
        this.menu.classList = "menu_bar"
        const date_element = document.createElement("div")
        date_element.id = "date_time"
        this.menu.appendChild(date_element)
        this.updateDateTime()
        return this
    }

    /** @return :WebOS current instance @description update the date and time displayed in the menubar */
    updateDateTime() {
        const that = this
        const date_time = document.getElementById("date_time")
        if(!date_time) return this
        date_time.innerHTML = new Date().getDate() + " " + MONTH_NAME[new Date().getMonth()] + " " + (""+new Date().getHours()).padStart(2, "0") + ":" + (""+new Date().getMinutes()).padStart(2, "0")
        setTimeout(() => that.updateDateTime(), 30000) 
        return this
    }

}



/** @class App @description App class to manage the viewport with a window manager */
class App {


    /* @property :string color_bottom @description CSS color of gradient bottom of the app icon */
    color_bottom = COLOR_BOTTOM

    /* @property :string color_top @description CSS color of the gradient top of the app icon */
    color_top = COLOR_TOP

    /* @property :string icon_src @description url to the file of the image to be used for the app icon */
    icon_src = ICON_DEFAULT

    /* @property :string id @description unique label used for the page access button */
    id = null

    /* @property :string root_path @description root path of the full URL to the HTML of the app (includes protocol, server and port) */
    root_path = null

    /* @property :function onclick @description function to be called when the app icon is clicked */
    onclick = null

    /* @property :boolean signle @description uflag for single or multiple windows app */
    single = false

    /* @property :string url @description url to the HTML entry point of the app */
    url = null

    /** @property :WebOS webos @description WebOS instance used to open the app */
    webos = null

    /** @property :object winbox @description options of the winbox of the app */
    winbox = {}


    /** @return :App created instance @param :options the options of the app */
    constructor(options = {}, webos) {
        this.color_top = options.color_top || this.color_top
        this.color_bottom = options.color_bottom || this.color_bottom
        this.icon_src = options.icon_src || this.icon_src
        this.id = options.id || this.id
        this.url = options.url || this.url
        this.root_path = options.root_path || this.root_path
        this.single = options.single || this.single
        this.winbox = options.winbox || this.winbox
        this.onclick = options.onclick || this.onclick
        this.webos = webos
    }

    /** @return :Element @description create and return a DOM element for the icon of the app */
    getIcon(app, delay = 0) {
        const icon = document.createElement("div")
        icon.innerHTML = "<img src='"+ this.icon_src + "'><span>" + this.id +"</span>"
        if(this.color_top && !this.color_bottom) icon.style.backgroundColor = this.color_top
        else if(this.color_top && this.color_bottom) icon.style.background = "linear-gradient(" + this.color_top + ", " + this.color_bottom+ ")"
        else icon.style.background = "linear-gradient(rgb(234,234,234), rgb(190,190,190))"
        return icon
    }

    /** @return :string @description return the full URL to the HTML of the app*/
    getUrl() {
        return this.root_path + this.url
    }

}

export {WebOS, App}