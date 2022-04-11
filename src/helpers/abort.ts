const controller=()=>new AbortController()

export const signal = controller().signal

export const abort=() => controller().abort