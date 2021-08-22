import * as useObservable from "@/hooks/useObservable"
// @ponicode
describe("useObservable.useObservable", () => {
    test("0", () => {
        let callFunction: any = () => {
            useObservable.useObservable(() => undefined, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            useObservable.useObservable(() => undefined, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            useObservable.useObservable(() => undefined, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            useObservable.useObservable(() => undefined, "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            useObservable.useObservable(() => undefined, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            useObservable.useObservable(() => undefined, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
