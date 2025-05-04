/** @build 202501240853 copyright (C) 2025 sebastien.mamy@gmail.com
 *  @license GNU General Public Licence v2 @disclaimer in no event shall the author be liable for any claim or damages. */



/** @const :string LOCALE @description the locale to use for date and time */
const LOCALE = "en-US"

/** @const :string COLOR_BOTTOM @description default top color of pad and dock icons */
const COLOR_BOTTOM = "#B0B0B0"

/** @const :string COLOR_TOP @description default top color of pad and dock icons */
const COLOR_TOP = "#F0F0F0"

/** @const :boolean @description toggle the debug mode */
const LEVEL = "debug"

/* @const :array MONTH_NAME @description list of month name abbreviations */
const MONTH_NAME = ["janv.","febr.","mars","avri.","mai","juin","juil.","aout","sept.","octo.","nove.","dece."]

/* @const :string MONTH_NAME_FULL @description list of month names */
const MONTH_NAME_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"]

/** @const :string ICON_DEFAULT @description the base64 encoding of the default app icon */
const ICON_DEFAULT = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAM1BMVEUAAAD////KLDE/VF+Nr79DdodolqWz4e778LT3103YPyLtamWgJCKgJSTh4eGFhYX///94DJ2IAAAAEXRSTlP/////////////////////ACWtmWIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAaSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMiA3OS5iN2M2NGNjZjksIDIwMjQvMDcvMTYtMTI6Mzk6MDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlYmFhMjQ0LTI1NmEtNDMzOS04NmIwLTc5ZGNmZTdmMDM2MCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmOWIwMzUzLWQ4NjktNDdhZS1hNjA1LTUyODEwMTgxZjg5YiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowODowOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++lYhYgAABnxJREFUeNrt3dG2qiAQBuC9DC09uOP9n/ZUu1JxBgZEYHT+y1ZefA2pDFg/5rT5EbrQhS50oQtd6EIXutCFLnShC13oQhe60IUudKELXehCF7rQhS50oQtd6EIXutCFLnShC13ofDJMOQ99AHIC+oBEH5w+oNFaH5k+DOekD+7oEPsPU/i/V85Ct91ruj4kfQDgp6CD7jPQMTgoPxQdg4MnuQD7D1v4v+HY9AD4R34M+kAe60ejh5R8kh+BHgQPL3q9dKUCxnpM0WulK/WmE0t+HLr60Knww9CVetvJ8EnOmq4+oZf8IPSv/EqHz+R86RP8eqXLY4peG30uX9iH5EWvjL6UX4nwI9At+TVCzpNuw7/2YZeiV0QH5FcSPLLo9dAh+dM+HJ4Oy6/XQDk/Ogb/Tt92kNdBx+VHpzvkfnu0vAY6Ilff+dth6R65CpAzo/vkHnu8vDjd9TUn2DVbur/kbrtmSyfK1S5FL0qnylG75kqnyxH7NnlBeogctnOlu+S/z3jtG+XF6LD8w/7EaWdKx+S/dnD8VnkhOlm+xDvkXOiI/BcObN8sL0L3yC+fuAa9Zkl3yy/zoPYE8gJ09/f8YmVtV2zpYfK33b7Gp5Bnp7uv55cLza4Y0sPlIL1t283yzHRU7qBD9vaVbfK8dFyucDlAb7/hQu/ccjK9XcbUT+9AuvLSLxY9kTwvvcPkB6d3EF2F01PJ89E7iK7C6cnk2egdRFfh9HTyXPSum9mBNtxx6R1EV0T6/OKWUJ6F3jQQfXl/RqOnlO9Mb/6i1IKugKYz6Ua25UFvpqiJ3iFtdtr0Jal8D3pjRVHolElrWnlaegNmQXeX/TejPBm9QfMnI5bd0aBqK6Q3zigqHbTvKE9AJ8kJI16te7Lzhmxy+XY6rn61EZSil105liDSyzfTcfRSTiq7osproDvUMXRsuXEP+Ua6A23JqfalXu0o30Z3snG6x/7mo82JRPJN9CA5veyr7CPfQvfK9XKu0kXa2+roNPl8bh5H30seT/fLHfSuAnk0PUx+VbH2/eSxdILcTe+KyyPpFLkGGpCh9D3lcXSq3EXvSsuj6BQ4TA+zt9XRaXINN9wD7DvLI+hEOYHeFZWH06lyDa81kO27y4PpIXJwrYFo318eSifLNbbWQLNnkAfS6XKNlfN1vM+eQx5GD5Br3G3Zu0LyKLqOpX/lo3PQ55HH0HUkfepljUt6V0QeTtc6kj6XW/QFPpc8+DRHlRsU/pSPCrVnk4fSqXBzd8pHtbJ3ueW70B9vvN89cgXjM8pDb2lo8Id8bm9s+ahg+yWnPPwengB/ye8O+ahA+3OFMZ88ZtLqg//J7365hX8vr+aSx3VpnPC3/I7LR/CGflpbziOPbUvi8C/9TpF/8dZmigzyDUsQ2NMn9zndL/+zr/fQ7C7ftOa2hveP3Gd2SD4CN/fAxilTNf2Dn8Pn9DtV3rb54dt3VdjwGb0hyv/Oadnl6fbN9b1lh+UjPjnPLE9G7206Ub68hckpT0Tve5seJf/DG070hby/bZA/n1zjRF+4H6HKW1DOiW7BH4mWb3lYsSzdLR8pJWdFj5LjcEZ0tvLNdBtOkbvgR6HP5HcinA+dLP/M3z1uhnSC/JHWD2dDD5Ov8drV7WFF98pfMYSebvV0mnykyd+LWoYVPUxuMDkn+rLom+TT6jUrulv+nMjN5QaDN5oPHS36Un6b4UH5cpsKJ7pffvs0rQxAt58b4kBfFN0pv73fCcjXj0wxojvkt6V8RQcfkTsE/XZzFR15JtIwoNPla7rjGVi+dIe898i50a3TOyQPKjoHOnhlc8knenNAulNOG+986It5OgSnF50NHWhREOVuumFHv/nk/qIzo8+MVDl7er+iv/E3XO4pOmf6E4/ICcOdGf3mTh9e9IPQLbmhyOunA+PdfqW35cZ/jssrT0JfLbZC8qe9KnkUfQ61ttGs4JPc+G7kMstj6L0jqw9jdlxl8tT0HoUb/Je6ysgj6NFyU5c8nB4NN+6fKWNLNwQ4TC8mTzHgoReRY2uSb7q49djngR5ZkzzVzmiKG7CXlKfdFO5/W0Xy3P/7UsdlrQjd1CMvSS8sz//3VtXIy9H1+eimFnkpegXyEn9gWIm8KN2cjm7ejWlzSnoVEbrQhS50oQtd6EIXutCFLnShC13oQhe60IUudKELXehCF7rQhS50oQtd6EIXutCFLnShC13op8h/LneGBF7RYQEAAAAASUVORK5CYII="




/** @const :function @return :undefined @description display the message on the console depening on the DEBUG flag @param :array parameters to pass to the console.log function */
const debug = (message, context) => {
    let trace = (new Error()).stack.split("\n")
    trace.shift()
    trace = trace.map(e => e?.trim().split("(")[1]?.slice(0,-1) || e?.trim().replaceAll("at ",""))
    const date = new Date().toISOString().replaceAll("T", " ").replaceAll("Z","")
    return LEVEL === "debug" ? console.log( date+" "+LEVEL.toUpperCase() + " [" + trace[2] + "] " + message,{level: LEVEL,date,trace,message,context}) : null
}

/** @const :function @return :string the browser name @description return the name of the browser running the app */
const browserName = () => {
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

/** @const :function @return :undefined @description return all the inputs element of a Element @param :Element the Element the inputs will be gathered from */
const setHtml = (id, html) => {
    const el = document.getElementById(id)
    if(el) el.innerHTML = html
}

/** @const :function @return :array array of {id,value} @description return all the inputs element of a Element @param :Element the Element the inputs will be gathered from */
const inputs = element => {
    return Array.from(element.querySelectorAll("input")).map(element => ({id : element.id, value: element.value}))
}

/** @const :function @return :Element @description return the DOM element identified by id @param :string the id of the element */
const element = id => document.getElementById(id)


/** @const :function @return :undefined @descrition add an event listener on click to the Element id @param :string id of the Element @param :function function to call on event */
const click = (id, listener) => {
    debug("click method",{id, listener})
    console.log(element(id))
    return element(id)?.addEventListener("click",listener)
}



/** @global :Authenticator Auth @description the single Authenticator instance for the current session */
let Auth = null


/** @class Validator @description provides a set of static input validators */
class Validator {

    /** @static @return :boolean @description check the validity of the email @param :Element the element that triggered the validation */
    static email(target) {
        const valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(target.value)
        return Validator.updateInput(target, valid)
    }

    /** @static @return :boolean @description check the validity of the code @param :string value the code to check */
    static code(event) {
        console.log("I have been keyup", event)
        const value = event.target.value
        return Validator.updateInput(event.target, value && (""+value).length === 6 && parseInt(value,10) !== NaN)
    }

    /** @static @return :boolean @description check the validity of the password @param :string value of the password */
    static password(event) {
        const password = event.target.value
        return Validator.updateInput(event.target, password && password.length >= 8)
    }

    /** @return :boolean valid @description update the input still according to valid @param :Element target the input that triggered the validation @param :boolean valid the result of the validation */
    static updateInput(target, valid) {
        if(!valid) target.classList.remove("valid") || target.classList.add("error")
        if(valid) target.classList.remove("error") || target.classList.add("valid")
        return valid
    }
}


/** @return :object WebOS @description initializes the WebOS @param :object options {login, dock, pad, menu, background, backgroundImage, support_email, terms, auth_wrapper} the options of WebOS */
const WebOS =  (options = {}) => {
    if(WebOS.init) return ErrorHandler(null, "WebOS is already instantiated. WebOS() can only be called once.")
    WebOS.idb = new AsyncIndexedDB("WebOS", async (db) => db.createObjectStore("authentication", {keyPath: "id", autoIncrement: true}).createIndex("emailIndex", "email", {unique: true}))
    WebOS.init = true
    Auth = new Authenticator(options.auth_wrapper)
    delete options.auth_wrapper
    WebOS.terms = {...options.terms}
    delete options.terms
    WebOS.options = {...WebOS.options, ...options} 
    if(WebOS.options.backgroundImage) document.body.style.backgroundImage = "url('"+ WebOS.options.backgroundImage + "')"
    if(WebOS.options.background) document.body.style.background = "url('"+ WebOS.options.background + "')"
    if(WebOS.options.pad) WebOS.apps["pad"] = App.Pad()
    debug("WebOS initialized", {WebOS: WebOS.properties()})
    return WebOS
}

/** @property :object options @description options of the OS {menu: booelan, dock: boolean, pad: boolean} */
WebOS.options = {login: false,menu: false, dock: false, pad: false, background: null, backgroundImage: null, support_email: ""}

/** @property :object apps @description list of available apps */
WebOS.apps = {}

/** @property :object dock @description the dock of the OS */
WebOS.dock = null

/** @property :Element login @description the login div of the OS */
WebOS.login_mode = "auto"

/** @property :object session @description description of the current session */
WebOS.session = {valid: false}

/** @property :object terms @description object with the terms options {firm, juridiction, photo_credits, photo_credits_url, show} */
WebOS.terms = {
    firm: "Ocean Solutions SAS",
    juridiction: "France",
    photo_credits: "Sébastien Jean Mamy",
    photo_credits_url: "https://sebastien-mamy.fr",
    show: false
}

/** @return :object WebOS @description add apps to the OS @param :object app_options {} the app options to use when instanciate the new App */
WebOS.add = app_options => {
    WebOS.apps[app_options.id] = new App(app_options)
    return WebOS
}

WebOS.loginModeAuto = async (email, pass) => {
    debug("calling loginModeAuto", {email, pass})

    // case 1: idb exists
    if(WebOS.idb) {        
        await WebOS.idb.open()
        let existing_email = null, existing_pass = null
        for(const row of JSON.parse(await WebOS.idb.export()).filter(value => value[0] === "authentication")) {
            existing_email = row[0]?.email
            existing_pass = row[0]?.pass
            if(existing_email && existing_pass) break
        }
        debug("calling loginModeAuto, with idb, checking idb stored credentatial", {existing_email, existing_pass}) 
        WebOS.login_mode = existing_email && existing_pass ? "login" : "form"
        WebOS.autoLogin(existing_email, existing_pass)
    } 
    // case 2: idb does not exist
    if(!WebOS.idb) {
        debug("calling loginModeAuto, without idb: redirecting to form")
        WebOS.login_mode = "form"
        WebOS.autoLogin(email, pass)
    }
} 


WebOS.loginModeForm = async (email, pass) => {
    document.getElementById("__email")?.classList.remove("hidden")
    document.getElementById("__password")?.classList.remove("hidden")
    if(email) document.getElementById("__email").value = email
    WebOS.login_mode = "login"
} 


WebOS.loginModeLogin = async (email, pass) => {
    debug("starting login", {WebOS: WebOS.properties(), email, pass})
    // 1. check email
    // 2. check password
    // 3. call login API
        // case 3.a: 400 (no email) => redirect to mode form
        // case 3.b: 404 (email not found) => redirect to mode form with email prefilled and email not found message
        // case 3.c: 401 (wrong pass or no pass) => redirect to mode form with email prefilled and error message
        // case 3.d: 403 (correct pass but email not verified) => request email confirmation and redirect to mode "verify"
        // case 3.e: 429 (too many attemps of failed login) => redirect to mode reset password
        // case 3.f: 200 (OK) => redirect to home
} 

/** @return :object WebOS @description manage the login @param :string mode the login mode (auto, form) @param :string email email address @param :string pass SHA512 encoded password */
WebOS.autoLogin = async (email = null, pass = null) => {
    
    if(WebOS.login_mode === "auto") await WebOS.loginModeAuto(email, pass)
    else if(WebOS.login_mode === "form") await WebOS.loginModeForm(email, pass)
    else if(WebOS.login_mode === "login") await WebOS.loginModeLogin(email, pass)
    else if(WebOS.login_mode === "reset") await WebOS.loginModeReset(email)
    else if(WebOS.login_mode === "confirm") await WebOS.loginModeConfirm(email)
    else console.error("cannot login with unknown mode", {WebOS: WebOS.properties()})
    
    return WebOS
}

/** @return :object WebOS @description close the pad */
WebOS.closePad = () => {
    if(WebOS.pad) WebOS.pad.classList.add("zoomOut")
    return WebOS
}

/** @return :Element @description create and return a DOM element for the icon of the app @param :App app the app @param :number delay delay in ms of the onclick(event, webos) trigger (by default 0ms) */
WebOS.createAppIcon = (app, delay = 0) => {
    const icon = app.getIcon(delay)
    icon.addEventListener("click", event => {
        WebOS.closePad()
        setTimeout(() => app.onclick ? app.onclick(event, app) : app.open(), delay)
    })
    return icon
}

/** @return :object WebOS @description render the Pad  */
WebOS.openPad = () => {
    if(WebOS.pad) return WebOS.pad.classList.remove("zoomOut") || WebOS
    WebOS.pad = document.createElement("div")
    WebOS.pad.id = "__pad"
    WebOS.pad.classList.add("zoomOut")
    WebOS.pad.classList.add("pad")
    for(const app_id in WebOS.apps) if(app_id !== "pad") {
        const icon = WebOS.createAppIcon(WebOS.apps[app_id])
        icon.classList.add("pad_item")
        WebOS.pad.appendChild(icon)
    }
    document.body.appendChild(WebOS.pad)
    click(WebOS.pad.id, event => WebOS.closePad())
    setTimeout(() => WebOS.pad.classList.remove("zoomOut") , 5)
    return WebOS
}

/** @return :object @description return all the non-function properties of WebOS */
WebOS.properties = () => Object.keys(WebOS).reduce((result, key) => typeof WebOS[key] !== "function" ? {...result, [key]: WebOS[key]} : result, {})

/** @return :object WebOS @description render the os */
WebOS.render = () => {
    if(WebOS.options.login && !WebOS.session.valid) return WebOS.renderLogin()
    if(WebOS.options.menu) WebOS.renderMenuBar()
    if(WebOS.options.dock) WebOS.renderDock()
    return WebOS
}

/** @return :object WebOS @description render the dock */
WebOS.renderDock = () => {
    if(!WebOS.apps || Object.values(WebOS.apps).length === 0) return console.warn("cannot render dock, call WebOS.add to add apps to your WebOS.") || WebOS
    if(!WebOS.dock) {
        const dock_container = document.createElement("div")
        dock_container.classList.add("dock")
        document.body.appendChild(dock_container)
        WebOS.dock = document.createElement("div")
        dock_container.appendChild(WebOS.dock)
    }
    for(const app_id in WebOS.apps) {
        const icon = WebOS.createAppIcon(WebOS.apps[app_id])
        icon.classList.add("dock_item")
        icon.id = app_id + "__dock" 
        WebOS.dock.appendChild(icon)
    }
    return WebOS
}

/** @return :object WebOS @description render the login screen */
WebOS.renderLogin = () => {
    if(document.getElementById("__login")) return WebOS
    document.body.innerHTML = Template.login()
    WebOS.updateDateTime("login", "__date_time")
    return WebOS
}

/** @return :object WebOS @description render the menubar, equivalent to the menu bar of a famous OS */
WebOS.renderMenuBar = () => {
    if(!WebOS.menu) WebOS.menu = document.createElement("div")
    document.body.appendChild(WebOS.menu)
    WebOS.menu.classList = "menu_bar"
    const date_element = document.createElement("div")
    date_element.id = "date_time"
    WebOS.menu.appendChild(date_element)
    WebOS.updateDateTime()
    return WebOS
}

/** @return :object WebOS @description update the date and time displayed in the menubar */
WebOS.updateDateTime = (mode = "home", element_id = null) => {
    const date_time = document.getElementById(element_id || "date_time")
    if(!date_time) return WebOS
    if(mode === "home") 
        date_time.innerHTML = new Date().getDate() + " " + MONTH_NAME[new Date().getMonth()] + " " + (""+new Date().getHours()).padStart(2, "0") + ":" + (""+new Date().getMinutes()).padStart(2, "0")
    if(mode === "login") {
        setHtml("date_time_date", new Date().toLocaleDateString(LOCALE, { weekday: 'long' }) +", " + MONTH_NAME_FULL[new Date().getMonth()] + " " + new Date().getDate())
        setHtml("date_time_time",(""+new Date().getHours()).padStart(2, "0") + ":" + (""+new Date().getMinutes()).padStart(2, "0") + ":" + (""+new Date().getSeconds()).padStart(2, "0"))
    }
    setTimeout(() => WebOS.updateDateTime(mode, element_id), 1000) 
    return WebOS
}

// #endregion 

/** @class App @description class to manage information about app that can be launched by the user */
class App {

    /** @static @return :App the created app @param :string html the innerHTML of the modal @param :object winbox_options the options to use with winbox */
    static Modal = (html, winbox_options = {}) => new App({
        id: "modal",
        html,
        winbox_options: {modal: true, ...winbox_options}
    })


    /** @static @return :App the created Pad @description the json describing the pad app */
    static Pad = () => new App({
        id: "pad", 
        onclick: (event) => WebOS.openPad() || console.error("cannot call closePad of " + app.id,app),
        icon_src: "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAM1BMVEUAAAD////KLDE/VF+Nr79DdodolqWz4e778LT3103YPyLtamWgJCKgJSTh4eGFhYX///94DJ2IAAAAEXRSTlP/////////////////////ACWtmWIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAaSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMiA3OS5iN2M2NGNjZjksIDIwMjQvMDcvMTYtMTI6Mzk6MDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTZUMTA6MDg6MDgrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZWJhYTI0NC0yNTZhLTQzMzktODZiMC03OWRjZmU3ZjAzNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlYmFhMjQ0LTI1NmEtNDMzOS04NmIwLTc5ZGNmZTdmMDM2MCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQwOToxNDo0MiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmOWIwMzUzLWQ4NjktNDdhZS1hNjA1LTUyODEwMTgxZjg5YiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyYmIzMTcyLTU1ZjctNDVjYy04ZmJlLWQ1MTBmNGM1MjQ0MSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xNlQxMDowODowOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS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"
    })

    /** @static @return :App the created Terms @description the json describing the Terms and Condition app*/
    static Terms = () => new App({
        title: "Terms and Conditions",
        winbox_options: {
            modal:true
        },
        html: Template.terms()
    })


    /* @property :string color_bottom @description CSS color of gradient bottom of the app icon */
    color_bottom = COLOR_BOTTOM

    /* @property :string color_top @description CSS color of the gradient top of the app icon */
    color_top = COLOR_TOP

    /* @property :string icon_src @description url to the file of the image to be used for the app icon */
    icon_src = ICON_DEFAULT

    /* @property :string id @description unique label used for the page access button */
    id = null

    /* @property :object methods @description all the methods that can be triggered by Element event */
    methods = null

    /* @property :string root_path @description root path of the full URL to the HTML of the app (includes protocol, server and port) */
    root_path = null

    /* @property :function onclick @description function to be called when the app icon is clicked */
    onclick = null

    /* @property :boolean signle @description uflag for single or multiple windows app */
    single = false

    /* @property :string url @description url to the HTML entry point of the app */
    url = null

    /** @property :object winbox @description options of the winbox of the app */
    winbox_options = {
        x: "center",
        y: "5%",
        width: "90%",
        height: "85%",
        background: "#00000000",
        overflow: true,
        maxwidth: "100%",
        maxheight: "100%"
    }

    /** @property :object winboxes @description instances of winbox running the app */
    winboxes = {}


    /** @return :App created instance @param :options the options of the app */
    constructor(options = {}) {
        this.color_top = options.color_top || this.color_top
        this.color_bottom = options.color_bottom || this.color_bottom
        this.icon_src = options.icon_src || this.icon_src
        this.id = options.id || this.id
        this.title = options.title || this.id
        this.url = options.url || this.url
        this.root_path = options.root_path || this.root_path
        this.single = options.single || this.single
        this.html = options.html
        this.winbox_options = {...this.winbox_options, ...options.winbox_options}
        this.winbox_options.title = this.title
        if(options.url) this.winbox_options.url = options.url
        else if(options.html) this.winbox_options.html = options.html
        this.methods = {...this.methods, ...(options.methods || {})}        
        this.onclick = options.onclick || this.onclick
    }

    /** @return :Element @description create and return a DOM element for the icon of the app */
    getIcon() {
        const icon = document.createElement("div")
        icon.innerHTML = "<img src='"+ this.icon_src + "'><span>" + this.id +"</span>"
        if(this.color_top && !this.color_bottom) icon.style.backgroundColor = this.color_top
        else if(this.color_top && this.color_bottom) icon.style.background = "linear-gradient(" + this.color_top + ", " + this.color_bottom+ ")"
        else icon.style.background = "linear-gradient(rgb(234,234,234), rgb(190,190,190))"
        return icon
    }

    // /** @return :string @description return the full URL to the HTML of the app */
    // getUrl() {
    //     return this.root_path + this.url
    // }

    /** @return :App current instance @description opens a winbox created from the app winbox_options */
    open() {   
        if(this.single && Object.keys(this.winboxes).length > 0) {
            const winbox = Object.values(this.winboxes)[0]
            winbox.show()
            winbox.focus()
            return this
        }
        
        const winbox = new WinBox(this.winbox_options)
        winbox.onclose = () => {
            if(this.methods.onclose) this.methods.onclose(inputs(winbox.window))
            if(this.single) {
                winbox.hide()
                return true
            } 
            if(!this.single) {
                delete this.winboxes[winbox.id]
            }
        }
        this.winboxes[winbox.id] = winbox
        return this
    }

}


/** @class Authenticator @description all authentication related fonction and interaction */
class Authenticator {

    /** @property :string state @description the state of the login ["auto","login","signin","confirm","reset","authentified"] */
    state = null
    
    /** @property :object wrapper @description the wrapper to the authenticatio provider */
    wrapper = null


    /** @return :Auth @description the created instance @param :object wrapper the authentication methods wrapper */
    constructor(wrapper) {
        if(!WebOS.init) return ErrorHandler(null, "cannot create an Auth instance if WebOS has not been initialized. Please call WebOS({otions}) first.")
        if(Auth) return ErrorHandler(null, "Authenticator is already instantiated. new Authenticator() can only be called once.")
        this.wrapper = wrapper
        this.status = "auto"
    }


    /** @return :object @description call the wrapper login methods and update @param :string email the user email @param :string password the user password */
    async login(email, password) {
        // TODO: if email and password exists in the indexdb, use them
        const response = await this.wrapper.login(email, password)
        
        if(response.status === 401) return webos.message("Empty username or password","error", response)
        if(response.status === 403) return webos.message("Invalid username or password","warning", response)
        if(response.status === 423) return webos.message("Email not verified","warning", response)
        if(response.status === 429) return webos.message("Too many wrong passwords: your account is blocked. Please contact " + webos.options.support_email,"warning", response)
        if(!response.ok) return webos.message("Unknown error: report to " + webos.options.support_email + ", see details in console","error", response)
        
        return {email, ...response.body, status: response.status}
    }


    /** @return :object @description call the signin wrapper @param :string email the user email @param :string password the user password */
    async signin(email, password) {
        const response = await this.wrapper.signin(email, password)
        
        if(response.status === 401) return webos.message("Empty username or password","error", response)
        if(response.status === 409) return webos.message("Email already in use","error", response)
        if(!response.ok) return webos.message("Unknown error: please report to " + webos.options.support_email + ", with the error details in the console","error", response)
        
        this.wrapper.requestEmailValidation()

        return {email, message: "account created", status: response.status}
    }


    /** @return :object @description call the password recovery wrapper method (to request a password reset link) @param :string email the email address of the user */
    async recovery(email) {
        const response = await this.wrapper.reset(email)

        if(response.status === 401) return webos.message("Missing parameter: " + response.message + ".","warning", response)
        if(response.status === 403) return webos.message("The reset password cannot be done: " + response.message + ".","warning", response)
        if(!response.ok && response.status !== 404) return webos.message("Unknown error: please report to " + webos.options.support_email + ", with the error details in the console","error", response)
        
        return {email, message: "If an account is registered, a password reset link with be sent to " + email, status: response.status}
    }


    /** @return :object @description call the reset wrapper (to reset a passowrd) @param :string email the user email @param :string password the user password */
    async reset(email, password) {
        const response = await this.wrapper.signin(email, password)
        
        if(response.status === 401) return webos.message("Empty username or password","error", response)
        if(!response.ok) return webos.message("Unknown error: please report to " + webos.options.support_email + ", with the error details in the console","error", response)
        
        return {email, message: "password udpated", status: response.status}
    }


    /** @return :object @description call the check email verification code wrapper @param :string email the user email @param :string code the email verification code */
    async verify(email, code) {

        const response = await this.wrapper.verify(email, code)
        
        if(response.status === 401) return webos.message("Empty email or code","error", response)
        if(response.status === 403) return webos.message("Invalid code, please try again or click on \"send the code again\"","error", response)
        if(response.status === 409) return webos.message("Email already verified, you can log-in","warning", response)
        if(response.status === 429) return webos.message("Too many code attempts, please click on \"send the code again\"","error", response)
        if(response.status === 404) return webos.message("Email not found","error", response)
        if(!response.ok) return webos.message("Unknown error: please report to " + webos.options.support_email + ", with the error details in the console","error", response)
        
        return {email, message: "email verified", status: response.status}
    }



}


/** @class Template @description HTML template generator used for webos */
class Template {

    /** @return :Template @description create the login screen HTML @param :Element parent the parent to add the template to @param :function login_callback the login method */
    static login() {
        return `
            <form>
            <div id="__login">
                <div id="__date_time">
                    <div id="date_time_date">${new Date().toLocaleDateString(LOCALE, { weekday: 'long' }) +", " + MONTH_NAME_FULL[new Date().getMonth()] + " " + new Date().getDate()}</div>
                    <div id="date_time_time">${(""+new Date().getHours()).padStart(2, "0") + ":" + (""+new Date().getMinutes()).padStart(2, "0")+ ":" + (""+new Date().getSeconds()).padStart(2, "0")}</div>
                </div>

                <div id="__email" class="input hidden">
                    <div id="__email_label">Email<sup>*</sup></div>
                    <input id="__email_value" type="text" onkeyup="Validator.email(this)" autocomplete="one-time-code"></input>
                </div>

                <div id="__password" class="input hidden">
                    <div id="__password_label">Password<sup>*</sup></div>
                    <input id="__password_value" type="password" onKeyUp="Validator.password" autocomplete="one-time-code"></input>
                </div>

                <div id="__code" class="input hidden">
                    <div id="__code_label">Confirmation Code<sup>*</sup></div>
                    <input id="__code_value" type="text" onKeyUp="Validator.code" autocomplete="one-time-code"></input>
                </div>

                <div class="auth" onclick="WebOS.autoLogin()">
                    <div id="__auth_button">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAdiAAAHYgE4epnbAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjY2Y5LCAyMDI0LzA3LzE2LTEyOjM5OjA0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjYuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDEtMzBUMDk6NTE6MTErMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTAxLTMwVDA5OjUxOjUyKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTAxLTMwVDA5OjUxOjUyKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzExMjk5Yi1iNTQ1LTRhODktYmMzOS1hM2YzMmE1N2NlYjQiIHhtcE1NOkRvY3VtZW50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">
                    </div>
                </div>
                <div id="__terms" onclick="App.Terms().open()">
                    Terms and Conditions
                </div>
            </div>
            </form>
        `        
        // document.body.innerHTML += html
        // WebOS.updateDateTime("login", "__date_time")
        // return Template
    }

    /** @return :Template @description create the login date time HTML */
    

    /** @return :string generated HTML @description create the Terms and Conditions formated text @param :object options {firm, juridiction, photo_credits, photo_credits_url} options for the T&C text */
    static terms() {
        return `<div class="terms-content">
                    These Terms of Use set forth the legal terms and conditions governing your use of ${window.location.host} before clicking on these Terms of Use.
                    ${window.location.host} is referred to in these Terms of Use as <i>this Website</i>. <br /><br /> 
                    
                    We may revise these Terms of Use at any time in our sole discretion. Revised Terms of Use will be posted at the Terms of Use link (i.e., this webpage that you are currently viewing) or elsewhere in this Website. The revised Terms of Use will be effective when posted, unless we explicitly state otherwise. Your continued access to and use of this Website following any changes to these Terms of Use constitutes your agreement to the revisions. You are responsible for being aware of any revisions to our Terms of Use through checking this webpage. <br /><br />
                    
                    <b>About ${window.location.host}</b><br /> 
                    ${WebOS.terms.firm}, <i>us</i>, <i>our</i>, and <i>we</i> as used on this Website refer to one or more member firms of ${WebOS.terms.firm}, their respective related entities, and/or other global entities. <br /><br /> 
                    
                    This Website is comprised of various pages, each of which is provided by one or more ${WebOS.terms.firm} entities. ${WebOS.terms.firm} is providing this Website. These Terms of Use are only between you and ${WebOS.terms.firm} and not with any of other entities. <br /><br /> 
                
                    By using this Website, you agree to be bound by these Terms of Use and your agreement will be deemed to be in writing and legally enforceable. If you do not agree to these Terms of Use, then you are not allowed to use this Website and should immediately stop using the Website. <br /><br /> 
                    
                    <b>Use of Content</b><br /> 
                    This Website (including without limitation any content or other part thereof) contains general information only and by making this Website available, ${WebOS.terms.firm} is not rendering professional advice or services. Before making any decision or taking action that might affect your finances or business, you should consult a qualified professional advisor. <br /><br /> 
                    
                    You are authorized to view, copy, print, and distribute (but not modify) the content on this Website if (i) the content does not state that copying, printing or distribution is not permissible, (ii) your use is for informational, noncommercial purposes only, (iii) any copy of the content that you make includes the copyright notice or other attribution associated with the content, and (iv) you comply with all of your obligations under these Terms of Use. <br /><br /> 
                    
                    <b>Restrictions</b><br /> 
                    You are not authorized to copy or use any software, proprietary processes, or technology embodied or described in this Website. <br /><br /> 
                    
                    You agree to comply with all applicable laws in accessing and using this Website. <br /><br /> 
                    
                    <b>Intellectual Property Rights - No use of ${WebOS.terms.firm} names or logos</b><br /> 
                    Unless otherwise indicated, the content on this Website is provided by us. <br /><br /> 
                    
                    This Website and its contents are protected by copyright, trademark, and other laws of ${WebOS.terms.juridiction} and/or foreign countries. We and our licensors reserve all rights not expressly granted in these Terms of Use. <br /><br />
                
                    References to other parties’ trademarks on this Website are for identification purposes only and do not indicate that such parties have approved this Website or any of its contents. These Terms of Use do not grant you any right to use the trademarks of other parties. <br /><br /> <b>Privacy Statement</b><br /> We do not collect any personal information from you. We do not use cookies or any type of technical means of collecting or saving personal data. <br /><br /> 
                    
                    <b>Termination</b><br />
                    We may, in our sole discretion, suspend, restrict or terminate your use of this Website at any time, without notice to you, for any reason, including for violation of these Terms of Use. We will have no responsibility to notify any third party, including any third-party providers of services, merchandise or information, of any suspension, restriction or termination of your access to this Website. <br /><br /> 
                    
                    <b>Links</b><br /> 
                    Certain links on this Website may lead to websites, resources or tools maintained by third parties over whom we have no control, including, without limitation, those maintained by individual personnel of ${WebOS.terms.firm}. We do not bear any responsibility for the content, accuracy or security of any websites that are linked to this Website. Any links to any such websites, resources and tools should not be construed as an endorsement of them or their content by us. <br /><br />
                    
                    <b>Disclaimer and Limitations of Liability</b>
                    <br /> This Website is provided as is, and we make no express or implied representations or warranties regarding it. To the extent permitted by law, we expressly disclaim all implied warranties, including, without limitation, warranties of merchantability, title, fitness for a particular purpose, non-infringement, compatibility, security and accuracy. <br /><br /> 
                    
                    We will not be liable for any direct, indirect, special, incidental, consequential, or punitive damages or any other damages whatsoever, whether in action of contract, statute, tort (including without limitation, negligence), or otherwise, relating to or arising out of the use of this Website, even if we knew, or should have known, of the possibility of such damages. <br /><br /> 
                    
                    The above Disclaimer and Limitation of Liability apply not only to us but also to each other entity within the ${WebOS.terms.firm} organization and to our and their respective personnel. <br /><br /> 
                
                    The above Disclaimer and Limitation of Liability apply to the fullest extent permitted by law, whether in contract, statute, tort (including, without limitation, negligence) or otherwise. <br /><br /> 
                    
                    <b>Additional Terms</b><br />                    
                    If any portion of these Terms of Use is invalid or unenforceable in any jurisdiction, then (i) in that jurisdiction it will be re-construed to the maximum effect permitted by law in order to effect its intent as nearly as possible, and the remainder of these Terms of Use will remain in full force and effect, and (ii) in every other jurisdiction, all of these Terms of Use will remain in full force and effect. <br /><br /> 
                
                    <b>Photograph Credits</b><br />
                    All photographs on this Website are used with permission and credited to ${WebOS.terms.photo_credits} (<a target="_blank" href="${WebOS.terms.photo_credits_url}">${WebOS.terms.photo_credits_url}</a>). <br /><br />
            </div>`
    }  
        
}



/** @minified @class AsyncIndexedDB @description async wrapper for indexedDB (https://github.com/kennygomdori/AsyncIndexedDB/tree/master) */
/** Copyright (c) 2019 Keun Hoi Kim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */
class AsyncIndexedDB{constructor(e,t,n){let r=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;if(!r)return null;this.name=e,this.schema=t,n&&(this.version=n),this.db=null,Object.seal(this)}open(){return new Promise((e,t)=>{let n=self.indexedDB.open(this.name,this.version),r=this.schema;n.onerror=e=>t(e),n.onsuccess=t=>{this.db=n.result,e(this)},n.onupgradeneeded=function(e){r(this.result)}})}query(e,t="readwrite",n,r){let s=this.db.transaction(e,t);return n instanceof Function&&(s.oncomplete=n),r instanceof Function&&(s.onerror=r),AsyncIndexedDB.proxy(s.objectStore(e))}static proxy(e){return new Proxy(e,{get:function(e,t){return e[t]instanceof Function?function(...n){let r=e[t](...n);return r instanceof IDBIndex?AsyncIndexedDB.proxy(e.index(...n)):new Promise((e,t)=>{r.onsuccess=t=>{let n=r.result;n instanceof IDBCursor?e({request:r,cursor:n,[Symbol.asyncIterator]:async function*(){let e;for(;n;)yield{key:n.key,value:n.value,primaryKey:n.primaryKey},e=new Promise((e,t)=>{r.onsuccess=t=>e(),r.onerror=e=>t(e)}),n.continue(),await e,n=r.result}}):e(n)},r.onerror=e=>t(e)})}:e[t]}})}async export(e,t,n){return JSON.stringify(await Promise.all([...this.db.objectStoreNames].map(async e=>{let r=await this.query(e);if(null===r.keyPath)return[e,r.getAll(t,n)]})))}async import(e,t){await Promise.all((e=JSON.parse(e)).map(async([e,n])=>{let r=this.query(e);if(null===r.keyPath){let s=t[e];if(void 0===s)throw`ObjectStore '${r.name}' does not have a KeyPath. Call import(data, {[objectStoreName]:[keyPath]}).`;for(let a of n){let o=a[s];if(void 0!==o)throw`ObjectStore '${r.name}' entry '${a}' is missing its key.`;await r.put(a,o)}}else for(let i of n)await r.put(i)}))}async clear(){return new Promise((e,t)=>{let n=self.indexedDB.deleteDatabase(this.name);n.onsuccess=e,n.onerror=t})}}

window.App = App
window.WebOS = WebOS
window.Validator = Validator

export {WebOS, Validator, App}