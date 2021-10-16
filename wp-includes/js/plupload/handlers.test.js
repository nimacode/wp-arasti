const rewire = require("rewire")
const handlers = rewire("./handlers")
const fileQueued = handlers.__get__("fileQueued")
const uploadStart = handlers.__get__("uploadStart")
const uploadProgress = handlers.__get__("uploadProgress")
const fileUploading = handlers.__get__("fileUploading")
const updateMediaForm = handlers.__get__("updateMediaForm")
const uploadSuccess = handlers.__get__("uploadSuccess")
const setResize = handlers.__get__("setResize")
const prepareMediaItem = handlers.__get__("prepareMediaItem")
const prepareMediaItemInit = handlers.__get__("prepareMediaItemInit")
const wpQueueError = handlers.__get__("wpQueueError")
const wpFileError = handlers.__get__("wpFileError")
const itemAjaxError = handlers.__get__("itemAjaxError")
const deleteSuccess = handlers.__get__("deleteSuccess")
const deleteError = handlers.__get__("deleteError")
const uploadComplete = handlers.__get__("uploadComplete")
const switchUploader = handlers.__get__("switchUploader")
const uploadError = handlers.__get__("uploadError")
const uploadSizeError = handlers.__get__("uploadSizeError")
const wpFileExtensionError = handlers.__get__("wpFileExtensionError")
// @ponicode
describe("fileQueued", () => {
    test("0", () => {
        let callFunction = () => {
            fileQueued({ id: 10, name: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fileQueued({ id: 1, name: 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fileQueued({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fileQueued({ id: -1, name: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fileQueued({ id: 0, name: 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fileQueued({ id: NaN, name: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("uploadStart", () => {
    test("0", () => {
        let callFunction = () => {
            uploadStart()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("uploadProgress", () => {
    test("0", () => {
        let callFunction = () => {
            uploadProgress("2021-07-29T17:54:41.653Z", { id: 0, percent: 10, loaded: 5, size: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            uploadProgress("2021-07-29T17:54:41.653Z", { id: 0, percent: "Hello, world!", loaded: 1000, size: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            uploadProgress("2021-07-29T20:12:53.196Z", { id: 0, percent: 0.0, loaded: 1000, size: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            uploadProgress("2021-07-29T15:31:46.922Z", { id: 0, percent: 0.0, loaded: 128, size: 256 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            uploadProgress("2021-07-29T15:31:46.922Z", { id: -10, percent: 0, loaded: 32, size: 16 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            uploadProgress(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fileUploading", () => {
    test("0", () => {
        let callFunction = () => {
            fileUploading({ settings: { max_file_size: 1 }, stop: () => -100, removeFile: () => "script.py", start: () => 100 }, { status: 400, loaded: 4, size: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fileUploading({ settings: { max_file_size: 0 }, stop: () => 1, removeFile: () => "note.txt", start: () => 0 }, { status: 429, loaded: 1.5, size: 64 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fileUploading({ settings: { max_file_size: 1 }, stop: () => 0, removeFile: () => "index.js", start: () => 100 }, { status: 429, loaded: 0, size: 32 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fileUploading({ settings: { max_file_size: 100 }, stop: () => 0, removeFile: () => "program.exe", start: () => 0 }, { status: 400, loaded: 4, size: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fileUploading({ settings: { max_file_size: -1 }, stop: () => 1, removeFile: () => "image.png", start: () => -5.48 }, { status: 404, loaded: 4, size: 32 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fileUploading({ settings: {}, stop: () => NaN, removeFile: () => "", start: () => NaN }, {})
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateMediaForm", () => {
    test("0", () => {
        let callFunction = () => {
            updateMediaForm()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("uploadSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            uploadSuccess({ id: 0.0 }, "error-div")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            uploadSuccess({ id: 10 }, "error-div")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            uploadSuccess({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, "media-upload-error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            uploadSuccess({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, "error-div")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            uploadSuccess({ id: -10 }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            uploadSuccess({}, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setResize", () => {
    test("0", () => {
        let callFunction = () => {
            setResize(["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            setResize([-1, 0.5, 1, 2, 3, 4, 5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            setResize([10, -45.9, 103.5, 0.955674])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            setResize(["foo bar", -0.353, "**text**", 4653])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            setResize(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("prepareMediaItem", () => {
    test("0", () => {
        let callFunction = () => {
            prepareMediaItem({ id: -1 }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            prepareMediaItem({ id: 0 }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            prepareMediaItem({ id: 10 }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            prepareMediaItem({ id: 1 }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            prepareMediaItem({ id: 0.0 }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            prepareMediaItem({ id: -Infinity }, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("prepareMediaItemInit", () => {
    test("0", () => {
        let callFunction = () => {
            prepareMediaItemInit({ id: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            prepareMediaItemInit({ id: 56784 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            prepareMediaItemInit({ id: 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            prepareMediaItemInit({ id: -1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            prepareMediaItemInit({ id: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            prepareMediaItemInit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("wpQueueError", () => {
    test("0", () => {
        let callFunction = () => {
            wpQueueError("Top level object in 'override.yml' needs to be an object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            wpQueueError("The line-by-line profiler can only be used in dev.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            wpQueueError("Missing FileUri configuration")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            wpQueueError("Error:")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            wpQueueError("Unknown error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            wpQueueError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("wpFileError", () => {
    test("0", () => {
        let callFunction = () => {
            wpFileError({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, "No os dependencies found. ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            wpFileError({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, "Could not find an existing submission in location.  rubric is original.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            wpFileError({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, "No updates are to be performed.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            wpFileError({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, "Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            wpFileError({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, "Top level object in 'override.yml' needs to be an object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            wpFileError(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("itemAjaxError", () => {
    test("0", () => {
        let callFunction = () => {
            itemAjaxError(0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            itemAjaxError(0.0, "Unknown error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            itemAjaxError(0.0, "Unknown Error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            itemAjaxError(0, "To force deletion of the LAG use delete_force: True")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            itemAjaxError(1, "There is a mismatch")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            itemAjaxError(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            deleteSuccess(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deleteSuccess(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deleteSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deleteSuccess(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deleteSuccess(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deleteSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteError", () => {
    test("0", () => {
        let callFunction = () => {
            deleteError()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("uploadComplete", () => {
    test("0", () => {
        let callFunction = () => {
            uploadComplete()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("switchUploader", () => {
    test("0", () => {
        let callFunction = () => {
            switchUploader("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            switchUploader("something@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            switchUploader("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            switchUploader("TestUpperCase@Example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            switchUploader("email@Google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            switchUploader(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("uploadError", () => {
    test("0", () => {
        let callFunction = () => {
            uploadError({ size: 256 }, "Unknown error", "Internal Server Error\n", { settings: { filters: { max_file_size: 1 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            uploadError({ size: 64 }, "the specified credentials were rejected by the server", "Unknown Error", { settings: { filters: { max_file_size: 1 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            uploadError({ size: 32 }, "To force deletion of the LAG use delete_force: True", "No error", { settings: { filters: { max_file_size: 100 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            uploadError({ size: 0 }, "Counterparty sent error: %s", "Could not find a grader object for message from xqueue", { settings: { filters: { max_file_size: 0 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            uploadError({ size: 64 }, "Connection is closed", "does not exist", { settings: { filters: { max_file_size: 1 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            uploadError({ size: Infinity }, "", "", {})
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("uploadSizeError", () => {
    test("0", () => {
        let callFunction = () => {
            uploadSizeError({ removeFile: () => "image.png" }, { id: 0, name: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            uploadSizeError({ removeFile: () => "script.py" }, { id: -1, name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            uploadSizeError({ removeFile: () => "image.png" }, { id: -10, name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            uploadSizeError({ removeFile: () => "note.txt" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", name: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            uploadSizeError({ removeFile: () => "note.txt" }, { id: 0, name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            uploadSizeError(undefined, { id: NaN, name: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("wpFileExtensionError", () => {
    test("0", () => {
        let callFunction = () => {
            wpFileExtensionError({ removeFile: () => "index.js" }, { id: -10 }, "Sorry, The video you are looking for does not exist.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            wpFileExtensionError({ removeFile: () => "install.deb" }, { id: 1 }, "Empty name specified")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            wpFileExtensionError({ removeFile: () => "script.py" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, "Could not find a grader object for message from xqueue")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            wpFileExtensionError({ removeFile: () => "index.js" }, { id: 0.0 }, "Invalid [%s] value. %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            wpFileExtensionError({ removeFile: () => "index.js" }, { id: 10 }, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            wpFileExtensionError({}, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
