type AppConfigType = {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
    name: import.meta.env.VITE_APP_NAME ?? "Reality Check",
    github: {
        title: "TU 2026 HACKATHON",
        url: "https://github.com/hayyi2/react-shadcn-starter",
    },
    author: {
        name: "Savern",
        url: "https://github.com/hayyi2/",
    }
}

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
