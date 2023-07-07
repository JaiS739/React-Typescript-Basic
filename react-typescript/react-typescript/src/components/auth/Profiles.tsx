export type ProfileName = {
    name : string
}

export const Profiles = ({name} :ProfileName) => {
    return <div>Private Profile Component. Name is {name}</div>
}